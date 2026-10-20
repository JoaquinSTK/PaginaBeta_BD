// =========================================================
// ==== Datos de juegos con Rutas Locales Aseguradas ====
// =========================================================
const juegos = [
  // ==== ACCIÓN ====
  {
    nombre: "Cyberpunk 2077",
    categoria: "Acción",
    precio: "$59.99",
    descripcion: "Explora Night City, una metrópolis de poder y tecnología.",
    imagen: "images/cyberpunk2077.jpg",
    requisitos: {
      minimo: "CPU: i5-3570K, GPU: GTX 780, RAM: 8 GB",
      recomendado: "CPU: i7-4790, GPU: GTX 1060, RAM: 12 GB"
    }
  },
  {
    nombre: "DOOM Eternal",
    categoria: "Acción",
    precio: "$39.99",
    descripcion: "Destruye demonios en un frenesí de velocidad y precisión.",
    imagen: "images/doometernal.jpg",
    requisitos: {
      minimo: "CPU: i5, GPU: GTX 1050Ti, RAM: 8 GB",
      recomendado: "CPU: i7, GPU: GTX 1080, RAM: 16 GB"
    }
  },
  {
    nombre: "Devil May Cry 5",
    categoria: "Acción",
    precio: "$29.99",
    descripcion: "Combate estilizado con tres personajes jugables.",
    imagen: "images/devilmaycry5.jpg",
    requisitos: {
      minimo: "CPU: i7-4770, GPU: GTX 760, RAM: 8 GB",
      recomendado: "CPU: i7-6700, GPU: GTX 1060, RAM: 16 GB"
    }
  },
  {
    nombre: "Sekiro: Shadows Die Twice",
    categoria: "Acción",
    precio: "$59.99",
    descripcion: "Acción intensa y combate desafiante en el Japón Sengoku.",
    imagen: "images/sekiro.jpg",
    requisitos: {
      minimo: "CPU: i3-2100, GPU: GTX 760, RAM: 4 GB",
      recomendado: "CPU: i5-2500K, GPU: GTX 970, RAM: 8 GB"
    }
  },

  // ==== AVENTURA ====
  {
    nombre: "Elden Ring",
    categoria: "Aventura",
    precio: "$49.99",
    descripcion: "Explora un vasto mundo lleno de desafíos y leyendas.",
    imagen: "images/eldenring.jpg",
    requisitos: {
      minimo: "CPU: i5-8400, GPU: GTX 1060, RAM: 12 GB",
      recomendado: "CPU: i7-8700K, GPU: RTX 2060, RAM: 16 GB"
    }
  },
  {
    nombre: "Red Dead Redemption 2",
    categoria: "Aventura",
    precio: "$39.99",
    descripcion: "Una historia épica en el viejo oeste.",
    imagen: "images/rdr2.jpg",
    requisitos: {
      minimo: "CPU: i5-2500K, GPU: GTX 770, RAM: 8 GB",
      recomendado: "CPU: i7-4770K, GPU: RTX 2060, RAM: 12 GB"
    }
  },
  {
    nombre: "Assassin's Creed Odyssey",
    categoria: "Aventura",
    precio: "$29.99",
    descripcion: "Explora la antigua Grecia como mercenario legendario.",
    imagen: "images/acodyssey.jpg",
    requisitos: {
      minimo: "CPU: i5-2400, GPU: GTX 660, RAM: 8 GB",
      recomendado: "CPU: i7-3770, GPU: GTX 970, RAM: 16 GB"
    }
  },
  {
    nombre: "Horizon Zero Dawn",
    categoria: "Aventura",
    precio: "$49.99",
    descripcion: "Enfréntate a bestias mecánicas en un mundo post-apocalíptico.",
    imagen: "images/horizonzerodawn.jpg",
    requisitos: {
      minimo: "CPU: i5-2500K, GPU: GTX 780, RAM: 8 GB",
      recomendado: "CPU: i7-4770K, GPU: GTX 1060, RAM: 16 GB"
    }
  },

  // ==== RPG ====
  {
    nombre: "Baldur’s Gate 3",
    categoria: "RPG",
    precio: "$69.99",
    descripcion: "Vive un RPG épico con decisiones que cambian tu historia.",
    imagen: "images/baldursgate3.jpg",
    requisitos: {
      minimo: "CPU: i5-4690, GPU: GTX 970, RAM: 8 GB",
      recomendado: "CPU: i7-8700K, GPU: RTX 2060, RAM: 16 GB"
    }
  },
  {
    nombre: "The Witcher 3",
    categoria: "RPG",
    precio: "$39.99",
    descripcion: "Conviértete en Geralt de Rivia y caza monstruos.",
    imagen: "images/thewitcher3.jpg",
    requisitos: {
      minimo: "CPU: i5-2500K, GPU: GTX 660, RAM: 6 GB",
      recomendado: "CPU: i7-3770, GPU: GTX 770, RAM: 8 GB"
    }
  },
  {
    nombre: "Skyrim",
    categoria: "RPG",
    precio: "$19.99",
    descripcion: "Explora Tamriel y decide el destino del mundo.",
    imagen: "images/skyrim.jpg",
    requisitos: {
      minimo: "CPU: i5-750, GPU: GTX 470, RAM: 8 GB",
      recomendado: "CPU: i5-2400, GPU: GTX 780, RAM: 12 GB"
    }
  },
  {
    nombre: "Dark Souls III",
    categoria: "RPG",
    precio: "$59.99",
    descripcion: "Un desafío oscuro y brutal.",
    imagen: "images/darksouls3.jpg",
    requisitos: {
      minimo: "CPU: i3-2100, GPU: GTX 750Ti, RAM: 4 GB",
      recomendado: "CPU: i7-3770, GPU: GTX 970, RAM: 8 GB"
    }
  },
  {
    nombre: "Persona 5 Royal",
    categoria: "RPG",
    precio: "$59.99",
    descripcion: "Un JRPG estilizado con una historia profunda.",
    imagen: "images/persona5royal.jpg",
    requisitos: {
      minimo: "CPU: i5-2300, GPU: GTX 650, RAM: 8 GB",
      recomendado: "CPU: i7-4790, GPU: GTX 760, RAM: 8 GB"
    }
  },

  // ==== ESTRATEGIA ====
  {
    nombre: "Civilization VI",
    categoria: "Estrategia",
    precio: "$29.99",
    descripcion: "Construye un imperio que resista el paso del tiempo.",
    imagen: "images/civilization6.jpg",
    requisitos: {
      minimo: "CPU: i3, GPU: Intel HD 4000, RAM: 4 GB",
      recomendado: "CPU: i5, GPU: GTX 770, RAM: 8 GB"
    }
  },
  {
    nombre: "Age of Empires IV",
    categoria: "Estrategia",
    precio: "$59.99",
    descripcion: "Revive batallas históricas con gran detalle.",
    imagen: "images/aoe4.jpg",
    requisitos: {
      minimo: "CPU: i5, GPU: GTX 760, RAM: 8 GB",
      recomendado: "CPU: i7, GPU: RTX 2060, RAM: 16 GB"
    }
  },
  {
    nombre: "Total War: Warhammer III",
    categoria: "Estrategia",
    precio: "$59.99",
    descripcion: "Batallas épicas con ejércitos masivos.",
    imagen: "images/warhammer3.jpg",
    requisitos: {
      minimo: "CPU: i3, GPU: GTX 660, RAM: 6 GB",
      recomendado: "CPU: i7, GPU: GTX 1660, RAM: 16 GB"
    }
  },
  {
    nombre: "XCOM 2",
    categoria: "Estrategia",
    precio: "$29.99",
    descripcion: "Comanda la resistencia contra una invasión alienígena.",
    imagen: "images/xcom2.jpg",
    requisitos: {
      minimo: "CPU: i3-2100, GPU: GTX 650, RAM: 4 GB",
      recomendado: "CPU: i5-3340, GPU: GTX 960, RAM: 8 GB"
    }
  },

  // ==== INDIE ====
  {
    nombre: "Hollow Knight",
    categoria: "Indie",
    precio: "$14.99",
    descripcion: "Explora un oscuro mundo subterráneo lleno de secretos.",
    imagen: "images/hollowknight.jpg",
    requisitos: {
      minimo: "CPU: i3, GPU: Intel HD 4000, RAM: 4 GB",
      recomendado: "CPU: i5, GPU: GTX 660, RAM: 8 GB"
    }
  },
  {
    nombre: "Hades",
    categoria: "Indie",
    precio: "$24.99",
    descripcion: "Escapa del inframundo en un roguelike frenético.",
    imagen: "images/hades.jpg",
    requisitos: {
      minimo: "CPU: i5, GPU: Intel HD 5000, RAM: 4 GB",
      recomendado: "CPU: i7, GPU: GTX 760, RAM: 8 GB"
    }
  },
  {
    nombre: "Celeste",
    categoria: "Indie",
    precio: "$19.99",
    descripcion: "Una aventura emocional de plataformas.",
    imagen: "images/celeste.jpg",
    requisitos: {
      minimo: "CPU: i3, GPU: Intel HD 4000, RAM: 2 GB",
      recomendado: "CPU: i5, GPU: GTX 660, RAM: 4 GB"
    }
  },
  {
    nombre: "Cuphead",
    categoria: "Indie",
    precio: "$19.99",
    descripcion: "Estilo cartoon de los 30s con dificultad extrema.",
    imagen: "images/cuphead.jpg",
    requisitos: {
      minimo: "CPU: i3, GPU: Intel HD 4000, RAM: 4 GB",
      recomendado: "CPU: i5, GPU: GTX 660, RAM: 8 GB"
    }
  },
  {
    nombre: "Dead Cells",
    categoria: "Indie",
    precio: "$24.99",
    descripcion: "Metroidvania + roguelike con combate fluido.",
    imagen: "images/deadcells.jpg",
    requisitos: {
      minimo: "CPU: i3, GPU: Intel HD 4000, RAM: 4 GB",
      recomendado: "CPU: i5, GPU: GTX 660, RAM: 8 GB"
    }
  },

  // ==== ACCIÓN (faltantes) ====
  {
    nombre: "Titanfall 2",
    categoria: "Acción",
    precio: "$29.99",
    descripcion: "Combate frenético con parkour y mechas.",
    imagen: "images/titanfall2.jpg",
    requisitos: {
      minimo: "CPU: i3-6300T, GPU: GTX 660, RAM: 8 GB",
      recomendado: "CPU: i5-6600, GPU: GTX 1060, RAM: 16 GB"
    }
  },
  {
    nombre: "Metal Gear Rising",
    categoria: "Acción",
    precio: "$19.99",
    descripcion: "Acción intensa con espadas y estilo.",
    imagen: "images/mgrising.jpg",
    requisitos: {
      minimo: "CPU: i5-2400, GPU: GTX 460, RAM: 2 GB",
      recomendado: "CPU: i7-870, GPU: GTX 650, RAM: 4 GB"
    }
  },
  {
    nombre: "Control",
    categoria: "Acción",
    precio: "$39.99",
    descripcion: "Poderes sobrenaturales en un mundo extraño.",
    imagen: "images/control.jpg",
    requisitos: {
      minimo: "CPU: i5-4690, GPU: GTX 780, RAM: 8 GB",
      recomendado: "CPU: i7-6700K, GPU: RTX 2060, RAM: 16 GB"
    }
  },
  {
    nombre: "Spider-Man Remastered",
    categoria: "Acción",
    precio: "$59.99",
    descripcion: "Vuela entre edificios como el Hombre Araña.",
    imagen: "images/spiderman.jpg",
    requisitos: {
      minimo: "CPU: i3-4160, GPU: GTX 950, RAM: 8 GB",
      recomendado: "CPU: i5-4670, GPU: GTX 1060, RAM: 16 GB"
    }
  },
  {
    nombre: "GTA V",
    categoria: "Acción",
    precio: "$19.99",
    descripcion: "Mundo abierto, crimen y acción sin límites.",
    imagen: "images/gtav.jpg",
    requisitos: {
      minimo: "CPU: i5-3470, GPU: GTX 660, RAM: 8 GB",
      recomendado: "CPU: i7-3770, GPU: GTX 1060, RAM: 16 GB"
    }
  },

  // ==== AVENTURA (faltantes) ====
  {
    nombre: "The Last of Us Part I",
    categoria: "Aventura",
    precio: "$59.99",
    descripcion: "Una historia emocional en un mundo postapocalíptico.",
    imagen: "images/tlou1.jpg",
    requisitos: {
      minimo: "CPU: i7-4770K, GPU: GTX 970, RAM: 16 GB",
      recomendado: "CPU: i7-8700, GPU: RTX 2070, RAM: 16 GB"
    }
  },
  {
    nombre: "Death Stranding",
    categoria: "Aventura",
    precio: "$39.99",
    descripcion: "Un viaje extraño en un mundo devastado.",
    imagen: "images/deathstranding.jpg",
    requisitos: {
      minimo: "CPU: i5-3470, GPU: GTX 1050, RAM: 8 GB",
      recomendado: "CPU: i7-3770, GPU: GTX 1060, RAM: 16 GB"
    }
  },
  {
    nombre: "Tomb Raider",
    categoria: "Aventura",
    precio: "$19.99",
    descripcion: "vive la primera aventura de Lara Croft.",
    imagen: "images/tombraider.jpg",
    requisitos: {
      minimo: "CPU: i3-2100, GPU: GTX 650, RAM: 4 GB",
      recomendado: "CPU: i5-2500K, GPU: GTX 660, RAM: 8 GB"
    }
  },
  {
    nombre: "It Takes Two",
    categoria: "Aventura",
    precio: "$39.99",
    descripcion: "Una aventura cooperativa única.",
    imagen: "images/ittakestwo.jpg",
    requisitos: {
      minimo: "CPU: i3-2100T, GPU: GTX 660, RAM: 8 GB",
      recomendado: "CPU: i5-3570K, GPU: GTX 980, RAM: 16 GB"
    }
  },
  {
    nombre: "Life Is Strange Remastered",
    categoria: "Aventura",
    precio: "$29.99",
    descripcion: "Una aventura dramática sobre decisiones.",
    imagen: "images/lifeisstrange.jpg",
    requisitos: {
      minimo: "CPU: i3, GPU: GTX 650, RAM: 4 GB",
      recomendado: "CPU: i5, GPU: GTX 1050, RAM: 8 GB"
    }
  },

  // ==== RPG (faltantes) ====
  {
    nombre: "Cyberpunk 2077 Phantom Liberty",
    categoria: "RPG",
    precio: "$29.99",
    descripcion: "Expansión brutal para Cyberpunk 2077.",
    imagen: "images/cyberpunk_pl.jpg",
    requisitos: {
      minimo: "CPU: i7-6700, GPU: GTX 1060, RAM: 12 GB",
      recomendado: "CPU: i7-12700, GPU: RTX 2060, RAM: 16 GB"
    }
  },
  {
    nombre: "Elden Ring",
    categoria: "RPG",
    precio: "$59.99",
    descripcion: "Un mundo brutalmente desafiante.",
    imagen: "images/eldenring.jpg",
    requisitos: {
      minimo: "CPU: i5-8400, GPU: GTX 1060, RAM: 12 GB",
      recomendado: "CPU: i7-8700K, GPU: RTX 2060, RAM: 16 GB"
    }
  },
  {
    nombre: "Final Fantasy XV",
    categoria: "RPG",
    precio: "$34.99",
    descripcion: "Una aventura época con combates dinámicos.",
    imagen: "images/ff15.jpg",
    requisitos: {
      minimo: "CPU: i5-2500, GPU: GTX 760, RAM: 8 GB",
      recomendado: "CPU: i7-3770, GPU: GTX 1060, RAM: 16 GB"
    }
  },
  {
    nombre: "Mass Effect Legendary Edition",
    categoria: "RPG",
    precio: "$59.99",
    descripcion: "La mejor trilogía espacial remasterizada.",
    imagen: "images/masseffect.jpg",
    requisitos: {
      minimo: "CPU: i5-3570, GPU: GTX 760, RAM: 8 GB",
      recomendado: "CPU: i7-7700, GPU: GTX 1070, RAM: 16 GB"
    }
  },

  // ==== ESTRATEGIA (faltantes) ====
  {
    nombre: "Crusader Kings III",
    categoria: "Estrategia",
    precio: "$49.99",
    descripcion: "Conviértete en rey y controla un imperio.",
    imagen: "images/crusaderkings3.jpg",
    requisitos: {
      minimo: "CPU: i3-2120, GPU: GTX 660, RAM: 6 GB",
      recomendado: "CPU: i5-4670K, GPU: GTX 1650, RAM: 8 GB"
    }
  },
  {
    nombre: "Europa Universalis IV",
    categoria: "Estrategia",
    precio: "$39.99",
    descripcion: "Controla una nación a lo largo de siglos.",
    imagen: "images/europauniversalis4.jpg",
    requisitos: {
      minimo: "CPU: i3, GPU: Intel HD, RAM: 4 GB",
      recomendado: "CPU: i5, GPU: GTX 660, RAM: 8 GB"
    }
  },
  {
    nombre: "Frostpunk",
    categoria: "Estrategia",
    precio: "$29.99",
    descripcion: "Construye una ciudad en un mundo congelado.",
    imagen: "images/frostpunk.jpg",
    requisitos: {
      minimo: "CPU: i3, GPU: GTX 660, RAM: 4 GB",
      recomendado: "CPU: i7, GPU: GTX 970, RAM: 8 GB"
    }
  },
  {
    nombre: "Halo Wars 2",
    categoria: "Estrategia",
    precio: "$29.99",
    descripcion: "RTS en el universo de Halo.",
    imagen: "images/halowars2.jpg",
    requisitos: {
      minimo: "CPU: i5, GPU: GTX 650, RAM: 6 GB",
      recomendado: "CPU: i7, GPU: GTX 1060, RAM: 8 GB"
    }
  },
  {
    nombre: "Company of Heroes 3",
    categoria: "Estrategia",
    precio: "$59.99",
    descripcion: "Estrategia táctica en la Segunda Guerra Mundial.",
    imagen: "images/coh3.jpg",
    requisitos: {
      minimo: "CPU: i5-6600, GPU: GTX 1060, RAM: 8 GB",
      recomendado: "CPU: i7-8700, GPU: RTX 2060, RAM: 16 GB"
    }
  },

  // ==== INDIE (faltantes) ====
  {
    nombre: "Stardew Valley",
    categoria: "Indie",
    precio: "$14.99",
    descripcion: "Construye tu granja y vive tranquilo.",
    imagen: "images/stardewvalley.jpg",
    requisitos: {
      minimo: "CPU: i3, GPU: Intel HD 4000, RAM: 2 GB",
      recomendado: "CPU: i5, GPU: GTX 660, RAM: 4 GB"
    }
  },
  {
    nombre: "Undertale",
    categoria: "Indie",
    precio: "$9.99",
    descripcion: "Un RPG único donde tus decisiones importan.",
    imagen: "images/undertale.jpg",
    requisitos: {
      minimo: "CPU: cualquier, GPU: integrada, RAM: 2 GB",
      recomendado: "Cualquier PC moderna"
    }
  },
  {
    nombre: "Inside",
    categoria: "Indie",
    precio: "$19.99",
    descripcion: "Una aventura oscura y atmosférica.",
    imagen: "images/inside.jpg",
    requisitos: {
      minimo: "CPU: i5, GPU: GTX 460, RAM: 4 GB",
      recomendado: "CPU: i7, GPU: GTX 760, RAM: 8 GB"
    }
  },
  {
    nombre: "The Binding of Isaac: Rebirth",
    categoria: "Indie",
    precio: "$14.99",
    descripcion: "Roguelike oscuro y adictivo.",
    imagen: "images/bindingofisaac.jpg",
    requisitos: {
      minimo: "CPU: i3, GPU: Intel HD, RAM: 2 GB",
      recomendado: "CPU: i5, GPU: GTX 650, RAM: 4 GB"
    }
  },
  {
    nombre: "Disco Elysium",
    categoria: "Indie",
    precio: "$39.99",
    descripcion: "Un RPG narrativo de clase mundial.",
    imagen: "images/discoelysium.jpg",
    requisitos: {
      minimo: "CPU: i3, GPU: Intel HD, RAM: 2 GB",
      recomendado: "CPU: i5, GPU: GTX 660, RAM: 4 GB"
    }
  }
];

