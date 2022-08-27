<script lang="ts">
	import type { Note } from '~types/note';

	export let note: Note;
	export let editMode: boolean = false;

	const { id, title } = note;

	let urlParams = new URLSearchParams({ edit: 'true', note: id });
	const editUrl = `/?${urlParams.toString()}`;
</script>

<div class="container">
	<div class="heading">
		<h2>{title}</h2>
	</div>
	<div class="buttons">
		{#if !editMode}
			<a href={editUrl}>[ edit ]</a>
		{/if}
		<form action="/api" method="post">
			<input type="hidden" name="id" value={id} />
			<input type="hidden" name="action" value="delete" />
			<button>[ delete ]</button>
		</form>
	</div>
</div>

<style>
	h2 {
		margin: var(--spacing-0);
		font-size: var(--font-size-3);
	}

	button {
		cursor: pointer;
		background-color: transparent;
		border-style: none;
		color: inherit;
		font-size: var(--font-size-1);
		font-family: var(--font-family-body);
		padding: var(--spacing-0);
	}

	a {
		color: var(--colour-light);
		font-size: var(--font-size-1);
		font-family: var(--font-family-body);
		text-decoration: none;
	}

	.container {
		display: flex;
		align-items: baseline;
		padding: var(--spacing-4) var(--spacing-6);
		height: var(--heading-row-height);
	}

	.buttons {
		display: flex;
		flex-direction: row;
		margin-left: auto;
		align-items: baseline;
	}
</style>
