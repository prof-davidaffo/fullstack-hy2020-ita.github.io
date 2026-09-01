const COURSE_NAME = 'Full Stack JavaScript';
const REPOSITORY_URL = 'https://github.com/prof-davidaffo/fullstackopen-ita';
const SITE_URL = 'https://prof-davidaffo.github.io/fullstackopen-ita';

const partNames = {
  fi: [
    'Web-sovellusten toiminnan perusteet',
    'Reactin perusteet',
    'Palvelimen kanssa tapahtuva kommunikointi',
    'Palvelimen ohjelmointi Node.js:llä ja Expressillä',
    'Express-sovellusten testaaminen ja käyttäjänhallinta',
    'React-sovellusten testaaminen ja React Router',
    'Edistynyt tilanhallinta',
    'Custom hookit ja build-työkalut',
    'GraphQL',
    'TypeScript',
    'React Native',
    'CI/CD',
    'Kontit',
    'Relaatiotietokannat',
    'Next.js',
  ],
  en: [
    'Fundamentals of web applications',
    'Introduction to React',
    'Communicating with the server',
    'Programming a server with Node.js and Express',
    'Testing Express servers and user administration',
    'Testing React applications and React Router',
    'Advanced state management',
    'Custom hooks and build tooling',
    'GraphQL',
    'TypeScript',
    'React Native',
    'CI/CD',
    'Containers',
    'Relational databases',
    'Next.js',
  ],
  es: [
    'Fundamentos de las aplicaciones web',
    'Introducción a React',
    'Comunicación con el servidor',
    'Programación de un servidor con Node.js y Express',
    'Pruebas de servidores Express y administración de usuarios',
    'Pruebas de aplicaciones React y React Router',
    'Gestión avanzada del estado',
    'Hooks personalizados y herramientas de compilación',
    'GraphQL',
    'TypeScript',
    'React Native',
    'CI/CD',
    'Contenedores',
    'Bases de datos relacionales',
    'Next.js',
  ],
  zh: [
    'Web 应用基础',
    'React 入门',
    '与服务器通信',
    '使用 Node.js 和 Express 编写服务器',
    'Express 测试与用户管理',
    'React 测试与 React Router',
    '高级状态管理',
    '自定义 Hook 与构建工具',
    'GraphQL',
    'TypeScript',
    'React Native',
    'CI/CD',
    '容器',
    '关系型数据库',
    'Next.js',
  ],
  fr: [
    'Fondamentaux des applications web',
    'Introduction à React',
    'Communication avec le serveur',
    'Programmation serveur avec Node.js et Express',
    'Tests Express et gestion des utilisateurs',
    'Tests React et React Router',
    "Gestion avancée de l'état",
    'Hooks personnalisés et outils de build',
    'GraphQL',
    'TypeScript',
    'React Native',
    'CI/CD',
    'Conteneurs',
    'Bases de données relationnelles',
    'Next.js',
  ],
  ptbr: [
    'Fundamentos de aplicações web',
    'Introdução ao React',
    'Comunicação com o servidor',
    'Programando um servidor com Node.js e Express',
    'Testes de Express e administração de usuários',
    'Testes de React e React Router',
    'Gerenciamento avançado de estado',
    'Hooks personalizados e ferramentas de build',
    'GraphQL',
    'TypeScript',
    'React Native',
    'CI/CD',
    'Contêineres',
    'Bancos de dados relacionais',
    'Next.js',
  ],
};

const sectionCopy = {
  en: {
    core: {
      title: 'Core course',
      description:
        'The required path. Follow these parts in order to build a complete React, Node.js, Express, and MongoDB application.',
    },
    advanced: {
      title: 'Advanced topics',
      description:
        'Optional material for strengthening React architecture, state management, hooks, tooling, and application structure.',
    },
    specializations: {
      title: 'Specializations',
      description:
        'Independent follow-up modules. Choose them according to the project and the time available; they are not required for the core course.',
    },
  },
  fi: {
    core: {
      title: 'Peruskurssi',
      description:
        'Pakollinen oppimispolku. Etene järjestyksessä ja rakenna kokonainen React-, Node.js-, Express- ja MongoDB-sovellus.',
    },
    advanced: {
      title: 'Syventävät aiheet',
      description:
        'Valinnaista materiaalia React-arkkitehtuurista, tilanhallinnasta, hookeista, työkaluista ja sovelluksen rakenteesta.',
    },
    specializations: {
      title: 'Erikoistumismoduulit',
      description:
        'Itsenäisiä jatkomoduuleja. Valitse ne projektin ja käytettävissä olevan ajan mukaan.',
    },
  },
  es: {
    core: {
      title: 'Curso obligatorio',
      description:
        'El itinerario principal. Sigue estas partes en orden para construir una aplicación completa con React, Node.js, Express y MongoDB.',
    },
    advanced: {
      title: 'Profundización',
      description:
        'Material opcional sobre arquitectura React, estado, hooks, herramientas y organización de aplicaciones.',
    },
    specializations: {
      title: 'Especializaciones',
      description:
        'Módulos posteriores independientes que se eligen según el proyecto y el tiempo disponible.',
    },
  },
  fr: {
    core: {
      title: 'Cours obligatoire',
      description:
        "Le parcours principal. Suivez ces parties dans l'ordre pour construire une application complète avec React, Node.js, Express et MongoDB.",
    },
    advanced: {
      title: 'Approfondissements',
      description:
        "Contenu facultatif sur l'architecture React, l'état, les hooks, les outils et l'organisation des applications.",
    },
    specializations: {
      title: 'Spécialisations',
      description:
        'Modules de suivi indépendants à choisir selon le projet et le temps disponible.',
    },
  },
  ptbr: {
    core: {
      title: 'Curso obrigatório',
      description:
        'O percurso principal. Siga estas partes em ordem para criar uma aplicação completa com React, Node.js, Express e MongoDB.',
    },
    advanced: {
      title: 'Aprofundamentos',
      description:
        'Material opcional sobre arquitetura React, estado, hooks, ferramentas e organização de aplicações.',
    },
    specializations: {
      title: 'Especializações',
      description:
        'Módulos independentes para escolher de acordo com o projeto e o tempo disponível.',
    },
  },
  zh: {
    core: {
      title: '必修课程',
      description:
        '按顺序学习这些内容，构建一个完整的 React、Node.js、Express 和 MongoDB 应用。',
    },
    advanced: {
      title: '进阶主题',
      description: '关于 React 架构、状态管理、Hook、工具和应用组织的选修内容。',
    },
    specializations: {
      title: '专项模块',
      description: '根据项目需要和可用时间选择的独立后续模块。',
    },
  },
};

const curriculum = [
  { id: 'core', parts: [0, 1, 2, 3, 4, 5] },
  { id: 'advanced', parts: [6, 7] },
  { id: 'specializations', parts: [8, 9, 10, 11, 12, 13, 14] },
];

const hiddenContent = {
  0: ['a'],
};

const getPartNames = (lang) => partNames[lang] || partNames.en;
const getSectionCopy = (lang) => sectionCopy[lang] || sectionCopy.en;
const isContentVisible = (part, letter) =>
  !(hiddenContent[part] || []).includes(letter);

module.exports = {
  COURSE_NAME,
  REPOSITORY_URL,
  SITE_URL,
  curriculum,
  getPartNames,
  getSectionCopy,
  isContentVisible,
};
