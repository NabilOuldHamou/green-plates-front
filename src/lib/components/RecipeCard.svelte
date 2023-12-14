<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<div class="bg-background w-72 h-72 sm:h-80 sm:w-80 max-w-xs max-h-80 py-5 rounded-xl drop-shadow-xl">
	<h1 class="text-center text-xl font-semibold border-b border-black mb-2">{title}</h1>
	<div class="w-1/2 h-1/2 bg-amber-400">a</div>
	<p>{description}</p>
</div>