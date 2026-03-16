import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface SearchResult {
  title: string;
  description: string;
  category: string;
  path: string;
  keywords: string[];
}

export const searchableContent: SearchResult[] = [
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
  {
    title: "Neuromuscular Therapy",
    description: "Addresses chronic muscular and nervous system conditions",
    category: "Services",
    path: "/services",
    keywords: ["neuromuscular", "pain management", "muscle", "nervous", "chronic", "therapy"],
  },
  {
    title: "Physiotherapy",
    description: "Restores movement and physical function",
    category: "Services",
    path: "/services",
    keywords: ["physiotherapy", "movement", "function", "injury", "illness", "disability"],
  },
  {
    title: "Chiropractic Services",
    description: "Improves spinal alignment and joint mobility",
    category: "Services",
    path: "/services",
    keywords: ["chiropractic", "spinal", "alignment", "joint", "mobility", "posture"],
  },
  {
    title: "Rehabilitation & Exercise Therapy",
    description: "Restores physical function following injury",
    category: "Services",
    path: "/services",
    keywords: ["rehabilitation", "exercise therapy", "injury", "mobility", "strength"],
  },
  {
    title: "Acupuncture & Dry Needling",
    description: "Effective techniques for pain management",
    category: "Services",
    path: "/services",
    keywords: ["acupuncture", "dry needling", "pain", "relief", "headache", "inflammation"],
  },
  {
    title: "IV Therapy",
    description: "Delivers essential vitamins and minerals directly into bloodstream",
    category: "Services",
    path: "/services",
    keywords: ["iv therapy", "vitamins", "minerals", "hydration", "energy", "immunity"],
  },
  {
    title: "Weight Management",
    description: "Holistic approach to sustainable weight management",
    category: "Services",
    path: "/services",
    keywords: ["weight management", "nutrition", "exercise", "lifestyle", "health"],
  },
  {
    title: "Aromatherapy Massage",
    description: "Clinically informed treatment using therapeutic essential oils",
    category: "Services",
    path: "/services",
    keywords: ["aromatherapy", "massage", "essential oils", "relaxation", "stress"],
  },
  {
    title: "Therapeutic Massage",
    description: "Personalized clinical massage combining advanced techniques",
    category: "Services",
    path: "/services",
    keywords: ["therapeutic massage", "pain relief", "alignment", "clinical"],
  },
  {
    title: "Body Scrub",
    description: "Professional exfoliation treatment for improved skin texture",
    category: "Services",
    path: "/services",
    keywords: ["body scrub", "exfoliation", "skin", "texture", "circulation"],
  },
  {
    title: "Reflexology",
    description: "Specialized therapy applying pressure to reflex points on feet",
    category: "Services",
    path: "/services",
    keywords: ["reflexology", "feet", "reflex points", "nervous system", "balance"],
  },
  {
    title: "Head & Shoulder Therapy",
    description: "Focused treatment for neck, shoulders, and scalp tension",
    category: "Services",
    path: "/services",
    keywords: ["head", "shoulder", "therapy", "neck", "tension", "headache"],
  },
  {
    title: "Activate Signature Treatment",
    description: "Exclusive experience combining massage, exfoliation, and facial",
    category: "Services",
    path: "/services",
    keywords: ["signature treatment", "luxury", "massage", "facial", "exfoliation"],
  },
  {
    title: "Postnatal Therapy",
    description: "Restorative therapy supporting recovery after childbirth",
    category: "Services",
    path: "/services",
    keywords: ["postnatal", "postpartum", "recovery", "childbirth", "strength"],
  },
  {
    title: "Uterine Therapy",
    description: "Focused abdominal treatment for uterine wellness",
    category: "Services",
    path: "/services",
    keywords: ["uterine", "abdominal", "wellness", "circulation", "hormonal"],
  },
  {
    title: "Mizan Fertility Therapy",
    description: "Holistic treatment supporting reproductive health",
    category: "Services",
    path: "/services",
    keywords: ["fertility", "reproductive", "pelvic", "circulation", "hormonal"],
  },
  {
    title: "Age-Defying Facial",
    description: "Anti-aging treatment to soften fine lines and improve elasticity",
    category: "Services",
    path: "/services",
    keywords: ["facial", "age-defying", "anti-aging", "fine lines", "elasticity"],
  },
  {
    title: "Acne Clearing Facial",
    description: "Therapeutic facial for acne-prone skin",
    category: "Services",
    path: "/services",
    keywords: ["facial", "acne", "clearing", "congested", "oil", "pores"],
  },
  {
    title: "Signature Facial",
    description: "Premium customized facial for unique skin needs",
    category: "Services",
    path: "/services",
    keywords: ["facial", "signature", "customized", "cleansing", "exfoliation"],
  },
  {
    title: "Skin Brightening Facial",
    description: "Corrective facial reducing pigmentation and dullness",
    category: "Services",
    path: "/services",
    keywords: ["facial", "brightening", "pigmentation", "dullness", "tone"],
  },
  {
    title: "Regeneration Facial",
    description: "Restorative treatment for skin repair and renewal",
    category: "Services",
    path: "/services",
    keywords: ["facial", "regeneration", "repair", "renewal", "stressed skin"],
  },
  {
    title: "Miracle Lifting Facial",
    description: "Advanced firming and lifting facial",
    category: "Services",
    path: "/services",
    keywords: ["facial", "lifting", "firming", "tone", "elasticity", "contours"],
  },
  {
    title: "Gold Mask Facial",
    description: "Luxurious facial with 24K gold-infused masks",
    category: "Services",
    path: "/services",
    keywords: ["facial", "gold mask", "luxury", "nourish", "rejuvenate"],
  },
  {
    title: "Sensitive Skin Facial",
    description: "Gentle calming facial for delicate skin",
    category: "Services",
    path: "/services",
    keywords: ["facial", "sensitive", "calming", "redness", "irritation"],
  },
  {
    title: "Hydrating Facial",
    description: "Deeply moisturizing treatment for dehydrated skin",
    category: "Services",
    path: "/services",
    keywords: ["facial", "hydrating", "moisture", "dehydrated", "softness"],
  },
  {
    title: "Calming Facial",
    description: "Soothing facial for stress-related skin concerns",
    category: "Services",
    path: "/services",
    keywords: ["facial", "calming", "stress", "relaxation", "soothing"],
  },
  {
    title: "Mini Facial",
    description: "Quick effective facial for maintenance",
    category: "Services",
    path: "/services",
    keywords: ["facial", "mini", "quick", "maintenance", "cleansing"],
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
  {
    title: "Hot Stone Home Kit",
    description: "Basalt stone set for authentic hot stone therapy at home",
    category: "Products",
    path: "/products",
    keywords: ["hot stone", "kit", "basalt", "home therapy", "stones"],
  },
  {
    title: "Wellness Gift Box",
    description: "Curated gift set with massage oil, candle, eye mask, and tea",
    category: "Products",
    path: "/products",
    keywords: ["gift box", "wellness", "massage oil", "candle", "tea"],
  },
  {
    title: "Posture Correction Cushion",
    description: "Ergonomic memory foam cushion for better posture",
    category: "Products",
    path: "/products",
    keywords: ["cushion", "posture", "ergonomic", "memory foam", "back pain"],
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
  {
    title: "Buttermilk Pancakes",
    description: "Choice of banana, blueberry or choco chip with mascarpone cream and syrup",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["pancakes", "buttermilk", "banana", "blueberry", "choco chip", "breakfast"],
  },
  {
    title: "Waffles",
    description: "Dusted with powdered sugar, served with berries, cream and syrup",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["waffles", "powdered sugar", "berries", "cream", "syrup", "breakfast"],
  },
  {
    title: "Activate Breakfast",
    description: "Scrambled or poached eggs, avocado & toast",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["activate breakfast", "eggs", "avocado", "toast", "breakfast"],
  },
  {
    title: "Eggs Benedict",
    description: "Poached eggs, bacon, hollandaise sauce & toast",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["eggs benedict", "poached eggs", "bacon", "hollandaise", "toast", "breakfast"],
  },
  {
    title: "Full English",
    description: "Eggs, beans, sausage, mushrooms, spinach and toast",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["full english", "eggs", "beans", "sausage", "mushrooms", "spinach", "breakfast"],
  },
  {
    title: "Eggs Norwegian",
    description: "Poached eggs, smoked salmon, hollandaise sauce & toast",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["eggs norwegian", "poached eggs", "smoked salmon", "hollandaise", "toast", "breakfast"],
  },
  {
    title: "Pita Nachos",
    description: "Served with hummus and guacamole",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["pita nachos", "hummus", "guacamole", "pool bites", "snack"],
  },
  {
    title: "Veggie Wrap",
    description: "Whole grain wrap with hummus, cucumber, carrots and halloumi cheese",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["veggie wrap", "whole grain", "hummus", "cucumber", "carrots", "halloumi", "pool bites"],
  },
  {
    title: "Chicken Wrap",
    description: "Whole grain wrap with chicken, hummus, cucumber, carrots and halloumi",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["chicken wrap", "whole grain", "chicken", "hummus", "cucumber", "carrots", "halloumi", "pool bites"],
  },
  {
    title: "DIY Sandwich",
    description: "Choice of grilled chicken, roast beef or fried egg with various toppings",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["diy sandwich", "grilled chicken", "roast beef", "fried egg", "pool bites"],
  },
  {
    title: "Smoked Salmon DIY Sandwich",
    description: "Premium smoked salmon sandwich with choice toppings",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["smoked salmon", "diy sandwich", "premium", "pool bites"],
  },
  {
    title: "Activate Body Burger",
    description: "Choice of beef or grilled herb chicken with cheese, bacon or fried egg",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["burger", "beef", "grilled chicken", "cheese", "bacon", "fried egg", "pool bites"],
  },
  {
    title: "Chicken Tenders",
    description: "Juicy chicken breast strips with crispy coating",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["chicken tenders", "juicy", "crispy", "pool bites"],
  },
  {
    title: "Chicken Wings",
    description: "Marinated with homemade BBQ sauce",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["chicken wings", "bbq sauce", "marinated", "pool bites"],
  },
  {
    title: "Nile Goujons",
    description: "Nile perch fillets in crispy breadcrumbs",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["nile goujons", "perch", "crispy", "breadcrumbs", "pool bites"],
  },
  {
    title: "The Classic Club",
    description: "Crisp lettuce, tomatoes, cheese, chicken, bacon, fried egg on choice bread",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["classic club", "lettuce", "tomatoes", "cheese", "chicken", "bacon", "fried egg", "pool bites"],
  },
  {
    title: "Flatbread",
    description: "Comes with any two toppings",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["flatbread", "toppings", "pool bites"],
  },
  {
    title: "Pizza",
    description: "Comes with any two toppings",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["pizza", "toppings", "pool bites"],
  },
  {
    title: "Protein Power Bowl",
    description: "Tofu or grilled chicken, quinoa salad with vegetables and lemon vinaigrette",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["protein power bowl", "tofu", "chicken", "quinoa", "vegetables", "salad"],
  },
  {
    title: "Mediterranean Bowl",
    description: "Mediterranean quinoa salad with tomatoes, cucumber, olives and feta",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["mediterranean bowl", "quinoa", "tomatoes", "cucumber", "olives", "feta", "salad"],
  },
  {
    title: "Fruit Bowl",
    description: "Fresh seasonal fruits",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["fruit bowl", "fresh", "seasonal", "fruits", "healthy bowl"],
  },
  {
    title: "Yoghurt and Fruit Bowl",
    description: "Greek yoghurt with fruit and fresh berries",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["yoghurt", "fruit bowl", "greek yoghurt", "berries", "healthy bowl"],
  },
  {
    title: "Muesli Bowl",
    description: "Yoghurt, muesli, fruits, orange, green apple and oats",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["muesli bowl", "yoghurt", "muesli", "fruits", "oats", "healthy bowl"],
  },
  {
    title: "Banana Oats Bowl",
    description: "Oats, banana and chopped almonds with forest honey",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["banana oats bowl", "oats", "banana", "almonds", "honey", "healthy bowl"],
  },
  {
    title: "Smoothie Bowl",
    description: "Thick smoothie topped with fruits and nuts",
    category: "Usawa Menu",
    path: "/usawa",
    keywords: ["smoothie bowl", "thick smoothie", "fruits", "nuts", "healthy bowl"],
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

export type { SearchResult };
export default SearchBar;
