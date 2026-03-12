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

const membershipOptions = [
  { id: "fitness", title: "Fitness Package",  },
  { id: "club", title: "Club Membership",  },
  { id: "corporate", title: "Corporate Membership",  },
  { id: "family", title: "Family Package", },
  { id: "wellness", title: "Wellness Package",  },
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Application Submitted!",
      description:
        "Thank you for your interest. Our team will contact you shortly.",
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
                        >
                          
                          <span className="font-medium text-foreground text-center">
                            {option.title}
                          </span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

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
