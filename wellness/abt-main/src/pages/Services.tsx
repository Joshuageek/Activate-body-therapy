import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import "@/styles/animations.css";
import { slugify } from "@/lib/utils";
import massageHands from "/massage-hands.jpg";
import deepTissueImg from "/main.jpg";
import rehaa from "/rehaa.jpg";
import needling from "/needling.jpg";
import physio from "/physio.jpg";
import neuro from "/neuro.jpg";
import chiro from "/chiro.jpg";
import deep from "/deep.jpg";
import ivImg from "@/assets/iv.jpg";
import sports from "/sports.jpg";
import weight from "/weight.jpg";
import deeptissue from "/deeptissue.jpg";
import exercise from "/exercise.jpg";
import prenatal from "/prenatal.jpg";
import postnatal from "/postnatal.jpg";
import aroma from "/aroma.jpg";
import head from "/head.jpg";
import hotstone from "/hotstone.jpg";
import therapeutic from "/therapeutic.jpg";
import bodyscrub from "/bodyscrub.jpg";
import feet from "/feet.jpg";
import activate from "/activate.jpg";
import regen from "/regen.jpg";
import acne from "/acne.jpg";
import gold from "/gold.jpg";
import sensitive from "/sensitive.jpg";
import hydrating from "/hydrating.jpg";
import mizan from "/mizan.jpg";
import uterine from "/uterine.jpg";
import miracle from "/miracle.jpg";
import age from "/age.jpg";
import signature from "/signature.jpg";
import skin from "/skin.jpg";
import glow from "/glow.jpg";
import hangover from "/hangover.jpg";
import slimming from "/slimming.jpg"; 
import beautyCocktail from "/beauty-cocktail.jpg";
import customized from "/customized.jpg";
import nutrients from "/nutrients.jpg";
import nail from "/nail.jpg";
import waxing from "/waxing.jpg";
import hydration from "/hydration.jpg";
import immunity from "/immunity.jpg";
import wellness from "/wellness.jpg";
import mini from "/mini.jpg";
import beautycocktail from "/beautycocktail.jpg";



// Animation styles
const getFloatingStyle = (id: number, delayMultiplier = 1) => ({
  animation: `float ${8 + (id * 0.5)}s ease-in-out infinite`,
  animationDelay: `${(id * 0.5 * delayMultiplier)}s`,
});

const breathingStyle = {
  animation: 'breathe 6s ease-in-out infinite'
};

