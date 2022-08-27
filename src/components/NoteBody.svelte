<script lang="ts">
	import type { Note } from '~types/note';

	export let note: Note | undefined;
	const { text = '' } = note ?? {};
</script>

<div class="container">
	<div class="wrapper">{text}</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
		border-left: var(--spacing-px) solid var(--colour-brand);
		padding-bottom: auto;
		height: 100%;
		overflow: auto;
	}
	.wrapper {
		padding: var(--spacing-8) var(--spacing-6);
	}
</style>
