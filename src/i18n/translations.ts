import type { Language, TranslationDictionary } from "./types";

const spanish: TranslationDictionary = {
  languageName: "Español",
  navigation: {
    home: "Inicio",
    experience: "Trayectoria",
    skills: "Tecnologías",
    projects: "Proyectos",
    certificates: "Certificados",
    contact: "Contacto",
    mainLabel: "Navegación principal",
    menuLabel: "Abrir menú de navegación",
    themeToLight: "Cambiar a modo claro",
    themeToDark: "Cambiar a modo oscuro",
    languageLabel: "Idioma",
    skipToContent: "Saltar al contenido principal",
    close: "Cerrar",
  },
  hero: {
    role: "Desarrollador web · IA y Big Data",
    description:
      "Soy Eric Mejias Gamonal. Desarrollo proyectos web mientras sigo aprendiendo el mundo de la inteligencia artificial y Big Data. Aqui podeis ver más sobre mis proyectos y mi experiencia.",
    location: "España",
    approach: "GitHub-first",
    stack: "TypeScript · React · Node.js · Express · Python",
    github: "GitHub",
    linkedin: "LinkedIn",
    blogger: "Blogger",
    cv: "CV",
  },
  experience: {
    title: "Experiencia y formación",
    openCv: "Abrir CV",
    professionalExperience: "Experiencia profesional",
    education: "Formación",
    facts: [
      "Permisos B y A2",
      "Español y catalán nativos",
      "Inglés B1-B2",
      "Disponibilidad presencial, híbrida o remota",
    ],
    items: {
      seo: {
        role: "Analista SEO",
        company: "Imàtica · Girona, Cataluña, España",
        detail:
          "Auditorías técnicas y optimización de posicionamiento con GSC, GA4, ADS y SEMrush.",
      },
      geniusx: {
        role: "Desarrollador Web",
        company: "GeniusX · Cassà de la Selva, Cataluña, España",
        detail:
          "Desarrollo de funcionalidades para aplicaciones web de cliente y entrega de features funcionales con PHP, CodeIgniter, JavaScript y AJAX.",
      },
      erasmus: {
        role: "Técnico Microinformático",
        company: "Leankubatore · Erasmus+ · Catania, Sicilia, Italia",
        detail:
          "Soporte técnico, mantenimiento de sistemas y gestión de contenido en WordPress.",
      },
      school: {
        role: "Técnico Microinformático",
        company: "Escola Maria Cubí i Soler · Malgrat de Mar, Cataluña, España",
        detail:
          "Resolución de incidencias de hardware, software y redes en equipos educativos.",
      },
    },
    studies: {
      ai: "Especialización en Inteligencia Artificial y Big Data",
      daW: "Grado Superior en Desarrollo de Aplicaciones Web",
      smr: "Grado Medio en Sistemas Microinformáticos y Redes",
    },
  },
  skills: {
    title: "Tecnologías y herramientas",
    categories: {
      frontend: {
        title: "Frontend",
        description: "Interfaces y experiencias para navegador",
      },
      backend: {
        title: "Backend",
        description: "APIs, lógica de aplicación y tiempo real",
      },
      databases: {
        title: "Datos",
        description: "Modelado, persistencia y consultas",
      },
      tools: {
        title: "Tools",
        description: "Herramientas para construir y compartir",
      },
      learning: { title: "Learning", description: "Nuevas tecnologías" },
      seo: { title: "SEO", description: "Posicionamiento técnico y analítica" },
    },
  },
  projects: {
    title: "Proyectos",
    details: "Ver detalles",
    repository: "Repositorio",
    liveDemo: "Demo en vivo",
    stack: "Stack",
    filters: {
      all: "Todos",
      fullstack: "Full Stack",
      frontend: "Frontend",
      backend: "Backend",
      education: "Apuntes",
    },
    copies: {
      rekko: {
        description:
          "Rekko-Lists es la organización de una red social de anime full stack, con frontend React + TypeScript y API REST en Node.js, Express y Prisma para recomendaciones e interacción.",
        fullDescription:
          "Rekko-Lists desarrolla una red social centrada en el descubrimiento de anime y las recomendaciones. El proyecto integra un frontend SPA con React, Vite, TypeScript, Zustand y Tailwind, junto a una API REST en Node.js, Express, Prisma y PostgreSQL. Incluye autenticación, perfiles, publicaciones, comentarios, reputación, retos diarios, recomendaciones e integración con servicios de anime.",
      },
      rekkophp: {
        description:
          "Prototipo de plataforma de recomendaciones de anime desarrollada en PHP, con arquitectura MVC, autenticación JWT y OAuth2, gestión de usuarios y persistencia en MySQL.",
        fullDescription:
          "Prototipo de una plataforma de recomendaciones de anime desarrollada en PHP, que sirvió como base para la posterior evolución de Rekko. Implementa una arquitectura MVC propia, autenticación mediante JWT y OAuth2 con GitHub, refresh tokens, gestión de usuarios y roles, recuperación de contraseña, reCAPTCHA y persistencia en MySQL mediante PDO. También incorpora PHPStan para análisis estático.",
      },
      astronomy: {
        description:
          "Aplicación PHP que consume la API REST de Wikipedia para obtener artículos de astronomía, almacenarlos en MySQL y mostrarlos mediante una interfaz MVC con paginación.",
        fullDescription:
          "Aplicación web desarrollada en PHP que consume la API REST de Wikipedia para obtener artículos cortos de astronomía, incluyendo imágenes, y almacenarlos en una base de datos MySQL mediante PDO. Utiliza una arquitectura MVC y permite configurar los artículos mediante CSV, recargarlos bajo demanda y mostrarlos mediante paginación configurable. El proyecto está preparado para ejecutarse con Apache, PHP y MySQL mediante XAMPP.",
      },
      geoqueryai: {
        description:
          "Aplicación web que combina consultas en lenguaje natural con datos geográficos para buscar lugares y representar los resultados en un mapa mediante IA y una arquitectura cliente-servidor.",
        fullDescription:
          "Aplicación web que permite realizar consultas en lenguaje natural sobre lugares geográficos y visualizar los resultados directamente sobre un mapa. El proyecto utiliza una arquitectura cliente-servidor separando frontend y backend, con TypeScript en el cliente y Node.js en el servidor. Integra un modelo de IA mediante la API de OpenAI para interpretar las consultas y transformarlas en búsquedas geográficas, proporcionando una forma más natural de explorar ubicaciones.",
      },
      primero: {
        description:
          "Juego multijugador inspirado en UNO desarrollado con TypeScript, Node.js y WebSockets, con frontend y servidor independientes y preparado para despliegue en Render.",
        fullDescription:
          "Juego multijugador inspirado en UNO desarrollado para practicar comunicación en tiempo real mediante WebSockets. El proyecto utiliza TypeScript y Node.js, separando frontend, servidor y scripts auxiliares. La arquitectura permite gestionar partidas y comunicación entre jugadores en tiempo real, y el proyecto está preparado para desplegarse como un único servicio Node.js en Render mediante un Blueprint y un proceso de build específico para producción.",
      },
      "iabd-notes": {
        description:
          "Repositorio de apuntes y material de estudio sobre Inteligencia Artificial y Big Data, organizado por áreas como modelos de IA, programación, aprendizaje automático y sistemas Big Data.",
        fullDescription:
          "Repositorio personal de apuntes y material de estudio del ámbito de Inteligencia Artificial y Big Data. El contenido está organizado en diferentes áreas, incluyendo Big Data aplicado, modelos de IA, programación de IA, sistemas de aprendizaje automático y sistemas de Big Data. También incorpora recursos visuales y una estructura compatible con Obsidian para facilitar la organización y consulta del contenido.",
      },
      "webdev-notes": {
        description:
          "Repositorio de apuntes de Desarrollo de Aplicaciones Web que reúne contenidos de frontend, backend, bases de datos, sistemas, SEO, despliegue, Git y diseño web.",
        fullDescription:
          "Repositorio de apuntes y material de estudio de Desarrollo de Aplicaciones Web, organizado por las diferentes áreas del ciclo DAW. Incluye contenidos de frontend y backend, bases de datos, persistencia, programación, sistemas informáticos, diseño de interfaces, despliegue, SEO, Git y GitHub y lenguajes de marcas. Está estructurado para consultar y mantener de forma organizada el aprendizaje técnico del ciclo.",
      },
      climbing: {
        description:
          "Aplicación de gestión de escalada desarrollada en Java con MySQL y JDBC, con persistencia de datos, pruebas y un entorno reproducible mediante Docker y Maven.",
        fullDescription:
          "Aplicación de gestión relacionada con la escalada desarrollada en Java, utilizando MySQL como sistema de persistencia y JDBC para la comunicación con la base de datos. El proyecto trabaja con Java 21, Maven y Docker, incluyendo un entorno contenedorizado para la base de datos y una estructura preparada para desarrollo y pruebas. Fue desarrollado conjuntamente como proyecto académico y cuenta además con tests y documentación del sistema.",
      },
      pokeapi: {
        description:
          "Proyecto de integración de datos que consume la PokeAPI, transforma su información y la almacena en una base de datos relacional MySQL mediante scripts de carga y modelos documentados.",
        fullDescription:
          "Proyecto centrado en la integración y persistencia de datos procedentes de la PokeAPI. El sistema consume información de la API, la procesa y la carga en una base de datos relacional MySQL. Incluye el diseño del modelo entidad-relación y modelo relacional, scripts DDL y DML, documentación y código organizado para la obtención e inserción de datos. El objetivo principal es trabajar el flujo completo desde una API externa hasta una base de datos estructurada.",
      },
      collections: {
        description:
          "Aplicación de consola en Java para gestionar productos de un supermercado, practicando programación orientada a objetos, Collections, herencia, ordenación y manejo de excepciones.",
        fullDescription:
          "Aplicación de consola desarrollada en Java que simula la gestión de productos de un supermercado. Implementa diferentes tipos de productos mediante herencia y clases especializadas para alimentación, electrónica y textil. El proyecto está orientado a practicar el uso de Collections, ordenación de elementos y gestión de excepciones según las diferentes situaciones del programa, aplicando conceptos de programación orientada a objetos.",
      },
      myanimelist: {
        description:
          "Aplicación Java que consume la API oficial de MyAnimeList mediante OAuth2 y JWT, integrando autenticación, acceso a datos de anime y una base de datos gestionada con Docker.",
        fullDescription:
          "Aplicación desarrollada en Java centrada en el consumo de la API oficial de MyAnimeList y el aprendizaje de flujos de autenticación. Implementa OAuth2 y JWT para gestionar el acceso a la API, obteniendo información relacionada con anime y usuarios. El proyecto utiliza Java 21, Maven y Docker, incorporando una base de datos en un contenedor para facilitar el entorno de ejecución y persistencia de la aplicación.",
      },
      pianoman: {
        description:
          "Aplicación web interactiva que simula un piano virtual y permite reproducir notas mediante teclado, ratón o pantalla táctil, desarrollada con TypeScript, JavaScript, HTML, CSS y SVG.",
        fullDescription:
          "Aplicación web interactiva que simula un piano virtual directamente en el navegador. Permite reproducir notas mediante el teclado físico, el ratón y dispositivos táctiles, incorporando resaltado visual de las teclas activadas y soporte para diferentes métodos de interacción. Está desarrollada con TypeScript y JavaScript, utilizando HTML, CSS y SVG para la representación e interacción con el piano.",
      },
    },
  },
  certificates: {
    title: "Certificados",
    credential: "credential / pdf",
    download: "Descargar PDF",
    filters: {
      all: "Todos",
      generalitat: "Generalitat",
      microsoft: "Microsoft",
      sapalomera: "Sa Palomera",
    },
    copies: {
      ia: {
        id: "ia",
        title: "Inteligencia Artificial",
        issuer: "Generalitat de Catalunya",
        file: "/docs/Generalitat_IA.pdf",
        description:
          "Acreditación de la Generalitat de Catalunya tras completar el curso online «Intel·ligència Artificial per a la ciutadania» (8h) en 2026 con un 97,50% de nota.",
        filter: "generalitat",
      },
      cybersecurity: {
        id: "cybersecurity",
        title: "Ciberseguridad",
        issuer: "Generalitat de Catalunya",
        file: "/docs/Generalitat_Ciberseguretat.pdf",
        description:
          "Acreditación de la Generalitat de Catalunya por realizar el curso online «Ciberseguretat bàsica per a la ciutadania» (8h) finalizado en 2026 con un 95,11% de nota.",
        filter: "generalitat",
      },
      specialist: {
        id: "specialist",
        title: "Título de especialista",
        issuer: "Microsoft",
        file: "/docs/Título Especialista.pdf",
        description:
          "Certificación Microsoft Office Specialist - Associate obtenida en mayo de 2023, la cual avala el dominio conjunto y certificado en Excel, PowerPoint y Word 2019.",
        filter: "microsoft",
      },
      excel: {
        id: "excel",
        title: "Excel",
        issuer: "Microsoft",
        file: "/docs/Título Excel.pdf",
        description:
          "Certificado oficial de Microsoft que acredita las competencias como Microsoft Office Specialist en Excel 2019 Associate, emitido en mayo de 2023 a través de Certiport.",
        filter: "microsoft",
      },
      powerpoint: {
        id: "powerpoint",
        title: "PowerPoint",
        issuer: "Microsoft",
        file: "/docs/Título PowerPoint.pdf",
        description:
          "Acreditación oficial de Microsoft como Microsoft Office Specialist en PowerPoint 2019 Associate, lograda en mayo de 2023 tras superar los requisitos correspondientes.",
        filter: "microsoft",
      },
      word: {
        id: "word",
        title: "Word",
        issuer: "Microsoft",
        file: "/docs/Título Word.pdf",
        description:
          "Certificado oficial de Microsoft que reconoce las competencias como Microsoft Office Specialist en Word 2019 Associate, completado exitosamente en mayo de 2023.",
        filter: "microsoft",
      },
      erasmus: {
        id: "erasmus+",
        title: "Erasmus+",
        issuer: "Sa Palomera",
        file: "/docs/Erasmus+.pdf",
        description:
          "Certificado Erasmus+ por completar prácticas internacionales en LeanKubatore (Italia) entre abril y mayo de 2024, en el marco del programa de la Comisión Europea.",
        filter: "sapalomera",
      },
      honorific: {
        id: "honorific",
        title: "Mención Honorífica",
        issuer: "Sa Palomera",
        file: "/docs/Menció honorífica.pdf",
        description:
          "Mención honorífica otorgada en junio de 2024 por el Institut Sa Palomera tras destacar con una nota media de 8,24 en el CFGM de Sistemas Microinformáticos y Redes.",
        filter: "sapalomera",
      },
    },
  },
  contact: {
    title: "Contacto",
    role: "Desarrollador web · IA y Big Data",
    location:
      "España · disponible presencial, híbrido o remoto · ericmejiasgamonal@gmail.com",
    slogan: "Código abierto, conversación directa.",
    availability: "Disponible para conversar",
    availabilityDetail:
      "Sobre desarrollo web, producto, inteligencia artificial y datos.",
    copyEmail: "Correo copiado",
  },
  footer: { copyright: "TypeScript + React + ESLint + Vite" },
  seo: {
    title: "Eric Mejias Gamonal · Desarrollador web | Eriquito00",
    description:
      "Portfolio de Eric Mejias Gamonal (Eriquito00): desarrollo web, proyectos de código abierto, experiencia y formación en inteligencia artificial y Big Data.",
  },
};

