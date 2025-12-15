<script>
  let name = "";
  let email = "";
  let message = "";
  let isSubmitting = false;
  let submitSuccess = false;
  let submitError = "";

  const contactMethods = [
    {
      icon: "✉️",
      label: "Email",
      value: "contact@imfathi.com",
      href: "mailto:contact@imfathi.com",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/fathi-abdelmalek",
      href: "https://linkedin.com/in/fathi-abdelmalek",
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "github.com/fathiabdelmalek",
      href: "https://github.com/fathiabdelmalek",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    isSubmitting = true;
    submitSuccess = false;
    submitError = "";

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success
      submitSuccess = true;
      name = "";
      email = "";
      message = "";
      setTimeout(() => (submitSuccess = false), 5000);
    } catch (error) {
      submitError =
        "There was an error sending your message. Please try again.";
    } finally {
      isSubmitting = false;
    }
  };
</script>

<section id="contact" class="py-32 px-5">
  <div class="max-w-6xl mx-auto">
    <!-- Section Header -->
    <div class="text-center mb-20">
      <p class="text-sm font-medium text-text-secondary tracking-widest uppercase mb-4">
        Let's Connect
      </p>
      <h2 class="text-5xl sm:text-6xl font-bold text-text-primary mb-6">
        Get In Touch
      </h2>
      <p class="text-lg text-text-tertiary max-w-2xl mx-auto">
        Have a question or project in mind? I'd love to hear from you. Reach out through any of these channels.
      </p>
    </div>

    <!-- Contact Methods Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
      {#each contactMethods as method}
        <a
          href={method.href}
          target="_blank"
          rel="noopener noreferrer"
          class="group relative bg-bg-surface hover:bg-bg-surface-elevated border border-border-primary rounded-xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div class="text-4xl mb-4">{method.icon}</div>
          <h3 class="text-lg font-semibold text-text-primary mb-2 group-hover:text-brand-primary transition-colors duration-200">
            {method.label}
          </h3>
          <p class="text-sm text-text-tertiary group-hover:text-text-secondary transition-colors duration-200">
            {method.value}
          </p>
          <div class="absolute inset-0 rounded-xl border-2 border-brand-primary/0 group-hover:border-brand-primary/20 transition-all duration-300 pointer-events-none"></div>
        </a>
      {/each}
    </div>

    <!-- Divider -->
    <div class="flex items-center gap-4 mb-20">
      <div class="flex-1 h-px bg-border-primary/50"></div>
      <span class="text-text-muted text-sm font-medium uppercase tracking-wide">Or Send A Message</span>
      <div class="flex-1 h-px bg-border-primary/50"></div>
    </div>

    <!-- Contact Form -->
    <div class="max-w-2xl mx-auto">
      <div class="bg-bg-surface border border-border-primary rounded-2xl p-8 md:p-12 shadow-lg">
        {#if submitSuccess}
          <div
            class="mb-6 p-4 bg-semantic-success/20 border border-semantic-success rounded-lg"
            role="alert"
          >
            <div class="flex items-center gap-3">
              <span class="text-lg">✓</span>
              <div>
                <p class="font-semibold text-semantic-success">Message Sent!</p>
                <p class="text-sm text-semantic-success/80">Thank you for your message. I'll get back to you soon.</p>
              </div>
            </div>
          </div>
        {/if}

        {#if submitError}
          <div
            class="mb-6 p-4 bg-semantic-error/20 border border-semantic-error rounded-lg"
            role="alert"
          >
            <div class="flex items-center gap-3">
              <span class="text-lg">✕</span>
              <div>
                <p class="font-semibold text-semantic-error">Error</p>
                <p class="text-sm text-semantic-error/80">{submitError}</p>
              </div>
            </div>
          </div>
        {/if}

        <form on:submit={handleSubmit} class="space-y-6">
          <!-- Name Field -->
          <div>
            <label for="name" class="block text-sm font-semibold text-text-primary mb-3">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              bind:value={name}
              required
              class="w-full px-4 py-3 bg-bg-primary border border-border-primary text-text-primary rounded-lg placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200"
              placeholder="John Doe"
            />
          </div>

          <!-- Email Field -->
          <div>
            <label for="email" class="block text-sm font-semibold text-text-primary mb-3">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              bind:value={email}
              required
              class="w-full px-4 py-3 bg-bg-primary border border-border-primary text-text-primary rounded-lg placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200"
              placeholder="john@example.com"
            />
          </div>

          <!-- Message Field -->
          <div>
            <label for="message" class="block text-sm font-semibold text-text-primary mb-3">
              Message
            </label>
            <textarea
              id="message"
              bind:value={message}
              rows="6"
              required
              class="w-full px-4 py-3 bg-bg-primary border border-border-primary text-text-primary rounded-lg placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Your message here..."
            ></textarea>
            <p class="text-xs text-text-muted mt-2">Character count: {message.length}/1000</p>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            disabled={isSubmitting}
            class="w-full px-6 py-4 text-sm font-semibold text-white bg-brand-primary hover:bg-brand-primary-hover disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            {#if isSubmitting}
              <span class="inline-flex items-center gap-2">
                <span class="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </span>
            {:else}
              Send Message
            {/if}
          </button>

          <p class="text-xs text-text-muted text-center">
            I'll get back to you within 24 hours.
          </p>
        </form>
      </div>
    </div>
  </div>
</section>
