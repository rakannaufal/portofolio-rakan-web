<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import GithubContributions from "./components/GithubContributions.vue";
import Reveal from "./components/Reveal.vue";
import { useReducedMotion } from "./composables/useReducedMotion";

type Language = "en" | "id";
type Theme = "dark" | "light";

const copy = {
  en: {
    meta: {
      title: "M Rakan Naufal | Fullstack Developer, AI Engineer & Prompt Engineer",
      description:
        "Portfolio of M Rakan Naufal, Fullstack Developer, AI Engineer, and Prompt Engineer.",
    },
    nav: {
      about: "About",
      contributions: "Contributions",
      stack: "Stack",
      projects: "Projects",
      contact: "Contact",
      menu: "Menu",
      close: "Close menu",
    },
    controls: {
      languageToId: "Change language to Indonesian",
      languageToEn: "Change language to English",
      themeToLight: "Switch to light mode",
      themeToDark: "Switch to dark mode",
      light: "Light",
      dark: "Dark",
    },
    hero: {
      headline: ["Building fullstack products,", "intelligent systems, and better prompts."],
      summary:
        "I combine fullstack engineering, AI systems, and prompt engineering to turn complex problems into useful digital products.",
      projects: "View Projects",
      contact: "Contact Me",
    },
    about: {
      rail: "About",
      title: "Fullstack systems and intelligent products, built with intent.",
      lead: "I am a Fullstack Developer, AI Engineer, and Prompt Engineer focused on building modern digital products and integrating artificial intelligence into practical solutions. I connect creative design, complex system logic, and generative AI to solve real-world problems and create meaningful user experiences.",
      body: "My approach is driven by curiosity and hypothesis-based thinking. When developing a product or feature, I question assumptions, formulate hypotheses, and validate them through experimentation, feedback, and real world results. This helps me make informed decisions and build solutions with a clear purpose.\n\nI am attentive to the environment around me from user needs and team dynamics to changing business priorities. This awareness helps me identify challenges early, adapt my approach, and recognize opportunities for improvement.\n\nAs a Technical Leader, I guide cross-functional teams from project inception to deployment, keeping technical execution aligned with project goals. I bring structure to complex work, communicate priorities clearly, and support collaboration so that each team member understands how their contribution moves the project forward.\n\nI am committed to continuous learning and thoughtful innovation. My goal is to combine technical expertise, strategic thinking, and people-focused leadership to build scalable, well structured solutions that deliver lasting value for users and businesses.",
      focus: "Focus",
      focusValue:
        "Fullstack Development, Prompt Engineering, AI Engineering",
      working: "How I work",
      workingValue:
        "Connecting product thinking, reliable software, and practical AI behavior.",
      location: "Location",
      cv: "Download CV",
      cvPending: "Download CV pending",
      profileAlt: "M Rakan Naufal",
    },
    contributions: {
      eyebrow: "GitHub activity",
      title: "Work that keeps moving.",
      body: "A live view of my public coding activity over the last year.",
      less: "Less",
      more: "More",
      loading: "Loading contributions",
      error: "Contributions are unavailable right now.",
      viewProfile: "View GitHub profile",
    },
    stack: {
      eyebrow: "Tech Stack",
      title: "Tools with a reason to be here.",
      groups: [
        {
          id: "fullstack",
          title: "Fullstack Development",
          description: "Interfaces, APIs, and dependable product delivery.",
          technologies: [
            {
              name: "JavaScript",
              slug: "javascript",
              use: "Interactive product logic",
            },
            {
              name: "TypeScript",
              slug: "typescript",
              use: "Reliable application contracts",
            },
            { name: "Vue.js", slug: "vuedotjs", use: "Reactive interfaces" },
            { name: "Node.js", slug: "nodedotjs", use: "Server-side services" },
            {
              name: "Tailwind CSS",
              slug: "tailwindcss",
              use: "Systematic interface styling",
            },
          ],
        },
        {
          id: "ai",
          title: "AI",
          description:
            "Applied intelligence focused on useful product behavior.",
          technologies: [
            { name: "Python", slug: "python", use: "Modeling and automation" },
            {
              name: "TensorFlow",
              slug: "tensorflow",
              use: "Machine learning workflows",
            },
          ],
        },
        {
          id: "prompt",
          title: "Prompt Engineering",
          description: "Clear instructions, evaluations, and useful AI workflows.",
          technologies: [
            { name: "Gemini", slug: "googlegemini", use: "Prompt workflows" },
            { name: "Claude", slug: "claude", use: "Prompt workflows" },
            { name: "OpenAI", slug: "chatgpt", use: "Prompt workflows" },
          ],
        },
        {
          id: "tools",
          title: "Tools",
          description:
            "Practical tools for focused collaboration and release work.",
          technologies: [
            { name: "Git", slug: "git", use: "Versioned collaboration" },
            {
              name: "Hermes Agent",
              slug: "",
              use: "Open-source agent workflows",
            },
            {
              name: "9Router",
              slug: "",
              use: "Model routing and API access",
            },
          ],
        },
      ],
    },
    projects: {
      title: "Projects built end to end.",
      body: "Marketplaces, intelligent document pipelines, and practical digital products, shipped from interface to data to deployment.",
      labels: {
        problem: "Problem",
        solution: "Solution",
        contribution: "Contribution",
        demo: "Live Demo",
        source: "Source Code",
        video: "iOS Walkthrough",
      },
      items: [
        {
          title: "Lunemira - Cycle & Mood Companion",
          domain: "iOS Development",
          problem:
            "Cycle records, daily feelings, and self-care information are often scattered across separate tools.",
          solution:
            "A native iPhone app with cycle tracking, mood check-ins, a personal journal, educational articles, and offline storage.",
          stack: ["SwiftUI", "SwiftData", "Supabase", "WidgetKit"],
          contribution:
            "Built the native iOS app, cycle calendar, daily check-ins, journal, learning library, widgets, and data sync.",
          screenshots: [
            {
              src: "/project/lunemira-today.jpg",
              alt: "Lunemira daily dashboard with a mood check-in and support summary",
              caption: "Today",
            },
            {
              src: "/project/lunemira-cycle.jpg",
              alt: "Lunemira cycle calendar with menstrual records and estimated cycle dates",
              caption: "Cycle",
            },
            {
              src: "/project/lunemira-learn.jpg",
              alt: "Lunemira learning library with articles about menstruation and self-care",
              caption: "Learn",
            },
          ],
          featured: false,
          demo: "",
          source: "https://github.com/rakannaufal/Lunemira",
          sourceVisible: false,
        },
        {
          title: "Danarapi — Personal Finance, Web & iOS",
          domain: "Fullstack & iOS Development",
          problem:
            "Tracking spending, budgets, and savings across separate tools makes personal finances difficult to manage.",
          solution:
            "A responsive web app and native iOS app for transactions, budgets, savings goals, reports, and receipt scanning with review before saving.",
          stack: ["Vue 3", "TypeScript", "SwiftUI", "Supabase", "PostgreSQL", "Gemini"],
          contribution:
            "Built the web and native iOS interfaces, shared data contracts, Supabase ledger integration, and receipt review and split-bill flows.",
          image: "/project/danarapi-web.jpg",
          imageAlt: "Danarapi web dashboard showing account balance, income, expenses, savings goals, and budgets",
          mobileImage: "/project/danarapi-ios.jpg",
          mobileImageAlt: "Danarapi native iOS dashboard with account balance, income, expenses, savings goals, and receipt review",
          featured: true,
          demo: "https://danarapi.vercel.app/",
          source: "https://github.com/rakannaufal/danarapi",
          sourceVisible: false,
          video: "https://www.youtube.com/shorts/6qQRip4nCNM",
        },
        {
          title: "SeblakKU — Custom Seblak Ordering",
          domain: "Web Development",
          problem:
            "Custom seblak orders involve many choices, making it hard to preview the bowl and know the total before checkout.",
          solution:
            "A mobile-first ordering app with an interactive 3D bowl, live pricing, drinks, a multi-bowl cart, and pickup or dine-in checkout.",
          stack: ["Vue 3", "TypeScript", "Three.js", "Pinia", "Supabase", "Midtrans"],
          contribution:
            "Built the bowl builder, cart, and checkout flow, plus Supabase authentication and order data and Midtrans payment functions.",
          image: "/project/seblakku.png",
          imageAlt: "SeblakKU custom seblak builder with a 3D bowl and topping options",
          featured: false,
          demo: "",
          source: "https://github.com/rakannaufal/seblakku",
        },
        {
          title: "Mariles — Online Tutoring Marketplace",
          domain: "Web Development",
          problem:
            "Students struggle to find trusted private tutors, with no transparent pricing, reviews, or standardized payments.",
          solution:
            "A multi-role marketplace for students, teachers, owners, and admins with verified tutors, transparent reviews, Midtrans payments, and analytics dashboards.",
          stack: ["Vue 3", "Vite", "Pinia", "Supabase", "Midtrans"],
          contribution:
            "Built the frontend architecture: multi-role routing, Pinia stores, Supabase integration, and the payment and analytics dashboards.",
          image: "/project/mariles-home.png",
          imageAlt: "Mariles online tutoring marketplace interface",
          featured: true,
          demo: "",
          source: "",
        },
        {
          title: "Jemuran Otomatis — Smart Clothesline",
          domain: "Internet of Things",
          problem:
            "Clothes left hanging get soaked in the rain, and retracting them by hand is easy to forget.",
          solution:
            "An ESP32-driven clothesline that reacts to rain and light with a real-time web dashboard over WebSocket.",
          stack: ["ESP32", "Embedded C", "WebSocket", "Vue 3", "Node.js"],
          contribution:
            "Wrote the ESP32 firmware with power-saving modes and the WebSocket protocol that drives the live dashboard.",
          image: "/project/iot.png",
          imageAlt: "Jemuran Otomatis smart clothesline dashboard",
          featured: false,
          demo: "",
          source: "",
        },
        {
          title: "Khay Brownies — Brand & Catalog Site",
          domain: "Web Development",
          problem:
            "A home brownies business needed a digital presence to showcase its products and story.",
          solution:
            "A product-focused brand site with a catalog, brand story, gallery, and customer reviews.",
          stack: ["Vue 3", "Vue Router", "Vite"],
          contribution:
            "Designed the interface and built the component structure, routing, and content.",
          image: "/project/khay.jpg",
          imageAlt: "Khay Brownies product website",
          featured: false,
          demo: "https://khay-brownies.vercel.app",
          source: "https://github.com/rakannaufal/khay_brownies",
        },
        {
          title: "Indonesian Invitation Extraction",
          domain: "Artificial Intelligence",
          problem:
            "Official invitation letters were filed by hand, and varied layouts plus low-quality scans made the process slow and error-prone.",
          solution:
            "An end-to-end pipeline combining PaddleOCR, a fine-tuned IndoBERT-CRF model, and spatial keyword proximity in an adaptive ensemble that reaches 95.03% Macro F1.",
          stack: ["Python", "PyTorch", "PaddleOCR", "IndoBERT", "Flask"],
          contribution:
            "Led the NLP research and pipeline: IndoBERT-CRF training, the weighted ensemble, and the real-time Vue 3 dashboard.",
          image: "/project/arsip.png",
          imageAlt: "Indonesian invitation document extraction dashboard",
          featured: true,
          demo: "",
          source: "",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Bring the hard problem.",
      body: "Whether it starts in a product flow or an AI workflow, a good conversation is where the useful work starts.",
      action: "Start a Conversation",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      githubPending: "GitHub pending",
      linkedinPending: "LinkedIn pending",
    },
  },
  id: {
    meta: {
      title: "M Rakan Naufal | Fullstack Developer, AI Engineer & Prompt Engineer",
      description:
        "Portofolio M Rakan Naufal, Fullstack Developer, AI Engineer, dan Prompt Engineer.",
    },
    nav: {
      about: "Tentang",
      contributions: "Kontribusi",
      stack: "Teknologi",
      projects: "Proyek",
      contact: "Kontak",
      menu: "Menu",
      close: "Tutup menu",
    },
    controls: {
      languageToId: "Ubah bahasa ke Indonesia",
      languageToEn: "Ubah bahasa ke Inggris",
      themeToLight: "Ganti ke mode terang",
      themeToDark: "Ganti ke mode gelap",
      light: "Terang",
      dark: "Gelap",
    },
    hero: {
      headline: ["Membangun produk fullstack,", "sistem AI, dan prompt yang lebih baik."],
      summary:
        "Saya menggabungkan engineering fullstack, sistem AI, dan prompt engineering untuk mengubah masalah kompleks menjadi produk digital yang berguna.",
      projects: "Lihat Proyek",
      contact: "Hubungi Saya",
    },
    about: {
      rail: "Tentang",
      title: "Sistem fullstack dan produk cerdas, dibangun dengan tujuan.",
      lead: "Saya adalah Fullstack Developer, AI Engineer, dan Prompt Engineer yang berfokus membangun produk digital modern serta mengintegrasikan kecerdasan buatan ke dalam solusi praktis. Saya menghubungkan desain kreatif, logika sistem yang kompleks, dan AI generatif untuk menyelesaikan masalah nyata serta menciptakan pengalaman pengguna yang bermakna.",
      body: "Pendekatan saya didorong oleh rasa ingin tahu dan pemikiran berbasis hipotesis. Saat mengembangkan produk atau fitur, saya mempertanyakan asumsi, merumuskan hipotesis, dan memvalidasinya melalui eksperimen, umpan balik, serta hasil di dunia nyata. Hal ini membantu saya mengambil keputusan yang tepat dan membangun solusi dengan tujuan yang jelas.\n\nSaya peka terhadap lingkungan di sekitar saya, mulai dari kebutuhan pengguna dan dinamika tim hingga perubahan prioritas bisnis. Kepekaan ini membantu saya mengenali tantangan sejak dini, menyesuaikan pendekatan, dan menemukan peluang perbaikan.\n\nSebagai Technical Leader, saya memandu tim lintas fungsi dari awal proyek hingga deployment, menjaga pelaksanaan teknis tetap selaras dengan tujuan proyek. Saya memberi struktur pada pekerjaan yang kompleks, mengomunikasikan prioritas dengan jelas, dan mendukung kolaborasi agar setiap anggota tim memahami bagaimana kontribusinya mendorong kemajuan proyek.\n\nSaya berkomitmen pada pembelajaran berkelanjutan dan inovasi yang matang. Tujuan saya adalah menggabungkan keahlian teknis, pemikiran strategis, dan kepemimpinan yang berfokus pada manusia untuk membangun solusi yang scalable dan terstruktur dengan baik, serta memberikan nilai jangka panjang bagi pengguna dan bisnis.",
      focus: "Fokus",
      focusValue:
        "Fullstack Development, Prompt Engineering, AI Engineering",
      working: "Cara kerja",
      workingValue:
        "Menghubungkan pemikiran produk, perangkat lunak yang andal, dan perilaku AI yang praktis.",
      location: "Lokasi",
      cv: "Unduh CV",
      cvPending: "Unduh CV belum tersedia",
      profileAlt: "M Rakan Naufal",
    },
    contributions: {
      eyebrow: "Aktivitas GitHub",
      title: "Karya yang terus bergerak.",
      body: "Ringkasan live aktivitas coding publik saya selama satu tahun terakhir.",
      less: "Sedikit",
      more: "Banyak",
      loading: "Memuat kontribusi",
      error: "Kontribusi belum tersedia saat ini.",
      viewProfile: "Lihat profil GitHub",
    },
    stack: {
      eyebrow: "Tech Stack",
      title: "Teknologi dengan tujuan yang jelas.",
      groups: [
        {
          id: "fullstack",
          title: "Fullstack Development",
          description: "Antarmuka, API, dan pengiriman produk yang andal.",
          technologies: [
            {
              name: "JavaScript",
              slug: "javascript",
              use: "Logika produk interaktif",
            },
            {
              name: "TypeScript",
              slug: "typescript",
              use: "Kontrak aplikasi yang andal",
            },
            { name: "Vue.js", slug: "vuedotjs", use: "Antarmuka reaktif" },
            { name: "Node.js", slug: "nodedotjs", use: "Layanan sisi server" },
            {
              name: "Tailwind CSS",
              slug: "tailwindcss",
              use: "Styling antarmuka sistematis",
            },
          ],
        },
        {
          id: "ai",
          title: "AI",
          description:
            "Kecerdasan terapan yang fokus pada perilaku produk berguna.",
          technologies: [
            { name: "Python", slug: "python", use: "Pemodelan dan automasi" },
            {
              name: "TensorFlow",
              slug: "tensorflow",
              use: "Alur kerja machine learning",
            },
          ],
        },
        {
          id: "prompt",
          title: "Prompt Engineering",
          description:
            "Instruksi, evaluasi, dan alur kerja AI yang berguna.",
          technologies: [
            { name: "Gemini", slug: "googlegemini", use: "Alur kerja prompt" },
            { name: "Claude", slug: "claude", use: "Alur kerja prompt" },
            { name: "OpenAI", slug: "chatgpt", use: "Alur kerja prompt" },
          ],
        },
        {
          id: "tools",
          title: "Tools",
          description:
            "Tools praktis untuk kolaborasi dan proses rilis yang fokus.",
          technologies: [
            { name: "Git", slug: "git", use: "Kolaborasi berversi" },
            {
              name: "Hermes Agent",
              slug: "",
              use: "Alur kerja agent open-source",
            },
            {
              name: "9Router",
              slug: "",
              use: "Routing model dan akses API",
            },
          ],
        },
      ],
    },
    projects: {
      title: "Proyek yang dibangun dari hulu ke hilir.",
      body: "Marketplace, pipeline dokumen cerdas, dan produk digital praktis yang dibangun dari antarmuka sampai data dan deployment.",
      labels: {
        problem: "Masalah",
        solution: "Solusi",
        contribution: "Kontribusi",
        demo: "Demo Langsung",
        source: "Kode Sumber",
        video: "Video Demo iOS",
      },
      items: [
        {
          title: "Lunemira - Pendamping Siklus & Mood",
          domain: "iOS Development",
          problem:
            "Catatan siklus, perasaan sehari-hari, dan informasi perawatan diri sering tersebar di berbagai tempat.",
          solution:
            "Aplikasi iPhone native untuk pencatatan siklus, check-in mood, jurnal pribadi, bacaan edukasi, dan penyimpanan offline.",
          stack: ["SwiftUI", "SwiftData", "Supabase", "WidgetKit"],
          contribution:
            "Membangun aplikasi iOS native, kalender siklus, check-in harian, jurnal, pustaka edukasi, widget, dan sinkronisasi data.",
          screenshots: [
            {
              src: "/project/lunemira-today.jpg",
              alt: "Beranda harian Lunemira dengan check-in mood dan ringkasan dukungan",
              caption: "Hari ini",
            },
            {
              src: "/project/lunemira-cycle.jpg",
              alt: "Kalender siklus Lunemira dengan catatan menstruasi dan perkiraan tanggal siklus",
              caption: "Siklus",
            },
            {
              src: "/project/lunemira-learn.jpg",
              alt: "Pustaka Belajar Lunemira dengan bacaan tentang menstruasi dan perawatan diri",
              caption: "Belajar",
            },
          ],
          featured: false,
          demo: "",
          source: "https://github.com/rakannaufal/Lunemira",
          sourceVisible: false,
        },
        {
          title: "Danarapi — Keuangan Pribadi, Web & iOS",
          domain: "Fullstack & iOS Development",
          problem:
            "Pencatatan pengeluaran, anggaran, dan tabungan di berbagai tempat membuat keuangan pribadi sulit dipantau.",
          solution:
            "Aplikasi web responsif dan iOS native untuk transaksi, anggaran, target tabungan, laporan, serta scan struk dengan tinjauan sebelum disimpan.",
          stack: ["Vue 3", "TypeScript", "SwiftUI", "Supabase", "PostgreSQL", "Gemini"],
          contribution:
            "Membangun antarmuka web dan iOS native, kontrak data bersama, integrasi ledger Supabase, serta alur tinjauan struk dan split bill.",
          image: "/project/danarapi-web.jpg",
          imageAlt: "Dashboard web Danarapi dengan saldo akun, pemasukan, pengeluaran, target tabungan, dan anggaran",
          mobileImage: "/project/danarapi-ios.jpg",
          mobileImageAlt: "Dashboard iOS native Danarapi dengan saldo akun, pemasukan, pengeluaran, target tabungan, dan tinjauan struk",
          featured: true,
          demo: "https://danarapi.vercel.app/",
          source: "https://github.com/rakannaufal/danarapi",
          sourceVisible: false,
          video: "https://www.youtube.com/shorts/6qQRip4nCNM",
        },
        {
          title: "SeblakKU — Racik Seblak Sesukamu",
          domain: "Web Development",
          problem:
            "Pesanan seblak racikan memiliki banyak pilihan sehingga sulit membayangkan hasilnya dan mengetahui total harga sebelum checkout.",
          solution:
            "Aplikasi pemesanan mobile-first dengan mangkok 3D interaktif, harga langsung, minuman, keranjang multi-mangkok, serta checkout ambil sendiri atau makan di tempat.",
          stack: ["Vue 3", "TypeScript", "Three.js", "Pinia", "Supabase", "Midtrans"],
          contribution:
            "Membangun peracik seblak, keranjang, dan alur checkout, serta autentikasi dan data pesanan Supabase dan fungsi pembayaran Midtrans.",
          image: "/project/seblakku.png",
          imageAlt: "Peracik SeblakKU dengan mangkok 3D dan pilihan topping",
          featured: false,
          demo: "",
          source: "https://github.com/rakannaufal/seblakku",
        },
        {
          title: "Mariles — Marketplace Les Online",
          domain: "Web Development",
          problem:
            "Siswa sulit menemukan guru les terpercaya, tanpa harga dan ulasan yang transparan serta pembayaran yang terstandar.",
          solution:
            "Marketplace multi-peran untuk siswa, guru, pemilik, dan admin dengan guru terverifikasi, ulasan transparan, pembayaran Midtrans, dan dashboard analitik.",
          stack: ["Vue 3", "Vite", "Pinia", "Supabase", "Midtrans"],
          contribution:
            "Membangun arsitektur frontend: routing multi-peran, store Pinia, integrasi Supabase, serta dashboard pembayaran dan analitik.",
          image: "/project/mariles-home.png",
          imageAlt: "Antarmuka marketplace les online Mariles",
          featured: true,
          demo: "",
          source: "",
        },
        {
          title: "Jemuran Otomatis — Jemuran Pintar",
          domain: "Internet of Things",
          problem:
            "Jemuran yang dibiarkan di luar menjadi basah saat hujan, dan mengangkatnya secara manual mudah terlewat.",
          solution:
            "Jemuran berbasis ESP32 yang merespons hujan dan cahaya dengan dashboard web real-time melalui WebSocket.",
          stack: ["ESP32", "Embedded C", "WebSocket", "Vue 3", "Node.js"],
          contribution:
            "Menulis firmware ESP32 dengan mode hemat daya serta protokol WebSocket yang menjalankan dashboard langsung.",
          image: "/project/iot.png",
          imageAlt: "Dashboard jemuran otomatis berbasis ESP32",
          featured: false,
          demo: "",
          source: "",
        },
        {
          title: "Khay Brownies — Situs Brand & Katalog",
          domain: "Web Development",
          problem:
            "Usaha brownies rumahan membutuhkan kehadiran digital untuk menampilkan produk dan ceritanya.",
          solution:
            "Situs brand berfokus produk dengan katalog, cerita brand, galeri, dan ulasan pelanggan.",
          stack: ["Vue 3", "Vue Router", "Vite"],
          contribution:
            "Merancang antarmuka dan membangun struktur komponen, routing, serta konten.",
          image: "/project/khay.jpg",
          imageAlt: "Situs produk Khay Brownies",
          featured: false,
          demo: "https://khay-brownies.vercel.app",
          source: "https://github.com/rakannaufal/khay_brownies",
        },
        {
          title: "Ekstraksi Surat Undangan Indonesia",
          domain: "Artificial Intelligence",
          problem:
            "Surat undangan dinas diarsipkan secara manual; tata letak beragam dan hasil pindai berkualitas rendah membuatnya lambat dan rawan salah.",
          solution:
            "Pipeline end-to-end yang menggabungkan PaddleOCR, model IndoBERT-CRF hasil fine-tuning, dan kedekatan kata kunci spasial dalam ensemble adaptif hingga Macro F1 95,03%.",
          stack: ["Python", "PyTorch", "PaddleOCR", "IndoBERT", "Flask"],
          contribution:
            "Memimpin riset dan pipeline NLP: pelatihan IndoBERT-CRF, ensemble berbobot, serta dashboard Vue 3 real-time.",
          image: "/project/arsip.png",
          imageAlt: "Dashboard ekstraksi dokumen surat undangan Indonesia",
          featured: true,
          demo: "",
          source: "",
        },
      ],
    },
    contact: {
      eyebrow: "Kontak",
      title: "Bawa masalah yang sulit.",
      body: "Baik dimulai dari alur produk atau workflow AI, percakapan yang baik adalah awal dari karya yang berguna.",
      action: "Mulai Percakapan",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      githubPending: "GitHub belum tersedia",
      linkedinPending: "LinkedIn belum tersedia",
    },
  },
} as const;

const { prefersReducedMotion } = useReducedMotion();
const theme = ref<Theme>("light");
const language = ref<Language>("en");
const t = computed(() => copy[language.value]);
const isMobileMenuOpen = ref(false);

const profileImageHero = "/profile.png";
const profileImageAbout = "/profile.png";

const contact = {
  location: "Pekanbaru, Indonesia",
  email: "naufalrakan432@gmail.com",
  github: "https://github.com/rakannaufal",
  linkedin: "https://www.linkedin.com/in/m-rakan-naufal-b98463286/",
  cv: "[URL_CV]",
};

const experiences: Array<never> = [];
const currentYear = new Date().getFullYear();
const hasCv = computed(() => !isPlaceholder(contact.cv));
const conversationHref = computed(() =>
  isPlaceholder(contact.email) ? "#contact-details" : `mailto:${contact.email}`,
);

const socialLinks = computed(() => [
  {
    label: t.value.contact.github,
    value: contact.github,
    href: contact.github,
  },
  {
    label: t.value.contact.linkedin,
    value: contact.linkedin,
    href: contact.linkedin,
  },
]);

function isPlaceholder(value: string) {
  return value.startsWith("[") && value.endsWith("]");
}

function isProjectSourceVisible(project: {
  source: string;
  sourceVisible?: boolean;
}) {
  return Boolean(project.source) && project.sourceVisible !== false;
}

function applyTheme(nextTheme: Theme) {
  document.documentElement.dataset.theme = nextTheme;
  const themeColor = nextTheme === "dark" ? "#111111" : "#ffffff";
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", themeColor);
}

function applyLanguage(nextLanguage: Language) {
  document.documentElement.lang = nextLanguage;
  document.title = copy[nextLanguage].meta.title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", copy[nextLanguage].meta.description);
}

function toggleTheme() {
  theme.value = theme.value === "dark" ? "light" : "dark";
}

function toggleLanguage() {
  language.value = language.value === "en" ? "id" : "en";
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false;
}

watch(isMobileMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

onMounted(() => {
  const savedTheme = window.localStorage.getItem("rakan-theme");
  const savedLanguage = window.localStorage.getItem("rakan-language");

  if (savedTheme === "light" || savedTheme === "dark") theme.value = savedTheme;
  if (savedLanguage === "en" || savedLanguage === "id")
    language.value = savedLanguage;

  applyTheme(theme.value);
  applyLanguage(language.value);
});

watch(theme, (nextTheme) => {
  applyTheme(nextTheme);
  window.localStorage.setItem("rakan-theme", nextTheme);
});

watch(language, (nextLanguage) => {
  applyLanguage(nextLanguage);
  window.localStorage.setItem("rakan-language", nextLanguage);
});
</script>

<template>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <div class="scroll-progress" aria-hidden="true"></div>

  <!-- Site Header with Navigation -->
  <header class="site-header">
    <nav class="site-nav" aria-label="Main navigation">
      <!-- Logo / Name -->
      <a href="#top" class="name-lockup" aria-label="M Rakan Naufal" @click="closeMobileMenu">
        <img src="/logo.svg?v=2" alt="" width="34" height="34" />
        <span>M Rakan Naufal</span>
      </a>

      <!-- Desktop Navigation Links -->
      <div class="nav-links" :class="{ 'is-open': isMobileMenuOpen }">
        <a href="#about" @click="closeMobileMenu">{{ t.nav.about }}</a>
        <a href="#contributions" @click="closeMobileMenu">{{
          t.nav.contributions
        }}</a>
        <a href="#stack" @click="closeMobileMenu">{{ t.nav.stack }}</a>
        <a href="#projects" @click="closeMobileMenu">{{ t.nav.projects }}</a>
        <a href="#contact" @click="closeMobileMenu">{{ t.nav.contact }}</a>

        <!-- Close Button (Mobile Only) -->
        <button
          class="nav-close-btn"
          @click="closeMobileMenu"
          :aria-label="t.nav.close"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 5L5 15M5 5L15 15"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>

      <!-- Controls: Theme + Language + Mobile Menu Toggle -->
      <div class="nav-controls">
        <!-- Theme Toggle -->
        <button
          class="control-btn theme-toggle"
          @click="toggleTheme"
          :aria-label="
            theme === 'dark' ? t.controls.themeToLight : t.controls.themeToDark
          "
          :title="
            theme === 'dark' ? t.controls.themeToLight : t.controls.themeToDark
          "
        >
          <svg
            v-if="theme === 'dark'"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <circle
              cx="10"
              cy="10"
              r="4"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M10 2V3M10 17V18M18 10H17M3 10H2M15.5 4.5L14.8 5.2M5.2 14.8L4.5 15.5M15.5 15.5L14.8 14.8M5.2 5.2L4.5 4.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M17 10.5C16.4 13.5 13.7 16 10.5 16C6.9 16 4 13.1 4 9.5C4 6.3 6.5 3.6 9.5 3C9.2 3.6 9 4.3 9 5C9 7.8 11.2 10 14 10C14.7 10 15.4 9.8 16 9.5C16.3 9.8 16.7 10.1 17 10.5Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <!-- Language Toggle -->
        <button
          class="control-btn language-toggle"
          @click="toggleLanguage"
          :aria-label="
            language === 'en'
              ? t.controls.languageToId
              : t.controls.languageToEn
          "
          :title="
            language === 'en'
              ? t.controls.languageToId
              : t.controls.languageToEn
          "
        >
          <span class="language-label">{{ language.toUpperCase() }}</span>
        </button>

        <!-- Mobile Menu Toggle (Hamburger) -->
        <button
          class="mobile-menu-toggle"
          @click="toggleMobileMenu"
          :aria-label="t.nav.menu"
          :aria-expanded="isMobileMenuOpen"
        >
          <div
            class="hamburger-icon"
            :class="{ 'is-active': isMobileMenuOpen }"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </nav>
  </header>

  <!-- Mobile Menu Backdrop -->
  <div
    v-if="isMobileMenuOpen"
    class="mobile-menu-backdrop"
    @click="closeMobileMenu"
    aria-hidden="true"
  ></div>

  <div class="site-shell" :data-language="language">
    <main id="main-content">
      <section
        id="top"
        class="hero min-h-[100dvh]"
        aria-labelledby="hero-title"
      >
        <p class="hero-wordmark" aria-hidden="true">
          <span>M RAKAN </span><span class="hero-wordmark-solid">NAUFAL</span>
        </p>

        <!-- Split Screen: Text Left, Photo Right -->
        <div class="hero-split-layout">
          <!-- Left: Text Content -->
          <Reveal class="hero-copy-left" :reduced="prefersReducedMotion">
            <h1 id="hero-title">
              <span v-for="line in t.hero.headline" :key="line">{{
                line
              }}</span>
            </h1>
            <p class="hero-summary">{{ t.hero.summary }}</p>
          </Reveal>

          <!-- Right: Portrait -->
          <Reveal
            class="hero-photo-right"
            :delay="100"
            :reduced="prefersReducedMotion"
          >
            <p class="hero-wordmark hero-wordmark-mobile" aria-hidden="true">
              <span>M RAKAN </span><span class="hero-wordmark-solid">NAUFAL</span>
            </p>
            <div class="photo-frame">
              <img
                class="hero-portrait"
                :src="profileImageHero"
                :alt="t.about.profileAlt"
                width="682"
                height="1024"
                fetchpriority="high"
                decoding="async"
              />
            </div>
          </Reveal>

          <div class="hero-side-actions">
            <a href="#projects">
              <span>{{ t.hero.projects }}</span>
              <span class="cta-arrow" aria-hidden="true">↘︎</span>
            </a>
            <a href="#contact">
              <span>{{ t.hero.contact }}</span>
              <span class="cta-arrow" aria-hidden="true">↘︎</span>
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        class="about-section section-shell"
        aria-labelledby="about-title"
      >
        <Reveal class="about-rail" :reduced="prefersReducedMotion">
          <p>{{ t.about.rail }}</p>
          <span aria-hidden="true"></span>
        </Reveal>

        <Reveal class="about-copy" :delay="70" :reduced="prefersReducedMotion">
          <h2 id="about-title">{{ t.about.title }}</h2>
          <p class="about-lead">{{ t.about.lead }}</p>
          <p>{{ t.about.body }}</p>
          <dl class="about-facts">
            <div>
              <dt>{{ t.about.focus }}</dt>
              <dd>{{ t.about.focusValue }}</dd>
            </div>
            <div>
              <dt>{{ t.about.working }}</dt>
              <dd>{{ t.about.workingValue }}</dd>
            </div>
            <div>
              <dt>{{ t.about.location }}</dt>
              <dd>{{ contact.location }}</dd>
            </div>
          </dl>
          <a
            v-if="hasCv"
            class="text-link"
            :href="contact.cv"
            target="_blank"
            rel="noreferrer"
            >{{ t.about.cv }}</a
          >
          <span v-else class="text-link is-pending">{{
            t.about.cvPending
          }}</span>
        </Reveal>

        <Reveal
          class="about-portrait-wrap"
          :delay="130"
          :reduced="prefersReducedMotion"
        >
          <img
            class="about-portrait"
            :src="profileImageAbout"
            :alt="t.about.profileAlt"
            width="640"
            height="960"
            loading="lazy"
            decoding="async"
          />
        </Reveal>
      </section>

      <section id="contributions" class="contributions-section section-shell">
        <Reveal
          class="section-heading contributions-heading"
          :reduced="prefersReducedMotion"
        >
          <p class="eyebrow">{{ t.contributions.eyebrow }}</p>
          <h2 id="contributions-title">{{ t.contributions.title }}</h2>
          <p>{{ t.contributions.body }}</p>
        </Reveal>

        <Reveal :reduced="prefersReducedMotion">
          <GithubContributions
            username="rakannaufal"
            :labels="t.contributions"
          />
        </Reveal>
      </section>

      <section
        id="stack"
        class="stack-section section-shell"
        aria-labelledby="stack-title"
      >
        <Reveal
          class="section-heading stack-heading"
          :reduced="prefersReducedMotion"
        >
          <p class="eyebrow">{{ t.stack.eyebrow }}</p>
          <h2 id="stack-title">{{ t.stack.title }}</h2>
        </Reveal>

        <div class="stack-constellation" aria-label="Technology stack">
          <Reveal
            v-for="(group, index) in t.stack.groups"
            :key="group.id"
            class="stack-cell"
            :class="`stack-cell-${group.id}`"
            :delay="index * 55"
            :reduced="prefersReducedMotion"
          >
            <h3>{{ group.title }}</h3>
            <p>{{ group.description }}</p>
            <ul>
              <li
                v-for="technology in group.technologies"
                :key="technology.name"
                class="technology-node"
              >
                <img
                  v-if="
                    technology.name !== 'Hermes Agent' &&
                    technology.name !== '9Router' &&
                    technology.name !== 'OpenAI'
                  "
                  :src="`https://cdn.simpleicons.org/${technology.slug}/FFFFFF`"
                  :alt="technology.name"
                  width="26"
                  height="26"
                  loading="lazy"
                  decoding="async"
                />
                <span
                  v-else
                  class="technology-monogram"
                  aria-hidden="true"
                >{{
                  technology.name === "9Router"
                    ? "9R"
                    : technology.name === "OpenAI"
                      ? "AI"
                      : "HA"
                }}</span>
                <span>
                  <strong>{{ technology.name }}</strong>
                  <small>{{ technology.use }}</small>
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section
        id="projects"
        class="projects-section section-shell"
        aria-labelledby="projects-title"
      >
        <Reveal
          class="section-heading projects-heading"
          :reduced="prefersReducedMotion"
        >
          <h2 id="projects-title">{{ t.projects.title }}</h2>
          <p>{{ t.projects.body }}</p>
        </Reveal>

        <div class="projects-grid">
          <Reveal
            v-for="(project, index) in t.projects.items"
            :key="project.title"
            class="project-entry"
            :class="{ 'project-featured': project.featured }"
            :delay="index * 75"
            :reduced="prefersReducedMotion"
          >
            <article>
              <div
                v-if="'screenshots' in project"
                class="project-visual project-screenshot-grid"
              >
                <figure v-for="screenshot in project.screenshots" :key="screenshot.src">
                  <img
                    :src="screenshot.src"
                    :alt="screenshot.alt"
                    loading="lazy"
                    decoding="async"
                    width="780"
                    height="1688"
                  />
                  <figcaption>{{ screenshot.caption }}</figcaption>
                </figure>
              </div>
              <div
                v-else-if="'mobileImage' in project"
                class="project-visual project-device-preview"
              >
                <div class="project-browser-frame">
                  <div class="project-browser-toolbar" aria-hidden="true">
                    <span class="project-browser-dots"><i></i><i></i><i></i></span>
                    <span>danarapi.vercel.app</span>
                    <span>Web</span>
                  </div>
                  <img
                    :src="project.image"
                    :alt="project.imageAlt"
                    loading="lazy"
                    decoding="async"
                    width="1800"
                    height="969"
                  />
                </div>
                <div class="project-phone-frame">
                  <img
                    :src="project.mobileImage"
                    :alt="project.mobileImageAlt"
                    loading="lazy"
                    decoding="async"
                    width="780"
                    height="1688"
                  />
                </div>
                <span class="project-device-caption" aria-hidden="true">Web + iOS</span>
              </div>
              <div v-else class="project-visual">
                <img
                  :src="project.image"
                  :alt="project.imageAlt"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="project-copy">
                <p class="project-domain">{{ project.domain }}</p>
                <h3>{{ project.title }}</h3>
                <dl class="project-details">
                  <div>
                    <dt>{{ t.projects.labels.problem }}</dt>
                    <dd>{{ project.problem }}</dd>
                  </div>
                  <div>
                    <dt>{{ t.projects.labels.solution }}</dt>
                    <dd>{{ project.solution }}</dd>
                  </div>
                  <div>
                    <dt>{{ t.projects.labels.contribution }}</dt>
                    <dd>{{ project.contribution }}</dd>
                  </div>
                </dl>
                <ul class="project-stack" aria-label="Project stack">
                  <li v-for="item in project.stack" :key="item">{{ item }}</li>
                </ul>
                <div
                  v-if="project.demo || isProjectSourceVisible(project) || ('video' in project && project.video)"
                  class="project-links"
                >
                  <a
                    v-if="project.demo"
                    :href="project.demo"
                    target="_blank"
                    rel="noreferrer"
                    >{{ t.projects.labels.demo }}</a
                  >
                  <a
                    v-if="isProjectSourceVisible(project)"
                    :href="project.source"
                    target="_blank"
                    rel="noreferrer"
                    >{{ t.projects.labels.source }}</a
                  >
                  <a
                    v-if="'video' in project && project.video"
                    :href="project.video"
                    target="_blank"
                    rel="noreferrer"
                    >{{ t.projects.labels.video }}</a
                  >
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>


      <section
        v-if="experiences.length"
        id="experience"
        class="experience-section section-shell"
        aria-labelledby="experience-title"
      >
        <Reveal class="section-heading" :reduced="prefersReducedMotion">
          <h2 id="experience-title">Experience and achievements.</h2>
        </Reveal>
      </section>

      <section
        id="contact"
        class="contact-section section-shell"
        aria-labelledby="contact-title"
      >
        <Reveal class="contact-copy" :reduced="prefersReducedMotion">
          <p class="eyebrow">{{ t.contact.eyebrow }}</p>
          <h2 id="contact-title">{{ t.contact.title }}</h2>
          <p>{{ t.contact.body }}</p>
          <a class="button button-primary" :href="conversationHref">{{
            t.contact.action
          }}</a>
        </Reveal>

        <Reveal
          id="contact-details"
          class="contact-details"
          :delay="90"
          :reduced="prefersReducedMotion"
        >
          <div>
            <span>{{ t.contact.email }}</span>
            <a
              v-if="!isPlaceholder(contact.email)"
              :href="`mailto:${contact.email}`"
              >Gmail</a
            >
            <p v-else>{{ contact.email }}</p>
          </div>
          <div v-for="link in socialLinks" :key="link.label">
            <span>{{ link.label }}</span>
            <a
              v-if="!isPlaceholder(link.value)"
              :href="link.href"
              target="_blank"
              rel="noreferrer"
              >{{ link.label }}</a
            >
            <p v-else>{{ link.value }}</p>
          </div>
        </Reveal>
      </section>
    </main>

    <footer class="site-footer section-shell">
      <p>M Rakan Naufal <span aria-hidden="true">/</span> {{ currentYear }}</p>
      <div>
        <a
          v-if="!isPlaceholder(contact.github)"
          :href="contact.github"
          target="_blank"
          rel="noreferrer"
          >{{ t.contact.github }}</a
        >
        <span v-else>{{ t.contact.githubPending }}</span>
        <a
          v-if="!isPlaceholder(contact.linkedin)"
          :href="contact.linkedin"
          target="_blank"
          rel="noreferrer"
          >{{ t.contact.linkedin }}</a
        >
        <span v-else>{{ t.contact.linkedinPending }}</span>
      </div>
    </footer>
  </div>
</template>