// =========================================================
// ESTRUCTURA LOCALSTORAGE SINCRONIZADA
// =========================================================
const DB_KEYS = {
  usuarios: "db_usuarios",
  compras: "db_compras",
  biblioteca: "db_biblioteca",
  sesion: "db_sesion",
};

function dbGet(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}
function dbSet(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Asigna idJuego secuencial correlativo (1 a 46)
juegos.forEach((j, i) => { j.idJuego = i + 1; });

// =========================================================
// SESIÓN
// =========================================================
function getSesion() {
  const id = localStorage.getItem(DB_KEYS.sesion);
  if (!id) return null;
  return dbGet(DB_KEYS.usuarios).find(u => u.idUsuario === Number(id)) || null;
}
function setSesion(idUsuario) {
  localStorage.setItem(DB_KEYS.sesion, idUsuario);
}
function clearSesion() {
  localStorage.removeItem(DB_KEYS.sesion);
}

// =========================================================
// CARRITO (Memoria Volátil)
// =========================================================
let carrito = [];

function agregarAlCarrito(idJuego) {
  const juego = juegos.find(j => j.idJuego === idJuego);
  if (!juego) return;

  const yaTiene = estaEnBiblioteca(idJuego);
  if (yaTiene) {
    mostrarToast("Ya tienes este juego en tu biblioteca.", "error");
    return;
  }
  if (carrito.find(i => i.idJuego === idJuego)) {
    mostrarToast("Ese juego ya está en tu carrito.", "error");
    return;
  }
  carrito.push({ idJuego, nombre: juego.nombre, precio: parseFloat(juego.precio.replace("$", "")), imagen: juego.imagen });
  actualizarCarritoUI();
  mostrarToast(`${juego.nombre} se añadió al carrito.`, "success");
}

function quitarDelCarrito(idJuego) {
  carrito = carrito.filter(i => i.idJuego !== idJuego);
  actualizarCarritoUI();
}

function actualizarCarritoUI() {
  const countEl = document.getElementById("cartCount");
  if(countEl) countEl.textContent = carrito.length;

  const cont = document.getElementById("cartItems");
  if (!cont) return;
  if (carrito.length === 0) {
    cont.innerHTML = `<p class="cart-empty">Tu carrito está vacío.</p>`;
  } else {
    cont.innerHTML = carrito.map(i => `
      <div class="cart-item">
        <img src="${i.imagen}" alt="${i.nombre}">
        <div class="cart-item-info">
          <h4>${i.nombre}</h4>
          <p>$${i.precio.toFixed(2)}</p>
        </div>
        <button class="cart-item-remove" onclick="quitarDelCarrito(${i.idJuego})">&times;</button>
      </div>
    `).join("");
  }

  const total = carrito.reduce((sum, i) => sum + i.precio, 0);
  const totalEl = document.getElementById("cartTotal");
  if(totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

function abrirCarrito() {
  document.getElementById("cartPanel")?.classList.add("open");
  document.getElementById("cartOverlay")?.classList.add("active");
}
// Conexión real con el botón de cerrar carrito
function cerrarCarrito() {
  document.getElementById("cartPanel")?.classList.remove("open");
  document.getElementById("cartOverlay")?.classList.remove("active");
}

// =========================================================
// VALIDACIONES LOCALES COMPLEMENTARIAS
// =========================================================
// Permite evaluar de forma reactiva en la UI si el juego ya fue adquirido
function estaEnBiblioteca(idJuego) {
  const user = getSesion();
  if (!user) return false;
  return dbGet(DB_KEYS.biblioteca).some(b => b.idUsuario === user.idUsuario && b.idJuego === idJuego);
}

// =========================================================
// FINALIZAR COMPRA (CONEXIÓN REAL CON EL BACKEND EN C#)
// =========================================================
async function finalizarCompra() {
  const user = getSesion();
  if (!user) {
    mostrarToast("Inicia sesión para finalizar tu compra.", "error");
    document.getElementById("loginModal").style.display = "flex";
    return;
  }
  if (carrito.length === 0) {
    mostrarToast("Tu carrito está vacío.", "error");
    return;
  }

  const total = carrito.reduce((sum, i) => sum + i.precio, 0);
  const datosCompra = {
    idUsuario: user.idUsuario,
    total: total,
    carrito: carrito 
  };

  try {
    const respuesta = await fetch('http://localhost:3000/api/compras', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datosCompra)
    });
    const resultado = await respuesta.json();

    if (resultado.success) {
      mostrarToast("¡Compra registrada con éxito en SQL Server!", "success");
      
      // Sincronizamos las copias locales y la sesión
      const usuarios = dbGet(DB_KEYS.usuarios);
      const idx = usuarios.findIndex(u => u.idUsuario === user.idUsuario);
      if (idx !== -1) {
        usuarios[idx].saldo = parseFloat((usuarios[idx].saldo - total).toFixed(2));
        dbSet(DB_KEYS.usuarios, usuarios);
      }

      const bibliotecaLocal = dbGet(DB_KEYS.biblioteca);
      carrito.forEach(j => {
        bibliotecaLocal.push({ idUsuario: user.idUsuario, idJuego: j.idJuego, fechaAdquisicion: new Date().toISOString() });
      });
      dbSet(DB_KEYS.biblioteca, bibliotecaLocal);

      carrito = [];
      actualizarCarritoUI();
      cerrarCarrito();
      actualizarHeaderCuenta();
      showSection("biblioteca");
    } else {
      mostrarToast("Error en la base de datos: " + resultado.message, "error");
    }
  } catch (error) {
    console.error("Error:", error);
    mostrarToast("No se pudo conectar con el servidor backend de C#.", "error");
  }
}

// =========================================================
// NOTIFICACIONES (TOAST)
// =========================================================
function mostrarToast(mensaje, tipo = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${tipo}`;
  toast.textContent = mensaje;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

// =========================================================
// NAVEGACIÓN ENTRE SECCIONES
// =========================================================
function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  const targetSec = document.getElementById(id);
  if(targetSec) targetSec.classList.add("active");

  if (id === "tienda") cargarTienda();
  if (id === "categorias") showCategory("Acción");
  if (id === "soporte") cargarSoporte();
  if (id === "biblioteca") cargarBiblioteca();
}

// =========================================================
// RENDERIZADO DEL CATÁLOGO
// =========================================================
function renderGrid(contId, lista) {
  const cont = document.getElementById(contId);
  if (!cont) return;
  cont.innerHTML = "";
  lista.forEach(j => {
    const div = document.createElement("div");
    div.classList.add("game");
    div.innerHTML = `
      <img src="${j.imagen}" alt="${j.nombre}">
      <h3>${j.nombre}</h3>
      <p>${j.precio}</p>
      <button onclick="verDetalle(${j.idJuego})">Ver más</button>
    `;
    cont.appendChild(div);
  });
}

function cargarTienda() {
  renderGrid("store-container", juegos);
}

function showCategory(cat) {
  const filtrados = juegos.filter(j => j.categoria === cat);
  const cont = document.getElementById("category-container");
  if (!cont) return;
  if (filtrados.length === 0) {
    cont.innerHTML = "<p>No hay juegos en esta categoría.</p>";
    return;
  }
  renderGrid("category-container", filtrados);
}

function verDetalle(idJuego) {
  const j = juegos.find(g => g.idJuego === idJuego);
  const cont = document.getElementById("game-detail");
  if (!j || !cont) return;
  const owned = estaEnBiblioteca(idJuego);
  cont.innerHTML = `
    <img src="${j.imagen}" alt="${j.nombre}">
    <h2>${j.nombre}</h2>
    <p>${j.descripcion}</p>
    <p><strong>Precio:</strong> ${j.precio}</p>
    <div class="requisitos">
      <p><strong>Requisitos mínimos:</strong> ${j.requisitos.minimo}</p>
      <p><strong>Recomendado:</strong> ${j.requisitos.recomendado}</p>
    </div>
    ${owned
      ? `<div class="owned-tag">✓ Ya está en tu biblioteca</div>`
      : `<div class="detail-actions">
          <button class="btn-add-cart" onclick="agregarAlCarrito(${j.idJuego})">Agregar al carrito</button>
          <button class="cta" onclick="comprarAhora(${j.idJuego})">Comprar ahora</button>
        </div>`
    }
  `;
  showSection("detalle");
}

function comprarAhora(idJuego) {
  if (!carrito.find(i => i.idJuego === idJuego)) {
    agregarAlCarrito(idJuego);
  }
  finalizarCompra();
}

// =========================================================
// BIBLIOTECA REAL (CONEXIÓN EN TIEMPO REAL CON C#)
// =========================================================
async function cargarBiblioteca() {
  const cont = document.getElementById("biblioteca-container");
  if (!cont) return;
  const user = getSesion();

  if (!user) {
    cont.innerHTML = `
      <div class="empty-state">
        <h2>Tu Biblioteca</h2>
        <p>Inicia sesión para ver los juegos que has comprado.</p>
        <button class="cta" onclick="document.getElementById('loginModal').style.display='flex'">Iniciar sesión</button>
      </div>`;
    return;
  }

  try {
    const respuesta = await fetch(`http://localhost:3000/api/biblioteca/${user.idUsuario}`);
    const resultado = await respuesta.json();
    cont.innerHTML = `
      <div class="biblioteca-header">
        <h2>Tu Biblioteca</h2>
        <span class="saldo-tag">Saldo: $${user.saldo.toFixed(2)}</span>
      </div>
    `;
    if (!resultado.success || resultado.juegos.length === 0) {
      cont.innerHTML += `
        <div class="empty-state">
          <p>No tienes juegos aún. ¡Compra uno en la tienda!</p>
          <button class="cta" onclick="showSection('tienda')">Ir a la tienda</button>
        </div>`;
      return;
    }

    const grid = document.createElement("div");
    grid.className = "games-grid";
    grid.innerHTML = resultado.juegos.map(r => {
      const j = juegos.find(g => g.idJuego === r.idJuego);
      if (!j) return "";
      return `
        <div class="game">
          <img src="${j.imagen}" alt="${j.nombre}">
          <h3>${j.nombre}</h3>
          <p>Adquirido: ${new Date(r.fechaAdquisicion).toLocaleDateString()}</p>
        </div>`;
    }).join("");
    cont.appendChild(grid);

  } catch (error) {
    cont.innerHTML = `<p class="empty-state">Error al cargar la biblioteca desde SQL Server.</p>`;
  }
}

