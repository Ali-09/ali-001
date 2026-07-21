export type Language = 'en' | 'es';

export interface Translations {
  header: {
    sysRef: string;
    lightTheme: string;
    darkTheme: string;
  };
  sideNav: {
    navSys: string;
    me: string;
    about: string;
    contact: string;
    scale: string;
    system: string;
  };
  mainTitle: {
    fig01: string;
    role: string;
    exploreBtn: string;
    contactBtn: string;
  };
  screenCode: {
    comment: string;
    roleValue: string;
  };
  about: {
    fig02: string;
    title: string;
    bio: string;
    downloadCv: string;
  };
  contact: {
    fig03: string;
    title: string;
    inputEmail: string;
    required: string;
    placeholder: string;
    sendBtn: string;
    sendingBtn: string;
    orDownload: string;
    downloadCv: string;
    disclaimer: string;
    successMsg: string;
    errorEmailMsg: string;
  };
  footer: {
    engId: string;
    role: string;
    systemStatus: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    header: {
      sysRef: "SYS.REF: CAD-001",
      lightTheme: "☀️ LIGHT",
      darkTheme: "🌙 DARK",
    },
    sideNav: {
      navSys: "SHEETS // NAV.SYS",
      me: "ME",
      about: "ABOUT",
      contact: "CONTACT",
      scale: "SCALE:",
      system: "SYSTEM:",
    },
    mainTitle: {
      fig01: "FIG 01 // MAIN_VIEW — POS:",
      role: "Senior Front End Developer",
      exploreBtn: "EXPLORE SYSTEM →",
      contactBtn: "GET IN TOUCH",
    },
    screenCode: {
      comment: "// CAD Blueprint Systems Engine",
      roleValue: "'Senior Front End Developer'",
    },
    about: {
      fig02: "[FIG 02 // PROFILE_SPECIFICATIONS]",
      title: "ABOUT",
      bio: "Hi, I'm Jesus. I'm an information technology engineer with more than 6 years of experience in frontend development, building high-performance web applications with Angular, React, and Vue.",
      downloadCv: "DOWNLOAD CV (PDF)",
    },
    contact: {
      fig03: "[FIG 03 // COMMUNICATION_LINK]",
      title: "CONTACT",
      inputEmail: "[INPUT // EMAIL_ADDRESS]",
      required: "*REQUIRED",
      placeholder: "name@example.com",
      sendBtn: "SEND MESSAGE →",
      sendingBtn: "SENDING...",
      orDownload: "Or download it directly here:",
      downloadCv: "DOWNLOAD CV (PDF)",
      disclaimer: "The information provided is strictly used to email you the requested PDF document.",
      successMsg: "CV sent successfully! Please check your inbox.",
      errorEmailMsg: "Please enter a valid email address.",
    },
    footer: {
      engId: "ENG.ID: JESUS ALI",
      role: "ROLE: SENIOR FRONTEND DEVELOPER",
      systemStatus: "SYSTEM STATUS: ONLINE [NOMINAL]",
    },
  },
  es: {
    header: {
      sysRef: "SYS.REF: CAD-001",
      lightTheme: "☀️ CLARO",
      darkTheme: "🌙 OSCURO",
    },
    sideNav: {
      navSys: "HOJAS // NAV.SYS",
      me: "INICIO",
      about: "SOBRE MÍ",
      contact: "CONTACTO",
      scale: "ESCALA:",
      system: "SISTEMA:",
    },
    mainTitle: {
      fig01: "FIG 01 // VISTA_PRINCIPAL — POS:",
      role: "Desarrollador Front End Senior",
      exploreBtn: "EXPLORAR SISTEMA →",
      contactBtn: "CONTACTARME",
    },
    screenCode: {
      comment: "// Motor de Sistemas de Plano CAD",
      roleValue: "'Desarrollador Front End Senior'",
    },
    about: {
      fig02: "[FIG 02 // ESPECIFICACIONES_DE_PERFIL]",
      title: "SOBRE MÍ",
      bio: "Hola, soy Jesús. Soy ingeniero en tecnologías de la información con más de 6 años de experiencia en desarrollo frontend, construyendo aplicaciones web de alto rendimiento con Angular, React y Vue.",
      downloadCv: "DESCARGAR CV (PDF)",
    },
    contact: {
      fig03: "[FIG 03 // ENLACE_DE_COMUNICACIÓN]",
      title: "CONTACTO",
      inputEmail: "[ENTRADA // CORREO_ELECTRÓNICO]",
      required: "*REQUERIDO",
      placeholder: "nombre@ejemplo.com",
      sendBtn: "ENVIAR MENSAJE →",
      sendingBtn: "ENVIANDO...",
      orDownload: "O descárgalo directamente aquí:",
      downloadCv: "DESCARGAR CV (PDF)",
      disclaimer: "La información proporcionada se utiliza únicamente para enviarte el documento PDF por correo electrónico.",
      successMsg: "¡CV enviado con éxito! Revisa tu bandeja de entrada.",
      errorEmailMsg: "Por favor ingresa un correo electrónico válido.",
    },
    footer: {
      engId: "ING.ID: JESUS ALI",
      role: "ROL: DESARROLLADOR FRONTEND SENIOR",
      systemStatus: "ESTADO DEL SISTEMA: EN LÍNEA [NOMINAL]",
    },
  },
};
