<script lang="ts">
	import "../app.css";
	import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";
	import BackToTop from "../components/BackToTop.svelte";
	import ToastContainer from "../components/ToastContainer.svelte";

	let { children } = $props();
</script>

<Header />
{@render children()}
<BackToTop />
<ToastContainer />
<Footer />
