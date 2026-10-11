import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: `${post.title} | FCR Casa`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://fcrcasa.it/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://fcrcasa.it/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) notFound();

  return (
    <main className="pt-32 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Breadcrumb */}
        <nav className="mb-10 text-sm text-gray-400 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-gray-900 transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-gray-600 line-clamp-1">{post.title}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">
            {new Date(post.date).toLocaleDateString("it-IT", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {post.readingTime}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed border-b border-gray-100 pb-8">
            {post.description}
          </p>
        </header>

        {/* MDX Content */}
        <article className="prose prose-gray max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-headings:font-normal prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-gray-900 prose-a:underline hover:prose-a:opacity-70 prose-strong:text-gray-900 prose-li:text-gray-700 prose-h2:text-3xl prose-h3:text-2xl prose-h2:mt-10 prose-h3:mt-8">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </article>

        {/* CTA Box */}
        <div className="mt-16 p-8 md:p-10 bg-[#F5F5F7] border border-gray-200">
          <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-3">
            Hai un progetto in mente?
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Richiedi un preventivo gratuito e senza impegno. Il nostro team ti
            risponderà entro 24/48 ore.
          </p>
          <Link
            href="/contatti"
            className="inline-block bg-black text-white px-8 py-3 text-sm font-medium uppercase tracking-[0.15em] hover:bg-gray-800 transition-colors"
          >
            Richiedi preventivo gratuito
          </Link>
        </div>
      </div>
    </main>
  );
}