export const services = [
  {
    id: 4,
    title: "Neuromuscular (Pain Management) Therapy",
    description:
      "Neuromuscular therapy addresses chronic muscular and nervous system conditions by targeting dysfunctional muscle patterns. This therapy focuses on:",
    duration: "60 min",
    price: "Consultation Based",
    section: "Clinical Services",
    benefits: [
      "Releasing trigger points",
      "Improving blood circulation",
      "Reducing nerve compression",
      "Correcting postural imbalances",
      "Treating repetitive strain and movement-related injuries",
    ],
    image: neuro,
  },
  {
    id: 1,
    title: "Physiotherapy",
    description:
      "Physiotherapy focuses on restoring movement and physical function for individuals affected by injury, illness, disability, or post-surgical conditions.Our approach helps relieve pain, improve mobility, and strengthen the body while also reducing the risk of future injuries through corrective movement and guided rehabilitation.",
    duration: "60 min",
    price: "Consultation Based",
    section: "Clinical Services",
    benefits: [
      "Relieves chronic muscle tension",
      "Breaks down scar tissue",
      "Improves range of motion",
      "Reduces inflammation",
    ],
    image: physio,
  },
  {
    id: 2,
    title: "Chiropractic Services",
    description:
      "Chiropractic care aims to improve spinal alignment and joint mobility, supporting the body’s natural ability to function optimally. By addressing spinal restrictions and biomechanical imbalances, chiropractic treatment helps enhance posture, reduce discomfort, and improve overall physical performance.",
    duration: "30 - 60 min",
    price: "Consultation Based",
    section: "Clinical Services",
    benefits: [
      "Enhances athletic performance",
      "Prevents sports injuries",
      "Speeds up recovery time",
      "Improves flexibility",
    ],
    image: chiro,
  },
  {
    id: 3,
    title: "Rehabilitation & Exercise Therapy",
    description:
      "Designed to restore physical function following injury through guided therapeutic movement.",
    duration: "60 min",
    price: "Consultation Based",
    section: "Assessment Based Service",
    benefits: [
      "Restores mobility to pre-injury levels or better",
      "Reduces the risk of re-injury",
      "Enhances nerve and muscle coordination",
      "Prevents muscle deterioration",
      "Improves overall strength, fitness and well-being",
    ],
    image: rehaa,
  },
  {
    id: 5,
    title: "Acupuncture & Dry Needling",
    description: 
      "Acupuncture and dry needling are effective techniques for pain management and functional restoration. They are used to manage conditions such as:",
    benefits: [
      "Chronic and acute pain relief",
      "Migraine and headache relief",
      "Neck and lower back pain relief",
      "Muscular tightness and inflammation",
    ],
    duration: "60 min",
    price: "Consultation Based",
    section: "Clinical Services",
    extraInfo: 
      "These therapies provide a flexible and holistic approach that can address multiple health concerns simultaneously.",
    image: needling,
  },
  {
    id: 6,
    title: "IV Therapy",
    description:
      "IV therapy delivers essential vitamins, minerals, and hydration directly into the bloodstream, allowing for faster absorption and recovery. This treatment supports energy restoration, immune function, hydration, and overall performance, helping the body recover and function at its best.",
    duration: "60 min",
    price: "Consultation Based",
    section: "Clinical Services",
    benefits: [
      "Boosts energy",
      "Improves immunity",
      "Enhances hydration",
      "Speeds up recovery",
    ],
    image: ivImg,
  },

  // ===== REST (NO IMAGES) =====

  {
  id: 7,
  title: "Sports Therapy",
  description:
    "Sports therapy focuses on injury prevention, performance enhancement, and rehabilitation for individuals of all ages and abilities. Treatment is tailored to return clients to optimal functional, occupational, and sport-specific performance safely and efficiently.",
  duration: "60 min",
  price: "Consultation Based",
  section: "Assessment Based Service",
  benefits: [
    "Injury prevention",
    "Performance enhancement",
    "Functional rehabilitation",
    "Safe return to activity",
  ],
  image: sports,
},
{
  id: 9,
  title: "Weight Management",
  description:
    "Our weight management approach is holistic and sustainable, focusing on:",
  duration: "60 min",
  price: "Consultation Based",
  section: "Clinical | HealthClub Services",
  benefits: [
    "Balanced nutrition",
    "Regular Physical activity",
    "Mindful lifestyle choices",
  ],
  image: weight,
  extraInfo:
    "We work with clients to create personalized plans that support healthy weight goals while improving overall well-being.",
},
{
  id: 13,
  title: "Deep Tissue Massage",
  description:
    "A medically focused technique targeting deeper layers of muscle and connective tissue. Effective for chronic pain, persistent tension, postural issues, and limited mobility.",
  duration: "60 min",
  price: "UGX 200,000",
  section: "Health Club  & Clinical Services",
  benefits: [
    "Relieves chronic pain",
    "Improves mobility",
    "Reduces muscle tension",
  ],
  image: deeptissue,
},
{
  id: 15,
  title: "Aromatherapy Massage",
  description:
    "A clinically informed treatment using therapeutic-grade essential oils to calm the nervous system, reduce stress, improve sleep, and support emotional and physical balance.",
  duration: "60 min",
  price: "UGX 210,000",
  section: "Health Club Services",
  benefits: [
    "Reduces stress",
    "Improves sleep quality",
    "Calms the nervous system",
  ],
  image: aroma,
},
{
  id: 16,
  title: "Therapeutic Massage",
  description:
    "A personalized clinical massage combining multiple advanced techniques to relieve pain, reduce muscular tension, and restore body alignment based on individual assessment.",
  duration: "60 min",
  price: "UGX 180,000",
  section: "Health Club Services",
  benefits: [
    "Relieves pain",
    "Reduces tension",
    "Restores alignment",
  ],
  image: therapeutic,
},
{
  id: 17,
  title: "Hot Stone Therapy",
  description:
    "A deeply relaxing treatment using heated stones to penetrate deep muscle layers, improve circulation, release tension, and promote total body relaxation.",
  duration: "90 min",
  price: "UGX 230,000",
  section: "Health Club Services",
  benefits: [
    "Deep relaxation",
    "Improves circulation",
    "Releases muscle tension",
  ],
  image: hotstone,
},
{
  id: 18,
  title: "Body Scrub",
  description:
    "A professional exfoliation treatment that removes dead skin cells, stimulates circulation, improves skin texture, and leaves the skin smooth and radiant.",
  duration: "60 min",
  price: "UGX 190,000",
  section: "Health Club Services",
  benefits: [
    "Smoothens skin",
    "Improves circulation",
    "Enhances radiance",
  ],
  image: bodyscrub,
},
{
  id: 19,
  title: "Reflexology",
  description:
    "A specialized therapy applying precise pressure to reflex points on the feet to promote nervous system balance, improve circulation, and support overall body function.",
  duration: "60 min",
  price: "UGX 140,000",
  section: "Health Club Services",
  benefits: [
    "Promotes balance",
    "Improves circulation",
    "Supports nervous system",
  ],
  image: feet,
},
{
  id: 20,
  title: "Head & Shoulder Therapy",
  description:
    "A focused treatment targeting tension in the neck, shoulders, and scalp. Helps relieve stress, improve circulation, and ease headaches and eye strain.",
  duration: "30 min",
  price: "UGX 90,000",
  section: "Health Club Services",
  benefits: [
    "Relieves headaches",
    "Reduces stress",
    "Improves circulation",
  ],
  image: head,
},
{
  id: 21,
  title: "Activate Signature Treatment",
  description:
    "An exclusive ABT experience combining a full-body therapeutic massage, professional body exfoliation, and a revitalizing mini facial for total restoration and renewal.",
  duration: "150 min",
  price: "UGX 350,000",
  section: "Health Club Services",
  benefits: [
    "Full-body restoration",
    "Deep relaxation",
    "Luxury wellness experience",
  ],
  image: activate,
},

  { id: 23, 
    title: "Maternal Therapy (Prenatal & Postnatal)", 
    description: "Specialized therapies for expectant and new mothers to relieve tension, improve circulation, and promote relaxation while supporting maternal comfort and recovery.", 
    duration: "60 min",
    price: "UGX 180,000", 
    section: "Health Club & Clinical Services",
    benefits: [], 
    image: postnatal, 
    },
  { id: 24, 
    title: "Uterine Therapy", 
    description: "A focused abdominal treatment supporting uterine wellness, circulation, and hormonal balance. Conducted following professional consultation.", 
    duration: "60 min", price: "UGX 120,000", 
    section: "Health Club Services", 
    benefits: [], 
    image: uterine, 
  },
  { id: 25, 
    title: "Mizan Fertility Therapy", 
    description: "A holistic treatment supporting reproductive health through pelvic circulation enhancement, hormonal balance, and body alignment. Delivered with discretion and clinical care.", 
    duration: "30 min", 
    price: "UGX 100,000", 
    section: "Health Club Services", 
    benefits: [], 
    image: mizan, 
  },

  {
  id: 36,
  title: "Facial Treatments",
  description: "Professional facial treatments designed to cleanse, rejuvenate, and restore healthy, radiant skin while addressing specific skin concerns.",
  duration: "60 min",
  section: "Health Club Services",
  image: signature,
  benefits: [],
  treatments: [
    { title: "Age-Defying Facial", price: "UGX 140,000" },
    { title: "Acne Clearing Facial", price: "UGX 140,000" },
    { title: "Signature Facial", price: "UGX 140,000" },
    { title: "Skin Brightening Facial", price: "UGX 140,000" },
    { title: "Regeneration Facial", price: "UGX 170,000" },
    { title: "Miracle Lifting Facial", price: "UGX 170,000" },
    { title: "Gold Mask Facial", price: "UGX 170,000" },
    { title: "Sensitive Skin Facial", price: "UGX 170,000" },
    { title: "Hydrating Facial", price: "UGX 170,000" },
    { title: "Calming Facial", price: "UGX 170,000" },
    { title: "Mini Facial", price: "UGX 70,000" }
  ],
},
  {
  id: 37,
  title: "Nail Care Services",
  description: "Nourishes, shapes, and beautifies the hands and feet.",
  duration: "60 min", 
  section: "Health Club Services",
  image: nail,
  benefits: [], 
  treatments: [
    { title: "Manicure", price: "UGX 50,000" },
    { title: "Pedicure", price: "UGX 60,000" },
    { title: "Manicure & Pedicure", price: "UGX 100,000" },
    { title: "Manicure with Gel Builder", price: "UGX 80,000" },
    { title: "Pedicure with Gel Builder", price: "UGX 90,000" },
  ],
},

{
  id: 38,
  title: "Waxing Services",
  description: "Professionally performed waxing treatments ensuring comfort, hygiene, and precision for smooth, well-groomed skin.",
  duration: "20 - 60 min", 
  section: "Health Club Services",
  price: "Starts from UGX 30,000 - UGX 200,000",
  image: waxing,
  benefits: [], 
  treatments: [
    { title: "Brow", price: "" },
    { title: "Lip", price: "" },
    { title: "Chin", price: "" },
    { title: "Full Face", price: "" },
    { title: "Underarm", price: "" },
    { title: "Half Arm", price: "" },
    { title: "Full Arm", price: "" },
    { title: "Stomach", price: "" },
    { title: "Thigh", price: "" },
    { title: "Back", price: "" },
    { title: "Bikini", price: "" },
    { title: "Brazilian", price: "" },
    { title: "Buttock", price: "" },
    { title: "Half Leg", price: "" },
    { title: "Full Leg", price: "" },
    { title: "V-Facial + Waxing", price: "" },
    { title: "Full Body Waxing", price: "" },
  ],
},

{
  id: 39,
  title: "IV Therapy",
  description: "IV therapy delivers essential vitamins, minerals, and hydration directly into the bloodstream, allowing for faster absorption and recovery. This treatment supports energy restoration, immune function, hydration, and overall performance, helping the body recover and function at its best.",
  duration: "60 min",
  price: "Starts from UGX 450,000",
  section: "Health Club Services",
  benefits: ["Boosts energy", "Improves immunity", "Enhances hydration", "Speeds up recovery"],
  image: hydration,
  treatments: [
    { title: "Pure Hydration IV", price: "UGX 450,000", description: "Replenishes fluids, supports cellular function, and restores energy levels" },
    { title: "Immunity IV", price: "UGX 450,000", description: "Strengthens immune system using Vitamin C, B-complex, B12, and magnesium" },
    { title: "Well-Being IV", price: "UGX 700,000", description: "Comprehensive wellness infusion supporting brain function and metabolism" },
    { title: "Glow IV", price: "UGX 600,000", description: "Enhances skin brightness and detoxification using glutathione and antioxidants" },
    { title: "Hangover IV", price: "UGX 750,000", description: "Rapid recovery treatment that combats dehydration and fatigue" },
    { title: "Slimming Drip", price: "UGX 700,000", description: "Supports fat metabolism and weight management" },
    { title: "Beauty Regimen Cocktail", price: "UGX 850,000", description: "Premium anti-aging infusion with skin-boosting nutrients" },
    { title: "Just For You (Customized IV)", price: "UGX 600,000", description: "Fully personalized IV therapy designed by medical professionals" },
    { title: "Vitamins & Nutrients Boosters", price: "Consultation Based", description: "B12, Magnesium, Ginkgo boosters" }
  ],
},
];

