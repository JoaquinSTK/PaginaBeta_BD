from flask import Flask, request, jsonify
from flask_cors import CORS
import pyodbc

app = Flask(__name__)
CORS(app)  

conn_str = (
    r'DRIVER={SQL Server};'
    r'SERVER=localhost\SQLEXPRESS01;'  
    r'DATABASE=SteamPlatformDB;'
    r'Trusted_Connection=yes;'
)

# RUTA PARA PROCESAR LA COMPRA
@app.route('/api/compras', methods=['POST'])
def procesar_compra():
    datos = request.json
    id_usuario = datos['idUsuario']
    total = datos['total']
    carrito = datos['carrito']

    try:
        conn = pyodbc.connect(conn_str)
        cursor = conn.cursor()
        conn.autocommit = False

        try:
            cursor.execute("UPDATE Jugador SET saldo = saldo - ? WHERE idUsuario = ?", (total, id_usuario))
            cursor.execute("INSERT INTO Compra (idUsuario, total, estado) OUTPUT INSERTED.idCompra VALUES (?, ?, 'completada')", (id_usuario, total))
            id_compra = cursor.fetchone()[0]

            for juego in carrito:
                cursor.execute("INSERT INTO Detalle_Compra (idCompra, idJuego, precioUnitario) VALUES (?, ?, ?)", (id_compra, juego['idJuego'], juego['precio']))
                cursor.execute("INSERT INTO Biblioteca (idUsuario, idJuego) VALUES (?, ?)", (id_usuario, juego['idJuego']))

            conn.commit()
            return jsonify({"success": True, "message": "¡Compra guardada en SQL Server!"}), 200
        except Exception as e:
            conn.rollback()
            return jsonify({"success": False, "message": str(e)}), 400
        finally:
            cursor.close()
            conn.close()
    except Exception as e:
        return jsonify({"success": False, "message": "Error de conexión: " + str(e)}), 500


# RUTA PARA EL REGISTRO DE NUEVOS USUARIOS 
@app.route('/api/registro', methods=['POST'])
def registrar_usuario():
    datos = request.json
    nombre = datos['nombre']
    correo = datos['correo']
    contrasena = datos['contrasena']

    try:
        conn = pyodbc.connect(conn_str)
        cursor = conn.cursor()
        conn.autocommit = False

        try:
            cursor.execute("INSERT INTO Usuario (nombre, correo, contrasena, rol) OUTPUT INSERTED.idUsuario VALUES (?, ?, ?, 'jugador')", (nombre, correo, contrasena))
            id_usuario = cursor.fetchone()[0]
            cursor.execute("INSERT INTO Jugador (idUsuario, saldo, nivelExperiencia) VALUES (?, 0, 'principiante')", (id_usuario,))
            conn.commit()
            return jsonify({"success": True, "idUsuario": id_usuario, "message": "¡Usuario creado con éxito!"}), 200
        except Exception as e:
            conn.rollback()
            return jsonify({"success": False, "message": str(e)}), 400
        finally:
            cursor.close()
            conn.close()
    except Exception as e:
        return jsonify({"success": False, "message": "Error de conexión: " + str(e)}), 500


# 3) RUTA PARA RECARGAR SALDO
@app.route('/api/recarga', methods=['POST'])
def recargar_saldo():
    datos = request.json
    id_usuario = datos['idUsuario']
    monto = datos['monto']

    try:
        conn = pyodbc.connect(conn_str)
        cursor = conn.cursor()
        cursor.execute("UPDATE Jugador SET saldo = saldo + ? WHERE idUsuario = ?", (monto, id_usuario))
        conn.commit()
        return jsonify({"success": True, "message": "¡Saldo actualizado en SQL Server!"}), 200
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 400
    finally:
        cursor.close()
        conn.close()


# 4) RUTA: INICIAR SESIÓN 
@app.route('/api/login', methods=['POST'])
def login_usuario():
    datos = request.json
    correo_o_usuario = datos['correo']
    contrasena = datos['contrasena']

    try:
        conn = pyodbc.connect(conn_str)
        cursor = conn.cursor()
        
        cursor.execute("""
            SELECT u.idUsuario, u.nombre, u.correo, u.rol, ISNULL(j.saldo, 0) 
            FROM Usuario u
            LEFT JOIN Jugador j ON u.idUsuario = j.idUsuario
            WHERE (u.correo = ? OR u.nombre = ?) AND u.contrasena = ?
        """, (correo_o_usuario, correo_o_usuario, contrasena))
        
        row = cursor.fetchone()
        if row:
            user_data = {
                "idUsuario": row[0],
                "nombre": row[1],
                "correo": row[2],
                "rol": row[3],
                "saldo": float(row[4])
            }
            return jsonify({"success": True, "usuario": user_data}), 200
        else:
            return jsonify({"success": False, "message": "Usuario o contraseña incorrectos."}), 401
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500
    finally:
        cursor.close()
        conn.close()

@app.route('/api/biblioteca/<int:id_usuario>', methods=['GET'])
def obtener_biblioteca(id_usuario):
    try:
        conn = pyodbc.connect(conn_str)
        cursor = conn.cursor()
        
        cursor.execute("""
            SELECT idJuego, fechaAdquisicion 
            FROM Biblioteca 
            WHERE idUsuario = ?
        """, (id_usuario,))
        
        rows = cursor.fetchall()
        lista_juegos = []
        for row in rows:
            lista_juegos.append({
                "idJuego": row[0],
                "fechaAdquisicion": row[1].isoformat() if row[1] else ""
            })
            
        return jsonify({"success": True, "juegos": lista_juegos}), 200
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500
    finally:
        cursor.close()
        conn.close()


if __name__ == '__main__':
    app.run(port=3000, debug=True)