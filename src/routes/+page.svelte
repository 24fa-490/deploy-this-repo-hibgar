<script>
    import { goto } from '$app/navigation';
</script>


<h1>Welcome to simple Client/DB site</h1>
<p>Bits and pieces to get started in Svelte and Sveltekit</p>
<p>SvelteKit using PostgreSQL for a database</p>

<p>Step 1: See how to use a PostgreSQL database</p>
<span class=note>(For this to work, you MUST create a file called .env at the project root, and it must have the following parameter in: "PGCONNECT")</span>
<br/>
<button on:click={() => {goto('/fromDB')}}>Use Database</button>


<p>Step 2: See how to create Svelte components</p>
<span class=note>(uses db, so create the .env file as above)</span>
<br/>
<button on:click={() => {goto('/fromDBandComponents')}}>Use Components</button>


<style>
    .note {
        font-style: italic;
    }
</style>
<a href="/brucetest1">Check out the new page</a>