function cargarSoporte() {
  const cont = document.getElementById("soporte");
  if (!cont) return;
  cont.innerHTML = `
    <h2>Centro de Soporte SteamGX</h2>
    <p>¿Tienes problemas con tu cuenta, descargas o compras?</p>
    <ul>
      <li>💾 Problemas de instalación → Verifica espacio en disco y permisos.</li>
      <li>🔐 Error al iniciar sesión → Autentícate de forma segura.</li>
      <li>💳 Saldo insuficiente → Recarga saldo seguro con tarjeta desde tu cuenta.</li>
    </ul>
    <p>O escríbenos directamente: <a href="mailto:soporte@steamgx.com" class="mail">soporte@steamgx.com</a></p>
  `;
}

// =========================================================
// HEADER CONTROL DE NAV
// =========================================================
function actualizarHeaderCuenta() {
  const user = getSesion();
  const loginButton = document.getElementById("loginButton");
  const accountMenu = document.getElementById("accountMenu");

  if (!loginButton || !accountMenu) return;

  if (user) {
    loginButton.style.display = "none";
    accountMenu.style.display = "flex";
    document.getElementById("accountName").textContent = `👤 ${user.nombre}`;
    document.getElementById("accountSaldo").textContent = `$${user.saldo.toFixed(2)}`;
  } else {
    loginButton.style.display = "inline-block";
    accountMenu.style.display = "none";
  }
}

