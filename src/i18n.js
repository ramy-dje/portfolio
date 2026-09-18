import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        codeBy: 'Code by Ramy',
        skills: 'Skills',
        projects: 'Projects',
        experience: 'Experience',
        testimonials: 'Testimonials',
        contact: 'Contact',
      },
      hero: {
        name: 'Djebeli Ramy',
        locatedIn: 'Located in',
        location: 'Constantine, Algeria',
        iam: 'I am a',
        softwareEngineer: 'Software Engineer',
      },
      about: {
        intro:
          'Building robust technical solutions for businesses to solve real problems in a digital world by combining engineering and craftsmanship together we will create lasting impact always focused on meaningful results',
      },
      skills: {
        meta: 'Tech Stack',
        metaNumber: '(01)',
        title: 'Skills & Technologies.',
        description:
          'I build high-quality digital solutions using a modern and efficient tech stack.',
        poolTitle: 'My Language Pool.',
        poolDesc:
          'Technologies I use in my day-to-day work — with new tools and skills continuously being added.',
        categories: {
          frontend: 'Frontend development',
          backend: 'Backend development',
          mobile: 'Mobile development',
          other: 'Other skills',
        },
      },
      projects: {
        meta: 'Work',
        title: 'Selected Projects.',
        description:
          'A selection of my recent work, showcasing full-stack solutions built for real products.',
        view: 'View',
      },
      timeline: {
        meta: 'My Journey',
        metaNumber: '(03)',
        title: 'From Vision to Reality.',
        description:
          'A look back at the milestones and partnerships that shaped my path as a developer.',
        experiences: [
          {
            title: 'Full Stack Developer · Big Nova Company',
            location: 'Remote · Full-time',
            period: 'Nov 2025 – Present',
            bullets: [
              'Engineered and maintained production web and mobile systems across 10+ major projects, building reusable components and shared patterns that improved codebase consistency while helping modernize dashboard design and user experience across customer and internal platforms.',
              'Containerized and deployed production services using Docker, Nginx, Linux VPS, and CI/CD.',
              'Refactored authentication and real-time messaging modules, reducing code duplication and strengthening security against common OWASP vulnerabilities.',
            ],
          },
          {
            title: 'Full Stack Developer · Nexo Pizza',
            location: 'Remote · Part-time',
            period: 'Oct 2025 – Jun 2026',
            bullets: [
              'Designed a full-stack stock management system with MERN stack, covering inventory tracking, stock movements, supplier management, and an admin dashboard, fully integrated with the existing POS system.',
              'Engineered a real-time low-stock and expiry alerting pipeline via the Telegram Bot API, replacing a manual, error-prone process with automated notifications.',
              'Managed deployment infrastructure containerized with Docker, configured Nginx as reverse proxy, and built CI/CD pipelines via GitHub Actions.',
            ],
          },
          {
            title: 'Full Stack Developer · Black and Yellow',
            location: 'Remote · Freelance',
            period: 'Jan 2025 – Oct 2025',
            bullets: [
              "Engineered a CMS module for Madar one of Algeria's largest companies featuring a Notion-style rich-text editor built with Tiptap and a custom file manager backed by MinIO for image and asset handling, delivered alongside their full corporate website.",
              'Contributed to a large-scale e-commerce and stock management platform for a pharmaceutical manufacturing and distribution company, supporting large-catalog, multi-item sales and inventory operations across the country.',
              'Developed property management system solutions tailored to the operational needs of Algerian hotel groups, covering dynamic pricing, tax configuration, room and service inventory, and end-to-end workflow automation.',
            ],
          },
          {
            title: 'Full Stack Developer Intern · Evact',
            location: 'Constantine',
            period: 'Jan 2024 – Jun 2024',
            bullets: [
              'Designed and built a cross-platform POS system for mobile and desktop with a client-server architecture and offline-first capabilities. Load-tested critical flows with k6 using up to 7,000 simulated concurrent users, identifying performance bottlenecks before deployment.',
              'Implemented a loyalty management system tracking customer spending, points contributing to improved customer retention and higher average spend.',
            ],
          },
        ],
      },
      testimonials: {
        meta: 'PROOF',
        metaNumber: '(04)',
        title: 'What Companies and Clients Say.',
        description:
          "Feedback from companies, founders, and clients I've worked with—reflecting our shared commitment to building exceptional products.",
        items: [
          {
            name: 'Delimi Nadir',
            role: 'CEO of Evact',
            quote:
              'Rami has been a valuable contributor to our POS system. He quickly adapted to our codebase, delivered good work, and was always easy to communicate with throughout the project.',
          },
          {
            name: 'Rafik Ferhat',
            role: 'CEO of Black and Yellow',
            quote:
              'What I loved most about working with Rami is his energy and intelligence, especially his quick problem-solving skills. He always gives 100% and does his best every time. If I ever get another chance to work with him, I would do it again without hesitation.',
          },
          {
            name: 'Sami Tebibel',
            role: 'CEO of Nexo',
            quote:
              "During our collaboration at Nexo Pizza, Rami showed real commitment, solid coding skills, and a deep understanding of stock management software and SaaS. Proactive and attentive to user experience, he took initiative rather than waiting for direction. He'd be an asset to any product team.",
          },
          {
            name: 'Reda Baka',
            role: 'CEO of BigNova',
            quote:
              'Travailler avec Rami chez BIGNOVA a été un réel plaisir. Rigoureux, fiable et toujours à l\'écoute, il transforme chaque retour en améliorations concrètes. Au-delà de ses compétences techniques, il apporte une vraie dynamique positive et collaborative à l\'équipe.',
          },
        ],
      },
      contact: {
        meta: 'Contact',
        metaNumber: '(05)',
        title: "Let's Work Together.",
        description:
          "Have a project in mind? Let's start working on something great together.",
        contactDetails: 'Contact',
        socials: 'Socials',
        form: {
          nameQuestion: "What's your name?",
          namePlaceholder: 'John Doe *',
          emailQuestion: "What's your email?",
          emailPlaceholder: 'john@doe.com *',
          messageQuestion: "What's your message?",
          messagePlaceholder: 'Tell me how I can help you *',
          send: 'Send',
          thankYou: 'Thank you!',
        },
        errors: {
          nameRequired: 'Name is required',
          emailRequired: 'Email is required',
          invalidEmail: 'Invalid email format',
          messageRequired: 'Message is required',
        },
      },
      projectPage: {
        notFound: 'Project Not Found',
        backToProjects: 'Back to Projects',
        techStack: 'Tech Stack',
        created: 'Created',
        liveSite: 'Live Site',
        nextProject: 'Next Project',
        viewIt: 'View it',
      },
      menu: {
        navigation: 'Navigation',
        socials: 'Socials',
        language: 'Language',
      },
    },
  },
  fr: {
    translation: {
      nav: {
        codeBy: 'Code par Ramy',
        skills: 'Compétences',
        projects: 'Projets',
        experience: 'Expérience',
        testimonials: 'Témoignages',
        contact: 'Contact',
      },
      hero: {
        name: 'Djebeli Ramy',
        locatedIn: 'Situé à',
        location: 'Constantine, Algérie',
        iam: 'Je suis un',
        softwareEngineer: 'Ingénieur Logiciel',
      },
      about: {
        intro:
          'Bâtir des solutions techniques robustes pour aider les entreprises à résoudre de vrais problèmes dans un monde numérique, en alliant ingénierie et artisanat pour créer, ensemble, un impact durable, toujours tourné vers des résultats qui comptent.',
      },
      skills: {
        meta: 'Stack Technique',
        metaNumber: '(01)',
        title: 'Compétences & Technologies.',
        description:
          'Je conçois des solutions numériques de haute qualité grâce à une stack technique moderne et performante.',
        poolTitle: 'Mon Écosystème.',
        poolDesc:
          'Technologies que j’utilise au quotidien — avec de nouveaux outils et compétences continuellement intégrés.',
        categories: {
          frontend: 'Développement Frontend',
          backend: 'Développement Backend',
          mobile: 'Développement Mobile',
          other: 'Autres compétences',
        },
      },
      projects: {
        meta: 'Projets',
        title: 'Projets Sélectionnés.',
        description:
          'Une sélection de mes réalisations récentes, illustrant des solutions full-stack créées pour de vrais produits.',
        view: 'Voir',
      },
      timeline: {
        meta: 'Mon Parcours',
        metaNumber: '(03)',
        title: 'De la Vision à la Réalité.',
        description:
          'Un aperçu des étapes clés et partenariats qui ont façonné mon évolution en tant que développeur.',
        experiences: [
          {
            title: 'Développeur Full Stack · Big Nova Company',
            location: 'À distance · Temps plein',
            period: 'Nov 2025 – Présent',
            bullets: [
              'Conception et maintenance de systèmes web et mobiles en production sur plus de 10 projets majeurs, avec des composants réutilisables améliorant la cohérence du code et l’expérience utilisateur.',
              'Conteneurisation et déploiement de services en production avec Docker, Nginx, VPS Linux et CI/CD.',
              'Refactorisation des modules d’authentification et de messagerie en temps réel, renforçant la sécurité contre les failles OWASP.',
            ],
          },
          {
            title: 'Développeur Full Stack · Nexo Pizza',
            location: 'À distance · Temps partiel',
            period: 'Oct 2025 – Juin 2026',
            bullets: [
              'Conception d’un système complet de gestion des stocks avec la stack MERN : inventaire, mouvements, gestion fournisseurs et dashboard admin connecté au POS.',
              'Développement d’un pipeline d’alertes automatisées de stock bas et péremption via l’API Telegram Bot.',
              'Infrastructure conteneurisée avec Docker, configuration de Nginx en reverse proxy et CI/CD via GitHub Actions.',
            ],
          },
          {
            title: 'Développeur Full Stack · Black and Yellow',
            location: 'À distance · Freelance',
            period: 'Jan 2025 – Oct 2025',
            bullets: [
              'Développement d’un module CMS pour Madar avec éditeur rich-text Tiptap style Notion et gestionnaire de fichiers MinIO pour le site corporate.',
              'Contribution à une plateforme e-commerce et gestion de stocks à grande échelle pour une société de distribution pharmaceutique nationale.',
              'Développement de solutions PMS hôtelières adaptées aux groupes algériens (tarification dynamique, taxes, inventaire et automatisation).',
            ],
          },
          {
            title: 'Stagiaire Développeur Full Stack · Evact',
            location: 'Constantine',
            period: 'Jan 2024 – Juin 2024',
            bullets: [
              'Conception et développement d’un système POS multiplateforme (mobile et desktop) avec capacités offline-first et tests de charge k6 jusqu’à 7 000 utilisateurs simultanés.',
              'Mise en place d’un système de fidélité récompensant les dépenses clients pour stimuler la rétention et le panier moyen.',
            ],
          },
        ],
      },
      testimonials: {
        meta: 'RECOMMANDATIONS',
        metaNumber: '(04)',
        title: 'Ce que disent Entreprises et Clients.',
        description:
          'Retours d’entreprises, fondateurs et clients avec qui j’ai collaboré — témoignant de notre engagement commun vers l’excellence.',
        items: [
          {
            name: 'Delimi Nadir',
            role: 'CEO de Evact',
            quote:
              'Rami a été un contributeur précieux pour notre système POS. Il s’est rapidement adapté à notre base de code, a fourni un excellent travail et la communication a toujours été fluide.',
          },
          {
            name: 'Rafik Ferhat',
            role: 'CEO de Black and Yellow',
            quote:
              'Ce que j’ai le plus apprécié chez Rami, c’est son énergie, son intelligence et sa rapidité à résoudre les problèmes. Il se donne toujours à 100%. Si l’occasion se représente, je retravaillerais avec lui sans hésiter.',
          },
          {
            name: 'Sami Tebibel',
            role: 'CEO de Nexo',
            quote:
              'Pendant notre collaboration chez Nexo Pizza, Rami a fait preuve d’un réel engagement, de solides compétences techniques et d’une fine compréhension du SaaS et des stocks. Proactif et axé utilisateur, c’est un atout pour toute équipe produit.',
          },
          {
            name: 'Reda Baka',
            role: 'CEO de BigNova',
            quote:
              'Travailler avec Rami chez BIGNOVA a été un réel plaisir. Rigoureux, fiable et toujours à l\'écoute, il transforme chaque retour en améliorations concrètes. Au-delà de ses compétences techniques, il apporte une vraie dynamique positive et collaborative à l\'équipe.',
          },
        ],
      },
      contact: {
        meta: 'Contact',
        metaNumber: '(05)',
        title: 'Travaillons Ensemble.',
        description:
          'Vous avez un projet en tête ? Créons quelque chose d’exceptionnel ensemble.',
        contactDetails: 'Contact',
        socials: 'Réseaux',
        form: {
          nameQuestion: 'Quel est votre nom ?',
          namePlaceholder: 'Jean Dupont *',
          emailQuestion: 'Quel est votre email ?',
          emailPlaceholder: 'jean@dupont.com *',
          messageQuestion: 'Quel est votre message ?',
          messagePlaceholder: 'Dites-moi comment je peux vous aider *',
          send: 'Envoyer',
          thankYou: 'Merci !',
        },
        errors: {
          nameRequired: 'Le nom est requis',
          emailRequired: 'L’email est requis',
          invalidEmail: 'Format d’email invalide',
          messageRequired: 'Le message est requis',
        },
      },
      projectPage: {
        notFound: 'Projet non trouvé',
        backToProjects: 'Retour aux projets',
        techStack: 'Stack Technique',
        created: 'Date de création',
        liveSite: 'Site en direct',
        nextProject: 'Projet Suivant',
        viewIt: 'Découvrir',
      },
      menu: {
        navigation: 'Navigation',
        socials: 'Réseaux',
        language: 'Langue',
      },
    },
  },
  ar: {
    translation: {
      nav: {
        codeBy: 'برمجة رامي',
        skills: 'المهارات',
        projects: 'المشاريع',
        experience: 'الخبرات',
        testimonials: 'الآراء والشهادات',
        contact: 'تواصل معي',
      },
      hero: {
        name: 'جبلي رامي',
        locatedIn: 'الموقع',
        location: 'قسنطينة، الجزائر',
        iam: 'أنا',
        softwareEngineer: 'مهندس برمجيات',
      },
      about: {
        intro:
          'بناء حلول برمجية متقدمة وقوية للشركات لحل مشاكل حقيقية في العالم الرقمي من خلال الجمع بين الهندسة الدقيقة والحرفية البرمجية لتحقيق أثر ملموس ونتائج دائمة',
      },
      skills: {
        meta: 'التقنيات',
        metaNumber: '(01)',
        title: 'المهارات والتقنيات.',
        description:
          'أقوم ببناء حلول رقمية عالية الجودة باستخدام أحدث التقنيات وأكثرها كفاءة.',
        poolTitle: 'منظومة التقنيات.',
        poolDesc:
          'التقنيات والأدوات التي أستخدمها يومياً في العمل مع إضافة مستمرة للمهارات الحديثة.',
        categories: {
          frontend: 'تطوير الواجهات (Frontend)',
          backend: 'الأنظمة الخلفية (Backend)',
          mobile: 'تطبيقات الهاتف (Mobile)',
          other: 'مهارات وأدوات أخرى',
        },
      },
      projects: {
        meta: 'الأعمال',
        title: 'أبرز المشاريع.',
        description:
          'مجموعة مختارة من أعمالي الأخيرة توضح حلول برمجية شاملة تم بناؤها لمنتجات حقيقية.',
        view: 'عرض',
      },
      timeline: {
        meta: 'مسيرتي المهنية',
        metaNumber: '(03)',
        title: 'من الرؤية إلى الواقع.',
        description:
          'نظرة على المحطات والتعاونات التي شكلت مسيرتي المهنية كمطور برمجيات.',
        experiences: [
          {
            title: 'مطور برمجيات شامل (Full Stack) · شركة Big Nova',
            location: 'عن بُعد · دوام كامل',
            period: 'نوفمبر 2025 – الحالي',
            bullets: [
              'تطوير وصيانة أنظمة الويب والهاتف في بيئات الإنتاج لأكثر من 10 مشاريع كبرى، وبناء مكونات قابلة لإعادة الاستخدام ساهمت في تحديث لوحات التحكم وتجربة المستخدم.',
              'حزم ونشر الخدمات الإنتاجية باستخدام Docker وNginx وLinux VPS وخطوط الأتمتة CI/CD.',
              'إعادة هيكلة وحدات المصادقة والمراسلة الفورية لتقليل التكرار وتعزيز الحماية ضد ثغرات OWASP الأمنية.',
            ],
          },
          {
            title: 'مطور برمجيات شامل (Full Stack) · Nexo Pizza',
            location: 'عن بُعد · دوام جزئي',
            period: 'أكتوبر 2025 – جوان 2026',
            bullets: [
              'تصميم وتطوير نظام متكامل لإدارة المخزون بتقنيات MERN يشمل تتبع البضائع والموردين ولوحة تحكم متصلة بنظام نقاط البيع POS.',
              'هندسة خط إشعارات فورية لتنبيهات نقص المخزون وانتهاء الصلاحية عبر بوت تيليجرام بدلاً من العمليات اليدوية.',
              'إدارة البنية التحتية باستخدام Docker وإعداد Nginx كخادم وسيط وأتمتة النشر عبر GitHub Actions.',
            ],
          },
          {
            title: 'مطور برمجيات شامل (Full Stack) · Black and Yellow',
            location: 'عن بُعد · عمل حر (Freelance)',
            period: 'جانفي 2025 – أكتوبر 2025',
            bullets: [
              'تطوير نظام إدارة محتوى (CMS) لشركة مدار (Madar) مع محرر نصوص متقدم Tiptap ونظام إدارة ملفات مدعوم بـ MinIO لموقعهم المؤسسي.',
              'المساهمة في منصة تجارة إلكترونية وإدارة مخزون واسعة النطاق لشركة توزيع أدوية تغطي عمليات البيع عبر الوطن.',
              'تطوير حلول إدارة الفنادق (PMS) لمجموعات فندقية جزائرية تشمل التسعير الديناميكي وإدارة الغرف والأتمتة.',
            ],
          },
          {
            title: 'متدرب مطور برمجيات · Evact',
            location: 'قسنطينة',
            period: 'جانفي 2024 – جوان 2024',
            bullets: [
              'تصميم وبناء نظام نقاط بيع POS متعدد المنصات للهاتف وسطح المكتب مع دعم العمل بدون إنترنت واختبار الأداء حتى 7000 مستخدم متزامن عبر k6.',
              'تنفيذ نظام ولاء ومكافآت لتتبع إنفاق العملاء وزيادة نسبة الاحتفاظ بهم ومعدل المبيعات.',
            ],
          },
        ],
      },
      testimonials: {
        meta: 'شهادات العملاء',
        metaNumber: '(04)',
        title: 'ما تقوله الشركات والعملاء.',
        description:
          'آراء وشهادات حقيقية من مدراء ومؤسسي الشركات التي عملت معها تعكس التزامنا المشترك بالتميز.',
        items: [
          {
            name: 'دليمي نذير',
            role: 'الرئيس التنفيذي لـ Evact',
            quote:
              'كان رامي مساهماً قيماً في نظام نقاط البيع لدينا. تأقلم بسرعة مع الكود وقدم عملاً ممتازاً وكان التواصل معه سلساً طوال المشروع.',
          },
          {
            name: 'رفيق فرحات',
            role: 'الرئيس التنفيذي لـ Black and Yellow',
            quote:
              'أكثر ما أحببته في العمل مع رامي هو طاقته وذكاؤه، خاصة سرعته في حل المشكلات. يقدم دائماً 100% من جهده، وسأعمل معه مجدداً دون أي تردد.',
          },
          {
            name: 'سامي طبيبل',
            role: 'الرئيس التنفيذي لـ Nexo',
            quote:
              'خلال تعاوننا في Nexo Pizza، أظهر رامي التزاماً كبيراً ومهارات برمجية قوية وفهماً عميقاً لأنظمة المخزون وSaaS. مبادر ومهتم بتجربة المستخدم وسيكون إضافة قيمة لأي فريق منتج.',
          },
          {
            name: 'رضا باكة',
            role: 'الرئيس التنفيذي لـ BigNova',
            quote:
              'العمل مع رامي في BIGNOVA كان تجربة رائعة جداً. يتمتع باحترافية عالية، دقيق وموثوق ودائم الاستماع للآراء لتحويلها إلى تحسينات ملموسة، ويضفي روحاً إيجابية متعاونة على الفريق.',
          },
        ],
      },
      contact: {
        meta: 'تواصل معي',
        metaNumber: '(05)',
        title: 'فلنعمل معاً.',
        description:
          'هل لديك مشروع في ذهنك؟ دعنا نبدأ العمل معاً على شيء مميز واستثنائي.',
        contactDetails: 'معلومات الاتصال',
        socials: 'حسابات التواصل',
        form: {
          nameQuestion: 'ما هو اسمك؟',
          namePlaceholder: 'محمد أحمد *',
          emailQuestion: 'ما هو بريدك الإلكتروني؟',
          emailPlaceholder: 'mohamed@example.com *',
          messageQuestion: 'ما هي رسالتك؟',
          messagePlaceholder: 'أخبرني كيف يمكنني مساعدتك *',
          send: 'إرسال',
          thankYou: 'شكراً لك!',
        },
        errors: {
          nameRequired: 'الاسم مطلوب',
          emailRequired: 'البريد الإلكتروني مطلوب',
          invalidEmail: 'صيغة البريد الإلكتروني غير صحيحة',
          messageRequired: 'نص الرسالة مطلوب',
        },
      },
      projectPage: {
        notFound: 'المشروع غير موجود',
        backToProjects: 'العودة إلى المشاريع',
        techStack: 'التقنيات المستخدمة',
        created: 'تاريخ الإنشاء',
        liveSite: 'زيارة الموقع',
        nextProject: 'المشروع التالي',
        viewIt: 'عرض المشروع',
      },
      menu: {
        navigation: 'القائمة',
        socials: 'التواصل',
        language: 'اللغة',
      },
    },
  },
};

const savedLanguage = localStorage.getItem('portfolio_lang') || 'fr';

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
});

// Update document direction on language change
const setDocumentDir = (lang) => {
  const isRTL = lang === 'ar';
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  if (isRTL) {
    document.documentElement.classList.add('rtl');
  } else {
    document.documentElement.classList.remove('rtl');
  }
};

setDocumentDir(savedLanguage);

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('portfolio_lang', lng);
  setDocumentDir(lng);
});

export default i18n;
