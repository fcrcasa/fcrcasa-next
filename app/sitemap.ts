import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://fcrcasa.it";

    // Static pages
    const staticPages = [
        "",
        "/chi-siamo",
        "/contatti",
        "/i-nostri-lavori",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
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

    return [...staticPages, ...projects];
}
