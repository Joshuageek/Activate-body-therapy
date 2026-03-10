import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "/logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface SearchResult {
  title: string;
  description: string;
  path: string;
  keywords: string[];
}

const searchableContent: SearchResult[] = [
  { title: "Deep Tissue Massage", description: "Target chronic muscle tension", path: "/services", keywords: ["massage", "pain"] },
  { title: "Sports Therapy", description: "Performance & recovery", path: "/services", keywords: ["sports", "injury"] },
  { title: "Health Club", description: "Gym, pool & spa", path: "/health-club", keywords: ["gym", "fitness"] },
  { title: "Products", description: "Wellness products", path: "/products", keywords: ["oil", "balm"] },
  { title: "Usawa Café", description: "Healthy food & drinks", path: "/usawa", keywords: ["food", "cafe"] },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Clinic", path: "/clinic" },
  { name: "Health Club", path: "/health-club" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* ---------------- SEARCH LOGIC ---------------- */
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const terms = query.toLowerCase().split(" ");
    const filtered = searchableContent.filter((item) => {
      const text = `${item.title} ${item.description} ${item.keywords.join(" ")}`.toLowerCase();
      return terms.every((t) => text.includes(t));
    });

    setResults(filtered.slice(0, 6));
    setSelectedIndex(-1);
  }, [query]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      navigate(results[selectedIndex].path);
      setIsSearchOpen(false);
    } else if (e.key === "Escape") {
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Activate Body Therapy" className="h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.name}
                to={l.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium hover:bg-accent",
                  location.pathname === l.path && "text-primary"
                )}
              >
                {l.name}
              </Link>
            ))}

            <Button asChild variant="terracotta">
              <Link to="/usawa">Usawa</Link>
            </Button>

            {/* Desktop Search */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setIsSearchOpen((v) => !v)}
                className="p-2 rounded-md hover:bg-accent"
              >
                <Search size={20} />
              </button>

              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-2 w-80 bg-card border rounded-xl shadow-lg overflow-hidden z-50"
                  >
                    <div className="p-3 border-b">
                      <Input
                        ref={inputRef}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Search services, products..."
                        autoFocus
                      />
                    </div>

                    {results.length > 0 && (
                      <div className="max-h-72 overflow-y-auto p-2">
                        {results.map((r, i) => (
                          <button
                            key={r.title}
                            onClick={() => {
                              navigate(r.path);
                              setIsSearchOpen(false);
                            }}
                            className={cn(
                              "w-full text-left px-3 py-2 rounded-lg hover:bg-accent",
                              selectedIndex === i && "bg-accent"
                            )}
                          >
                            <p className="text-sm font-medium">{r.title}</p>
                            <p className="text-xs text-muted-foreground">{r.description}</p>
                          </button>
                        ))}
                      </div>
                    )}

                    {query && results.length === 0 && (
                      <p className="p-4 text-sm text-muted-foreground text-center">
                        No results found
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-accent text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-card border-b border-border shadow-md"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((l) => (
                <Link
                  key={l.name}
                  to={l.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium hover:bg-accent",
                    location.pathname === l.path && "text-primary"
                  )}
                >
                  {l.name}
                </Link>
              ))}
              <Button asChild variant="terracotta" className="mt-2">
                <Link to="/usawa" onClick={() => setIsOpen(false)}>
                  Usawa
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
