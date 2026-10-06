let observer: IntersectionObserver | undefined;

function getObserver(): IntersectionObserver {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          observer!.unobserve(entry.target);
          entry.target.classList.add("revealed");
        }
      }
    },
    { rootMargin: "0px 0px -60px 0px", threshold: 0 }
  );
  return observer;
}

/**
 * Svelte action: keeps the element hidden until it scrolls near the
 * viewport, then reveals it with the global `.reveal` fade-in-up
 * transition (see app.css).
 *
 * `delay` (ms) staggers elements that enter the viewport together.
 */
export function reveal(node: HTMLElement, delay = 0) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // Already visible on load → keep it visible for an instant first paint
  if (node.getBoundingClientRect().top < window.innerHeight) return;

  if (delay > 0) node.style.transitionDelay = `${delay}ms`;
  node.classList.add("reveal");
  getObserver().observe(node);

  return {
    destroy() {
      observer?.unobserve(node);
      node.classList.remove("reveal", "revealed");
      node.style.transitionDelay = "";
    },
  };
}
