import { integer, pgTable, varchar, date } from 'drizzle-orm/pg-core';

export const articlesTable = pgTable('articles', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  date: date().notNull(),
  content: varchar({ length: 2047 }).notNull(),
});