const catalan: TranslationDictionary = {
  languageName: "Català",
  navigation: {
    home: "Inici",
    experience: "Trajectòria",
    skills: "Tecnologies",
    projects: "Projectes",
    certificates: "Certificats",
    contact: "Contacte",
    mainLabel: "Navegació principal",
    menuLabel: "Obrir menú de navegació",
    themeToLight: "Canviar al mode clar",
    themeToDark: "Canviar al mode fosc",
    languageLabel: "Idioma",
    skipToContent: "Saltar al contingut principal",
    close: "Tancar",
  },
  hero: {
    role: "Desenvolupador web · IA i Big Data",
    description:
      "Soc Eric Mejias Gamonal. Desenvolupo projectes web mentre continuo aprenent el món de la intel·ligència artificial i el Big Data. Aquí podeu veure més sobre els meus projectes i la meva experiència.",
    location: "Espanya",
    approach: "GitHub-first",
    stack: "TypeScript · React · Node.js · Express · Python",
    github: "GitHub",
    linkedin: "LinkedIn",
    blogger: "Blogger",
    cv: "CV",
  },
  experience: {
    title: "Experiència i formació",
    openCv: "Obrir CV",
    professionalExperience: "Experiència professional",
    education: "Formació",
    facts: [
      "Permisos B i A2",
      "Espanyol i català nadius",
      "Anglès B1-B2",
      "Disponibilitat presencial, híbrida o remota",
    ],
    items: {
      seo: {
        role: "Analista SEO",
        company: "Imàtica · Girona, Catalunya, Espanya",
        detail:
          "Auditories tècniques i optimització del posicionament amb GSC, GA4, ADS i SEMrush.",
      },
      geniusx: {
        role: "Desenvolupador Web",
        company: "GeniusX · Cassà de la Selva, Catalunya, Espanya",
        detail:
          "Desenvolupament de funcionalitats per a aplicacions web de client i lliurament de features funcionals amb PHP, CodeIgniter, JavaScript i AJAX.",
      },
      erasmus: {
        role: "Tècnic Microinformàtic",
        company: "Leankubatore · Erasmus+ · Catània, Sicília, Itàlia",
        detail:
          "Suport tècnic, manteniment de sistemes i gestió de contingut a WordPress.",
      },
      school: {
        role: "Tècnic Microinformàtic",
        company: "Escola Maria Cubí i Soler · Malgrat de Mar, Catalunya, Espanya",
        detail:
          "Resolució d'incidències de maquinari, programari i xarxes en equips educatius.",
      },
    },
    studies: {
      ai: "Especialització en Intel·ligència Artificial i Big Data",
      daW: "Grau Superior en Desenvolupament d'Aplicacions Web",
      smr: "Grau Mitjà en Sistemes Microinformàtics i Xarxes",
    },
  },
  skills: {
    title: "Tecnologies i eines",
    categories: {
      frontend: {
        title: "Frontend",
        description: "Interfícies i experiències per al navegador",
      },
      backend: {
        title: "Backend",
        description: "APIs, lògica d'aplicació i temps real",
      },
      databases: {
        title: "Dades",
        description: "Modelatge, persistència i consultes",
      },
      tools: {
        title: "Tools",
        description: "Eines per construir i compartir",
      },
      learning: { title: "Learning", description: "Noves tecnologies" },
      seo: { title: "SEO", description: "Posicionament tècnic i analítica" },
    },
  },
  projects: {
    title: "Projectes",
    details: "Veure detalls",
    repository: "Repositori",
    liveDemo: "Demo en directe",
    stack: "Stack",
    filters: {
      all: "Tots",
      fullstack: "Full Stack",
      frontend: "Frontend",
      backend: "Backend",
      education: "Apunts",
    },
    copies: {
      rekko: {
        description:
          "Rekko-Lists és l'organització d'una xarxa social d'anime full stack, amb frontend React + TypeScript i API REST en Node.js, Express i Prisma per a recomanacions i interacció.",
        fullDescription:
          "Rekko-Lists desenvolupa una xarxa social centrada en el descobriment d'anime i les recomanacions. El projecte integra un frontend SPA amb React, Vite, TypeScript, Zustand i Tailwind, juntament amb una API REST en Node.js, Express, Prisma i PostgreSQL. Inclou autenticació, perfils, publicacions, comentaris, reputació, reptes diaris, recomanacions i integració amb serveis d'anime.",
      },
      rekkophp: {
        description:
          "Prototip de plataforma de recomanacions d'anime desenvolupada en PHP, amb arquitectura MVC, autenticació JWT i OAuth2, gestió d'usuaris i persistència en MySQL.",
        fullDescription:
          "Prototip d'una plataforma de recomanacions d'anime desenvolupada en PHP, que va servir com a base per a la posterior evolució de Rekko. Implementa una arquitectura MVC pròpia, autenticació mitjançant JWT i OAuth2 amb GitHub, refresh tokens, gestió d'usuaris i rols, recuperació de contrasenya, reCAPTCHA i persistència en MySQL mitjançant PDO. També incorpora PHPStan per a anàlisi estàtica.",
      },
      astronomy: {
        description:
          "Aplicació PHP que consumeix l'API REST de Wikipedia per obtenir articles d'astronomia, emmagatzemar-los en MySQL i mostrar-los mitjançant una interfície MVC amb paginació.",
        fullDescription:
          "Aplicació web desenvolupada en PHP que consumeix l'API REST de Wikipedia per obtenir articles curts d'astronomia, incloent imatges, i emmagatzemar-los en una base de dades MySQL mitjançant PDO. Utilitza una arquitectura MVC i permet configurar els articles mitjançant CSV, recarregar-los sota demanda i mostrar-los mitjançant paginació configurable. El projecte està preparat per executar-se amb Apache, PHP i MySQL mitjançant XAMPP.",
      },
      geoqueryai: {
        description:
          "Aplicació web que combina consultes en llenguatge natural amb dades geogràfiques per cercar llocs i representar els resultats en un mapa mitjançant IA i una arquitectura client-servidor.",
        fullDescription:
          "Aplicació web que permet realitzar consultes en llenguatge natural sobre llocs geogràfics i visualitzar els resultats directament sobre un mapa. El projecte utilitza una arquitectura client-servidor separant frontend i backend, amb TypeScript al client i Node.js al servidor. Integra un model d'IA mitjançant l'API d'OpenAI per interpretar les consultes i transformar-les en cerques geogràfiques, proporcionant una forma més natural d'explorar ubicacions.",
      },
      primero: {
        description:
          "Joc multijugador inspirat en UNO desenvolupat amb TypeScript, Node.js i WebSockets, amb frontend i servidor independents i preparat per a desplegament a Render.",
        fullDescription:
          "Joc multijugador inspirat en UNO desenvolupat per practicar comunicació en temps real mitjançant WebSockets. El projecte utilitza TypeScript i Node.js, separant frontend, servidor i scripts auxiliars. L'arquitectura permet gestionar partides i comunicació entre jugadors en temps real, i el projecte està preparat per desplegar-se com un únic servei Node.js a Render mitjançant un Blueprint i un procés de build específic per a producció.",
      },
      "iabd-notes": {
        description:
          "Repositori d'apunts i material d'estudi sobre Intel·ligència Artificial i Big Data, organitzat per àrees com models d'IA, programació, aprenentatge automàtic i sistemes Big Data.",
        fullDescription:
          "Repositori personal d'apunts i material d'estudi de l'àmbit d'Intel·ligència Artificial i Big Data. El contingut està organitzat en diferents àrees, incloent Big Data aplicat, models d'IA, programació d'IA, sistemes d'aprenentatge automàtic i sistemes de Big Data. També incorpora recursos visuals i una estructura compatible amb Obsidian per facilitar l'organització i consulta del contingut.",
      },
      "webdev-notes": {
        description:
          "Repositori d'apunts de Desenvolupament d'Aplicacions Web que reuneix continguts de frontend, backend, bases de dades, sistemes, SEO, desplegament, Git i disseny web.",
        fullDescription:
          "Repositori d'apunts i material d'estudi de Desenvolupament d'Aplicacions Web, organitzat per les diferents àrees del cicle DAW. Inclou continguts de frontend i backend, bases de dades, persistència, programació, sistemes informàtics, disseny d'interfícies, desplegament, SEO, Git i GitHub i llenguatges de marques. Està estructurat per consultar i mantenir de forma organitzada l'aprenentatge tècnic del cicle.",
      },
      climbing: {
        description:
          "Aplicació de gestió d'escalada desenvolupada en Java amb MySQL i JDBC, amb persistència de dades, proves i un entorn reproduïble mitjançant Docker i Maven.",
        fullDescription:
          "Aplicació de gestió relacionada amb l'escalada desenvolupada en Java, utilitzant MySQL com a sistema de persistència i JDBC per a la comunicació amb la base de dades. El projecte treballa amb Java 21, Maven i Docker, incloent un entorn contenidoritzat per a la base de dades i una estructura preparada per a desenvolupament i proves. Va ser desenvolupat conjuntament com a projecte acadèmic i compta a més amb tests i documentació del sistema.",
      },
      pokeapi: {
        description:
          "Projecte d'integració de dades que consumeix la PokeAPI, transforma la seva informació i l'emmagatzema en una base de dades relacional MySQL mitjançant scripts de càrrega i models documentats.",
        fullDescription:
          "Projecte centrat en la integració i persistència de dades procedents de la PokeAPI. El sistema consumeix informació de l'API, la processa i la carrega en una base de dades relacional MySQL. Inclou el disseny del model entitat-relació i model relacional, scripts DDL i DML, documentació i codi organitzat per a l'obtenció i inserció de dades. L'objectiu principal és treballar el flux complet des d'una API externa fins a una base de dades estructurada.",
      },
      collections: {
        description:
          "Aplicació de consola en Java per gestionar productes d'un supermercat, practicant programació orientada a objectes, Collections, herència, ordenació i gestió d'excepcions.",
        fullDescription:
          "Aplicació de consola desenvolupada en Java que simula la gestió de productes d'un supermercat. Implementa diferents tipus de productes mitjançant herència i classes especialitzades per a alimentació, electrònica i tèxtil. El projecte està orientat a practicar l'ús de Collections, ordenació d'elements i gestió d'excepcions segons les diferents situacions del programa, aplicant conceptes de programació orientada a objectes.",
      },
      myanimelist: {
        description:
          "Aplicació Java que consumeix l'API oficial de MyAnimeList mitjançant OAuth2 i JWT, integrant autenticació, accés a dades d'anime i una base de dades gestionada amb Docker.",
        fullDescription:
          "Aplicació desenvolupada en Java centrada en el consum de l'API oficial de MyAnimeList i l'aprenentatge de fluxos d'autenticació. Implementa OAuth2 i JWT per gestionar l'accés a l'API, obtenint informació relacionada amb anime i usuaris. El projecte utilitza Java 21, Maven i Docker, incorporant una base de dades en un contenidor per facilitar l'entorn d'execució i persistència de l'aplicació.",
      },
      pianoman: {
        description:
          "Aplicació web interactiva que simula un piano virtual i permet reproduir notes mitjançant teclat, ratolí o pantalla tàctil, desenvolupada amb TypeScript, JavaScript, HTML, CSS i SVG.",
        fullDescription:
          "Aplicació web interactiva que simula un piano virtual directament al navegador. Permet reproduir notes mitjançant el teclat físic, el ratolí i dispositius tàctils, incorporant ressaltat visual de les tecles activades i suport per a diferents mètodes d'interacció. Està desenvolupada amb TypeScript i JavaScript, utilitzant HTML, CSS i SVG per a la representació i interacció amb el piano.",
      },
    },
  },
  certificates: {
    title: "Certificats",
    credential: "credencial / pdf",
    download: "Descarregar PDF",
    filters: {
      all: "Tots",
      generalitat: "Generalitat",
      microsoft: "Microsoft",
      sapalomera: "Sa Palomera",
    },
    copies: {
      ia: {
        id: "ia",
        title: "Intel·ligència Artificial",
        issuer: "Generalitat de Catalunya",
        file: "/docs/Generalitat_IA.pdf",
        description:
          "Acreditació de la Generalitat de Catalunya després de completar el curs en línia «Intel·ligència Artificial per a la ciutadania» (8h) el 2026 amb un 97,50% de nota.",
        filter: "generalitat",
      },
      cybersecurity: {
        id: "cybersecurity",
        title: "Ciberseguretat",
        issuer: "Generalitat de Catalunya",
        file: "/docs/Generalitat_Ciberseguretat.pdf",
        description:
          "Acreditació de la Generalitat de Catalunya per realitzar el curs en línia «Ciberseguretat bàsica per a la ciutadania» (8h) finalitzat el 2026 amb un 95,11% de nota.",
        filter: "generalitat",
      },
      specialist: {
        id: "specialist",
        title: "Títol d'especialista",
        issuer: "Microsoft",
        file: "/docs/Título Especialista.pdf",
        description:
          "Certificació Microsoft Office Specialist - Associate obtinguda el maig de 2023, la qual avala el domini conjunt i certificat en Excel, PowerPoint i Word 2019.",
        filter: "microsoft",
      },
      excel: {
        id: "excel",
        title: "Excel",
        issuer: "Microsoft",
        file: "/docs/Título Excel.pdf",
        description:
          "Certificat oficial de Microsoft que acredita les competències com a Microsoft Office Specialist en Excel 2019 Associate, emès el maig de 2023 a través de Certiport.",
        filter: "microsoft",
      },
      powerpoint: {
        id: "powerpoint",
        title: "PowerPoint",
        issuer: "Microsoft",
        file: "/docs/Título PowerPoint.pdf",
        description:
          "Acreditació oficial de Microsoft com a Microsoft Office Specialist en PowerPoint 2019 Associate, assolida el maig de 2023 després de superar els requisits corresponents.",
        filter: "microsoft",
      },
      word: {
        id: "word",
        title: "Word",
        issuer: "Microsoft",
        file: "/docs/Título Word.pdf",
        description:
          "Certificat oficial de Microsoft que reconeix les competències com a Microsoft Office Specialist en Word 2019 Associate, completat amb èxit el maig de 2023.",
        filter: "microsoft",
      },
      erasmus: {
        id: "erasmus+",
        title: "Erasmus+",
        issuer: "Sa Palomera",
        file: "/docs/Erasmus+.pdf",
        description:
          "Certificat Erasmus+ per completar pràctiques internacionals a LeanKubatore (Itàlia) entre abril i maig de 2024, en el marc del programa de la Comissió Europea.",
        filter: "sapalomera",
      },
      honorific: {
        id: "honorific",
        title: "Menció Honorífica",
        issuer: "Sa Palomera",
        file: "/docs/Menció honorífica.pdf",
        description:
          "Menció honorífica atorgada el juny de 2024 per l'Institut Sa Palomera després de destacar amb una nota mitjana de 8,24 al CFGM de Sistemes Microinformàtics i Xarxes.",
        filter: "sapalomera",
      },
    },
  },
  contact: {
    title: "Contacte",
    role: "Desenvolupador web · IA i Big Data",
    location:
      "Espanya · disponible presencial, híbrid o remot · ericmejiasgamonal@gmail.com",
    slogan: "Codi obert, conversa directa.",
    availability: "Disponible per conversar",
    availabilityDetail:
      "Sobre desenvolupament web, producte, intel·ligència artificial i dades.",
    copyEmail: "Correu copiat",
  },
  footer: { copyright: "TypeScript + React + ESLint + Vite" },
  seo: {
    title: "Eric Mejias Gamonal · Desenvolupador web | Eriquito00",
    description:
      "Portfolio d'Eric Mejias Gamonal (Eriquito00): desenvolupament web, projectes de codi obert, experiència i formació en intel·ligència artificial i Big Data.",
  },
};