// =========================================================
// MODAL DE AUTENTICACIÓN
// =========================================================
const modalAut = document.getElementById("loginModal");
const openBtnAut = document.getElementById("loginButton");
const closeBtnAut = document.getElementById("closeModal");
if(openBtnAut) openBtnAut.addEventListener("click", () => modalAut.style.display = "flex");
if(closeBtnAut) closeBtnAut.addEventListener("click", () => modalAut.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === modalAut) modalAut.style.display = "none";
});

// Cambia entre Login, Registro y Recuperación de contraseña en el modal
function toggleModalSection(id) {
  document.querySelectorAll(".modal-section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id)?.classList.add("active");
}

// ---- INICIAR SESIÓN REAL CON C# Y SQL SERVER ----
document.getElementById("loginForm").addEventListener("submit", async e => {
  e.preventDefault();
  const inputs = e.target.querySelectorAll("input");
  const correo = inputs[0].value.trim();
  const contrasena = inputs[1].value;

  const datosLogin = { correo: correo, contrasena: contrasena };

  try {
    const respuesta = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datosLogin)
    });

    const resultado = await respuesta.json();

    if (resultado.success) {
      const usuarios = dbGet(DB_KEYS.usuarios);
      const idx = usuarios.findIndex(u => u.idUsuario === resultado.usuario.idUsuario);
      if (idx === -1) {
        usuarios.push(resultado.usuario);
      } else {
        usuarios[idx] = resultado.usuario; // Sincroniza saldo del C#
      }
      dbSet(DB_KEYS.usuarios, usuarios);
      
      setSesion(resultado.usuario.idUsuario);
      actualizarHeaderCuenta();
      modalAut.style.display = "none";
      e.target.reset();
      mostrarToast(`Bienvenido de vuelta, ${resultado.usuario.nombre} 😎`, "success");
      showSection("tienda");
    } else {
      mostrarToast(resultado.message, "error");
    }
  } catch (error) {
    mostrarToast("No se pudo conectar con el servidor de autenticación.", "error");
  }
});

