import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { toast } from "@/hooks/use-toast";
import { Plus, ShoppingCart, X, Trash2, Check } from "lucide-react";
import deepTissueImg from "/activate-body-burger.jpg";
import bowlImg from "/bowl.jpg";

/* ================= TYPES ================= */

interface MenuItem {
  name: string;
  description?: string;
  price: string;
  priceAlt?: string;
  image?: string;
}

interface MenuSection {
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

interface CartItem extends MenuItem {
  quantity: number;
}

const foodMenu: MenuSection[] = [
  {
    title: "Health Bowl",
    items: [
      { name: "Fruit Bowl", price: "18,000UGX", image: "/images/menu/fruit-bowl.jpg" },
      { name: "Yoghurt and Fruit Bowl", description: "Greek yoghurt, fruit and fresh berries", price: "25,000UGX", image: "/images/menu/yoghurt-fruit-bowl.jpg" },
      { name: "Muesli Bowl", description: "Yoghurt, muesli, fruits, orange, green apple and oats", price: "25,000UGX", image: "/images/menu/muesli-bowl.jpg" },
      { name: "Banana Oats Bowl", description: "Oats, banana and chopped almonds with forest honey", price: "27,000UGX", image: "/images/menu/banana-oats-bowl.jpg" },
      { name: "Smoothie Bowl", price: "30,000UGX", image: "/images/menu/smoothie-bowl.jpg" },
    ],
  },
  {
    title: "Breakfast",
    subtitle: "All served with Coffee/Tea/Juice Until Noon",
    items: [
      { name: "Buttermilk Pancakes", description: "Choice of banana, blueberry or choco chip served with mascarpone cream, maple syrup, local berry compote", price: "20,000UGX", image: "/images/menu/pancakes.jpg" },
      { name: "Waffles", description: "Dusted with powdered sugar and served with macerated berries, cream and syrup", price: "23,000UGX", image: "/images/menu/waffles.jpg" },
      { name: "Activate Breakfast", description: "Scrambled or Poached Eggs, Avocado & Toast", price: "25,000UGX", image: "/images/menu/activate-breakfast.jpg" },
      { name: "Eggs Benedict", description: "Poached Eggs, Bacon, Hollandaise Sauce & Toast", price: "30,000UGX", image: "/images/menu/eggs-benedict.jpg" },
      { name: "Full English", description: "Eggs of your choice, beans, sausage, mushrooms and spinach and toast, Mini Juice", price: "32,000UGX", image: "/images/menu/full-english.jpg" },
      { name: "Eggs Norwegian", description: "Poached Eggs, Smoked Salmon, Hollandaise Sauce & Toast", price: "34,000UGX", image: "/images/menu/eggs-norwegian.jpg" },
    ],
  },
  {
    title: "Extras",
    items: [
      { name: "Baked Beans", price: "3,000UGX", image: "/images/menu/baked-beans.jpg" },
      { name: "Chicken Sausage", price: "3,000UGX", image: "/images/menu/chicken-sausage.jpg" },
      { name: "Beef Bacon", price: "3,000UGX", image: "/images/menu/beef-bacon.jpg" },
      { name: "Mushrooms", price: "3,000UGX", image: "/images/menu/mushrooms.jpg" },
      { name: "Beef Sausages", price: "4,000UGX", image: "/images/menu/beef-sausages.jpg" },
      { name: "Bacon", price: "4K", image: "/images/menu/bacon.jpg" },
      { name: "Chicken Breast", price: "7,000UGX", image: "/images/menu/chicken-breast.jpg" },
      { name: "Smoked Salmon", price: "8,000UGX", image: "/images/menu/smoked-salmon.jpg" },
    ],
  },
  {
    title: "Pool Bites",
    subtitle: "All served with a choice of a side",
    items: [
      { name: "Pita Nachos", description: "Served with Hummus and Guacamole", price: "20,000UGX", image: "/images/menu/pita-nachos.jpg" },
      { name: "Veggie Wrap", description: "Whole grain wrap filled with hummus, slices of cucumber, shredded carrots and Halloumi Cheese", price: "27,000UGX", image: "/images/menu/veggie-wrap.jpg" },
      { name: "Chicken Wrap", description: "Whole grain wrap filled with chicken, hummus, slices of cucumber, shredded carrots and Halloumi Cheese", price: "30,000UGX", image: "/images/menu/chicken-wrap.jpg" },
      { name: "DIY Sandwich", description: "Choice of Grilled Chicken, Roast Beef or Fried Egg. Choice of Tomato, Onion, Cucumber, Lettuce, Olives, Capers, Pickles. Choice of Focaccia, White, Whole Wheat, Multigrain Breads", price: "28,000UGX", image: "/images/menu/diy-sandwich.jpg" },
      { name: "Smoked Salmon DIY Sandwich", price: "35K", image: "/images/menu/smoked-salmon-diy-sandwich.jpg" },
      { name: "Activate Body Burger", description: "Choice of Beef / Grilled Herb Chicken. Choice of Cheddar Cheese, Bacon or fried Egg", price: "32,000UGX", image: "/images/menu/activate-body-burger.jpg" },
      { name: "Chicken Tenders", description: "Juicy chicken breast strips covered with crispy coating", price: "30,000UGX", image: "/images/menu/chicken-tenders.jpg" },
      { name: "Chicken Wings", description: "Marinated with homemade BBQ sauce", price: "30,000UGX", image: "/images/menu/chicken-wings.jpg" },
      { name: "Nile Goujons", description: "Nile perch fillets in crispy breadcrumbs", price: "30,000UGX", image: "/images/menu/nile-goujons.jpg" },
      { name: "The Classic Club", description: "Crisp lettuce, Tomatoes, Cheese, Chicken, Bacon, fried Egg. Choice of White, Whole Wheat, Multigrain Breads", price: "35,000UGX", image: "/images/menu/the-classic-club.jpg" },
      { name: "Flatbread", description: "Comes with any two toppings", price: "25,000UGX", image: "/images/menu/flatbread.jpg" },
      { name: "Pizza", description: "Comes with any two toppings", price: "30,000UGX", image: "/images/menu/pizza.jpg" },
    ],
  },
  {
    title: "Flatbread/Pizza Toppings",
    items: [
      { name: "Chicken Topping", price: "3,000UGX", image: "/images/menu/topping-chicken.jpg" },
      { name: "Turkey Salami", price: "3,000UGX", image: "/images/menu/topping-turkey-salami.jpg" },
      { name: "Olives", price: "3,000UGX", image: "/images/menu/olives.jpg" },
      { name: "Onions", price: "3,000UGX", image: "/images/menu/topping-onions.jpg" },
      { name: "Mixed Peppers", price: "3,000UGX", image: "/images/menu/topping-mixed-peppers.jpg" },
      { name: "Jalapenos", price: "3,000UGX", image: "/images/menu/topping-jalapenos.jpg" },
      { name: "Pineapple", price: "3,000UGX", image: "/images/menu/topping-pineapple.jpg" },
      { name: "BBQ Sauce", price: "3,000UGX", image: "/images/menu/topping-bbq-sauce.jpg" },
      { name: "Parmesan Cheese", price: "5,000UGX", image: "/images/menu/topping-parmesan-cheese.jpg" },
    ],
  },
  {
    title: "Salads",
    items: [
      { name: "Protein Power Bowl", description: "Tofu or Grilled chicken, quinoa salad with vegetables and lemon vinaigrette, steamed broccoli, roasted sweet potato wedges", price: "35,000UGX", image: "/images/menu/protein-power-bowl.jpg" },
      { name: "Mediterranean Bowl", description: "Mediterranean quinoa salad, cherry tomatoes, diced cucumber, kalamatas olives and feta cheese/Falafel balls/Hummus for dipping, sliced pita bread/whole grain crackers", price: "35,000UGX", image: "/images/menu/mediterranean-bowl.jpg" },
      { name: "Chicken Caesar Salad", price: "32,000UGX", image: "/images/menu/chicken-caesar-salad.jpg" },
      { name: "Buddha Bowl", description: "Choice of chicken, Fish or Prawns. Quinoa or Brown rice base, roasted/grilled season vegetables, sweet potatoes, brussels sprouts, bell peppers, chickpeas avocado slices, sunflower seeds", price: "37,000UGX", image: "/images/menu/buddha-bowl.jpg" },
      { name: "Quinoa Salad (Salmon)", description: "Quinoa, black beans, sweet corn, avocado and mixed leaf salad", price: "56,000UGX", image: "/images/menu/quinoa-salad-salmon.jpg" },
      { name: "Quinoa Salad (Prawns/Fish)", description: "Quinoa, black beans, sweet corn, avocado and mixed leaf salad", price: "37,000UGX", image: "/images/menu/quinoa-salad-prawns-fish.jpg" },
    ],
  },
  {
    title: "Soup",
    items: [
      { name: "Chinese Noodles Soup", description: "Pok choy, Chinese noodles, shiitake mushroom, Vegetables and chicken broth", price: "24,000UGX", image: "/images/menu/chinese-noodles-soup.jpg" },
      { name: "Roasted Pumpkin", description: "Creamy Roasted Pumpkin, ginger, bread sticks, red onion and chopped parsley", price: "24,000UGX", image: "/images/menu/roasted-pumpkin.jpg" },
    ],
  },
  {
    title: "Extra Sides",
    items: [
      { name: "Chips", price: "10,000UGX", image: "/images/menu/chips.jpg" },
      { name: "Plantain", price: "10,000UGX", image: "/images/menu/plantain.jpg" },
      { name: "Herb Potato Wedges", price: "13,000UGX", image: "/images/menu/herb-potato-wedges.jpg" },
      { name: "Sweet Potato Fries", price: "13,000UGX", image: "/images/menu/sweet-potato-fries.jpg" },
      { name: "Garden Salad", price: "13,000UGX", image: "/images/menu/garden-salad.jpg" },
      { name: "Steamed Vegetables", price: "13,000UGX", image: "/images/menu/steamed-vegetables.jpg" },
    ],
  },
];

const drinksMenu: MenuSection[] = [
  {
    title: "Hot Brews",
    items: [
      { name: "Espresso", price: "7,000UGX", image: "/images/menu/espresso.jpg" },
      { name: "Macchiato", price: "8,000UGX", image: "/images/menu/macchiato.jpg" },
      { name: "Americano", price: "9,000UGX", image: "/images/menu/americano.jpg" },
      { name: "Cappuccino", price: "10,000UGX", image: "/images/menu/cappuccino.jpg" },
      { name: "Café Mocha", price: "14,000UGX", image: "/images/menu/cafe-mocha.jpg" },
      { name: "Café Latte", price: "11,000UGX", image: "/images/menu/cafe-latte.jpg" },
      { name: "Matcha Latte", price: "10,000UGX", image: "/images/menu/matcha-latte.jpg" },
      { name: "Hot Chocolate", price: "13,000UGX", image: "/images/menu/hot-chocolate.jpg" },
      { name: "Herbal | Green Tea | Dawa", price: "10,000UGX", image: "/images/menu/herbal-green-tea-dawa.jpg" },
      { name: "Black Tea", price: "10,000UGX", image: "/images/menu/black-tea.jpg" },
      { name: "Traditional Ugandan Tea", price: "10,000UGX", image: "/images/menu/traditional-ugandan-tea.jpg" },
    ],
  },
  {
    title: "Cold Brews",
    items: [
      { name: "Iced Tea", price: "12,000UGX", image: "/images/menu/iced-tea.jpg" },
      { name: "Lemon Iced Tea", price: "12,000UGX", image: "/images/menu/lemon-iced-tea.jpg" },
      { name: "Irish Coffee", price: "20,000UGX", image: "/images/menu/irish-coffee.jpg" },
      { name: "Iced Latte (Vanilla & Caramel)", price: "12,000UGX", image: "/images/menu/iced-latte-vanilla-caramel.jpg" },
      { name: "Iced Caramel Mocha", price: "14,000UGX", image: "/images/menu/iced-caramel-mocha.jpg" },
      { name: "Coffee Frappuccino", price: "16,000UGX", image: "/images/menu/coffee-frappuccino.jpg" },
      { name: "Water", price: "4000UGX", image: "/images/menu/water.jpg" },
      { name: "Sodas", price: "4000UGX", image: "/images/menu/sodas.jpg" },
      { name: "Local Beer", price: "8000UGX", image: "/images/menu/local-beer.jpg" },
      { name: "Banange", price: "10000UGX", image: "/images/menu/banange.jpg" },
      { name: "Heineken", price: "12000UGX", image: "/images/menu/heineken.jpg" },
      { name: "Imported Beer", price: "12000UGX", image: "/images/menu/imported-beer.jpg" },
      { name: "Cider", price: "12000UGX", image: "/images/menu/cider.jpg" },
    ],
  },
  {
    title: "House Wines",
    items: [
      { name: "Sweet White | Dry White | Sweet Red | Dry Red", price: "15000UGX", priceAlt: "70000UGX", image: "/images/menu/house-wines.jpg" },
      { name: "B&G Reserve Chardonnay", price: "140,000UGX", image: "/images/menu/b-g-reserve-chardonnay.jpg" },
      { name: "KWV Classic Chenin Blanc", price: "80,000UGX", image: "/images/menu/kwv-classic-chenin-blanc.jpg" },
      { name: "Prosecco", price: "100,000UGX", image: "/images/menu/prosecco.jpg" },
      { name: "Prosecco Rose", price: "100000UGX", image: "/images/menu/prosecco-rose.jpg" },
      { name: "Nedenburg Cabernet Sauvignon", price: "90,000UGX", image: "/images/menu/nedenburg-cabernet-sauvignon.jpg" },
      { name: "B&G Merlot", price: "130,000UGX", image: "/images/menu/b-g-merlot.jpg" },
      { name: "B&G Cabernet Sauvignon", price: "130,000UGX", image: "/images/menu/b-g-cabernet-sauvignon.jpg" },
    ],
  },
  {
    title: "Smoothies",
    subtitle: "Protein Powder Can Added",
    items: [
      { name: "Kale Kickstart", description: "Powder/ Almond milk/ Coconut Milk", price: "22,000UGX", image: "/images/menu/kale-kickstart.jpg" },
      { name: "Berry Bliss", description: "Mixed berries/ Banana/ Kale/ Almond Milk or Plain Yogurt", price: "20,000UGX", image: "/images/menu/berry-bliss.jpg" },
      { name: "Fruit Fusion Smoothie", description: "Mixed berries / Banana / Pineapple / Mango/ Watermelon", price: "18,000UGX", image: "/images/menu/fruit-fusion-smoothie.jpg" },
      { name: "Tropical Smoothie", description: "Mango/ Pineapple/ Banana/ Spinach/ Coconut Milk", price: "18,000UGX", image: "/images/menu/tropical-smoothie.jpg" },
      { name: "Chocolate Berry Smoothie", description: "Dark Chocolate / Mixed Berries / Kale / Banana /Almond Milk", price: "20,000UGX", image: "/images/menu/chocolate-berry-smoothie.jpg" },
      { name: "Blueberry Smoothie", description: "Blueberries /Banana / Peanut Butter / Almond milk /Cinnamon", price: "25,000UGX", image: "/images/menu/blueberry-smoothie.jpg" },
      { name: "Oatmeal Smoothie", description: "Oats/ Coconut Yogurt or Greek Yogurt/ Banana / Cinnamon/ Vanilla", price: "18,000UGX", image: "/images/menu/oatmeal-smoothie.jpg" },
      { name: "Avocado Smoothie", description: "Avocado, Mango/ Banana/ Spinach/ Kale/ Almond Milk / Coconut Yogurt / Dates", price: "20,000UGX", image: "/images/menu/avocado-smoothie.jpg" },
      { name: "JAVA Smoothie", description: "Coffee / Protein / Dark Chocolate Chips", price: "20,000UGX", image: "/images/menu/java-smoothie.jpg" },
    ],
  },
  {
    title: "Extras",
    items: [
      { name: "Matcha", price: "7,000UGX", image: "/images/menu/matcha.jpg" },
      { name: "Cashew Nuts", price: "5,000UGX", image: "/images/menu/cashew-nuts.jpg" },
      { name: "Chai Seeds", price: "5,000UGX", image: "/images/menu/chai-seeds.jpg" },
      { name: "Honey", price: "2,000UGX", image: "/images/menu/honey.jpg" },
      { name: "Dates", price: "3,000UGX", image: "/images/menu/dates.jpg" },
      { name: "Soy Milk", price: "4,000UGX", image: "/images/menu/soy-milk.jpg" },
      { name: "Almond Milk", price: "4,000UGX", image: "/images/menu/almond-milk.jpg" },
      { name: "Coconut Milk", price: "4,000UGX", image: "/images/menu/coconut-milk.jpg" },
      { name: "Oat Milk", price: "4,000UGX", image: "/images/menu/oat-milk.jpg" },
      { name: "Cocoa Powder", price: "3,000UGX", image: "/images/menu/cocoa-powder.jpg" },
      { name: "Extra Shot", price: "3,000UGX", image: "/images/menu/extra-shot.jpg" },
      { name: "Flavoured Syrup (Vanilla & Caramel)", price: "4,000UGX", image: "/images/menu/flavoured-syrup.jpg" },
    ],
  },
  {
    title: "Juices",
    items: [
      { name: "Freshly Squeezed Juices", description: "Apple, Carrot, Mango, Pineapple and Watermelon", price: "12,000UGX", image: "/images/menu/freshly-squeezed-juices.jpg" },
      { name: "Espresso Bliss", description: "Coffee, banana, dates, cinnamon, cashew and coconut milk", price: "16,000UGX", image: "/images/menu/espresso-bliss.jpg" },
      { name: "Mint Sprint", description: "Pineapple and Fresh mint", price: "12,000UGX", image: "/images/menu/mint-sprint.jpg" },
      { name: "'Eye' Look Good", description: "Carrot, Pineapple, Turmeric and Ginger", price: "14,000UGX", image: "/images/menu/eye-look-good.jpg" },
      { name: "Green Detox Juice", description: "Corgette, Pineapple, Parsley, Cucumber and Kale", price: "14,000UGX", image: "/images/menu/green-detox-juice.jpg" },
      { name: "Red Detox Juice", description: "Beetroot, Sour Sop and Mango", price: "16,000UGX", image: "/images/menu/red-detox-juice.jpg" },
      { name: "Immune Boosters", description: "Ginger, lemon and Honey infusion (Added Garlic available)", price: "14,000UGX", image: "/images/menu/immune-boosters.jpg" },
      { name: "Fresh Greens", description: "Cucumber, Mint, Lime and Pineapple", price: "14,000UGX", image: "/images/menu/fresh-greens.jpg" },
    ],
  },
  {
    title: "Pastry Corner",
    items: [
      { name: "Choc Chip Cookie", price: "4,000UGX", image: "/images/menu/choc-chip-cookie.jpg" },
      { name: "Double Choc Chip Cookie", price: "4,000UGX", image: "/images/menu/double-choc-chip-cookie.jpg" },
      { name: "Butter Cookie (Pack of 10)", price: "5,000UGX", image: "/images/menu/butter-cookie.jpg" },
      { name: "Sugar / Plain Donuts", price: "5,000UGX", image: "/images/menu/sugar-donut.jpg" },
      { name: "Chocolate Covered Donuts", price: "9,000UGX", image: "/images/menu/chocolate-covered-donut.jpg" },
      { name: "Cinnamon Danish", price: "9,000UGX", image: "/images/menu/cinnamon-danish.jpg" },
      { name: "Croissant", price: "9,000UGX", image: "/images/menu/croissant.jpg" },
      { name: "Chocolate Croissant", price: "10,000UGX", image: "/images/menu/chocolate-croissant.jpg" },
      { name: "Lotus Cheesecake", price: "15,000UGX", image: "/images/menu/lotus-cheesecake.jpg" },
      { name: "Blueberry Cheesecake", price: "15,000UGX", image: "/images/menu/blueberry-cheesecake.jpg" },
      { name: "Banana Cake Whole", price: "30,000UGX", image: "/images/menu/banana-cake.jpg" },
      { name: "Carrot Slab Cake Whole", price: "30,000UGX", image: "/images/menu/carrot-slab-cake.jpg" },
      { name: "Lemon Cake (Slice)", price: "8,000UGX", image: "/images/menu/lemon-cake.jpg" },
      { name: "Banana Cake (Slice)", price: "8,000UGX", image: "/images/menu/banana-cake.jpg" },
      { name: "Carrot Cake (Slice)", price: "8,000UGX", image: "/images/menu/carrot-cake.jpg" },
    ],
  },
];

/* ================= COMPONENTS ================= */

const MenuCard = ({
  item,
  onAddToCart,
}: {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}) => (
  <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-usawa-green/30 hover:-translate-y-1">
    {item.image && (
      <div className="w-full h-32 md:h-40 lg:h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    )}

    <h4 className="font-semibold text-usawa text-center text-sm md:text-base leading-tight mb-2 min-h-[40px] flex items-center justify-center">
      {item.name}
    </h4>

    {item.description && (
      <p className="text-warm-gray text-xs md:text-sm text-center mb-3 line-clamp-2 min-h-[32px]">
        {item.description}
      </p>
    )}

    <div className="text-center mb-3">
      <span className="font-bold text-usawa text-base md:text-lg">{item.price}</span>
      {item.priceAlt && (
        <span className="text-usawa-green/70 text-xs md:text-sm ml-1">
          / {item.priceAlt}
        </span>
      )}
    </div>

    <button
      onClick={() => onAddToCart(item)}
      className="w-full py-2 px-4 bg-usawa-green/10 hover:bg-usawa-green text-usawa-green hover:text-white rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-1"
    >
      <Plus className="w-4 h-4" />
      Add to Order
    </button>
  </div>
);

const MenuSectionComponent = ({
  section,
  onAddToCart,
}: {
  section: MenuSection;
  onAddToCart: (item: MenuItem) => void;
}) => (
  <div className="mb-16">
    <div className="text-center mb-8">
      <h3 className="font-ananda text-3xl md:text-4xl text-usawa mb-2">
        {section.title}
      </h3>
      {section.subtitle && (
        <p className="text-warm-gray text-sm italic">{section.subtitle}</p>
      )}
      <div className="w-16 h-0.5 bg-usawa/40 mx-auto mt-4" />
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {section.items.map((item, index) => (
        <MenuCard key={index} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  </div>
);

/* ================= PAGE ================= */

const Usawa = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });

    toast({
      title: "Added to order",
      description: `${item.name} has been added to your order.`,
      className: "bg-gradient-to-r from-usawa-green to-emerald-500 text-white border-0 shadow-2xl",
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('en-UG') + ' UGX';
  };

  // Create WhatsApp order message
  const checkoutToWhatsapp = () => {
    if (cart.length === 0) return;

    const message = cart
      .map((item) => `${item.name} x${item.quantity} - ${item.price}`)
      .join("\n");

    const whatsappURL = `https://wa.me/<YOUR_PHONE_NUMBER>?text=${encodeURIComponent(
      "Hello! I'd like to place an order:\n" + message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <Layout>

  {/* Hero Section */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={bowlImg} 
            alt="Usawa Premium Cuisine" 
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        </div>

      {/* Top design flourishes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-16 w-72 h-72 bg-gradient-to-r from-[#a3ffb0]/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute right-0 top-32 w-96 h-96 bg-gradient-to-l from-[#2db7ff]/25 to-transparent rounded-full blur-3xl" />
      </div>

    {/* Content */}
    <div className="relative container mx-auto px-4 text-center text-white z-10">
      <div className="flex justify-center mb-6">
        <img
          src="/images/usawa/usawa.png"
          alt="Usawa Logo"
          loading="lazy"
          className="h-20 md:h-28 object-contain drop-shadow-xl"
        />
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold leading-tight drop-shadow-2xl">
        Usawa Cafe
        <br />
        Premium Health & Wellness Dining
      </h1>

      <p className="text-white/80 text-base md:text-lg max-w-3xl mx-auto my-6 leading-relaxed drop-shadow-lg">
        Experience a curated menu crafted for body balance and mindful indulgence.
        Fresh, nutrient-rich foods + restorative flavors served in an elegant atmosphere.
      </p>

      <div className="h-8" />

      <div className="flex flex-wrap justify-center gap-4 text-sm text-white/90">
        <span className="px-4 py-2 bg-black/35 rounded-full border border-white/25">Chef Expertise</span>
        <span className="px-4 py-2 bg-black/35 rounded-full border border-white/25">Organic Ingredients</span>
        <span className="px-4 py-2 bg-black/35 rounded-full border border-white/25">Nutritional Balance</span>
        <span className="px-4 py-2 bg-black/35 rounded-full border border-white/25">Luxury Atmosphere</span>
      </div>
    </div>
  </section>


      {/* FOOD MENU */}
<section
  id="food-menu"
  className="relative py-12 overflow-hidden bg-cover bg-center bg-no-repeat"
>

  {/* Content */}
  <div className="relative container mx-auto px-4 z-10">
    {foodMenu.map((section, index) => (
      <MenuSectionComponent
        key={index}
        section={section}
        onAddToCart={addToCart}
      />
    ))}
  </div>
</section>

      {/* DRINKS MENU */}
<section
  id="drinks-menu"
  className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
>
</section>
  {/* Content */}
  <div className="relative container mx-auto px-4 z-10">
    {drinksMenu.map((section, index) => (
      <MenuSectionComponent
        key={index}
        section={section}
        onAddToCart={addToCart}
      />
    ))}
  </div>
  {/* CART BUTTON - PREMIUM */}
<div className="fixed bottom-6 right-6 z-50">
  <style>{`
    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 20px rgba(34, 216, 192, 0.6); }
      50% { box-shadow: 0 0 30px rgba(20, 236, 189, 0.8); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    @keyframes slide-up {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes scale-in {
      from { transform: scale(0.3); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .cart-button {
      animation: ${cart.length > 0 ? 'pulse-glow 2s infinite' : 'none'};
    }
    .cart-panel {
      animation: slide-up 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .badge-count {
      animation: scale-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
  `}</style>
  
  <button
    onClick={() => setIsCartOpen(!isCartOpen)}
    className="cart-button relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-usawa-green to-emerald-500 text-white shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 active:scale-95"
  >
    <ShoppingCart className="w-7 h-7" />
    {cart.length > 0 && (
      <span className="badge-count absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-red-500 to-orange-500 text-white text-xs font-bold flex items-center justify-center rounded-full shadow-lg">
        {Math.min(cart.reduce((acc, item) => acc + item.quantity, 0), 99)}
      </span>
    )}
  </button>

  {/* CART PANEL - PREMIUM */}
  {isCartOpen && (
    <div className="cart-panel absolute bottom-20 right-0 w-96 max-h-[500px] bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-3xl shadow-2xl p-6 overflow-hidden flex flex-col">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-gray-100">
        <div>
          <h4 className="font-bold text-usawa-green text-xl">Your Order</h4>
          <p className="text-xs text-gray-500 mt-1">{cart.length} items</p>
        </div>
        <button
          onClick={() => setIsCartOpen(false)}
          className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {cart.length === 0 ? (
        /* EMPTY STATE */
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4">
            <ShoppingCart className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-600 font-medium mb-1">Your cart is empty</p>
          <p className="text-gray-400 text-sm">Add delicious items to get started!</p>
        </div>
      ) : (
        /* CART ITEMS */
        <>
          <div className="flex-1 overflow-y-auto pr-2 mb-6 space-y-3">
            {cart.map((item, index) => {
              const itemPrice = parseInt(item.price.replace(/[^0-9]/g, ''));
              const itemTotal = itemPrice * item.quantity;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-2xl p-4 hover:from-usawa-green/5 hover:to-emerald-100/30 transition-all duration-200 border border-gray-100/50 hover:border-usawa-green/30"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-sm group-hover:text-usawa-green transition-colors">{item.name}</p>
                      <p className="text-xs text-gray-500 mt-1">{formatPrice(itemTotal)}</p>
                    </div>
                    <button
                      onClick={() =>
                        setCart((prev) =>
                          prev.filter((i) => i.name !== item.name)
                        )
                      }
                      className="ml-2 p-1.5 hover:bg-red-100 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-xl p-2 border border-gray-200">
                    <button
                      onClick={() =>
                        setCart((prev) =>
                          prev
                            .map((i) =>
                              i.name === item.name
                                ? { ...i, quantity: Math.max(0, i.quantity - 1) }
                                : i
                            )
                            .filter((i) => i.quantity > 0)
                        )
                      }
                      className="w-6 h-6 flex items-center justify-center text-red-500 hover:bg-red-100 rounded-lg transition-all font-bold"
                    >
                      −
                    </button>
                    <span className="font-bold text-gray-800 text-sm w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() =>
                        setCart((prev) =>
                          prev.map((i) =>
                            i.name === item.name
                              ? { ...i, quantity: i.quantity + 1 }
                              : i
                          )
                        )
                      }
                      className="w-6 h-6 flex items-center justify-center text-usawa-green hover:bg-green-100 rounded-lg transition-all font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* TOTAL SECTION */}
          <div className="bg-gradient-to-r from-usawa-green/10 to-emerald-100/30 rounded-2xl p-4 mb-4 border border-usawa-green/20">
            <div className="flex justify-between items-center mb-3 pb-3 border-b border-usawa-green/20">
              <span className="text-gray-700 font-medium">Subtotal</span>
              <span className="text-gray-800 font-bold">{formatPrice(calculateTotal())}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-usawa-green font-bold text-lg">Total Order</span>
              <span className="text-usawa-green font-bold text-2xl">{formatPrice(calculateTotal())}</span>
            </div>
          </div>

          {/* WHATSAPP INFO */}
          <p className="text-xs text-gray-500 mb-4 p-3 bg-blue-50 rounded-xl border border-blue-100">
            📱 Order will be sent to WhatsApp:<br/><span className="font-bold text-blue-600 text-sm">+256756735682</span>
          </p>

          {/* CHECKOUT BUTTON */}
          <button
            onClick={checkoutToWhatsapp}
            className="w-full py-3 bg-gradient-to-r from-usawa-green to-emerald-500 text-white font-bold rounded-2xl hover:shadow-xl hover:from-usawa-green/90 hover:to-emerald-600 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group"
          >
            <Check className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Checkout via WhatsApp
          </button>
        </>
      )}
    </div>
  )}
</div>

    </Layout>
  );
};

export default Usawa;
