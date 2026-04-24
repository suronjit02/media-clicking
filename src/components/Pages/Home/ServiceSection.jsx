import React from "react";
import ServiceCard from "./card/ServiceCard";
import FadeIn from "../../motion/FadeIn";

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
    img: "/img/service/Product-development.jpeg",
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
    img: "/img/service/Branding-Strategy.jpg",
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
    img: "/img/service/Market-Research.jpeg",
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
    img: "/img/service/PR-&-Marketing.jpeg",
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
    img: "/img/service/E-Commerce-&-Web-Development.jpeg",
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
    img: "/img/service/Media-Planning-&-Buying.jpeg",
  },
];

const ServiceSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-0">
      <FadeIn direction="up">
        <div className="flex flex-col items-center justify-between gap-4 mb-10 md:mb-15">
          <p className="text-sm uppercase font-bold tracking-widest primary-txt">
            What We Do
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold saira-font text-center">
            Our core{" "}
            <span className="bg-gradient-to-r from-[#800080] to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl text-center">
            MediaClicking is a full-service media and communications agency
            delivering integrated solutions across strategy, creativity,
            analytics, and execution.
          </p>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <FadeIn key={service.id} direction="up" delay={( i % 3) * 0.1} duration={0.65}>
            <ServiceCard service={service} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
