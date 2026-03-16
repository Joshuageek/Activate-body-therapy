import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";

import oil from "/oil.jpg";
import roller from "/roller.jpg";
import candles from "/candles.jpg";
import stones from "/stones.jpg";
import tea from "/tea.jpg";
import giftbox from "/giftbox.jpg";
import balm from "/balm.jpg";
import posture from "/posture.jpg";

const products = [
  {
    id: 1,
    name: "Therapeutic Massage Oil",
    description:
      "Our signature blend of essential oils for deep relaxation and muscle relief. Perfect for home massage.",
    price: 34.99,
    rating: 4.9,
    reviews: 124,
    category: "Oils & Lotions",
    image: oil,
    bestseller: true,
  },
  {
    id: 2,
    name: "Deep Tissue Roller Set",
    description:
      "Professional-grade foam rollers for self-myofascial release and muscle recovery.",
    price: 49.99,
    rating: 4.8,
    reviews: 89,
    category: "Equipment",
    image: roller,
    bestseller: true,
  },
  {
    id: 3,
    name: "Aromatherapy Candle Collection",
    description:
      "Set of 4 hand-poured soy candles with therapeutic scents: Lavender, Eucalyptus, Chamomile, and Bergamot.",
    price: 44.99,
    rating: 4.7,
    reviews: 67,
    category: "Aromatherapy",
    image: candles,
    bestseller: false,
  },
  {
    id: 4,
    name: "Hot Stone Home Kit",
    description:
      "12-piece basalt stone set with heating bag for authentic hot stone therapy at home.",
    price: 79.99,
    rating: 4.9,
    reviews: 45,
    category: "Equipment",
    image: stones,
    bestseller: false,
  },
  {
    id: 5,
    name: "Organic Pain Relief Balm",
    description:
      "All-natural muscle balm with arnica, menthol, and CBD for targeted pain relief.",
    price: 28.99,
    rating: 4.8,
    reviews: 156,
    category: "Oils & Lotions",
    image: balm,
    bestseller: true,
  },
  {
    id: 6,
    name: "Wellness Gift Box",
    description:
      "Curated gift set including massage oil, candle, eye mask, and herbal tea. Perfect for gifting.",
    price: 89.99,
    rating: 5.0,
    reviews: 38,
    category: "Gift Sets",
    image: giftbox,
    bestseller: false,
  },
  {
    id: 7,
    name: "Posture Correction Cushion",
    description:
      "Ergonomic memory foam cushion designed to improve sitting posture and reduce back pain.",
    price: 59.99,
    rating: 4.6,
    reviews: 72,
    category: "Equipment",
    image: posture,
    bestseller: false,
  },
  {
    id: 8,
    name: "Sleep & Recovery Tea",
    description:
      "Organic herbal blend with chamomile, valerian, and passionflower to promote restful sleep.",
    price: 18.99,
    rating: 4.7,
    reviews: 93,
    category: "Wellness",
    image: tea,
    bestseller: false,
  },
];

const categories = [
  "All Products",
  "Oils & Lotions",
  "Equipment",
  "Aromatherapy",
  "Gift Sets",
  "Wellness",
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <Layout>
      {/* Coming Soon Overlay */}
      <div className="relative min-h-screen">
        {/* Blurred Content */}
        <div className="filter blur-sm pointer-events-none">
          {/* Hero Section */}
          <section className="relative py-20 md:py-28 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6">
                  Shop
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                  Wellness Products
                  <br />
                  <span className="text-primary">For Home Care</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Extend your wellness journey beyond the treatment room with our
                  curated collection of therapeutic products, carefully selected by
                  our experts.
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

          {/* Products Grid */}
          <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="bg-card rounded-2xl overflow-hidden shadow-soft group opacity-0 animate-fade-in hover:shadow-medium transition-all duration-300"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="relative aspect-square bg-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      {product.bestseller && (
                        <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                          Bestseller
                        </span>
                      )}
                    </div>

                    <div className="p-5">
                      <span className="text-xs text-muted-foreground">
                        {product.category}
                      </span>
                      <h3 className="text-lg font-serif font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          <Star size={14} className="fill-primary text-primary" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          ({product.reviews} reviews)
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-foreground">
                          UGX{product.price}
                        </span>
                        <Button size="sm" variant="outline">
                          <ShoppingCart size={16} />
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 md:py-28 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  Need Personalized Recommendations?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our therapists can suggest the perfect products to complement your
                  treatment plan. Ask during your next visit or reach out to us!
                </p>
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight size={20} />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>

        {/* Coming Soon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="text-center">
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <ShoppingCart size={32} className="text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4">
                Coming Soon
              </h1>
              <p className="text-xl text-muted-foreground max-w-md mx-auto">
                We're working hard to bring you our curated collection of wellness products.
                Stay tuned for updates!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Get Notified
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
