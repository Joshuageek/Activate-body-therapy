import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import healthclubHero from "@/assets/healthclub-hero.jpg";
import {
  Dumbbell,
  Users,
  Sparkles,
  Heart,
  Droplets,
  Check,
  Phone,
  Calendar,
  Crown,
  Building2,
  Activity,
  Leaf,
} from "lucide-react";

/* ================= SERVICE IMAGES ================= */
import gymImg from "@/assets/gym.jpg";
import trainingImg from "@/assets/training.jpg";
import spaImg from "@/assets/spa.jpg";
import nutrientssImg from "@/assets/nutrientss.jpg";
import ivtreatsImg from "@/assets/ivtreats.jpg";
import fitnessImg from "@/assets/fitness.jpg";

/* ================= SERVICES ================= */
const healthClubServices = [
  {
    id: 2,
    title: "Personal Training",
    description:
      "Professional personal training services tailored to individual fitness goals, focusing on strength, mobility, endurance, and functional movement while minimizing injury risk.",
    icon: Dumbbell,
    image: trainingImg,
    benefits: [
      "Customized fitness programs",
      "Improved strength, mobility & endurance",
      "Proper technique and injury prevention",
      "Available in-club, at home & online",
    ],
  },
  {
    id: 3,
    title: "Spa & Recovery Treatments",
    description:
      "Relaxation and recovery services designed to restore the body and mind, reduce stress, and enhance overall well-being as part of a balanced lifestyle.",
    icon: Sparkles,
    image: spaImg,
    benefits: [
      "Muscle relaxation & stress reduction",
      "Improved circulation",
      "Supports physical and mental recovery",
      "Includes massage, steam & sauna",
    ],
  },
  {
    id: 4,
    title: "Fitness & Movement Classes",
    description:
      "Guided fitness and movement classes designed for different fitness levels, focusing on strength, flexibility, coordination, and cardiovascular health.",
    icon: Activity,
    image: fitnessImg,
    benefits: [
      "Suitable for all fitness levels",
      "Improves strength & flexibility",
      "Enhances coordination & cardio health",
      "Encourages motivation and community",
    ],
  },
  {
    id: 5,
    title: "IV Treatments",
    description:
      "Wellness IV treatments delivering essential vitamins, minerals, and hydration directly into the bloodstream for faster absorption and effective results.",
    icon: Droplets,
    image: ivtreatsImg,
    benefits: [
      "Boosts energy and immunity",
      "Improves hydration",
      "Supports recovery and performance",
      "Fast and effective nutrient absorption",
    ],
  },
  {
    id: 6,
    title: "Nutrition & Lifestyle Support",
    description:
      "Nutrition guidance focused on balanced meals, mindful eating, and sustainable lifestyle choices to support long-term health and wellness goals.",
    icon: Leaf,
    image: nutrientssImg,
    benefits: [
      "Balanced nutrition guidance",
      "Supports healthy body composition",
      "Enhances energy levels",
      "Complements fitness and recovery programs",
    ],
  },
];


/* ================= MEMBERSHIPS ================= */
const memberships = [
  {
    id: 1,
    title: "Fitness Package",
    icon: Dumbbell,
    featured: false,
    features: ["Full Gym Access", "1 Relaxation OR IV Treatment", "10 PT sessions per month", "Unlimited Sauna & Steam", "Swimming Pool Access"],
  },
  {
    id: 2,
    title: "Club Membership",
    icon: Crown,
    featured: true,
    features: ["Full Gym Access", "Group Classes", "IV Treatment", "Unlimited Sauna & Steam", "Swimming Pool Access"],
  },
  {
    id: 3,
    title: "Corporate Membership",
    icon: Building2,
    featured: false,
    features: ["Corporate Wellness Access", "Relaxation Treatments", "IV Therapy", "Sauna & Steam", "Swimming Pool"],
  },
];

/* ================= MODAL ================= */
const MembershipModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 30, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-background rounded-3xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-usawa-green">Membership Packages</h2>
            <p className="text-muted-foreground">Choose the package that fits your wellness goals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memberships.map((m) => (
              <div
                key={m.id}
                className={`rounded-2xl p-6 border shadow-soft ${
                  m.featured ? "border-usawa-green ring-2 ring-usawa-green/20" : "border-border"
                }`}
              >
                <div className="text-center mb-4">
                  <div className="w-14 h-14 mx-auto bg-usawa-green/10 rounded-xl flex items-center justify-center mb-3">
                    <m.icon className="w-7 h-7 text-usawa-green" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-usawa-green">{m.title}</h3>
                </div>

                <ul className="space-y-2 mb-6">
                  {m.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-usawa-green" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full bg-usawa-green text-white">
                  <Link to="/membership">Join Now</Link>
                </Button>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

/* ================= PAGE ================= */
const HealthClub = () => {
  const [showMemberships, setShowMemberships] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${healthclubHero})` }}
        />
<div
  className="absolute inset-0 bg-black/30"
/>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2  text-white rounded-full text-sm font-medium mb-6">
            
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Activate Body <span className="text-white">Health Club</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Join our exclusive health club and unlock access to world-class facilities, personalized training, and holistic wellness programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-usawa-green hover:bg-usawa-green/90 text-white"
              >
                <Link to="/membership">
                  <Calendar className="w-5 h-5" />
                  Join Now
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 border-white text-white hover:bg-white/10"
              >
                <a href="tel:+256700000000">
                  <Phone className="w-5 h-5" />
                  Inquire Today
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-usawa-green mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive wellness programs and facilities designed for your fitness and relaxation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthClubServices.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl shadow-soft border border-border overflow-hidden h-[520px]"
              >
                {/* Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                {/* KEEP overlay on service cards */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                {/* Content */}
                <div className="relative z-10 p-8 transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="w-16 h-16 bg-usawa-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-usawa-green/20 transition-colors">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-white mb-3">{service.title}</h3>
                  
                  {/* Small spacer to push buttons down slightly */}
                  <div className="h-[300px]" />

                  <div className="flex gap-4">
                    {/* Join Now */}
                    <Button
                      className="flex-1 bg-usawa-green text-white"
                      onClick={() => setShowMemberships(true)}
                    >
                      Join Now
                    </Button>

                    {/* Learn More */}
                    <Button
                      asChild
                      className="flex-1 bg-usawa-green/70 hover:bg-usawa-green text-white"
                    >
                      <Link to="/services">Learn More</Link>
                    </Button>
                  </div>
                  </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MembershipModal open={showMemberships} onClose={() => setShowMemberships(false)} />
    </Layout>
  );
};

export default HealthClub;
