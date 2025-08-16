"use client";

import { useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
  featured: boolean;
}

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building E-commerce with Serverless: LAAX Resort Platform",
      excerpt:
        "Lessons from architecting a ski resort e-commerce platform with Next.js, Vercel serverless functions, and complex payment integrations.",
      content:
        "Building the LAAX ski resort platform taught me valuable lessons about serverless architecture. I'll share how we handled payment integrations with Stripe and Saferpay, implemented guest checkout flows, and built admin tools for refunds and cancellations. The key was designing for predictable latency while managing complex partner integrations like AXESS gates. I'll also cover how we used Sanity CMS to power an AI assistant that automatically updates with marketing content...",
      date: "2024-10-15",
      readTime: "12 min read",
      tags: ["Next.js", "Serverless", "Payments", "E-commerce", "Vercel"],
      category: "backend",
      featured: true,
    },
    {
      id: 2,
      title: "Cross-Platform Climate App: React Native + Web Architecture",
      excerpt:
        "How I built the Ithake climate tracking app using shared authentication and analytics across React Native and web platforms.",
      content:
        "The Ithake climate app required seamless user experience across mobile and web. I'll detail how we implemented JWT authentication that works across React Native and React/Vite, designed CO₂ quiz flows with complex data models, and integrated Mixpanel for product analytics. The challenge was maintaining design system consistency while building platform-specific optimizations. I'll also share lessons about observability using Sentry and how proper event schema design enables measurable experiments...",
      date: "2024-09-20",
      readTime: "10 min read",
      tags: ["React Native", "Cross-platform", "JWT", "Analytics", "Climate"],
      category: "mobile",
      featured: true,
    },
    {
      id: 3,
      title: "Data Pipelines for Impact: Building Dashboards with Real Purpose",
      excerpt:
        "Creating the Janah impact investment dashboard taught me about building explainable charts and avoiding vanity metrics.",
      content:
        "Working on Janah's impact investment dashboard was about more than data visualization—it was about meaningful measurement. I'll share how I designed data pipelines from field collection to stakeholder-ready visualizations, built admin panels for data validation, and learned to focus on actionable KPIs rather than vanity metrics. The project required end-to-end ownership from scope to delivery, teaching valuable lessons about pragmatic development under funding constraints and stakeholder communication...",
      date: "2024-08-10",
      readTime: "8 min read",
      tags: [
        "Data Visualization",
        "Impact",
        "MongoDB",
        "Charts",
        "Stakeholders",
      ],
      category: "frontend",
      featured: false,
    },
    {
      id: 4,
      title: "Computer Vision in Museums: React Native + Azure Custom Vision",
      excerpt:
        "Building the LVMH Muse app taught me about training custom vision models and mobile camera pipelines for object recognition.",
      content:
        "The LVMH Muse app for museum visitors required recognizing artworks and sculptures in real-time. I'll share my experience with Azure Custom Vision, from dataset curation to handling edge cases in object recognition. The mobile camera pipeline needed careful optimization for on-device UX, and rapid TestFlight iterations were crucial for stakeholder demos. Key lessons include training data collection strategies and balancing recognition accuracy with user experience...",
      date: "2024-07-25",
      readTime: "9 min read",
      tags: ["Computer Vision", "React Native", "Azure", "Museums", "ML"],
      category: "ai",
      featured: false,
    },
    {
      id: 5,
      title: "OCR and Document Processing: From Invoices to Structured Data",
      excerpt:
        "How I built invoice processing systems using Azure OCR and learned about confidence handling and data validation.",
      content:
        "Working on Finotor's invoice OCR system taught me about mapping unstructured documents to domain models. I'll share techniques for handling OCR confidence scores, implementing data validation pipelines, and building reusable UI components for consistent data views. The challenge was balancing extraction accuracy with user experience, requiring careful design of error handling and manual correction flows...",
      date: "2024-06-15",
      readTime: "7 min read",
      tags: ["OCR", "Azure", "Document Processing", "Data Validation"],
      category: "ai",
      featured: false,
    },
    {
      id: 6,
      title: "Web Scraping at Scale: Puppeteer + ML Classification",
      excerpt:
        "Building the iM Global Partner data aggregation system with resilient scraping and Python-based ML scoring services.",
      content:
        "The iM Global Partner project required scraping financial data from multiple portals and classifying it using ML. I'll detail resilient scraping strategies using Puppeteer, handling captchas and rate limiting, and building a Python Flask API for ML classification. Key insights include data quality checks, deduplication strategies, and designing secure service boundaries between JavaScript frontends and Python APIs for financial contexts...",
      date: "2024-05-30",
      readTime: "11 min read",
      tags: ["Web Scraping", "Puppeteer", "Python", "ML", "Finance"],
      category: "backend",
      featured: false,
    },
    {
      id: 7,
      title: "Accessibility in Fintech: Designing for Senior Users",
      excerpt:
        "Lessons from building the Finense onboarding interface with focus on readability and age-appropriate UX patterns.",
      content:
        "The Finense project required creating fintech interfaces specifically optimized for older users. I'll share what I learned about accessibility patterns, readable UI design, form validation strategies, and error recovery flows. The challenge was balancing regulatory requirements with user-friendly experiences, requiring careful attention to contrast ratios, text sizing, and interaction patterns that work for users with varying technical comfort levels...",
      date: "2024-04-20",
      readTime: "6 min read",
      tags: ["Accessibility", "Fintech", "UX", "Forms", "Senior Users"],
      category: "frontend",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", name: "All Posts", count: blogPosts.length },
    {
      id: "backend",
      name: "Backend",
      count: blogPosts.filter((p) => p.category === "backend").length,
    },
    {
      id: "frontend",
      name: "Frontend",
      count: blogPosts.filter((p) => p.category === "frontend").length,
    },
    {
      id: "mobile",
      name: "Mobile",
      count: blogPosts.filter((p) => p.category === "mobile").length,
    },
    {
      id: "ai",
      name: "AI/ML",
      count: blogPosts.filter((p) => p.category === "ai").length,
    },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section id="blog" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Learning Blog
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            Documenting my journey and sharing insights learned while building
            projects. Each post represents real challenges overcome and skills
            acquired.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-lg px-6 py-3 font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-600 dark:bg-gray-800"
            >
              {/* Post Header */}
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(post.date)}
                    </span>
                    <span className="text-gray-300 dark:text-gray-600">•</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.readTime}
                    </span>
                  </div>
                  {post.featured && (
                    <span className="rounded-full bg-yellow-500 px-3 py-1 text-sm font-medium text-white">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="mb-3 cursor-pointer text-xl font-bold text-gray-900 transition-colors hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400">
                  {post.title}
                </h3>

                <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
                  {expandedPost === post.id ? post.content : post.excerpt}
                </p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <button
                  onClick={() =>
                    setExpandedPost(expandedPost === post.id ? null : post.id)
                  }
                  className="font-medium text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  {expandedPost === post.id ? "Read Less" : "Read More"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
