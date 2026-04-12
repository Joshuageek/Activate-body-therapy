import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";

export const membershipOptions = [
  {
    id: "Diamond ",
    title: "Diamond Membership",
    details: "Full Gym Access, 12 Week Nutritional Plan, 8 Customised Personal Training Sessions, Monthly Progress Assessment,  4 Relaxation Treatments, Unlimited Group Classes including Yoga, Unlimited Steam Room and Sauna Access, Unlimited Swimming Pool Access",
    prices: {
      quarterly: "UGX 4,200,000",
      biannual: "UGX  8,000,000",
      annual: "UGX  14,000,000"
    }
  },
  {
    id: "fitness",
    title: "Fitness Package",
    details: "Full Gym Access, 10 Personal Training sessions, Head & Shoulder OR 1 PNF Session, Unlimited steam and sauna access",
    prices: {
      quarterly: "UGX  3,000,000",
      biannual: "UGX  6,000,000",
      annual: "UGX  12,000,000"
    }
  },
  {
    id: "club",
    title: "Club Membership",
    details: "Full Gym Access, 1 Relaxation Treatment, 1 Group Classes including Yoga, Unlimited Steam Room and Sauna Access, Unlimited Swimming Pool Accesss",
    prices: {
      quarterly: "UGX 2,190,000",
      biannual: "UGX 4,000,00",
      annual: "UGX 7,900,000"
    }
  },
  {
    id: "corporate",
    title: "Corporate Membership - Minimum Group",
    details: "Full Gym Access, 1 Relaxation Treatment, 1 Group Class excluding Yoga, Minimum group 5, Unlimited Steam Room and Sauna Access, Unlimited Swimming Pool Accesss",
    prices: {
      quarterly: "UGX  1,750,000",
      biannual: "UGX  3,800,000",
      annual: "UGX  6,600,000"
    }
  },
  {
    id: "family",
    title: "FAMILY(2 ADULTS/UPTO 2 CHILDREN UNDER 15)",
    details: "Full Gym Access, 1 Relaxation Treatment, 1 Group Classes per month including Yoga, Unlimited Steam Room and Sauna Access, Unlimited Swimming Pool Accesss, Friends and Family",
    prices: {
      quarterly: "UGX 5,800,000",
      biannual: "UGX 10,000,000",
      annual: "UGX 17,500,000"
    }
  },
  {
    id: "iv",
    title: "IV Package",
    details: "4 IV Hydration Treatments after consultation, Beauty Package Products, 1 Beauty or Body Treatments, Unlimited Steam & Sauna Room Pool, Unlimited Swimming Pool",
    prices: {
      quarterly: "UGX 5,800,000",
      biannual: "UGX 10,000,000",
      annual: "UGX 17,500,000"
    }
  },
];

const durationOptions = [
  { value: "monthly", label: "Monthly" },
  { value: "quarterly", label: "Quarterly" },
  { value: "biannual", label: "Bi-Annual" },
  { value: "annual", label: "Annual" },
];

const Membership = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    membershipType: "",
    duration: "",
    message: "",
  });
  const [selectedMembership, setSelectedMembership] = useState<null | (typeof membershipOptions)[0]>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if Supabase is configured
    if (!supabase) {
      toast({
        title: "Configuration Error",
        description: "Database not configured. Please contact support.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const { error } = await supabase
      .from('membership_applications')
      .insert([{
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        membership_type: formData.membershipType,
        duration: formData.duration,
        notes: formData.message,
      }]);

    if (error) {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    } else {
      // WhatsApp Health Club number
      const healthClubNumber = "256708421449";
      const message =
        `Membership Application:\n` +
        `Name: ${formData.firstName} ${formData.lastName}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Membership Type: ${formData.membershipType}\n` +
        `Duration: ${formData.duration}\n` +
        `Message: ${formData.message}`;
      const whatsappUrl = `https://wa.me/${healthClubNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");

      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. Our team will contact you shortly.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        membershipType: "",
        duration: "",
        message: "",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-usawa-green via-usawa-green/90 to-usawa-green/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Link
              to="/health-club"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Health Club
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Become a Member
            </h1>
            <p className="text-lg text-white/90">
              Join our exclusive health club community and start your wellness
              journey today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-3xl p-8 md:p-12 shadow-soft border border-border"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-usawa-green mb-6">
                    Personal Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder=""
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder=""
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                </div>

                {/* Membership Selection */}
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-usawa-green mb-6">
                    Select Your Membership
                  </h2>
                  <RadioGroup
                    value={formData.membershipType}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, membershipType: value }))
                    }
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {membershipOptions.map((option) => (
                      <div key={option.id}>
                        <RadioGroupItem
                          value={option.id}
                          id={option.id}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={option.id}
                          className="flex flex-col items-center justify-center p-6 rounded-xl border-2 border-border bg-background cursor-pointer transition-all hover:border-usawa-green/50 peer-data-[state=checked]:border-usawa-green peer-data-[state=checked]:bg-usawa-green/5"
                          onClick={() => setSelectedMembership(option)}
                        >
                          <span className="font-medium text-foreground text-center">
                            {option.title}
                          </span>
                          <span className="text-xs text-muted-foreground mt-2">Click for details</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                {/* Membership Details Modal */}
                {selectedMembership && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 relative animate-fade-in">
                      <button
                        className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                        onClick={() => setSelectedMembership(null)}
                        aria-label="Close"
                      >
                        &times;
                      </button>
                      <h3 className="text-2xl font-bold mb-2 text-usawa-green">{selectedMembership.title}</h3>
                      <p className="mb-4 text-gray-700">{selectedMembership.details}</p>
                      <div className="mb-4">
                        <div className="font-semibold text-usawa-green">Pricing:</div>
                        <ul className="mt-2 space-y-1">
                          <li><span className="font-medium">Quarterly:</span> {selectedMembership.prices.quarterly}</li>
                          <li><span className="font-medium">Bi-Annual:</span> {selectedMembership.prices.biannual}</li>
                          <li><span className="font-medium">Annual:</span> {selectedMembership.prices.annual}</li>
                        </ul>
                      </div>
                      <Button
                        className="w-full mt-4"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, membershipType: selectedMembership.id }));
                          setSelectedMembership(null);
                        }}
                      >
                        Choose This Membership
                      </Button>
                    </div>
                  </div>
                )}

                {/* Duration Selection */}
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-usawa-green mb-6">
                    Preferred Duration
                  </h2>
                  <Select
                    value={formData.duration}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, duration: value }))
                    }
                  >
                    <SelectTrigger className="h-12 w-full md:w-1/2">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      {durationOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Additional Message */}
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-usawa-green mb-6">
                    Additional Information
                  </h2>
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Any questions or special requirements?
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your fitness goals, any health considerations, or questions you may have..."
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                </div>

                {/* Benefits Reminder */}
                <div className="p-6 bg-sage/5 rounded-xl border border-usawa-green/10">
                  <h3 className="font-semibold text-usawa-green mb-4 flex items-center gap-2">
                   
                    What's included with your membership
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {[
                      "Full Gym Access",
                      "Swimming Pool",
                      "Steam Room & Sauna",
                      "Personal Training Sessions",
                      "Group Classes",
                      "Wellness Treatments",
                    ].map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-usawa-green hover:bg-usawa-green/90 text-white flex-1"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    asChild
                    className="flex-1 border-usawa-green text-warm-gray hover:bg-usawa-green/70"
                  >
                    <Link to="/health-club">View All Packages</Link>
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Membership;
