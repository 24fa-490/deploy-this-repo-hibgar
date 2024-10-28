# Starter Pack for using PostgreSQL with Svelte and SvelteKit

## uses 'postgres' npm package

# running:

1. git clone this

2. Install PostgreSQL on your computer, or sign up for a hosted instance

3. Create a database (e.g., 'containers')

4. Open a PSQL window and paste in the schema (from ```schema.sql```) in it.
   * If you are exporting a SQLite3 DB, you need to tweak it before it will work.

5. create ```.env``` file with contents ```PGCONNECT=postgres://bjmckenz@localhost:5432/containers``` in the project root (NOT inside SRC)
   * Substitute at least your name, and perhaps where your DB is installed.

5.5. I recommend installing the "PostgreSQL" VSCode extension by Weijan Chen so you can investigate the DB.

6. npm install

7. npm run dev

*Comments and feedback welcome!*

# Where am I deployed?

https://deploy-this-repo-hibgar-aph9-mfsrowixd-hibamughals-projects.vercel.app/


