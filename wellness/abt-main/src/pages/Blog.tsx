import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import deeptissue from "/deeptissue.jpg";
import sports from "/sports.jpg";
import prenatal from "/prenatal.jpg";
import neuro from "/neuro.jpg";
import deep from "/deep.jpg";
import hotstone from "/hotstone.jpg";

const blogPosts = [
  {
    id: 1,
    title: "5 Signs You Need a Deep Tissue Massage",
    excerpt:
      "Discover the telltale signs that your body is crying out for deep tissue therapy. From chronic tension to limited mobility, learn when it's time to book that appointment.",
    author: "Dr. Sarah Mitchell",
    date: "December 15, 2024",
    readTime: "5 min read",
    category: "Wellness Tips",
    image: deeptissue,
  },
  {
    id: 2,
    title: "The Science Behind Sports Massage Recovery",
    excerpt:
      "Explore how sports massage accelerates muscle recovery, reduces inflammation, and enhances athletic performance backed by scientific research.",
    author: "Michael Thompson",
    date: "December 10, 2024",
    readTime: "7 min read",
    category: "Sports Therapy",
    image: sports,
  },
  {
    id: 3,
    title: "Prenatal Massage: Benefits for Mom and Baby",
    excerpt:
      "Learn how prenatal massage can safely alleviate pregnancy discomfort, reduce stress, and promote better sleep for expecting mothers.",
    author: "Emma Rodriguez",
    date: "December 5, 2024",
    readTime: "6 min read",
    category: "Prenatal Care",
    image: prenatal,
  },
  {
    id: 4,
    title: "Desk Job? Here's How to Combat Tension",
    excerpt:
      "Practical tips and stretches for office workers to prevent and relieve neck, shoulder, and back pain caused by prolonged sitting.",
    author: "James Chen",
    date: "November 28, 2024",
    readTime: "4 min read",
    category: "Lifestyle",
    image: neuro,
  },
  {
    id: 5,
    title: "Understanding the Mind-Body Connection",
    excerpt:
      "Explore how physical therapy and massage can positively impact mental health, reduce anxiety, and improve overall wellbeing.",
    author: "Dr. Sarah Mitchell",
    date: "November 20, 2024",
    readTime: "8 min read",
    category: "Holistic Health",
    image: deep,
  },
  {
    id: 6,
    title: "Hot Stone Therapy: Ancient Healing for Modern Stress",
    excerpt:
      "Discover the centuries-old practice of hot stone therapy and why it remains one of the most effective treatments for stress relief today.",
    author: "James Chen",
    date: "November 15, 2024",
    readTime: "5 min read",
    category: "Treatments",
    image: hotstone,
  },
];

const categories = [
  "All",
  "Wellness Tips",
  "Sports Therapy",
  "Prenatal Care",
  "Lifestyle",
  "Holistic Health",
  "Treatments",
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Wellness Insights
              <br />
              <span className="text-primary">& Expert Advice</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stay informed with the latest tips, research, and insights from
              our team of wellness experts to help you on your health journey.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-card rounded-2xl overflow-hidden shadow-soft group opacity-0 animate-fade-in hover:shadow-medium transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary mb-4">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User size={12} />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Subscribe to our newsletter for weekly wellness tips, exclusive
              offers, and the latest from our blog.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50"
              />
              <Button variant="terracotta" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