const Services = () => {
  const [openNailTreatments, setOpenNailTreatments] = useState(false);
  const [openFacialTreatments, setOpenFacialTreatments] = useState(false);
  const [openWaxingTreatments, setOpenWaxingTreatments] = useState(false);
  const [openIvTreatments, setOpenIvTreatments] = useState(false);
  const nailService = services.find((s) => s.id === 37);
  const facialService = services.find((s) => s.id === 36);
  const waxingService = services.find((s) => s.id === 38);
  const ivService = services.find((s) => s.id === 39);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={deepTissueImg} 
            alt="Therapy Session" 
            loading="lazy"
            className="w-full h-full object-cover object-[50%_20%]"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <span className="inline-block px-6 py-2  text-sm font-medium text-white mb-6 ">
            
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 drop-shadow-lg">
              Therapeutic Services
              <br />
              <span className="text-primary-300 drop-shadow-lg">Tailored to You</span>
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
              Discover our comprehensive range of massage therapy and wellness
              treatments. Each service is carefully designed to address your
              unique needs and help you achieve optimal health.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -bottom-1 left-0 right-0 h-16 " />
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const anchor = slugify(service.title);

              return (
                <div
                  id={anchor}
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center opacity-0 animate-fade-in ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group neon-glow">
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-105"
                          style={breathingStyle}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div
                        className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10"
                        style={getFloatingStyle(service.id, 1)}
                      />
                      <div
                        className="absolute -top-6 -left-6 w-16 h-16 bg-secondary/20 rounded-full -z-10"
                        style={getFloatingStyle(service.id, 0.6)}
                      />
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                        <Clock size={16} className="text-primary" />
                        <span className="text-sm font-medium">
                          {service.duration}
                        </span>
                      </div>
                      {service.section && (
                        <div className="px-4 py-2 bg-primary/10 rounded-lg">
                          <span className="text-sm font-semibold text-usawa-green">
                            {service.section}
                          </span>
                        </div>
                      )}
                      {service.price && (
                        <div className="px-4 py-2 bg-primary/10 rounded-lg">
                          <span className="text-sm font-semibold text-warm-gray-700">
                            {service.price}
                          </span>
                        </div>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                            <Check size={12} className="text-primary" />
                          </div>
                          <span className="text-sm text-foreground">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.extraInfo}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-6">
                      {service.id === 37 && (
                        <Button
                          variant="hero"
                          onClick={() => setOpenNailTreatments(true)}
                        >
                          View Treatments
                          <ArrowRight size={16} />
                        </Button>
                      )}
                      {service.id === 36 && (
                        <Button
                          variant="hero"
                          onClick={() => setOpenFacialTreatments(true)}
                        >
                          View Treatments
                          <ArrowRight size={16} />
                        </Button>
                      )}
                      {service.id === 38 && (
                        <Button
                          variant="hero"
                          onClick={() => setOpenWaxingTreatments(true)}
                        >
                          View Treatments
                          <ArrowRight size={16} />
                        </Button>
                      )}
                      {service.id === 39 && (
                        <Button
                          variant="hero"
                          onClick={() => setOpenIvTreatments(true)}
                        >
                          View Treatments
                          <ArrowRight size={16} />
                        </Button>
                      )}

                      <Button asChild variant="hero">
                        <Link to="/contact">
                          Book This Service
                          <ArrowRight size={18} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Not Sure Which Service is Right for You?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our expert therapists are here to help. Book a free consultation
              and we'll create a personalized treatment plan tailored to your
              specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Book Your Consultation
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Call Us Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Content */}
     {openNailTreatments && nailService && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
    <div className="bg-white w-full max-w-md rounded-2xl p-6 relative animate-fade-in">

      {/* Close */}
      <button
        onClick={() => setOpenNailTreatments(false)}
        className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
      >
        ✕
      </button>

      {/* Title */}
      <h3 className="text-2xl font-serif font-bold mb-2">
        {nailService.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-6">
        {nailService.description}
      </p>

      {/* Treatments */}
      <div className="space-y-3 mb-6">
        {nailService.treatments.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between p-4 bg-muted rounded-xl hover:bg-muted/70 transition"
          >
            <span className="font-medium text-foreground">
              {item.title}
            </span>
            <span className="font-semibold text-warm-gray-700">
              {item.price}
            </span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={() => setOpenNailTreatments(false)}>
          Close
        </Button>
        <Button asChild variant="hero">
          <Link to="/contact">
            Book Now
            <ArrowRight size={16} />
          </Link>
        </Button>
      </div>

    </div>
  </div>
)}
{/* Modal Content */}
     {openIvTreatments && ivService && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
  <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl p-6 relative animate-fade-in flex flex-col">

      {/* Close */}
      <button
        onClick={() => setOpenIvTreatments(false)}
        className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
      >
        ✕
      </button>

      {/* Title */}
      <h3 className="text-2xl font-serif font-bold mb-2">
        {ivService.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-6">
        {ivService.description}
      </p>

      {/* Treatments */}
        <div className="grid grid-cols-1 gap-3 mb-6 overflow-y-auto pr-2"
            style={{ maxHeight: "45vh" }}>
          {ivService.treatments.map((item) => (
            <div
              key={item.title}
              className="p-4 bg-muted rounded-xl hover:bg-muted/70 transition"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-foreground">
                  {item.title}
                </span>
                <span className="font-semibold text-warm-gray-700">
                  {item.price}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>


      {/* Actions */}
      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={() => setOpenIvTreatments(false)}>
          Close
        </Button>
        <Button asChild variant="hero">
          <Link to="/contact">
            Book Now
            <ArrowRight size={16} />
          </Link>
        </Button>
      </div>

    </div>
  </div>
)}
{/* Modal Content */}
     {openWaxingTreatments && waxingService && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
  <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl p-6 relative animate-fade-in flex flex-col">

      {/* Close */}
      <button
        onClick={() => setOpenWaxingTreatments(false)}
        className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
      >
        ✕
      </button>

      {/* Title */}
      <h3 className="text-2xl font-serif font-bold mb-2">
        {waxingService.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-6">
        {waxingService.description}
      </p>

      {/* Treatments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 overflow-y-auto pr-2"
            style={{ maxHeight: "45vh" }}>
          {waxingService.treatments.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between p-4 bg-muted rounded-xl hover:bg-muted/70 transition"
            >
              <span className="font-medium text-foreground">
                {item.title}
              </span>
              <span className="font-semibold text-warm-gray-700">
                {item.price}
              </span>
            </div>
          ))}
        </div>


      {/* Actions */}
      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={() => setOpenWaxingTreatments(false)}>
          Close
        </Button>
        <Button asChild variant="hero">
          <Link to="/contact">
            Book Now
            <ArrowRight size={16} />
          </Link>
        </Button>
      </div>

    </div>
  </div>
)}
{/* Modal Content */}
     {openNailTreatments && nailService && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
    <div className="bg-white w-full max-w-md rounded-2xl p-6 relative animate-fade-in">

      {/* Close */}
      <button
        onClick={() => setOpenNailTreatments(false)}
        className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
      >
        ✕
      </button>

      {/* Title */}
      <h3 className="text-2xl font-serif font-bold mb-2">
        {nailService.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-6">
        {nailService.description}
      </p>

      {/* Treatments */}
      <div className="space-y-3 mb-6">
        {nailService.treatments.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between p-4 bg-muted rounded-xl hover:bg-muted/70 transition"
          >
            <span className="font-medium text-foreground">
              {item.title}
            </span>
            <span className="font-semibold text-warm-gray-700">
              {item.price}
            </span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={() => setOpenNailTreatments(false)}>
          Close
        </Button>
        <Button asChild variant="hero">
          <Link to="/contact">
            Book Now
            <ArrowRight size={16} />
          </Link>
        </Button>
      </div>

    </div>
  </div>
)}
{/* Modal Content */}
     {openFacialTreatments && facialService && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
  <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl p-6 relative animate-fade-in flex flex-col">

      {/* Close */}
      <button
        onClick={() => setOpenFacialTreatments(false)}
        className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
      >
        ✕
      </button>

      {/* Title */}
      <h3 className="text-2xl font-serif font-bold mb-2">
        {facialService.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-6">
        {facialService.description}
      </p>

      {/* Treatments */}
        <div className="grid grid-cols-1 gap-3 mb-6 overflow-y-auto pr-2"
            style={{ maxHeight: "45vh" }}>
          {facialService.treatments.map((item) => (
            <div
              key={item.title}
              className="p-4 bg-muted rounded-xl hover:bg-muted/70 transition"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-foreground">
                  {item.title}
                </span>
                <span className="font-semibold text-warm-gray-700">
                  {item.price}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>


      {/* Actions */}
      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={() => setOpenFacialTreatments(false)}>
          Close
        </Button>
        <Button asChild variant="hero">
          <Link to="/contact">
            Book Now
            <ArrowRight size={16} />
          </Link>
        </Button>
      </div>

    </div>
  </div>
)}

    </Layout>
  );
};

export default Services;
