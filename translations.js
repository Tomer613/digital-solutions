// translations.js

// Dictionary containing all the texts in 4 languages
const translations = {
    he: {
        dir: "rtl",
        siteTitle: "smart. - פתרונות דיגיטליים יצירתיים",
        heroMainTitle: "פתרונות טכנולוגיים מתקדמים",
        heroSubtitle: "פיתוח מערכות, עיצוב חווית משתמש, והפיכת רעיונות למציאות דיגיטלית חכמה.",
        btnStart: "בואו נתחיל",
        servicesTitle: "תחומי השירות שלנו",
        formName: "שם מלא",
        formEmail: "אימייל",
        formMessage: "איך נוכל לעזור?",
        btnSubmit: "שליחה",

        // Services translation
        srv1Title: "תוכן, ספרות<br>והוצאה לאור",
        srv1Desc: "חילוץ טקסט מספרים &bull; המרת פורמטים &bull; עימוד והכנה לדפוס דיגיטלי",
        srv2Title: "מיתוג, גרפיקה<br>וחוויה ויזואלית",
        srv2Desc: "עיצוב לוגו &bull; כרטיסי ביקור &bull; הזמנות מעוצבות &bull; מצגות עסקיות &bull; שפה עיצובית",
        srv3Title: "וידאו, סאונד<br>ומולטימדיה",
        srv3Desc: "ג׳ינגלים לעסק &bull; עריכת סרטוני תמונות &bull; עריכת וידאו לאירועי התרמה &bull; שילוב אווטאר בלומדות",
        srv4Title: "נוכחות דיגיטלית<br>ופיתוח",
        srv4Desc: "בניית דפי נחיתה &bull; פיתוח אתרים &bull; עיצוב ממשקים &bull; התאמה מושלמת למובייל",
        srv5Title: "דאטה, גרפים<br>וניתוח עסקי",
        srv5Desc: "ניתוח נתונים מעמיק &bull; בניית דשבורדים &bull; חיבור העסק למערכות BI &bull; הפקת דוחות חכמים",

        // Accessibility
        a11yTitle: "הגדרות נגישות",
        a11yContrast: "ניגודיות גבוהה",
        a11yLinks: "הדגשת קישורים",
        a11yIncreaseText: "הגדלת טקסט +",
        a11yDecreaseText: "הקטנת טקסט -"
    },
    en: {
        dir: "ltr",
        siteTitle: "smart. - Creative Digital Solutions",
        heroMainTitle: "Advanced Technological Solutions",
        heroSubtitle: "System development, UX design, and turning ideas into a smart digital reality.",
        btnStart: "Let's Get Started",
        servicesTitle: "Our Services",
        formName: "Full Name",
        formEmail: "Email",
        formMessage: "How can we help?",
        btnSubmit: "Send",

        // Services translation
        srv1Title: "Content, Literature<br>& Publishing",
        srv1Desc: "Extracting text from books &bull; Format conversion &bull; Typesetting and prepress",
        srv2Title: "Branding, Graphics<br>& Visual Experience",
        srv2Desc: "Logo design &bull; Business cards &bull; Custom invitations &bull; Business presentations &bull; Brand identity",
        srv3Title: "Video, Sound<br>& Multimedia",
        srv3Desc: "Business jingles &bull; Photo slideshow editing &bull; Video editing for fundraisers &bull; Avatar integration in e-learning",
        srv4Title: "Digital Presence<br>& Development",
        srv4Desc: "Landing page creation &bull; Web development &bull; UI/UX design &bull; Perfect mobile adaptation",
        srv5Title: "Data, Graphs<br>& Business Analysis",
        srv5Desc: "In-depth data analysis &bull; Dashboard building &bull; Connecting business to BI systems &bull; Smart report generation",

        // Accessibility
        a11yTitle: "Accessibility Options",
        a11yContrast: "High Contrast",
        a11yLinks: "Highlight Links",
        a11yIncreaseText: "Increase Text +",
        a11yDecreaseText: "Decrease Text -"
    },
    fr: {
        dir: "ltr",
        siteTitle: "smart. - Solutions Numériques Créatives",
        heroMainTitle: "Solutions Technologiques Avancées",
        heroSubtitle: "Développement de systèmes, conception UX, et transformation d'idées en réalité numérique intelligente.",
        btnStart: "Commençons",
        servicesTitle: "Nos Services",
        formName: "Nom Complet",
        formEmail: "E-mail",
        formMessage: "Comment pouvons-nous aider?",
        btnSubmit: "Envoyer",

        // Services translation
        srv1Title: "Contenu, Littérature<br>& Édition",
        srv1Desc: "Extraction de texte de livres &bull; Conversion de format &bull; Mise en page et prépresse",
        srv2Title: "Image de marque, Graphisme<br>& Expérience Visuelle",
        srv2Desc: "Création de logo &bull; Cartes de visite &bull; Invitations personnalisées &bull; Présentations commerciales &bull; Identité visuelle",
        srv3Title: "Vidéo, Son<br>& Multimédia",
        srv3Desc: "Jingles d'entreprise &bull; Montage de diaporamas photo &bull; Montage vidéo pour collectes de fonds &bull; Intégration d'avatars dans l'e-learning",
        srv4Title: "Présence Numérique<br>& Développement",
        srv4Desc: "Création de landing pages &bull; Développement web &bull; Conception d'interfaces &bull; Adaptation mobile parfaite",
        srv5Title: "Données, Graphiques<br>& Analyse Commerciale",
        srv5Desc: "Analyse approfondie des données &bull; Création de tableaux de bord &bull; Connexion de l'entreprise aux systèmes BI &bull; Génération de rapports intelligents",

        // Accessibility
        a11yTitle: "Options d'Accessibilité",
        a11yContrast: "Contraste Élevé",
        a11yLinks: "Mettre en Évidence les Liens",
        a11yIncreaseText: "Agrandir le Texte +",
        a11yDecreaseText: "Réduire le Texte -"
    },
    yi: {
        dir: "rtl",
        siteTitle: "smart. - שעפערישע דיגיטאלע לייזונגען",
        heroMainTitle: "פארגעשריטענע טעכנאלאגישע לייזונגען",
        heroSubtitle: "אנטוויקלונג פון סיסטעמען, באנוצער דערפארונג, און פארוואנדלען אידייען אין א קלוגע דיגיטאלע רעאליטעט.",
        btnStart: "לאמיר אנהייבן",
        servicesTitle: "אונזערע דינסטן",
        formName: "פולער נאמען",
        formEmail: "אימעיל",
        formMessage: "ווי קענען מיר העלפן?",
        btnSubmit: "שיקן",

        // Services translation
        srv1Title: "אינהאלט, ליטעראטור<br>און פובליקאציע",
        srv1Desc: "ארויסנעמען טעקסט פון ביכער &bull; פאָרמאַט קאָנווערסיע &bull; אויסשטעלונג און גרייטן צום דרוק",
        srv2Title: "ברענדינג, גראפיק<br>און וויזועלע איבערלעבונג",
        srv2Desc: "לאגא דיזיין &bull; ביזנעס קארטלעך &bull; דעזיינטע איינלאדונגען &bull; ביזנעס פרעזענטאציעס &bull; דיזיין שפראך",
        srv3Title: "ווידעא, סאונד<br>און מולטימעדיע",
        srv3Desc: "דזשינגלס פאר ביזנעס &bull; רעדאקטירן בילדער ווידעאס &bull; ווידעא רעדאקטירונג פאר פאנדרייזינג &bull; אינטעגרירן אוואטארן אין לערן-פראגראמען",
        srv4Title: "דיגיטאלע אנוועזנהייט<br>און אנטוויקלונג",
        srv4Desc: "בויען לענדינג פעידזשעס &bull; וועבזייטל אנטוויקלונג &bull; אינטערפעיס דיזיין &bull; פערפעקטע צופאסונג פאר מאביל",
        srv5Title: "דאטא, גראפן<br>און ביזנעס אנאליז",
        srv5Desc: "טיפע דאטא אנאליז &bull; בויען דעשבאורדס &bull; פארבינדן די ביזנעס צו BI סיסטעמען &bull; שאפן קלוגע רעפארטן",

        // Accessibility
        a11yTitle: "צוטריטלעכקייט אפציעס",
        a11yContrast: "הויכע קאנטראסט",
        a11yLinks: "אונטערשטרייכן לינקס",
        a11yIncreaseText: "פארגרעסערן טעקסט +",
        a11yDecreaseText: "פארקלענערן טעקסט -"
    }
};