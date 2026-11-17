import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
export const registrations = sqliteTable('registrations', {
 id: text('id').primaryKey(), student: text('student').notNull(), birth: text('birth').notNull(), guardian: text('guardian').notNull(), phone: text('phone').notNull(), notes: text('notes').notNull(), status: text('status').notNull().default('Novo interesse'), created: text('created').notNull(), consent: text('consent').notNull(),
});
