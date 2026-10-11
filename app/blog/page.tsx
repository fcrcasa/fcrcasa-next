import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | FCR Casa — Impresa Edile Bergamo",
  description:
    "Consigli, guide e aggiornamenti su ristrutturazioni e costruzioni a Bergamo e provincia.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="pt-32 pb-20 min-h-screen bg-[#F5F5F7]">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-4xl">
          <h1 className="font-serif text-5xl text-gray-900 mb-6">Blog</h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Consigli pratici, guide e aggiornamenti su ristrutturazioni,
            nuove costruzioni e lavori edili a Bergamo e provincia.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-gray-500 text-lg">Nessun articolo disponibile al momento.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white border border-gray-200 hover:border-gray-900 transition-colors duration-300 p-8"
              >
                <div className="flex flex-col h-full">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">
                    {new Date(post.date).toLocaleDateString("it-IT", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}{" "}
                    · {post.readingTime}
                  </p>
                  <h2 className="font-serif text-2xl text-gray-900 mb-4 group-hover:opacity-70 transition-opacity leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed flex-1">
                    {post.description}
                  </p>
                  <div className="mt-6 text-sm font-medium text-gray-900 group-hover:opacity-70 transition-opacity">
                    Leggi l&apos;articolo →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
