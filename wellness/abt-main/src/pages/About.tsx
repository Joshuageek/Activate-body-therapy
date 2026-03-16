import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Heart, Users, Leaf } from "lucide-react";
import Layout from "@/components/layout/Layout";
import therapySession from "/therapy-session.jpg";

// Core Values
const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "Every treatment is delivered with genuine care and attention to your wellbeing.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Our therapists are certified experts committed to the highest standards of practice.",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    description:
      "We create customized treatment plans tailored to your unique needs and goals.",
  },
  {
    icon: Leaf,
    title: "Holistic Wellness",
    description:
      "We believe in treating the whole person, not just the symptoms.",
  },
];

// Team Members
const team = [
  {
    name: "Ismail Sina",
    role: "Clinical Director",
    bio: "Ismail Sina is a highly experienced sports and rehabilitation therapist",
    fullBio:
      "He is the Clinical Director of Activate Body Therapy and a Director at Activate Health Club, specialising in pain elimination, musculoskeletal rehabilitation, post-operative recovery, medical exercise therapy, and performance optimisation. Ismail holds advanced qualifications in sports therapy, neuromuscular therapy, physiotherapy, and medical acupuncture, with training from leading UK institutions including King’s College London, Oxford University (Peak Performance), and Norris Health. His clinical background includes extensive work with clients managing acute and chronic pain, sports injuries, cardiac and respiratory conditions, metabolic disorders, and complex rehabilitation needs. Having worked in hospitals, luxury health clubs, community health programmes, and private clinics, Ismail combines hands-on clinical expertise with strong leadership in healthcare delivery. He is widely respected for his discreet, results-driven, and evidence-based approach, and for setting international standards in rehabilitation and sports therapy in Uganda.",
    specialties: ["Rehabilitation Specialist"],
    image: "/images/team/ismail.jpg",
  },
  {
    name: "Cindie-Ann Sina",
    role: "Director",
    bio: "Cindie-Ann Sina is a co-founder and director of Activate Body Therapy,",
    fullBio:
        "With extensive experience in healthcare operations, financial management, governance, and strategic growth, she has overseen all operational, financial, and strategic aspects of the clinic since 2020, playing a central role in expanding ABT from a small practice into a multi-branch organisation and the successful launch of the ABT Health Club in 2023. With a background in communications, business development, operations management, and finance, Cindie-Ann brings strong expertise in budgeting, cash-flow management, compliance, HR oversight, and brand development. Her previous roles across corporate operations, production finance, and large-scale project management underpin her ability to run complex organisations with precision and accountability. Cindie-Ann’s leadership ensures that ABT and its health-club services operate to international standards, with a strong focus on clinical governance, client experience, sustainability, and long-term health outcomes.",
    specialties: ["Director",],
    image: "/images/team/Cindie.jpg",
  },
  {
    name: "Benta",
    role: "Operations Manager",
    bio: "",
    fullBio:
      "",
    specialties: ["Day to Day Operations", "Client Relations", "Staff Coordination"],
    image: "/images/team/Benta.jpg",
  },
  {
    name: "Josephine",
    role: "HR Manager",
    bio: "",
    fullBio:
      "",
    specialties: ["Employee development & Organizational Management"],
    image: "/images/team/Josephine.jpg",
  },
  {
    name: "Phionah Ayesigamukama",
    role: "Marketing Manager",
    bio: "",
    fullBio:
      "",
    specialties: ["Digital Marketing", "Content Creation", "Brand Strategy"],
    image: "/images/team/Phiona.jpg",
  },
  {
    name: "David Ohalebo",
    role: "Specialist",
    bio: "",
    fullBio:
      "",
    specialties: ["Rehabilitation", "Exercise Therapy", "Injury Recovery"],
    image: "/images/team/David.jpg",
  },
];

// ---------------------------
// Team Member Card Component
// ---------------------------
const TeamMemberCard = ({ member }: { member: any }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="bg-card rounded-2xl overflow-hidden shadow-soft group opacity-0 animate-fade-in">
       <div className="relative w-full h-64 overflow-hidden bg-muted">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
      </div>


        <div className="p-6">
          <h3 className="text-2xl font-priestacy text-foreground mb-1 leading-tight">
            {member.name}
          </h3>
          <p className="text-sm text-primary font-medium mb-3">{member.role}</p>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {member.bio}
          </p>

          {member.fullBio && member.fullBio !== member.bio && (
            <button
              onClick={() => setShowModal(true)}
              className="text-primary text-xs font-semibold underline mb-3"
            >
              Read More
            </button>
          )}

          <div className="flex flex-wrap gap-2 mt-3">
            {member.specialties.map((specialty: string) => (
              <span
                key={specialty}
                className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-card rounded-2xl max-w-lg w-full p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
            <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
              {member.name}
            </h3>
            <p className="text-sm text-primary font-medium mb-4">{member.role}</p>
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {member.fullBio}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

// ---------------------------
// About Page Component
// ---------------------------
const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Healing Hands,
              <br />
              <span className="text-primary">Caring Hearts</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over 15 years, Activate Body Therapy has been dedicated to
              helping our community achieve optimal health and wellness through
              personalized therapeutic care.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={therapySession}
                  alt="Therapy session at ABT"
                  loading="lazy"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-terracotta/20 rounded-full -z-10 animate-float" />
            </div>

            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-6">
                A Legacy of Healing
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Activate Body Therapy was founded in 2009 by Dr. Sarah Mitchell
                  with a simple yet powerful mission: to provide exceptional
                  therapeutic care that addresses the root causes of pain and
                  discomfort, not just the symptoms.
                </p>
                <p>
                  What started as a small practice has grown into a trusted
                  wellness destination, serving thousands of clients from
                  professional athletes to busy professionals, new mothers to
                  seniors.
                </p>
                <p>
                  Today, our team of certified therapists continues to uphold
                  Dr. Mitchell's founding principles: personalized care, clinical
                  excellence, and a genuine commitment to each client's wellness
                  journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground">
              These core values guide everything we do at Activate Body Therapy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-8 shadow-soft text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Section */}
<section id="team" className="py-20 md:py-28 scroll-mt-24">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="text-sm font-medium text-primary uppercase tracking-wider">
        Meet the Team
      </span>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
        Expert Therapists, Real Results
      </h2>
      <p className="text-muted-foreground">
        Our team of certified professionals brings together decades of
        combined experience in therapeutic care.
      </p>
    </div>

   {/* TOP ROW – FIRST 2 (Centered, Default Card Size) */}
<div className="flex justify-center gap-8 mb-12 flex-wrap">
  {team.slice(0, 2).map((member) => (
    <div key={member.name} className="w-[260px]"> {/* Set fixed width same as bottom cards */}
      <TeamMemberCard member={member} />
    </div>
  ))}
</div>


    {/* BOTTOM ROW – REMAINING 4 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {team.slice(2).map((member) => (
        <TeamMemberCard key={member.name} member={member} />
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-usawa-green">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join thousands of satisfied clients who have found relief,
              recovery, and renewed wellness with Activate Body Therapy.
            </p>
            <Button asChild variant="terracotta" size="lg">
              <Link to="/contact">
                Book Your First Session
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
