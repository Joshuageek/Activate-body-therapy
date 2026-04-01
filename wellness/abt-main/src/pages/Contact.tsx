import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import { services as servicesData } from "@/pages/Services";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+256 708-661-166 | +256 708 421 449",
    link: "tel:+256 708-661-166 | tel:+256 708 421 449",
  },
  {
    icon: Mail,
    title: "Email",
    details: "activatebodytherapy@gmail.com",
    link: "mailto:activatebodytherapy@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Plot 12, Kyadondo Road, Nakasero Uganda | Plot 5 Naguru Hill East Rd, The Summit Residences, Kampala Uganda",
    link: "https://www.google.com/maps?q=0.3304547,32.5792869&z=17&hl=en",
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Sat: 8AM-8PM | Sun: 10AM-6PM",
    link: "#",
  },
];

const serviceOptions = [
  ...servicesData.map((service) => service.title),
  ...servicesData.flatMap((service) => service.treatments?.map((t) => t.title) ?? []),
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappNumber = "256708661166";
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nPreferred date: ${formData.date}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");

    toast({
      title: "WhatsApp Message Ready",
      description: "Your request is being sent via WhatsApp. Please complete the chat to confirm.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-28 pb-32 md:pt-32 md:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/contact.jpg"
            alt="Contact Background"
            loading="lazy"
            className="w-full h-full object-cover object-top"
            style={{ objectPosition: '50% 22%' }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-slate-100/20 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Let's Start Your
              <br />
              <span className="text-primary">Wellness Journey</span>
            </h1>
            <p className="text-lg text-white/85 leading-relaxed">
              Ready to feel your best? Get in touch to book an appointment or
              ask any questions. We're here to help you achieve your wellness
              goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {info.details}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Maps Section */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-usawa-green mb-2">Main Clinic</h3>
                  <div className="rounded-2xl overflow-hidden h-48">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7519282203953!2d32.57928109999999!3d0.33053690000001845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb05b7f20f4b%3A0xaf090250c1f76c53!2sActivate%20Body%20Therapy!5e0!3m2!1sen!2sug!4v1775048618175!5m2!1sen!2sug"                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Main Clinic Location"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">8HJH+5PM Kampala</p>
                </div>
                <div>
                  <h3 className="font-semibold text-usawa-green mb-2">Health Club</h3>
                  <div className="rounded-2xl overflow-hidden h-48">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.994725172324!2d32.5825837673828!3d0.338522953288393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbf2e1c64e05%3A0x501ff2d1435381df!2sActivate%20Body%20Therapy%20Health%20Club!5e0!3m2!1sen!2sus!4v1775048754391!5m2!1sen!2sus"                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Health Club Location"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">8JW4+HJ Kampala</p>
                </div>
              </div>
            </div>


            {/* Booking Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-medium">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                  Book an Appointment
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=""
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
                        onChange={handleChange}
                        placeholder=""
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=""
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, service: value }))
                      }
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your goals, any specific concerns, or questions you have..."
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Booking Request
                        <Send size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Check out our frequently asked questions or give us a call. We're
              always happy to help!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="outline" size="lg">
                <a href="tel:+1234567890">
                  <Phone size={18} />
                  Call (+256)708-661-166
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link to="/services">
                  View Services
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