// ---- REGISTRO REAL CON C# Y SQL SERVER ----
document.getElementById("registerForm").addEventListener("submit", async e => {
  e.preventDefault();
  const inputs = e.target.querySelectorAll("input");
  const nombre = inputs[0].value.trim();
  const correo = inputs[1].value.trim();
  const contrasena = inputs[2].value;

  const datosRegistro = { nombre: nombre, correo: correo, contrasena: contrasena };

  try {
    const respuesta = await fetch('http://localhost:3000/api/registro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datosRegistro)
    });

    const resultado = await respuesta.json();

    if (resultado.success) {
      const usuarios = dbGet(DB_KEYS.usuarios);
      usuarios.push({
        idUsuario: resultado.idUsuario,
        nombre,
        correo,
        contrasena,
        rol: "jugador",
        saldo: 0,
        nivelExperiencia: "principiante"
      });
      dbSet(DB_KEYS.usuarios, usuarios);
      
      setSesion(resultado.idUsuario);
      actualizarHeaderCuenta();
      modalAut.style.display = "none";
      e.target.reset();
      mostrarToast("¡Cuenta creada y guardada en SQL Server! 🎮", "success");
      showSection("tienda");
    } else {
      mostrarToast("Error en SQL Server: " + resultado.message, "error");
    }
  } catch (error) {
    mostrarToast("No se pudo conectar con el servidor de registro.", "error");
  }
});

