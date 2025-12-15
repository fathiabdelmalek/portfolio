<script>
  import faceImage from "$lib/assets/face.png";

  const highlights = [
    { icon: "🎓", title: "PhD Student", description: "Artificial Intelligence & Deep Learning" },
    { icon: "💻", title: "6+ Years", description: "Python & Software Engineering" },
    { icon: "🚀", title: "Problem Solver", description: "Building intelligent solutions" },
    { icon: "🎯", title: "Full-Stack", description: "Backend, AI, and emerging tech" },
  ];

  const interests = [
    "Machine Learning",
    "Deep Learning",
    "Software Architecture",
    "AI Applications",
    "Chess & Strategy Games",
    "History",
  ];
</script>

<section id="about" class="py-32 px-5">
  <div class="max-w-6xl mx-auto">
    <!-- Section Header -->
    <div class="text-center mb-20">
      <p class="text-sm font-medium text-text-secondary tracking-widest uppercase mb-4">
        Get To Know Me
      </p>
      <h2 class="text-5xl sm:text-6xl font-bold text-text-primary mb-6">
        About Fathi
      </h2>
      <p class="text-lg text-text-tertiary max-w-2xl mx-auto">
        PhD Student | Software Engineer | AI Enthusiast
      </p>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
      <!-- Image Section -->
      <div class="flex justify-center lg:justify-start">
        <div class="relative group">
          <!-- Decorative background -->
          <div class="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <!-- Image -->
          <div class="relative aspect-square rounded-2xl overflow-hidden border border-border-primary/50 shadow-2xl">
            <img
              src={faceImage}
              alt="Fathi Abdelmalek"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <!-- Overlay gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      <!-- Bio Section -->
      <div class="space-y-8">
        <!-- Main Bio -->
        <div class="space-y-4">
          <h3 class="text-2xl font-semibold text-text-primary">
            Innovative Engineer & AI Explorer
          </h3>
          <p class="text-text-secondary leading-relaxed text-lg">
            I'm a passionate software engineer with a master's degree in computer science and information systems. Over 6+ years of professional experience, I've honed my skills in building scalable, efficient systems with a special focus on Python and emerging technologies.
          </p>
        </div>

        <!-- Current Focus -->
        <div class="bg-bg-surface-muted/50 border border-border-primary/50 rounded-xl p-6">
          <h3 class="text-sm font-semibold text-brand-primary mb-2 uppercase tracking-wide">Current Focus</h3>
          <p class="text-text-secondary">
            Currently pursuing a PhD in Artificial Intelligence and its applications, where I'm exploring advanced machine learning and deep learning technologies. I bridge theoretical concepts with real-world solutions through hands-on research and development.
          </p>
        </div>

        <!-- Personal Touch -->
        <div class="space-y-2">
          <p class="text-text-secondary leading-relaxed">
            Beyond code, I'm fascinated by history and strategic games like chess. I believe continuous learning and intellectual challenges are essential for personal and professional growth.
          </p>
        </div>
      </div>
    </div>

    <!-- Highlights Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
      {#each highlights as item, i}
        <div
          class="group relative bg-bg-surface hover:bg-bg-surface-elevated border border-border-primary rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div class="text-4xl mb-3">{item.icon}</div>
          <h4 class="font-semibold text-text-primary mb-1 text-sm">{item.title}</h4>
          <p class="text-xs text-text-tertiary">{item.description}</p>
        </div>
      {/each}
    </div>

    <!-- Interests Section -->
    <div class="bg-gradient-to-r from-bg-surface-muted/30 to-bg-surface-muted/50 border border-border-primary/50 rounded-2xl p-8 md:p-12">
      <h3 class="text-2xl font-semibold text-text-primary mb-8">Areas of Interest</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {#each interests as interest}
          <div class="flex items-center gap-3">
            <div class="w-2 h-2 rounded-full bg-brand-primary flex-shrink-0"></div>
            <span class="text-text-secondary">{interest}</span>
          </div>
        {/each}
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center mt-16">
      <p class="text-text-tertiary mb-6">Interested in connecting?</p>
      <a
        href="#contact"
        class="inline-flex items-center gap-2 px-8 py-3 bg-brand-primary hover:bg-brand-primary-hover text-white font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
      >
        Let's Work Together
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </div>
  </div>
</section>

<div class="border-t border-border-primary my-16"></div>
