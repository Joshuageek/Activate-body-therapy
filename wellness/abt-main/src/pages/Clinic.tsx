import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import clinicHero from "@/assets/clinic-hero.jpg";
import {
  Activity,
  Zap,
  RotateCcw,
  Dumbbell,
  Scale,
  Apple,
  Droplets,
  ArrowUp,
  Phone,
  Calendar,
  Brain,
  Hexagon,
  Hand,
  Heart,
  Plus,
} from "lucide-react";

/* ================= SERVICE IMAGES ================= */
import physiotherapyImg from "@/assets/physiotherapy.jpg";
import painImg from "@/assets/pain.jpg";
import rehabImg from "@/assets/rehab.jpg";
import sportsImg from "@/assets/sport.jpg";
import weightImg from "@/assets/weight.jpg";
import nutritionImg from "@/assets/nutrition.jpg";
import ivImg from "@/assets/iv.jpg";
import chiroImg from "@/assets/chiro.jpg";
import neuroImg from "@/assets/neuro.jpg";
import deeptissueImg from "@/assets/deeptissue.jpg";
import prenatalImg from "@/assets/prenatal.jpg";
import postnatalImg from "@/assets/postnatal.jpg";
import needlingImg from "@/assets/needling.jpg";

/* ================= CLINIC SERVICES ================= */
const clinicServices = [
  {
    id: 3,
    title: "Rehabilitation & Exercise Therapy",
    description:
      "Regain strength and function after injury or inactivity. Guided therapeutic exercise restores mobility, coordination, and muscle strength while reducing the risk of re-injury.",
    
    image: rehabImg,
    benefits: ["Mobility restoration", "Muscle strengthening", "Coordination improvement", "Re-injury prevention"],
  },
  {
    id: 1,
    title: "Physiotherapy",
    description:
      "Restore movement and physical function with our expert physiotherapy treatments. We help relieve pain, improve mobility, and strengthen the body while reducing future injury risks.",
    
    image: physiotherapyImg,
    benefits: ["Pain relief", "Improved mobility", "Strength restoration", "Injury prevention"],
  },
  {
    id: 4,
    title: "Neuromuscular Therapy",
    description:
      "Target dysfunctional muscle patterns and chronic conditions. Our neuromuscular therapy releases trigger points, improves circulation, reduces nerve compression, and corrects posture.",
    
    image: neuroImg,
    benefits: ["Trigger point relief", "Improved circulation", "Posture correction", "Pain reduction"],
  },
  {
    id: 7,
    title: "Sports Therapy",
    description:
      "Prevent injuries and improve performance with specialized sports therapy. Treatments are tailored for safe rehabilitation and enhanced athletic function.",
    
    image: sportsImg,
    benefits: ["Injury prevention", "Performance optimization", "Sport-specific training", "Rehabilitation"],
  },
  {
    id: 9,
    title: "Weight Management",
    description:
      "Holistic and sustainable weight management programs focusing on nutrition, exercise, and lifestyle habits for long-term health and well-being.",
    
    image: weightImg,
    benefits: ["Balanced nutrition", "Regular activity", "Healthy lifestyle", "Personalized plans"],
  },
  {
    id: 2,
    title: "Chiropractic Services",
    description:
      "Enhance spinal alignment and joint mobility to optimize your body’s function. Our chiropractic care improves posture, reduces discomfort, and supports overall performance.",
    
    image: chiroImg,
    benefits: ["Spinal alignment", "Reduced discomfort", "Improved posture", "Better mobility"],
  },
  
  
  {
    id: 5,
    title: "Acupuncture & Dry Needling",
    description:
      "Effective pain management and functional restoration through targeted needling. Ideal for chronic pain, headaches, muscular tightness, and inflammation.",
    
    image: needlingImg,
    benefits: ["Pain relief", "Muscle relaxation", "Reduced inflammation", "Holistic treatment"],
  },
  {
    id: 6,
    title: "IV Therapy",
    description:
      "Deliver essential vitamins, minerals, and hydration directly into the bloodstream for faster recovery, energy restoration, and overall wellness.",
    
    image: ivImg,
    benefits: ["Rapid hydration", "Immune support", "Energy boost", "Faster recovery"],
  },
  
  {
    id: 8,
    title: "Deep Tissue Therapy",
    description:
      "Relieve chronic muscle tension and stress by targeting deeper layers of muscle and connective tissue. Supports relaxation, circulation, and pain management.",
    
    image: deeptissueImg,
    benefits: ["Tension relief", "Improved circulation", "Stress reduction", "Pain management"],
  },
  
  {
    id: 10,
    title: "Prenatal Therapy",
    description:
      "Support expectant mothers with gentle therapy to relieve tension, improve circulation, reduce discomfort, and enhance mobility safely during pregnancy.",
    
    image: prenatalImg,
    benefits: ["Muscle tension relief", "Improved circulation", "Enhanced comfort", "Safe mobility exercises"],
  },
  {
    id: 11,
    title: "Postnatal Therapy",
    description:
      "Restore strength and stability after childbirth. Targeted exercises and massage help recover core and lower back muscles and improve overall function.",
    image: postnatalImg,
    benefits: ["Core strengthening", "Lower back support", "Functional recovery", "Postpartum wellness"],
  },
];