document.getElementById("forgotForm").addEventListener("submit", e => {
  e.preventDefault();
  mostrarToast("Se ha enviado un enlace de recuperación a tu correo 📧", "success");
  toggleModalSection("login-section");
  e.target.reset();
});

document.getElementById("logoutButton").addEventListener("click", () => {
  clearSesion();
  actualizarHeaderCuenta();
  mostrarToast("Sesión cerrada.", "success");
  showSection("tienda");
});

// =========================================================
// CONTROL DEL MODAL DE RECARGA (ABRIR Y CERRAR)
// =========================================================
document.getElementById("rechargeButton")?.addEventListener("click", () => {
  const modalRec = document.getElementById("rechargeModal");
  if (modalRec) modalRec.style.display = "flex";
});

document.getElementById("closeRecharge")?.addEventListener("click", () => {
  const modalRec = document.getElementById("rechargeModal");
  if (modalRec) modalRec.style.display = "none";
});

window.addEventListener("click", e => {
  const modalRec = document.getElementById("rechargeModal");
  if (e.target === modalRec) modalRec.style.display = "none";
});

// Formateador automático de tarjeta de crédito
document.getElementById("cardNumber")?.addEventListener("input", e => {
  e.target.value = e.target.value.replace(/\s?/g, "").replace(/(\d{4})/g, "$1 ").trim();
});
document.getElementById("cardExpiry")?.addEventListener("input", e => {
  e.target.value = e.target.value.replace(/\D/g, "").replace(/(\d{2})(\d{1,2})/, "$1/$2");
});

