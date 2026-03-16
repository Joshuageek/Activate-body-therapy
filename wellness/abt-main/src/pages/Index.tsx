import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {ArrowRight,Star,Users,Award,Heart,Activity,HeartPulse,BicepsFlexed,Infinity,} from "lucide-react";
import therapySession from "/therapy-session1.jpg";
import massageHands from "/massage-hands.jpg";
import Layout from "@/components/layout/Layout";
import Counter from "@/components/Counter";
import heroVideo from "@/assets/hero-video.mp4";
import { motion } from "framer-motion";
import SearchBar from "@/components/Searchbar";

/* ✅ PARTNER LOGOS */
import partner1 from "/images/partners/partner1.png";
import partner2 from "/images/partners/partner2.png";
import partner3 from "/images/partners/partner3.png";
import partner4 from "/images/partners/partner4.png";
import partner5 from "/images/partners/partner5.png";
import partner6 from "/images/partners/partner6.png";
import partner7 from "/images/partners/partner7.png";
import partner8 from "/images/partners/partner8.png";
import partner9 from "/images/partners/partner9.png";
import partner10 from "/images/partners/partner10.png";
import partner11 from "/images/partners/partner11.png";
import partner12 from "/images/partners/partner12.png";
import partner13 from "/images/partners/partner13.png";
import partner14 from "/images/partners/partner14.png";
import partner15 from "/images/partners/partner15.png";
import partner16 from "/images/partners/partner16.png";



const partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
  partner11,
  partner12,
  partner13,
  partner14,
  partner15,
  partner16,
];

const services = [
  {
    title: "Deep Tissue Massage",
    description:
      "Target chronic muscle tension with focused pressure techniques that release deep-seated knots.",
    icon: BicepsFlexed,
  },
  {
    title: "Sports Therapy",
    description:
      "Enhance athletic performance and accelerate recovery with specialized sports massage.",
    icon: Activity,
  },
  {
    title: "Relaxation Massage",
    description:
      "Drift away with gentle, flowing strokes designed to calm the mind and soothe the body.",
    icon: HeartPulse,
  },
  {
    title: "Physical Therapy",
    description:
      "Restore mobility and function with evidence-based rehabilitation techniques.",
    icon: Infinity,
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marathon Runner",
    content:
      "The sports therapy sessions have been game-changing for my training. I've never felt more prepared for race day.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Office Professional",
    content:
      "After years of back pain from desk work, I finally found relief. The team truly understands body mechanics.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Yoga Instructor",
    content:
      "As someone in the wellness industry, I'm picky about my care. ABT exceeds all my expectations.",
    rating: 5,
  },
];

const stats = [
  { number: "2000+", label: "Clients", icon: Users },
  { number: "7+", label: "Years Of Experience", icon: Award },
  { number: "98%", label: "Satisfaction Rate", icon: Heart },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Index = () => {
  return (
    <Layout>
      {/* Hero Section For Home (Video Background) */}
<section className="relative min-h-[90vh] flex items-center overflow-hidden">
  {/* Video Background */}
  <div className="absolute inset-0">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    >
      <source src={heroVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    {/* Gradient Overlay */}
    <div
  className="absolute inset-0 bg-black/30 " 
/>

    </div>
  {/* Hero Content */}
  <div className="container mx-auto px-4 relative z-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <div>
      {/* Tagline */}
      <motion.span
        className="inline-block px-4 py-2 bg-usawa-green/40 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6 drop-shadow-lg"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Welcome to Activate Body Therapy
      </motion.span>

      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6 drop-shadow-lg"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Activate Strength. <br />
        <span className="text-cream text-shadow-sm">Restore Balance.</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed drop-shadow-lg"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Activate Body Therapy is a wellness and rehabilation center dedicated to transforming life through non-pharmaceutical therapeutic care. We provide personalized therapeutic care that goes beyond physical symptoms, 
        combining expert neuromuscular therapy with comprehensive wellness solutions to help clients achieve pain relief, 
        recovery, and total well-being rejuvenation.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Button asChild variant="terracotta" size="lg">
          <Link to="/contact">
            Book Your Session <ArrowRight size={20} />
          </Link>
        </Button>

        <Button asChild variant="hero-outline" size="lg">
          <Link to="/services">Explore Services</Link>
        </Button>
      </motion.div>
    </div>
  </div>
</div>
</section>
{/* Search Bar */}
            <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <SearchBar />
            </div>
     
        

      {/* ✅ STATS + PARTNERS */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
              >
                <Counter
                  number={stat.number}
                  label={stat.label}
                  icon={stat.icon}
                />
              </motion.div>
            ))}
          </div>
          </div>
          </section>
          {/* Testimonials Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground">
              At Activate, we take pride in helping our clients look and feel their best. But don't just take our word for it hear directly from 
              the people who have experienced real results. Their stories speak volumes about the care, 
              expertise, and lasting transformations we deliver every day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-card rounded-2xl p-8 shadow-soft"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 md:py-28">
        <div className="container mt-auto overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              className="relative"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={therapySession}
                  alt="Professional therapy session"
                  loading="lazy"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-usawa-green/20 rounded-full -z-10 animate-float" />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="text-sm font-medium text-usawa-green uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-6">
                Dedicated to Your
                <br />
                Wellness Journey
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Activate Body Therapy, we believe that true healing comes from
                understanding the unique needs of each individual. Our team of
                certified therapists combines years of experience with a
                passion for holistic wellness.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From chronic pain relief to athletic performance enhancement,
                we're here to support your body's natural ability to heal and
                thrive.
              </p>
              <Button asChild variant="outline">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
                Tailored Treatments for
                <br />
                Every Need
              </h2>
              <p className="text-muted-foreground">
                Discover our comprehensive range of therapeutic services designed
                to address your specific wellness goals.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="hero" size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={massageHands}
            alt="Healing massage therapy"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Take the first step towards a healthier, more balanced you. Book
              your consultation today and let us create a personalized treatment
              plan just for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="terracotta" size="lg">
                <Link to="/contact">
                  Book a Consultation
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Partners Section */}
<section className="py-16 bg-muted/30 relative overflow-hidden">
  <div className="container mx-auto px-4">
    <motion.div
      className="text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
    >
      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
        Trusted by Our Partners
      </p>

      {/* Scrolling Logos with fade in/out */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex scrolling-logos gap-10"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            maskRepeat: "no-repeat",
            maskSize: "100% 100%",
          }}
        >
          {[...partners, ...partners, ...partners].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-28 h-14 flex items-center justify-center">
              <img
                src={logo}
                alt="Partner logo"
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
        {/* Blur overlays for seamless edges */}
        <div className="absolute left-0 top-0 w-[10%] h-full pointer-events-none" style={{ backdropFilter: 'blur(2px)' }}></div>
        <div className="absolute right-0 top-0 w-[10%] h-full pointer-events-none" style={{ backdropFilter: 'blur(2px)' }}></div>
      </div>
    </motion.div>
  </div>

  {/* Tailwind CSS Animation */}
  <style>
    {`
      .scrolling-logos {
        animation: scroll 40s linear infinite;
      }
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-33.333%); }
      }
    `}
  </style>
</section>
    </Layout>
  );
};

export default Index;