const Clinic = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center object-[50%_20%]"
          style={{ backgroundImage: `url(${clinicHero})` }}
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
            <span className="inline-block px-4 py-2  text-warm-gray rounded-full text-sm font-medium mb-6">
              
            </span>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Activate Body <span className="text-white/90">Clinic</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Experience world-class therapeutic services designed to restore, heal, and optimize your body's natural potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-usawa-green-soft hover:bg-usawa-green-dark text-white"
              >
                <Link to="/contact">
                  <Calendar className="w-5 h-5" />
                  Book Consultation
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
                  Call Us Now
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
              Our Clinical Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare solutions delivered by experienced professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl shadow-soft border border-border overflow-hidden h-[520px]"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                {/* KEEP overlay on service cards */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />

                {/* Content */}
                <div className="relative z-10 p-8 transition-transform duration-500 group-hover:-translate-y-1 flex flex-col h-full">
                  <div className="w-16 h-16 flex items-center justify-auto mb-6 transition-colors">
                    {/* Placeholder for icons - can be replaced with actual icons */}
                  </div>

                  <h3 className="font-bold text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-white/80 text-sm mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="mt-auto flex justify-center">
                    <Button asChild className="w-32 h-12 bg-usawa-green text-white">
                      <Link to="/services">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

          {/* Treatment Phases Section */}
            <section className="py-20 bg-background">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-usawa-green mb-4">
                    Treatment Phases & Therapeutic Approach
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Every treatment journey at Activate Body Therapy begins with a comprehensive consultation. Our specialists develop a personalized plan for safe, effective, and lasting recovery.
                  </p>
                </motion.div>

                {/* Roadmap / phases */}
                <div className="space-y-12">
                  {/* Phase 1 */}
                  <div className="bg-warm-gray/10 rounded-2xl p-6 md:flex md:gap-6">
                    <div className="md:w-1/4 font-semibold text-usawa-green">Phase 1: Acute Pain Management </div>
                    <div className="md:w-3/4 text-warm-gray/90">
                    <p className="mb-2">
                      <span className="font-semibold text-warm-gray">Focus:</span> Pain relief, inflammation reduction, and muscle alignment
                    </p>                      
                    <ul className="list-disc list-inside">
                        <li>Soft tissue manipulation to reduce inflammation and restore alignment</li>
                        <li>Isometric exercises to prevent muscle atrophy</li>
                        <li>Includes manual therapy and machine-assisted therapy</li>
                      </ul>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="bg-warm-gray/10 rounded-2xl p-6 md:flex md:gap-6">
                    <div className="md:w-1/4 font-semibold text-usawa-green">Phase 2: Foundation & Strengthening</div>
                    <div className="md:w-3/4 text-warm-gray/90">
                      <p className="mb-2">
                      <span className="font-semibold text-warm-gray">Focus:</span> Muscle activation and functional strengthening
                    </p>

                      <ul className="list-disc list-inside">
                        <li>Strength training targeting core and lower back muscles</li>
                        <li>Proprioception and stability exercises</li>
                        
                        <p> <span className="font-semibold text-warm-gray"></span></p>
                      </ul>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="bg-warm-gray/10 rounded-2xl p-6 md:flex md:gap-6">
                    <div className="md:w-1/4 font-semibold text-usawa-green">Phase 3: Transformation & Performance </div>
                    <div className="md:w-3/4 text-warm-gray/90">
                      <p className="mb-2">
                      <span className="font-semibold text-warm-gray">Focus:</span> Strength, mobility, balance, and functional performance
                    </p>
                      <ul className="list-disc list-inside">
                        <li>Strength training for core and supporting muscles</li>
                        <li>Balance, coordination, and proprioception exercises</li>
                        <li>Cardio conditioning to improve agility, flexibility, reaction, and endurance</li>

                        <p> <span className="font-semibold text-warm-gray"></span></p>
                      </ul>
                    </div>
                  </div>

                  {/* Maintenance Phase */}
                  <div className="bg-warm-gray/10 rounded-2xl p-6 md:flex md:gap-6">
                    <div className="md:w-1/4 font-semibold text-usawa-green">Maintenance Phase</div>
                    <div className="md:w-3/4 text-warm-gray/90">
                      <p>
                       Following the completion of rehabilitation, clients are referred to the ABT Health Club to maintain their progress. This phase focuses on long-term wellness, fitness maintenance, and healthy lifestyle habits to sustain the transformation achieved during therapy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>


      {/* CTA Section */}
      <section className="py-20 bg-usawa-green-soft/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-usawa-green mb-4">
              Ready to Start Your Healing Journey?
            </h2>

            <p className="text-muted-foreground mb-8">
              Book a consultation with our expert team and take the first step towards better health.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-usawa-green-soft hover:bg-usawa-green-dark text-white"
            >
              <Link to="/contact">Schedule Your Appointment</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Clinic;
