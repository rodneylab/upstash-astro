<script lang="ts">
	import type { Note } from '~types/note';

	export let note: Note;

	const { id, text, title } = note;

	function handleCancel() {
		const searchParams = new URLSearchParams({ note: id });
		window.location.replace(`/?${searchParams}`);
	}
</script>

<div class="container">
	<form class="wrapper" action="/api" method="post">
		<label for="note-title">Title</label>
		<input id="note-title" type="text" name="title" placeholder="Note title" value={title} />
		<label for="note-text">Note text</label>
		<textarea id="note-text" rows="3" name="text" placeholder="Note text" value={text} />
		<input type="hidden" name="id" value={id} />
		<input type="hidden" name="action" value="update" />
		<div class="buttons">
			<button on:click|preventDefault={handleCancel} class="secondary-button">Cancel</button>
			<button>Save changes</button>
		</div>
		<noscript>Enable JavaScript to use all features.</noscript>
	</form>
</div>

<style>
	.container {
		padding: var(--spacing-0) var(--spacing-4);
		background-color: var(--colour-alt);
		border-left: var(--spacing-px) solid var(--colour-brand);
		height: var(--body-height);
		border-radius: var(--spacing-0) var(--spacing-0) var(--spacing-1) var(--spacing-0);
	}
	.wrapper {
		width: min(100% - var(--spacing-16), var(--max-width-wrapper));
		margin: var(--spacing-0) auto;
		padding: var(--spacing-4);
		font-size: var(--font-size-2);
		overflow-y: auto;
	}

	.buttons {
		display: flex;
	}

	.secondary-button {
		margin-left: auto;
		margin-right: var(--spacing-6);
		background-color: var(--colour-light);
		color: var(--colour-theme);
		border-color: var(--colour-theme);
	}

	label {
		width: var(--max-width-full);
		padding-right: auto;
		font-weight: var(--font-weight-bold);
	}

	input,
	textarea {
		border: var(--spacing-px) solid var(--colour-brand);
		border-radius: var(--spacing-1);
		font-size: var(--font-size-2);
		resize: none;
		width: var(--max-width-full);
		max-width: var(--max-width-full);
		margin-bottom: var(--spacing-6);
		text-indent: var(--spacing-2);
		padding: var(--spacing-1) var(--spacing-0);
		font-family: var(--font-family-body);
	}

	button {
		display: block;
		margin-top: var(--spacing-2);
		margin-bottom: var(--spacing-4);
		cursor: pointer;
		background-color: var(--colour-theme);
		color: var(--colour-light);
		accent-color: var(--colour-light);
		border: var(--spacing-px-2) solid var(--colour-light);
		border-radius: var(--spacing-1);
		padding: var(--spacing-1) var(--spacing-4);
		font-family: var(--font-family-body);
		font-size: var(--font-size-2);
	}

	button:focus,
	button:hover {
		border-color: var(--colour-dark);
		background-color: var(--colour-alt);
		color: inherit;
	}
</style>
