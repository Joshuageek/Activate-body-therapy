import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchResult {
  title: string;
  description: string;
  category: string;
  path: string;
  keywords: string[];
}

const searchableContent: SearchResult[] = [
  // Services
  {
    title: "Deep Tissue Massage",
    description: "Target chronic muscle tension with focused pressure techniques",
    category: "Services",
    path: "/services",
    keywords: ["massage", "deep tissue", "muscle", "tension", "pain", "chronic", "therapy"],
  },
  {
    title: "Sports Therapy",
    description: "Enhance athletic performance and accelerate recovery",
    category: "Services",
    path: "/services",
    keywords: ["sports", "athletic", "performance", "recovery", "injury", "athlete"],
  },
  {
    title: "Swedish Relaxation Massage",
    description: "Gentle flowing strokes for deep relaxation",
    category: "Services",
    path: "/services",
    keywords: ["swedish", "relaxation", "gentle", "calm", "stress", "anxiety"],
  },
  {
    title: "Physical Rehabilitation",
    description: "Evidence-based programs to restore function and reduce pain",
    category: "Services",
    path: "/services",
    keywords: ["physical therapy", "rehabilitation", "rehab", "mobility", "function", "pain"],
  },
  {
    title: "Hot Stone Therapy",
    description: "Heated stones for deep muscle relaxation",
    category: "Services",
    path: "/services",
    keywords: ["hot stone", "heat", "warm", "relaxation", "stones"],
  },
  {
    title: "Prenatal Massage",
    description: "Safe nurturing massage for expecting mothers",
    category: "Services",
    path: "/services",
    keywords: ["prenatal", "pregnancy", "expecting", "mother", "baby"],
  },
  // Products
  {
    title: "Therapeutic Massage Oil",
    description: "Signature blend for relaxation and muscle relief",
    category: "Products",
    path: "/products",
    keywords: ["oil", "massage oil", "essential oil", "aromatherapy"],
  },
  {
    title: "Deep Tissue Roller Set",
    description: "Professional-grade foam rollers for muscle recovery",
    category: "Products",
    path: "/products",
    keywords: ["roller", "foam", "recovery", "muscle", "self-massage"],
  },
  {
    title: "Aromatherapy Candles",
    description: "Hand-poured soy candles with therapeutic scents",
    category: "Products",
    path: "/products",
    keywords: ["candle", "aromatherapy", "scent", "lavender", "relaxation"],
  },
  {
    title: "Pain Relief Balm",
    description: "Natural muscle balm with arnica and CBD",
    category: "Products",
    path: "/products",
    keywords: ["balm", "pain relief", "arnica", "CBD", "natural"],
  },
  // Pages
  {
    title: "Health Club",
    description: "Wellness center with pool, gym, and spa facilities",
    category: "Facilities",
    path: "/health-club",
    keywords: ["health club", "gym", "pool", "spa", "fitness", "wellness", "swimming"],
  },
  {
    title: "Usawa Café",
    description: "Healthy food and drinks menu",
    category: "Dining",
    path: "/usawa",
    keywords: ["usawa", "cafe", "food", "drinks", "smoothie", "healthy", "menu", "breakfast", "lunch"],
  },
  {
    title: "Clinic",
    description: "Professional therapy and treatment clinic",
    category: "Facilities",
    path: "/clinic",
    keywords: ["clinic", "treatment", "therapy", "medical", "professional"],
  },
  {
    title: "Membership",
    description: "Join our wellness community with exclusive benefits",
    category: "Membership",
    path: "/membership",
    keywords: ["membership", "member", "join", "subscribe", "benefits", "discount"],
  },
  {
    title: "Contact Us",
    description: "Get in touch or book an appointment",
    category: "Contact",
    path: "/contact",
    keywords: ["contact", "phone", "email", "appointment", "book", "location", "address"],
  },
  {
    title: "Blog",
    description: "Wellness tips, news, and health articles",
    category: "Blog",
    path: "/blog",
    keywords: ["blog", "articles", "tips", "wellness", "health", "news"],
  },
  // Menu Items (Usawa)
  {
    title: "Smoothies & Juices",
    description: "Fresh healthy smoothies and detox juices",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["smoothie", "juice", "detox", "fruit", "healthy", "drink"],
  },
  {
    title: "Breakfast Menu",
    description: "Pancakes, waffles, eggs, and healthy bowls",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["breakfast", "pancakes", "waffles", "eggs", "oats", "yogurt", "bowl"],
  },
  {
    title: "Salads & Bowls",
    description: "Fresh salads and protein power bowls",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["salad", "bowl", "quinoa", "buddha bowl", "healthy", "vegetables"],
  },
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim().length > 0) {
      const searchTerms = query.toLowerCase().split(" ");
      const filtered = searchableContent.filter((item) => {
        const searchText = `${item.title} ${item.description} ${item.keywords.join(" ")}`.toLowerCase();
        return searchTerms.every((term) => searchText.includes(term));
      });
      setResults(filtered.slice(0, 6));
      setIsOpen(true);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resultsRef.current &&
        !resultsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      handleSelect(results[selectedIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const handleSelect = (result: SearchResult) => {
    navigate(result.path);
    setQuery("");
    setIsOpen(false);
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search services, products, menu..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim() && setIsOpen(true)}
          className="pl-12 pr-10 h-12 text-base bg-card/80 backdrop-blur-sm border-usawa-green/50 rounded-full shadow-soft focus:shadow-medium transition-shadow"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div
          ref={resultsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-card rounded-2xl shadow-medium border border-border overflow-hidden z-50"
        >
          <div className="p-2">
            {results.map((result, index) => (
              <button
                key={`${result.title}-${index}`}
                onClick={() => handleSelect(result)}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-xl transition-colors",
                  selectedIndex === index
                    ? "bg-accent"
                    : "hover:bg-accent/50"
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium text-foreground">{result.title}</p>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {result.description}
                    </p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground whitespace-nowrap">
                    {result.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && query.trim() && results.length === 0 && (
        <div
          ref={resultsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-card rounded-2xl shadow-medium border border-border overflow-hidden z-50"
        >
          <div className="p-6 text-center">
            <p className="text-muted-foreground">No results found for "{query}"</p>
            <p className="text-sm text-muted-foreground mt-1">
              Try searching for services, products, or menu items
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