// =========================================================
// PROCESAR RECARGA REAL CON EL BACKEND EN C#
// =========================================================
document.getElementById("rechargeForm")?.addEventListener("submit", async e => {
  e.preventDefault();
  
  const btnPagar = document.getElementById("btnPagarTexto");
  const montoInput = document.getElementById("rechargeAmount");
  const monto = parseFloat(montoInput.value);
  if (!monto || monto <= 0) return;

  const user = getSesion();
  if (!user) {
    mostrarToast("Inicia sesión para realizar transacciones.", "error");
    return;
  }

  btnPagar.disabled = true;
  btnPagar.innerText = "Conectando con la pasarela...";
  btnPagar.style.background = "#555";

  await new Promise(resolve => setTimeout(resolve, 1100));
  btnPagar.innerText = "Autorizando transacción...";
  await new Promise(resolve => setTimeout(resolve, 700));

  const datosRecarga = { idUsuario: user.idUsuario, monto: monto };

  try {
    const respuesta = await fetch('http://localhost:3000/api/recarga', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datosRecarga)
    });
    const resultado = await respuesta.json();

    if (resultado.success) {
      const usuarios = dbGet(DB_KEYS.usuarios);
      const idx = usuarios.findIndex(u => u.idUsuario === user.idUsuario);
      if (idx !== -1) {
        usuarios[idx].saldo = parseFloat((usuarios[idx].saldo + monto).toFixed(2));
        dbSet(DB_KEYS.usuarios, usuarios);
      }

      actualizarHeaderCuenta();
      document.getElementById("rechargeModal").style.display = "none";
      e.target.reset();
      mostrarToast(`¡Pago de $${monto.toFixed(2)} aprobado y guardado en SQL Server! 💳`, "success");
      if (document.getElementById("biblioteca").classList.contains("active")) {
        cargarBiblioteca();
      }
    } else {
      mostrarToast("Pasarela rechazada: " + resultado.message, "error");
    }
  } catch (error) {
    mostrarToast("Error en la red bancaria. Intenta de nuevo.", "error");
  } finally {
    btnPagar.disabled = false;
    btnPagar.innerText = "Procesar Pago Seguro";
    btnPagar.style.background = "linear-gradient(to right, #47b230 0%, #31871f 100%)";
  }
});

// =========================================================
// ASIGNACIÓN DE EVENTOS DEL CARRITO
// =========================================================
document.getElementById("cartButton")?.addEventListener("click", abrirCarrito);
document.getElementById("closeCart")?.addEventListener("click", cerrarCarrito);
document.getElementById("cartOverlay")?.addEventListener("click", cerrarCarrito);
document.getElementById("checkoutButton")?.addEventListener("click", finalizarCompra);

// =========================================================
// CARGA INICIAL DEL SISTEMA
// =========================================================
cargarTienda();
actualizarCarritoUI();
actualizarHeaderCuenta();