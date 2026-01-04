export const languages = {
  en: 'English',
  pt: 'Português',
} as const;

export type Locale = keyof typeof languages;
export const defaultLocale: Locale = 'en';

export const translations = {
  en: {
    // Navigation
    nav: {
      blog: 'BLOG',
      github: 'GITHUB',
      online: 'ONLINE',
      fileNo: 'FILE NO. 001',
      department: 'DEPT: DEVELOPMENT',
    },
    
    // Hero section
    hero: {
      role: 'Software Engineer',
    },
    
    // Sections
    sections: {
      about: {
        number: '01',
        title: 'ABOUT',
        content: [
          `I'm focused on making <strong>Brazil a protagonist in technology</strong>. My goal is to build a company that gains relevance and makes a real difference in people's lives — helping to grow the tech ecosystem in my country.`,
          `I believe technology has the power to <strong>bring people together</strong> and shape the future. That's what drives me every day: connecting people, solving real problems, and building something meaningful.`,
          `This is what I am actually doing at <a href="https://www.decocms.com/" target="_blank">Deco</a>, with incredible people by my side and a great product.`,
        ],
      },
      blog: {
        number: '02',
        title: 'BLOG ENTRIES',
        viewAll: 'VIEW ALL →',
        entry: 'ENTRY',
        minRead: 'MIN READ',
        open: '▶ OPEN',
      },
    },
    
    // Blog page
    blogPage: {
      archive: 'ARCHIVE',
      entries: 'ENTRIES',
      title: 'BLOG ENTRIES',
      description: 'My thoughts on life and technology.',
      chronological: 'CHRONOLOGICAL ORDER',
      entry: 'ENTRY',
      attachment: 'ATTACHMENT',
      minRead: 'MIN READ',
      openFile: '▶ OPEN FILE',
      noEntries: 'NO ENTRIES FOUND',
      emptyArchive: 'Archive is currently empty.',
    },
    
    // Footer
    footer: {
      endOfFile: 'END OF FILE',
      allRights: 'ALL RIGHTS RESERVED',
      external: 'EXT.',
      message: 'MSG.',
      sessionActive: '> SESSION ACTIVE_',
    },
  },
  
  pt: {
    // Navigation
    nav: {
      blog: 'BLOG',
      github: 'GITHUB',
      online: 'ONLINE',
      fileNo: 'ARQ. NO. 001',
      department: 'DEPT: DESENVOLVIMENTO',
    },
    
    // Hero section
    hero: {
      role: 'Engenheiro de Software',
    },
    
    // Sections
    sections: {
      about: {
        number: '01',
        title: 'SOBRE',
        content: [
          `Meu foco é tornar o <strong>Brasil protagonista em tecnologia</strong>. Meu objetivo é construir uma empresa que ganhe relevância e faça diferença real na vida das pessoas — ajudando a crescer o ecossistema tech no meu país.`,
          `Acredito que a tecnologia tem o poder de <strong>conectar pessoas</strong> e moldar o futuro. É isso que me move todos os dias: conectar pessoas, resolver problemas reais e construir algo significativo.`,
          `É isso que estou fazendo atualmente na <a href="https://www.decocms.com/" target="_blank">Deco</a>, com pessoas incríveis ao meu lado e um ótimo produto.`,
        ],
      },
      blog: {
        number: '02',
        title: 'PUBLICAÇÕES',
        viewAll: 'VER TODAS →',
        entry: 'ENTRADA',
        minRead: 'MIN LEITURA',
        open: '▶ ABRIR',
      },
    },
    
    // Blog page
    blogPage: {
      archive: 'ARQUIVO',
      entries: 'ENTRADAS',
      title: 'PUBLICAÇÕES',
      description: 'Meus pensamentos sobre a vida e tecnologia.',
      chronological: 'ORDEM CRONOLÓGICA',
      entry: 'ENTRADA',
      attachment: 'ANEXO',
      minRead: 'MIN LEITURA',
      openFile: '▶ ABRIR ARQUIVO',
      noEntries: 'NENHUMA ENTRADA ENCONTRADA',
      emptyArchive: 'O arquivo está vazio no momento.',
    },
    
    // Footer
    footer: {
      endOfFile: 'FIM DO ARQUIVO',
      allRights: 'TODOS OS DIREITOS RESERVADOS',
      external: 'EXT.',
      message: 'MSG.',
      sessionActive: '> SESSÃO ATIVA_',
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

