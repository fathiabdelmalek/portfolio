<script lang="ts">
  const scrollToSection = (e: MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
</script>

<section id="hero" class="min-h-screen flex items-center justify-center section-container">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center space-y-8">
			<!-- Greeting -->
			<div class="space-y-2">
				<p class="text-sm font-medium text-[var(--text-secondary)] tracking-wide uppercase">
					Welcome to my portfolio
				</p>
				<h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] tracking-tight leading-tight">
					Hi, I'm <span class="text-[var(--brand-primary)]">Fathi</span>
				</h1>
			</div>

			<!-- Title/Role -->
			<p class="text-xl sm:text-2xl text-[var(--text-secondary)] font-light max-w-2xl mx-auto leading-relaxed">
				PhD Student in AI · Software Engineer · Building intelligent solutions
			</p>

			<!-- Brief Description -->
			<p class="text-base sm:text-lg text-[var(--text-tertiary)] max-w-xl mx-auto leading-relaxed">
				Passionate about artificial intelligence, machine learning, and creating elegant software that solves real-world problems.
			</p>

			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
				<a 
					href="#projects" 
					on:click={(e) => scrollToSection(e, 'projects')}
					class="px-8 py-3 text-sm font-medium text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
				>
					View My Work
				</a>
				<a 
					href="#contact" 
					on:click={(e) => scrollToSection(e, 'contact')}
					class="px-8 py-3 text-sm font-medium text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-primary)] rounded-lg transition-all duration-200"
				>
					Get In Touch
				</a>
			</div>

			<!-- Scroll Indicator -->
			<div class="pt-12 animate-bounce">
				<a 
					href="#about" 
					on:click={(e) => scrollToSection(e, 'about')}
					class="inline-block text-[var(--text-muted)] hover:text-[var(--brand-primary)] transition-colors duration-200"
					aria-label="Scroll to about section"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</a>
			</div>
    	</div>
	</div>
</section>