const english: TranslationDictionary = {
  languageName: "English",
  navigation: {
    home: "Home",
    experience: "Experience",
    skills: "Technologies",
    projects: "Projects",
    certificates: "Certificates",
    contact: "Contact",
    mainLabel: "Main navigation",
    menuLabel: "Open navigation menu",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    languageLabel: "Language",
    skipToContent: "Skip to main content",
    close: "Close",
  },
  hero: {
    role: "Web Developer · AI & Big Data",
    description:
      "I am Eric Mejias Gamonal. I develop web projects while learning about the world of artificial intelligence and Big Data. Here you can see more about my projects and my experience.",
    location: "Spain",
    approach: "GitHub-first",
    stack: "TypeScript · React · Node.js · Express · Python",
    github: "GitHub",
    linkedin: "LinkedIn",
    blogger: "Blogger",
    cv: "CV",
  },
  experience: {
    title: "Experience and education",
    openCv: "Open CV",
    professionalExperience: "Professional experience",
    education: "Education",
    facts: [
      "B and A2 driving licenses",
      "Native Spanish and Catalan",
      "English B1-B2",
      "On-site, hybrid or remote availability",
    ],
    items: {
      seo: {
        role: "SEO Analyst",
        company: "Imàtica · Girona, Catalonia, Spain",
        detail:
          "Technical audits and search positioning optimization using GSC, GA4, ADS, and SEMrush.",
      },
      geniusx: {
        role: "Web Developer",
        company: "GeniusX · Cassà de la Selva, Catalonia, Spain",
        detail:
          "Development of features for client web applications and delivery of functional features using PHP, CodeIgniter, JavaScript, and AJAX.",
      },
      erasmus: {
        role: "IT Technician",
        company: "Leankubatore · Erasmus+ · Catania, Sicily, Italy",
        detail:
          "Technical support, system maintenance, and content management in WordPress.",
      },
      school: {
        role: "IT Technician",
        company: "Escola Maria Cubí i Soler · Malgrat de Mar, Catalonia, Spain",
        detail:
          "Resolution of hardware, software, and network incidents on educational equipment.",
      },
    },
    studies: {
      ai: "Specialization in Artificial Intelligence and Big Data",
      daW: "Higher Vocational Degree in Web Application Development",
      smr: "Intermediate Vocational Degree in Microcomputer Systems and Networks",
    },
  },
  skills: {
    title: "Technologies and tools",
    categories: {
      frontend: {
        title: "Frontend",
        description: "Interfaces and browser experiences",
      },
      backend: {
        title: "Backend",
        description: "APIs, application logic, and real-time systems",
      },
      databases: {
        title: "Data",
        description: "Modeling, persistence, and queries",
      },
      tools: {
        title: "Tools",
        description: "Tools for building and sharing",
      },
      learning: { title: "Learning", description: "New technologies" },
      seo: { title: "SEO", description: "Technical positioning and analytics" },
    },
  },
  projects: {
    title: "Projects",
    details: "View details",
    repository: "Repository",
    liveDemo: "Live demo",
    stack: "Stack",
    filters: {
      all: "All",
      fullstack: "Full Stack",
      frontend: "Frontend",
      backend: "Backend",
      education: "Notes",
    },
    copies: {
      rekko: {
        description:
          "Rekko-Lists is the organization of a full-stack anime social network, featuring a React + TypeScript frontend and a REST API in Node.js, Express, and Prisma for recommendations and interaction.",
        fullDescription:
          "Rekko-Lists develops a social network focused on anime discovery and recommendations. The project integrates an SPA frontend with React, Vite, TypeScript, Zustand, and Tailwind, alongside a REST API in Node.js, Express, Prisma, and PostgreSQL. Includes authentication, profiles, posts, comments, reputation, daily challenges, recommendations, and integration with anime services.",
      },
      rekkophp: {
        description:
          "Prototype of an anime recommendation platform developed in PHP, featuring MVC architecture, JWT and OAuth2 authentication, user management, and MySQL persistence.",
        fullDescription:
          "Prototype of an anime recommendation platform developed in PHP, which served as the foundation for Rekko's subsequent evolution. Implements a custom MVC architecture, authentication via JWT and OAuth2 with GitHub, refresh tokens, user and role management, password recovery, reCAPTCHA, and MySQL persistence through PDO. Also incorporates PHPStan for static analysis.",
      },
      astronomy: {
        description:
          "PHP application that consumes the Wikipedia REST API to retrieve astronomy articles, store them in MySQL, and display them through an MVC interface with pagination.",
        fullDescription:
          "Web application developed in PHP that consumes the Wikipedia REST API to fetch short astronomy articles, including images, and store them in a MySQL database using PDO. Uses an MVC architecture and allows configuring articles via CSV, reloading them on demand, and displaying them with configurable pagination. The project is set up to run with Apache, PHP, and MySQL using XAMPP.",
      },
      geoqueryai: {
        description:
          "Web application that combines natural language queries with geographic data to search for places and display results on a map using AI and a client-server architecture.",
        fullDescription:
          "Web application that allows users to perform natural language queries about geographic places and visualize the results directly on a map. The project uses a client-server architecture separating frontend and backend, with TypeScript on the client and Node.js on the server. Integrates an AI model via the OpenAI API to interpret queries and transform them into geographic searches, providing a more natural way to explore locations.",
      },
      primero: {
        description:
          "Multiplayer game inspired by UNO developed with TypeScript, Node.js, and WebSockets, with independent frontend and server, ready for deployment on Render.",
        fullDescription:
          "Multiplayer game inspired by UNO developed to practice real-time communication using WebSockets. The project uses TypeScript and Node.js, separating frontend, server, and auxiliary scripts. The architecture allows managing games and player communication in real time, and the project is prepared for deployment as a single Node.js service on Render using a Blueprint and a production-specific build process.",
      },
      "iabd-notes": {
        description:
          "Repository of study notes and material on Artificial Intelligence and Big Data, organized by areas such as AI models, programming, machine learning, and Big Data systems.",
        fullDescription:
          "Personal repository of study notes and material in the field of Artificial Intelligence and Big Data. The content is organized into different areas, including applied Big Data, AI models, AI programming, machine learning systems, and Big Data systems. It also incorporates visual resources and an Obsidian-compatible structure to facilitate content organization and reference.",
      },
      "webdev-notes": {
        description:
          "Web Application Development notes repository bringing together content on frontend, backend, databases, systems, SEO, deployment, Git, and web design.",
        fullDescription:
          "Repository of study notes and material for Web Application Development, organized by the different areas of the vocational program. Includes content on frontend and backend, databases, persistence, programming, computer systems, interface design, deployment, SEO, Git and GitHub, and markup languages. Structured to systematically review and maintain technical learning.",
      },
      climbing: {
        description:
          "Climbing management application developed in Java with MySQL and JDBC, featuring data persistence, tests, and a reproducible environment using Docker and Maven.",
        fullDescription:
          "Climbing-related management application developed in Java, using MySQL as a persistence system and JDBC for database communication. The project works with Java 21, Maven, and Docker, including a containerized environment for the database and a structure prepared for development and testing. Developed jointly as an academic project and also includes tests and system documentation.",
      },
      pokeapi: {
        description:
          "Data integration project that consumes the PokeAPI, transforms its information, and stores it in a relational MySQL database using load scripts and documented models.",
        fullDescription:
          "Project focused on data integration and persistence from the PokeAPI. The system consumes API information, processes it, and loads it into a relational MySQL database. Includes entity-relationship and relational model design, DDL and DML scripts, documentation, and organized code for data retrieval and insertion. The main goal is to work through the entire pipeline from an external API to a structured database.",
      },
      collections: {
        description:
          "Java console application to manage supermarket products, practicing object-oriented programming, Collections, inheritance, sorting, and exception handling.",
        fullDescription:
          "Console application developed in Java simulating product management for a supermarket. Implements different product types using inheritance and specialized classes for food, electronics, and textiles. The project aims to practice Collections, element sorting, and exception handling across different program scenarios, applying object-oriented programming concepts.",
      },
      myanimelist: {
        description:
          "Java application consuming the official MyAnimeList API via OAuth2 and JWT, integrating authentication, access to anime data, and a database managed with Docker.",
        fullDescription:
          "Application developed in Java focused on consuming the official MyAnimeList API and learning authentication flows. Implements OAuth2 and JWT to manage API access, retrieving anime and user-related information. The project uses Java 21, Maven, and Docker, incorporating a database in a container to facilitate application execution and persistence.",
      },
      pianoman: {
        description:
          "Interactive web application simulating a virtual piano allowing note playback via keyboard, mouse, or touch screen, developed with TypeScript, JavaScript, HTML, CSS, and SVG.",
        fullDescription:
          "Interactive web application that simulates a virtual piano directly in the browser. Allows playing notes via physical keyboard, mouse, and touch devices, featuring visual key highlighting and support for various interaction methods. Developed with TypeScript and JavaScript, using HTML, CSS, and SVG for piano representation and interaction.",
      },
    },
  },
  certificates: {
    title: "Certificates",
    credential: "credential / pdf",
    download: "Download PDF",
    filters: {
      all: "All",
      generalitat: "Generalitat",
      microsoft: "Microsoft",
      sapalomera: "Sa Palomera",
    },
    copies: {
      ia: {
        id: "ia",
        title: "Artificial Intelligence",
        issuer: "Generalitat de Catalunya",
        file: "/docs/Generalitat_IA.pdf",
        description:
          "Accreditation from the Generalitat de Catalunya after completing the online course 'Intel·ligència Artificial per a la ciutadania' (8h) in 2026 with a score of 97.50%.",
        filter: "generalitat",
      },
      cybersecurity: {
        id: "cybersecurity",
        title: "Cybersecurity",
        issuer: "Generalitat de Catalunya",
        file: "/docs/Generalitat_Ciberseguretat.pdf",
        description:
          "Accreditation from the Generalitat de Catalunya for completing the online course 'Ciberseguretat bàsica per a la ciutadania' (8h) finished in 2026 with a score of 95.11%.",
        filter: "generalitat",
      },
      specialist: {
        id: "specialist",
        title: "Specialist Title",
        issuer: "Microsoft",
        file: "/docs/Título Especialista.pdf",
        description:
          "Microsoft Office Specialist - Associate certification obtained in May 2023, validating combined and certified proficiency in Excel, PowerPoint, and Word 2019.",
        filter: "microsoft",
      },
      excel: {
        id: "excel",
        title: "Excel",
        issuer: "Microsoft",
        file: "/docs/Título Excel.pdf",
        description:
          "Official Microsoft certificate attesting to skills as a Microsoft Office Specialist in Excel 2019 Associate, issued in May 2023 via Certiport.",
        filter: "microsoft",
      },
      powerpoint: {
        id: "powerpoint",
        title: "PowerPoint",
        issuer: "Microsoft",
        file: "/docs/Título PowerPoint.pdf",
        description:
          "Official Microsoft accreditation as a Microsoft Office Specialist in PowerPoint 2019 Associate, achieved in May 2023 after fulfilling the corresponding requirements.",
        filter: "microsoft",
      },
      word: {
        id: "word",
        title: "Word",
        issuer: "Microsoft",
        file: "/docs/Título Word.pdf",
        description:
          "Official Microsoft certificate recognizing skills as a Microsoft Office Specialist in Word 2019 Associate, successfully completed in May 2023.",
        filter: "microsoft",
      },
      erasmus: {
        id: "erasmus+",
        title: "Erasmus+",
        issuer: "Sa Palomera",
        file: "/docs/Erasmus+.pdf",
        description:
          "Erasmus+ certificate for completing an international internship at LeanKubatore (Italy) between April and May 2024, within the framework of the European Commission program.",
        filter: "sapalomera",
      },
      honorific: {
        id: "honorific",
        title: "Honorable Mention",
        issuer: "Sa Palomera",
        file: "/docs/Menció honorífica.pdf",
        description:
          "Honorable mention awarded in June 2024 by Institut Sa Palomera after standing out with an average grade of 8.24 in the Intermediate Degree in Microcomputer Systems and Networks.",
        filter: "sapalomera",
      },
    },
  },
  contact: {
    title: "Contact",
    role: "Web Developer · AI & Big Data",
    location:
      "Spain · available on-site, hybrid or remote · ericmejiasgamonal@gmail.com",
    slogan: "Open source, direct conversation.",
    availability: "Available to talk",
    availabilityDetail:
      "About web development, product, artificial intelligence, and data.",
    copyEmail: "Email copied",
  },
  footer: { copyright: "TypeScript + React + ESLint + Vite" },
  seo: {
    title: "Eric Mejias Gamonal · Web developer | Eriquito00",
    description:
      "Eric Mejias Gamonal's portfolio (Eriquito00): web development, open-source projects, experience and education in artificial intelligence and Big Data.",
  },
};

export const translations: Record<Language, TranslationDictionary> = {
  es: spanish,
  ca: catalan,
  en: english,
};
