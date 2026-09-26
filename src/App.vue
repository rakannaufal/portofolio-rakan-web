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
      lead: "I am a dedicated Fullstack Developer, AI Engineer, and Prompt Engineer focused on building modern digital products and integrating advanced artificial intelligence. I specialize in aligning creative design, complex system logic, and generative AI technologies to solve real-world problems and deliver high-impact user experiences.",
      body: "As a Technical Leader, I have a proven track record of guiding and managing cross-functional teams from project inception to deployment. I excel at aligning team dynamics, fostering effective collaboration, and making strategic technical decisions that empower large teams to execute with clarity and purpose.\n\nDriven by a commitment to continuous innovation, I bring strong strategic leadership and technical expertise to forward-thinking organizations. My goal is to architect scalable, well-structured solutions that drive business value and deliver meaningful, lasting impact.",
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
      },
      items: [
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
        {
          title: "Marimabar — Gaming Companion Finder",
          domain: "Web Development",
          slug: "mari-mabar",
          year: "2026",
          status: "In Development",
          problem:
            "Gamers struggle to find compatible teammates by rank, role, and schedule, while public game IDs invite spam and harassment.",
          solution:
            "A multi-role platform with structured game profiles, server-side discovery filters, transactional invitations, private 1:1 chat, and full privacy controls for MLBB, PUBG Mobile, Free Fire, and Valorant.",
          stack: ["Vue 3", "TypeScript", "Vite", "Pinia", "Supabase", "PostgreSQL"],
          contribution:
            "Built the frontend and backend architecture with Vue Router, Pinia, Supabase Auth, PostgreSQL RLS, Realtime, Storage, Edge Functions, transactional invitations, and safety features for blocking, reports, and moderation.",
          image: "/project/marimabar.png",
          imageAlt: "Marimabar gaming companion finder platform",
          featured: false,
          demo: "",
          source: "https://github.com/rakannaufal/marimabar",
          sourceVisible: false,
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
      lead: "Saya adalah Fullstack Developer, AI Engineer, dan Prompt Engineer yang berfokus membangun produk digital modern serta mengintegrasikan kecerdasan buatan tingkat lanjut. Saya menyelaraskan desain kreatif, logika sistem yang kompleks, dan teknologi AI generatif untuk menyelesaikan masalah nyata serta menghadirkan pengalaman pengguna berdampak tinggi.",
      body: "Sebagai Technical Leader, saya berpengalaman memandu dan mengelola tim lintas fungsi sejak awal proyek hingga deployment. Saya menyelaraskan dinamika tim, membangun kolaborasi yang efektif, dan mengambil keputusan teknis strategis agar tim besar dapat bekerja dengan jelas dan terarah.\n\nDengan komitmen pada inovasi berkelanjutan, saya membawa kepemimpinan strategis dan keahlian teknis untuk organisasi yang berpikiran maju. Tujuan saya adalah merancang solusi yang scalable dan terstruktur untuk mendorong nilai bisnis serta dampak yang bermakna dan berkelanjutan.",
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
      },
      items: [
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
        {
          title: "Marimabar — Platform Pencarian Teman Bermain",
          domain: "Web Development",
          slug: "mari-mabar",
          year: "2026",
          status: "Dalam Pengembangan",
          problem:
            "Pemain game sulit menemukan rekan mabar yang cocok berdasarkan rank, role, dan jadwal. Berbagi ID game secara publik juga berisiko spam dan pelecehan.",
          solution:
            "Platform multi-peran dengan profil per game yang terstruktur, filter pencarian berbasis server, sistem ajakan transaksional, chat 1:1 privat, dan kontrol privasi untuk MLBB, PUBG Mobile, Free Fire, serta Valorant.",
          stack: ["Vue 3", "TypeScript", "Vite", "Pinia", "Supabase", "PostgreSQL"],
          contribution:
            "Membangun arsitektur frontend dan backend dengan Vue Router, Pinia, Supabase Auth, PostgreSQL RLS, Realtime, Storage, Edge Functions, sistem ajakan, blokir, laporan, dan moderasi.",
          image: "/project/marimabar.png",
          imageAlt: "Platform pencarian teman bermain Marimabar",
          featured: false,
          demo: "",
          source: "https://github.com/rakannaufal/marimabar",
          sourceVisible: false,
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
              <div class="project-visual">
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
                  v-if="project.demo || isProjectSourceVisible(project)"
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
