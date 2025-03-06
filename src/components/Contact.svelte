<script>
  let name = "";
  let email = "";
  let message = "";
  let isSubmitting = false;
  let submitSuccess = false;
  let submitError = "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    isSubmitting = true;
    submitSuccess = false;
    submitError = "";

    // Here you would add your actual form submission logic
    // This is a placeholder for demonstration
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success
      submitSuccess = true;
      name = "";
      email = "";
      message = "";
    } catch (error) {
      submitError =
        "There was an error sending your message. Please try again.";
    } finally {
      isSubmitting = false;
    }
  };
</script>

<section id="contact" class="min-h-screen bg-primary/5 section-container">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Contact Me</h2>

    <div class="bg-background rounded-lg shadow-lg p-8">
      {#if submitSuccess}
        <div
          class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
          role="alert"
        >
          <p>Thank you for your message! I'll get back to you soon.</p>
        </div>
      {/if}

      {#if submitError}
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6"
          role="alert"
        >
          <p>{submitError}</p>
        </div>
      {/if}

      <form on:submit={handleSubmit} class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            id="name"
            bind:value={name}
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium mb-1">Email</label
          >
          <input
            type="email"
            id="email"
            bind:value={email}
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium mb-1"
            >Message</label
          >
          <textarea
            id="message"
            bind:value={message}
            rows="4"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          ></textarea>
        </div>

        <button type="submit" class="btn w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  </div>
</section>
