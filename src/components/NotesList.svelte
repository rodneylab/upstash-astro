<script lang="ts">
	import type { Note } from '~types/note';

	export let notes: Note[] = [];
	export let selectedId: string | undefined = undefined;
	export let editMode: boolean = false;

	const selectedNote = notes.find(({ id }) => id === selectedId);
</script>

<div class="wrapper">
	<div class="header">
		<h3>Notes</h3>
		{#if !editMode}
			<form action="/api" method="post">
				<input type="hidden" name="action" value="create" />
				<button>[ new ]</button>
			</form>
		{/if}
	</div>
	<div class="list-container">
		{#if editMode && selectedNote}
			{@const { title, modified } = selectedNote}
			{@const dateModified = new Date(modified).toLocaleDateString('en-GB', {
				dateStyle: 'medium',
			})}
			<article aria-posinset={1} aria-setsize={1} aria-current="true">
				<a class="note-card" href={`/?note=${selectedId}`}>
					<div class="note-title">{title}</div>
					<div class="note-date">{dateModified}</div></a
				>
			</article>
		{:else}
			{#each notes as { id, title, modified }, index (id)}
				{@const dateModified = new Date(modified).toLocaleDateString('en-GB', {
					dateStyle: 'medium',
				})}
				<article
					aria-posinset={index + 1}
					aria-setsize={notes.length}
					aria-current={id === selectedId}
				>
					<a class="note-card" href={`/?note=${id}`}>
						<div class="note-title">{title}</div>
						<div class="note-date">{dateModified}</div></a
					>
				</article>
			{/each}
		{/if}
	</div>
</div>

<style>
	h3 {
		margin: var(--spacing-0);
		font-size: var(--font-size-3);
		font-family: var(--font-family-heading);
		font-weight: var(--font-weight-normal);
	}

	article a {
		color: var(--colour-dark);
		text-decoration: none;
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

	.wrapper {
		display: flex;
		flex-direction: column;
		background-color: var(--colour-light-tint-60);
		border-radius: var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-1);
	}

	.header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		background-color: var(--colour-theme);
		border-bottom: var(--spacing-px) solid var(--colour-dark);
		color: var(--colour-light);
		padding: var(--spacing-4);
		height: var(--heading-row-height);
		box-sizing: border-box;
	}

	.list-container {
		overflow-y: auto;
		height: var(--body-height);
		border-radius: var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-1);
	}

	.note-card {
		display: block;
		overflow-x: hidden;
		height: auto;
		background-color: var(--colour-light-tint-60);
		padding: var(--spacing-2) var(--spacing-4);
		max-width: var(--max-width-full);
	}

	.note-card:hover {
		background-color: var(--colour-alt-tint-60);
	}

	.note-title {
		padding-top: var(--spacing-1);
		padding-bottom: var(--spacing-2);
		box-sizing: border-box;
	}

	.note-date {
		margin-left: auto;
		max-width: var(--max-width-full);
		font-size: var(--font-size-0);
		text-align: left;
	}

	article[aria-current='true'] .note-card {
		background-color: var(--colour-alt);
		border-bottom: var(--spacing-px) solid var(--colour-theme);
		color: var(--colour-dark);
	}

	article[aria-current='true']:not(:first-child) .note-card {
		border-top: var(--spacing-px) solid var(--colour-theme);
	}

	article[aria-current='true'] .note-title {
		font-weight: var(--font-weight-bold);
	}
</style>
