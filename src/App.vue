<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted, ref, watch } from "vue";
import HeroSceneFallback from "./components/HeroSceneFallback.vue";
import HeroSceneLoading from "./components/HeroSceneLoading.vue";
import Reveal from "./components/Reveal.vue";
import { useReducedMotion } from "./composables/useReducedMotion";

type Language = "en" | "id";
type Theme = "dark" | "light";

const HeroScene = defineAsyncComponent({
  loader: () => import("./components/HeroScene.vue"),
  loadingComponent: HeroSceneLoading,
  errorComponent: HeroSceneFallback,
  delay: 180,
  timeout: 12000,
});

const copy = {
  en: {
    meta: {
      title: "M Rakan Naufal | Full-Stack Developer & AI/IoT Builder",
      description:
        "Portfolio of M Rakan Naufal, Full-Stack Developer and AI/IoT Builder.",
    },
    nav: {
      about: "About",
      capabilities: "Capabilities",
      stack: "Stack",
      projects: "Projects",
      process: "Process",
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
      headline: ["Building the web,", "intelligence, and connected things."],
      summary:
        "I build digital products through web systems, applied AI, and connected devices that make physical ideas useful.",
      projects: "View Projects",
      contact: "Contact Me",
    },
    about: {
      rail: "About",
      title: "Software and devices, considered together.",
      lead: "I build modern web experiences, AI solutions, and connected IoT devices.",
      body: "My focus sits across Web Development, Artificial Intelligence, and Internet of Things. I turn complex needs into products that people can use, from interface to data to physical devices in the field.",
      focus: "Focus",
      focusValue:
        "Web Development, Artificial Intelligence, Internet of Things",
      working: "How I work",
      workingValue:
        "Connecting user experience, reliable software, and real-world device behavior.",
      location: "Location",
      cv: "Download CV",
      cvPending: "Download CV pending",
      profileAlt: "M Rakan Naufal",
    },
    capabilities: {
      title: "Three systems. One product mindset.",
      body: "From browser interface to trained model to connected sensor, each layer has a job in the final experience.",
      cards: [
        {
          label: "Web Development",
          title: "Interfaces that make complex systems feel direct.",
          body: "Build responsive product surfaces, APIs, and foundations that teams can extend with confidence.",
        },
        {
          label: "Artificial Intelligence",
          title: "Models grounded in a practical product question.",
          body: "Prototype useful intelligence, connect it to a real flow, and make the result understandable for people.",
        },
        {
          label: "Internet of Things",
          title: "Physical signals carried into useful software.",
          body: "Bring sensors, microcontrollers, messaging, and product software into one observable system.",
        },
      ],
    },
    stack: {
      eyebrow: "Tech Stack",
      title: "Tools with a reason to be here.",
      groups: [
        {
          id: "web",
          title: "Web",
          description: "Interfaces, systems, and dependable product delivery.",
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
            {
              name: "Nuxt",
              slug: "nuxtdotjs",
              use: "Production-ready web applications",
            },
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
          id: "iot",
          title: "IoT",
          description: "Sensors, devices, and messaging connected to software.",
          technologies: [
            {
              name: "Arduino",
              slug: "arduino",
              use: "Rapid hardware prototyping",
            },
            {
              name: "ESP32",
              slug: "espressif",
              use: "Connected embedded devices",
            },
            { name: "MQTT", slug: "mqtt", use: "Lightweight device messaging" },
          ],
        },
        {
          id: "tools",
          title: "Tools",
          description:
            "Practical tools for focused collaboration and release work.",
          technologies: [
            { name: "Git", slug: "git", use: "Versioned collaboration" },
          ],
        },
        {
          id: "design",
          title: "Design",
          description: "Product thinking made tangible before implementation.",
          technologies: [
            { name: "Figma", slug: "figma", use: "Interface exploration" },
          ],
        },
      ],
    },
    projects: {
      title: "Projects built end to end.",
      body: "Marketplaces, connected devices, and an applied NLP pipeline — each shipped from interface to data to hardware.",
      labels: {
        problem: "Problem",
        solution: "Solution",
        contribution: "Contribution",
        demo: "Live Demo",
        source: "Source Code",
      },
      items: [
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
          image: "/project/mariles.jpg",
          imageAlt: "Mariles online tutoring marketplace interface",
          featured: true,
          demo: "https://mariles.vercel.app",
          source: "https://github.com/rakannaufal/mariles",
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
          demo: "https://jemuran-iot.vercel.app",
          source: "https://github.com/rakannaufal/Jemuran-otomatis",
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
          source:
            "https://github.com/rakannaufal/indobert-ocr-official-invitation-extraction",
        },
      ],
    },
    process: {
      title: "A working process built for decisions.",
      body: "The flow stays structured without losing room for discovery.",
      items: [
        {
          title: "Discover",
          detail:
            "Clarify the people, physical constraints, and useful outcome before choosing the stack.",
        },
        {
          title: "Design",
          detail:
            "Map the product experience and technical shape while decisions are still inexpensive.",
        },
        {
          title: "Build",
          detail:
            "Turn the system into responsive software, connected hardware, or both.",
        },
        {
          title: "Ship",
          detail:
            "Test the critical paths, document handoff, and make the next iteration clear.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Bring the hard problem.",
      body: "Whether it lives in a browser, a model, or a device, a good conversation is where the useful work starts.",
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
      title: "M Rakan Naufal | Full-Stack Developer & AI/IoT Builder",
      description:
        "Portofolio M Rakan Naufal, Full-Stack Developer dan AI/IoT Builder.",
    },
    nav: {
      about: "Tentang",
      capabilities: "Keahlian",
      stack: "Teknologi",
      projects: "Proyek",
      process: "Proses",
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
      headline: ["Membangun web,", "kecerdasan, dan perangkat terhubung."],
      summary:
        "Saya membangun produk digital melalui sistem web, AI terapan, dan perangkat terhubung yang membuat ide fisik menjadi berguna.",
      projects: "Lihat Proyek",
      contact: "Hubungi Saya",
    },
    about: {
      rail: "Tentang",
      title: "Perangkat lunak dan perangkat fisik, dirancang bersama.",
      lead: "Saya membangun pengalaman web modern, solusi AI, dan perangkat IoT yang terhubung.",
      body: "Fokus saya ada pada Web Development, Artificial Intelligence, dan Internet of Things. Saya menerjemahkan kebutuhan rumit menjadi produk yang mudah dipakai, dari antarmuka sampai data dan perangkat fisik di lapangan.",
      focus: "Fokus",
      focusValue:
        "Web Development, Artificial Intelligence, Internet of Things",
      working: "Cara kerja",
      workingValue:
        "Menghubungkan pengalaman pengguna, perangkat lunak andal, dan perilaku perangkat di dunia nyata.",
      location: "Lokasi",
      cv: "Unduh CV",
      cvPending: "Unduh CV belum tersedia",
      profileAlt: "M Rakan Naufal",
    },
    capabilities: {
      title: "Keahlian yang bekerja di antara layar dan dunia nyata.",
      body: "Saya merancang alur dari sinyal pertama sampai pengalaman yang bisa dipakai: antarmuka, keputusan berbasis data, lalu perangkat yang benar-benar bergerak.",
      cards: [
        {
          label: "Web Development",
          title: "Membuat kerumitan terasa sederhana di layar.",
          body: "Menyusun antarmuka, API, dan fondasi frontend yang cepat dipahami pengguna dan tetap enak dikembangkan tim.",
        },
        {
          label: "Artificial Intelligence",
          title: "Membuat model menjawab masalah, bukan sekadar demo.",
          body: "Mengubah data dan model menjadi alur kerja yang terukur, bisa dijelaskan, dan punya tempat yang jelas di produk.",
        },
        {
          label: "Internet of Things",
          title: "Membawa sinyal fisik masuk ke keputusan digital.",
          body: "Menghubungkan sensor, mikrokontroler, messaging, dan dashboard menjadi sistem yang bisa dipantau dari ujung ke ujung.",
        },
      ],
    },
    stack: {
      eyebrow: "Tech Stack",
      title: "Teknologi dengan tujuan yang jelas.",
      groups: [
        {
          id: "web",
          title: "Web",
          description: "Antarmuka, sistem, dan pengiriman produk yang andal.",
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
            {
              name: "Nuxt",
              slug: "nuxtdotjs",
              use: "Aplikasi web siap produksi",
            },
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
          id: "iot",
          title: "IoT",
          description:
            "Sensor, perangkat, dan messaging yang terhubung ke perangkat lunak.",
          technologies: [
            {
              name: "Arduino",
              slug: "arduino",
              use: "Prototipe hardware cepat",
            },
            {
              name: "ESP32",
              slug: "espressif",
              use: "Perangkat embedded terhubung",
            },
            { name: "MQTT", slug: "mqtt", use: "Messaging perangkat ringan" },
          ],
        },
        {
          id: "tools",
          title: "Tools",
          description:
            "Tools praktis untuk kolaborasi dan proses rilis yang fokus.",
          technologies: [
            { name: "Git", slug: "git", use: "Kolaborasi berversi" },
          ],
        },
        {
          id: "design",
          title: "Design",
          description:
            "Pemikiran produk yang dibuat nyata sebelum implementasi.",
          technologies: [
            { name: "Figma", slug: "figma", use: "Eksplorasi antarmuka" },
          ],
        },
      ],
    },
    projects: {
      title: "Proyek yang dibangun dari hulu ke hilir.",
      body: "Marketplace, perangkat terhubung, dan pipeline NLP terapan — masing-masing dijalankan dari antarmuka sampai data dan perangkat.",
      labels: {
        problem: "Masalah",
        solution: "Solusi",
        contribution: "Kontribusi",
        demo: "Demo Langsung",
        source: "Kode Sumber",
      },
      items: [
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
          image: "/project/mariles.jpg",
          imageAlt: "Antarmuka marketplace les online Mariles",
          featured: true,
          demo: "https://mariles.vercel.app",
          source: "https://github.com/rakannaufal/mariles",
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
          demo: "https://jemuran-iot.vercel.app",
          source: "https://github.com/rakannaufal/Jemuran-otomatis",
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
          source:
            "https://github.com/rakannaufal/indobert-ocr-official-invitation-extraction",
        },
      ],
    },
    process: {
      title: "Proses kerja untuk pengambilan keputusan.",
      body: "Alur tetap terstruktur tanpa kehilangan ruang untuk menemukan hal baru.",
      items: [
        {
          title: "Temukan",
          detail:
            "Memahami manusia, batasan fisik, dan hasil berguna sebelum memilih teknologi.",
        },
        {
          title: "Rancang",
          detail:
            "Memetakan pengalaman produk dan bentuk teknis saat keputusan masih mudah diubah.",
        },
        {
          title: "Bangun",
          detail:
            "Membuat sistem menjadi perangkat lunak responsif, hardware terhubung, atau keduanya.",
        },
        {
          title: "Rilis",
          detail:
            "Menguji alur penting, mendokumentasikan serah terima, dan memperjelas iterasi berikutnya.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontak",
      title: "Bawa masalah yang sulit.",
      body: "Baik di browser, model, atau perangkat, percakapan yang baik adalah awal dari karya yang berguna.",
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
const theme = ref<Theme>("dark");
const language = ref<Language>("en");
const t = computed(() => copy[language.value]);
const isMobileMenuOpen = ref(false);

const profileImageHero = "/profile-hero.png";
const profileImageAbout = "/profile-rakan.jpg";

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

function applyTheme(nextTheme: Theme) {
  document.documentElement.dataset.theme = nextTheme;
  const themeColor = nextTheme === "dark" ? "#101418" : "#e7eff2";
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

  <!-- Site Header with Navigation -->
  <header class="site-header">
    <nav class="site-nav" aria-label="Main navigation">
      <!-- Logo / Name -->
      <a href="#top" class="name-lockup" @click="closeMobileMenu">
        <span>M Rakan Naufal</span>
      </a>

      <!-- Desktop Navigation Links -->
      <div class="nav-links" :class="{ 'is-open': isMobileMenuOpen }">
        <a href="#about" @click="closeMobileMenu">{{ t.nav.about }}</a>
        <a href="#capabilities" @click="closeMobileMenu">{{
          t.nav.capabilities
        }}</a>
        <a href="#stack" @click="closeMobileMenu">{{ t.nav.stack }}</a>
        <a href="#projects" @click="closeMobileMenu">{{ t.nav.projects }}</a>
        <a href="#process" @click="closeMobileMenu">{{ t.nav.process }}</a>
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
        <!-- Full-Width 3D Background Layer with Particle Dots -->
        <div class="hero-scene-layer">
          <Reveal
            class="hero-scene-container"
            :delay="0"
            :reduced="prefersReducedMotion"
          >
            <HeroScene :profile-image="profileImageHero" :language="language" />
          </Reveal>
        </div>

        <!-- Split Screen: Text Left, Photo Right -->
        <div class="hero-split-layout">
          <!-- Left: Text Content -->
          <Reveal class="hero-copy-left" :reduced="prefersReducedMotion">
            <p class="eyebrow">M Rakan Naufal</p>
            <h1 id="hero-title">
              <span v-for="line in t.hero.headline" :key="line">{{
                line
              }}</span>
            </h1>
            <p class="hero-summary">{{ t.hero.summary }}</p>
            <div class="hero-actions">
              <a class="button button-primary" href="#projects">{{
                t.hero.projects
              }}</a>
              <a class="button button-secondary" href="#contact">{{
                t.hero.contact
              }}</a>
            </div>
          </Reveal>

          <!-- Right: Photo with 3D Icons Orbiting Above Hands -->
          <Reveal
            class="hero-photo-right"
            :delay="100"
            :reduced="prefersReducedMotion"
          >
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

              <!-- Left Hand Icons (8 icons) -->
              <div
                class="hand-orbit-container hand-orbit-left"
                v-if="!prefersReducedMotion"
              >
                <div class="hand-orbit-ring">
                  <div class="hand-orbit-icon hand-icon-l1">
                    <span class="icon-3d-layer icon-layer-1"></span>
                    <span class="icon-3d-layer icon-layer-2"></span>
                    <span class="icon-3d-layer icon-layer-3"></span>
                    <img
                      class="icon-face icon-front"
                      src="/icons/vue.svg"
                      alt="Vue.js"
                      width="40"
                      height="40"
                    />
                    <img
                      class="icon-face icon-back"
                      src="/icons/vue.svg"
                      alt="Vue.js"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div class="hand-orbit-icon hand-icon-l2">
                    <span class="icon-3d-layer icon-layer-1"></span>
                    <span class="icon-3d-layer icon-layer-2"></span>
                    <span class="icon-3d-layer icon-layer-3"></span>
                    <img
                      class="icon-face icon-front"
                      src="/icons/typescript.svg"
                      alt="TypeScript"
                      width="40"
                      height="40"
                    />
                    <img
                      class="icon-face icon-back"
                      src="/icons/typescript.svg"
                      alt="TypeScript"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div class="hand-orbit-icon hand-icon-l3">
                    <span class="icon-3d-layer icon-layer-1"></span>
                    <span class="icon-3d-layer icon-layer-2"></span>
                    <span class="icon-3d-layer icon-layer-3"></span>
                    <img
                      class="icon-face icon-front"
                      src="/icons/nodejs.svg"
                      alt="Node.js"
                      width="40"
                      height="40"
                    />
                    <img
                      class="icon-face icon-back"
                      src="/icons/nodejs.svg"
                      alt="Node.js"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div class="hand-orbit-icon hand-icon-l4">
                    <span class="icon-3d-layer icon-layer-1"></span>
                    <span class="icon-3d-layer icon-layer-2"></span>
                    <span class="icon-3d-layer icon-layer-3"></span>
                    <img
                      class="icon-face icon-front"
                      src="/icons/python.svg"
                      alt="Python"
                      width="40"
                      height="40"
                    />
                    <img
                      class="icon-face icon-back"
                      src="/icons/python.svg"
                      alt="Python"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div class="hand-orbit-icon hand-icon-l5">
                    <span class="icon-3d-layer icon-layer-1"></span>
                    <span class="icon-3d-layer icon-layer-2"></span>
                    <span class="icon-3d-layer icon-layer-3"></span>
                    <img
                      class="icon-face icon-front"
                      src="/icons/tensorflow.svg"
                      alt="TensorFlow"
                      width="40"
                      height="40"
                    />
                    <img
                      class="icon-face icon-back"
                      src="/icons/tensorflow.svg"
                      alt="TensorFlow"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div class="hand-orbit-icon hand-icon-l6">
                    <span class="icon-3d-layer icon-layer-1"></span>
                    <span class="icon-3d-layer icon-layer-2"></span>
                    <span class="icon-3d-layer icon-layer-3"></span>
                    <img
                      class="icon-face icon-front"
                      src="/icons/git.svg"
                      alt="Git"
                      width="40"
                      height="40"
                    />
                    <img
                      class="icon-face icon-back"
                      src="/icons/git.svg"
                      alt="Git"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div class="hand-orbit-icon hand-icon-l7">
                    <span class="icon-3d-layer icon-layer-1"></span>
                    <span class="icon-3d-layer icon-layer-2"></span>
                    <span class="icon-3d-layer icon-layer-3"></span>
                    <img
                      class="icon-face icon-front"
                      src="/icons/figma.svg"
                      alt="Figma"
                      width="40"
                      height="40"
                    />
                    <img
                      class="icon-face icon-back"
                      src="/icons/figma.svg"
                      alt="Figma"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div class="hand-orbit-icon hand-icon-l8">
                    <span class="icon-3d-layer icon-layer-1"></span>
                    <span class="icon-3d-layer icon-layer-2"></span>
                    <span class="icon-3d-layer icon-layer-3"></span>
                    <img
                      class="icon-face icon-front"
                      src="/icons/vue.svg"
                      alt="Vue.js"
                      width="40"
                      height="40"
                    />
                    <img
                      class="icon-face icon-back"
                      src="/icons/vue.svg"
                      alt="Vue.js"
                      width="40"
                      height="40"
                    />
                  </div>
                </div>
              </div>

              <!-- Right Hand Icons (8 icons) -->
              <div
                class="hand-orbit-container hand-orbit-right"
                v-if="!prefersReducedMotion"
              >
                <div class="hand-orbit-ring">
                  <div class="hand-orbit-icon hand-icon-r1">
                    <span class="icon-3d-layer icon-layer-1"></span>
                    <span class="icon-3d-layer icon-layer-2"></span>
                    <span class="icon-3d-layer icon-layer-3"></span>
                    <img
                      class="icon-face icon-front"
                      src="/icons/arduino.svg"
                      alt="Arduino"
                      width="40"
                      height="40"
                    />
                    <img
                      class="icon-face icon-back"
                      src="/icons/arduino.svg"
                      alt="Arduino"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div class="hand-orbit-icon hand-icon-r2">
                    <span class="icon-3d-layer icon-layer-1"></span>
                    <span class="icon-3d-layer icon-layer-2"></span>
                    <span class="icon-3d-layer icon-layer-3"></span>
                    <img
                      class="icon-face icon-front"
                      src="/icons/esp32.svg"
                      alt="ESP32"
                      width="40"
                      height="40"
                    />
                    <img
                      class="icon-face icon-back"
                      src="/icons/esp32.svg"
                      alt="ESP32"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div class="hand-orbit-icon hand-icon-r3">
                    <span class="icon-3d-layer icon-layer-1"></span>
                    <span class="icon-3d-layer icon-layer-2"></span>
                    <span class="icon-3d-layer icon-layer-3"></span>
                    <img
                      class="icon-face icon-front"
                      src="/icons/mqtt.svg"
                      alt="MQTT"
                      width="40"
                      height="40"
                    />
                    <img
                      class="icon-face icon-back"
                      src="/icons/mqtt.svg"
                      alt="MQTT"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div class="hand-orbit-icon hand-icon-r4">
                    <span class="icon-3d-layer icon-layer-1"></span>
                    <span class="icon-3d-layer icon-layer-2"></span>
                    <span class="icon-3d-layer icon-layer-3"></span>
                    <img
                      class="icon-face icon-front"
                      src="/icons/python.svg"
                      alt="Python"
                      width="40"
                      height="40"
                    />
                    <img
                      class="icon-face icon-back"
                      src="/icons/python.svg"
                      alt="Python"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div class="hand-orbit-icon hand-icon-r5">
                    <span class="icon-3d-layer icon-layer-1"></span>
                    <span class="icon-3d-layer icon-layer-2"></span>
                    <span class="icon-3d-layer icon-layer-3"></span>
                    <img
                      class="icon-face icon-front"
                      src="/icons/nodejs.svg"
                      alt="Node.js"
                      width="40"
                      height="40"
                    />
                    <img
                      class="icon-face icon-back"
                      src="/icons/nodejs.svg"
                      alt="Node.js"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div class="hand-orbit-icon hand-icon-r6">
                    <span class="icon-3d-layer icon-layer-1"></span>
                    <span class="icon-3d-layer icon-layer-2"></span>
                    <span class="icon-3d-layer icon-layer-3"></span>
                    <img
                      class="icon-face icon-front"
                      src="/icons/typescript.svg"
                      alt="TypeScript"
                      width="40"
                      height="40"
                    />
                    <img
                      class="icon-face icon-back"
                      src="/icons/typescript.svg"
                      alt="TypeScript"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div class="hand-orbit-icon hand-icon-r7">
                    <span class="icon-3d-layer icon-layer-1"></span>
                    <span class="icon-3d-layer icon-layer-2"></span>
                    <span class="icon-3d-layer icon-layer-3"></span>
                    <img
                      class="icon-face icon-front"
                      src="/icons/git.svg"
                      alt="Git"
                      width="40"
                      height="40"
                    />
                    <img
                      class="icon-face icon-back"
                      src="/icons/git.svg"
                      alt="Git"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div class="hand-orbit-icon hand-icon-r8">
                    <span class="icon-3d-layer icon-layer-1"></span>
                    <span class="icon-3d-layer icon-layer-2"></span>
                    <span class="icon-3d-layer icon-layer-3"></span>
                    <img
                      class="icon-face icon-front"
                      src="/icons/figma.svg"
                      alt="Figma"
                      width="40"
                      height="40"
                    />
                    <img
                      class="icon-face icon-back"
                      src="/icons/figma.svg"
                      alt="Figma"
                      width="40"
                      height="40"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
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

      <section
        id="capabilities"
        class="capabilities-section section-shell"
        aria-labelledby="capabilities-title"
      >
        <Reveal
          class="section-heading capabilities-heading"
          :reduced="prefersReducedMotion"
        >
          <h2 id="capabilities-title">{{ t.capabilities.title }}</h2>
          <p>{{ t.capabilities.body }}</p>
        </Reveal>

        <div class="capabilities-grid">
          <Reveal
            class="capability capability-web"
            :delay="30"
            :reduced="prefersReducedMotion"
          >
            <div class="capability-content">
              <span class="capability-index">{{
                t.capabilities.cards[0].label
              }}</span>
              <h3>{{ t.capabilities.cards[0].title }}</h3>
              <p>{{ t.capabilities.cards[0].body }}</p>
            </div>
            <div class="capability-art capability-art-web">
              <img
                src="https://cdn.simpleicons.org/vuedotjs/33D6FF"
                alt="Vue.js logo"
                width="80"
                height="80"
                loading="lazy"
                decoding="async"
              />
              <img
                src="https://cdn.simpleicons.org/typescript/33D6FF"
                alt="TypeScript logo"
                width="80"
                height="80"
                loading="lazy"
                decoding="async"
              />
              <img
                src="https://cdn.simpleicons.org/nodedotjs/33D6FF"
                alt="Node.js logo"
                width="80"
                height="80"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>

          <Reveal
            class="capability capability-ai"
            :delay="90"
            :reduced="prefersReducedMotion"
          >
            <div class="capability-art capability-art-ai">
              <img
                src="https://cdn.simpleicons.org/python/33D6FF"
                alt="Python logo"
                width="80"
                height="80"
                loading="lazy"
                decoding="async"
              />
              <img
                src="https://cdn.simpleicons.org/tensorflow/33D6FF"
                alt="TensorFlow logo"
                width="80"
                height="80"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="capability-content">
              <span class="capability-index">{{
                t.capabilities.cards[1].label
              }}</span>
              <h3>{{ t.capabilities.cards[1].title }}</h3>
              <p>{{ t.capabilities.cards[1].body }}</p>
            </div>
          </Reveal>

          <Reveal
            class="capability capability-iot"
            :delay="150"
            :reduced="prefersReducedMotion"
          >
            <div class="capability-content">
              <span class="capability-index">{{
                t.capabilities.cards[2].label
              }}</span>
              <h3>{{ t.capabilities.cards[2].title }}</h3>
              <p>{{ t.capabilities.cards[2].body }}</p>
            </div>
            <div class="capability-art capability-art-iot">
              <img
                src="https://cdn.simpleicons.org/arduino/33D6FF"
                alt="Arduino logo"
                width="80"
                height="80"
                loading="lazy"
                decoding="async"
              />
              <img
                src="https://cdn.simpleicons.org/espressif/33D6FF"
                alt="Espressif logo"
                width="80"
                height="80"
                loading="lazy"
                decoding="async"
              />
              <img
                src="https://cdn.simpleicons.org/mqtt/33D6FF"
                alt="MQTT logo"
                width="80"
                height="80"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        </div>
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
                  :src="`https://cdn.simpleicons.org/${technology.slug}/33D6FF`"
                  :alt="`${technology.name}: ${technology.use}`"
                  width="26"
                  height="26"
                  loading="lazy"
                  decoding="async"
                />
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
                <div class="project-links">
                  <a
                    v-if="project.demo"
                    :href="project.demo"
                    target="_blank"
                    rel="noreferrer"
                    >{{ t.projects.labels.demo }}</a
                  >
                  <a
                    v-if="project.source"
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
        id="process"
        class="process-section section-shell"
        aria-labelledby="process-title"
      >
        <Reveal class="process-intro" :reduced="prefersReducedMotion">
          <h2 id="process-title">{{ t.process.title }}</h2>
          <p>{{ t.process.body }}</p>
        </Reveal>

        <ol class="process-track">
          <Reveal
            v-for="(item, index) in t.process.items"
            :key="item.title"
            :delay="index * 80"
            :reduced="prefersReducedMotion"
          >
            <li>
              <h3>{{ item.title }}</h3>
              <p>{{ item.detail }}</p>
            </li>
          </Reveal>
        </ol>
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
              >{{ contact.email }}</a
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
