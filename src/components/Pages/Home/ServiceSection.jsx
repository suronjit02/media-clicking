import React from "react";
import ServiceCard from "./card/ServiceCard";

const services = [
  {
    id: 1,
    title: "Product Development",
    desc: [
      "Develop business-based products for global platform",
      "Discover, develop and commercialize new products",
      "Improve existing products and services",
      "Focus on customer and competitor intelligence",
      "Build scalable market-ready solutions",
    ],
    img: "/images/web.jpg",
  },
  {
    id: 2,
    title: "Branding & Re-branding",
    desc: [
      "Custom logo design and re-creation",
      "Business card and branding package",
      "Print ads, brochures and marketing materials",
      "Increase brand awareness and identity",
      "Complete visual branding solutions",
    ],
    img: "/images/ui.jpg",
  },
  {
    id: 3,
    title: "Market Research",
    desc: [
      "Deep market and audience analysis",
      "Competitor research and benchmarking",
      "Survey, focus group and data collection",
      "Trend forecasting and insights",
      "Actionable business intelligence",
    ],
    img: "/images/web.jpg",
  },
  {
    id: 4,
    title: "PR & Marketing",
    desc: [
      "Media relations and communication strategy",
      "Brand reputation management",
      "Digital marketing and promotion",
      "Event planning and execution",
      "Public affairs and stakeholder engagement",
    ],
    img: "/images/ui.jpg",
  },
  {
    id: 5,
    title: "E-Commerce & Web Development",
    desc: [
      "Custom ecommerce website development",
      "Shopping cart and payment integration",
      "Database driven web applications",
      "SEO and digital marketing integration",
      "Scalable and modern web solutions",
    ],
    img: "/images/web.jpg",
  },
  {
    id: 6,
    title: "Media Planning & Buying",
    desc: [
      "Target audience research and planning",
      "Media strategy and campaign design",
      "Ad placement and negotiation",
      "Cost optimization and efficiency",
      "Performance tracking and analysis",
    ],
    img: "/images/ui.jpg",
  },
];

const ServiceSection = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center justify-between gap-4 mb-15">
        <p className="text-sm uppercase font-bold tracking-widest primary-txt ">
          What We Do
        </p>
        <h2 className="text-5xl font-extrabold saira-font">
          Our core{" "}
          <span className="bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent ">
            Services
          </span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl text-center">
          MediaClicking is a full-service media and communications agency
          delivering integrated solutions across strategy, creativity,
          analytics, and execution.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
