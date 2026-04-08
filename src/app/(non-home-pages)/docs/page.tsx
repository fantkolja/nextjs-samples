import { db } from '@/lib/db';
import { comments } from '@/lib/schema';
import { desc } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

// Server Action
async function addComment(formData: FormData) {
    'use server';
    const text = formData.get('comment') as string;

    if (text) {
        await db.insert(comments).values({ text });
        revalidatePath('/'); // Оновлюємо сторінку
    }
}

export default async function Page() {
    // Отримуємо коментарі, відсортовані від найновіших
    const allComments = await db.select().from(comments).orderBy(desc(comments.createdAt));

    return (
        <div className="p-8 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Коментарі (Neon + Drizzle)</h1>

            <form action={addComment} className="mb-8 flex gap-2">
                <input
                    type="text"
                    name="comment"
                    placeholder="Напишіть щось..."
                    className="border p-2 rounded flex-grow text-black"
                    required
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Додати
                </button>
            </form>

            <ul className="space-y-2">
                {allComments.map((comment) => (
                    <li key={comment.id} className="p-4 bg-gray-50 border rounded text-black">
                        {comment.text}
                    </li>
                ))}
                {allComments.length === 0 && <p className="text-gray-500">Ще немає коментарів.</p>}
            </ul>
        </div>
    );
}