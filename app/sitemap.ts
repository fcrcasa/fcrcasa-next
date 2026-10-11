import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://fcrcasa.it";

    // Static pages
    const staticPages = [
        "",
        "/chi-siamo",
        "/contatti",
        "/i-nostri-lavori",
        "/blog",
        "/privacy-policy",
        "/cookie-policy",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : route === "/contatti" ? 0.9 : route === "/blog" ? 0.8 : 0.8,
    }));

    // Dynamic project pages
    const projects = [
        "villa-treviglio",
        "ville-trescore",
        "tetto-martinengo",
        "corte-covo",
        "ristrutturazione-bagni",
        "farmacia-maridati",
    ].map((slug) => ({
        url: `${baseUrl}/i-nostri-lavori/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    // Blog articles
    const blogPosts = getAllPosts().map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...staticPages, ...projects, ...blogPosts];
}
