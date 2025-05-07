const { sql } = require('@vercel/postgres');

const main = async () => {
  await sql`
    ALTER TABLE users ALTER COLUMN password DROP NOT NULL;
  `
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to migrate the database:',
    err,
  );
});
