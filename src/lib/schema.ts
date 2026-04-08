import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// Описуємо таблицю comments
export const comments = pgTable('comments', {
    id: serial('id').primaryKey(),
    text: text('text').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});