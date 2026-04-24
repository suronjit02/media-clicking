import React from "react";
import CapabilitiesCard from "./card/CapabilitiesCard";

const capabilitiesLists = [
  {
    id: 1,
    title: "Analytics",
    desc: "Turn complexity into clarity with integrated research and actionable insights.",
    img: "/public/img/capabilitiesImg/Analytics.jpeg",
  },
  {
    id: 2,
    title: "B2B Communications",
    desc: "Comprehensive marketing strategies helping businesses connect, influence, and grow.",
    img: "/public/img/capabilitiesImg/B2B-Communications.jpeg",
  },
  {
    id: 3,
    title: "Content Creation",
    desc: "High-impact visual storytelling crafted by our global team of creatives.",
    img: "/public/img/capabilitiesImg/Content-Creation.jpeg",
  },
  {
    id: 4,
    title: "Digital Strategy",
    desc: "Data-driven strategies designed for meaningful engagement across all platforms.",
    img: "/public/img/capabilitiesImg/Digital-Strategy.jpeg",
  },
  {
    id: 5,
    title: "Earned Media",
    desc: "Shape narratives and build trust through specialized media relations and story development.",
    img: "/public/img/capabilitiesImg/Earned-Media.jpeg",
  },
  {
    id: 6,
    title: "Employee Engagement",
    desc: "Internal communications and change management programs to connect with your team.",
    img: "/public/img/capabilitiesImg/Employee-Engagement.jpeg",
  },
  {
    id: 7,
    title: "Entertainment",
    desc: "Talent partnerships and live experiences driving entertainment-focused marketing.",
    img: "/public/img/capabilitiesImg/Entertainment.jpeg",
  },
  {
    id: 8,
    title: "Executive Advisory",
    desc: "Empower leaders with powerful narratives across public speaking and digital platforms.",
    img: "/public/img/capabilitiesImg/Executive-Advisory.jpeg",
  },
  {
    id: 9,
    title: "Financial Comms",
    desc: "Clear, strategic communication for financial transactions and investor relations.",
    img: "/public/img/capabilitiesImg/Financial-Communications.jpeg",
  },
  {
    id: 10,
    title: "Influencer Marketing",
    desc: "Authentic collaborations leveraging audience analytics and creative storytelling.",
    img: "/public/img/capabilitiesImg/Influencer-Marketing.jpeg",
  },
  {
    id: 11,
    title: "Crisis Management",
    desc: "Proactive risk identification and strategic guidance to protect brand reputation.",
    img: "/public/img/capabilitiesImg/Crisis-Management.jpeg",
  },
  {
    id: 12,
    title: "Paid Media",
    desc: "Amplify your message with precision-targeted campaigns for the optimal audience.",
    img: "/public/img/capabilitiesImg/Paid-Media.jpeg",
  },
  {
    id: 13,
    title: "Public Affairs",
    desc: "Navigate complex regulatory environments at the intersection of media and policy.",
    img: "/public/img/capabilitiesImg/Public-Affairs.jpeg",
  },
  {
    id: 14,
    title: "Purpose & Sustainability",
    desc: "Data-driven strategies for CSR and social impact initiatives delivering proven ROI.",
    img: "/public/img/capabilitiesImg/Sustainability.jpeg",
  },
  {
    id: 15,
    title: "Reputation Management",
    desc: "Build unshakeable trust through authenticity, credibility, and strategic communication.",
    img: "/public/img/capabilitiesImg/Reputation Management.jpeg",
  },
  {
    id: 16,
    title: "Sports Marketing",
    desc: "Maximize partnership value through sponsorship strategy and targeted media amplification.",
    img: "/public/img/capabilitiesImg/Sports-Marketing.jpeg",
  },
  {
    id: 17,
    title: "MediaClicking Studios",
    desc: "Award-winning in-house production bringing dynamic visual stories to life.",
    img: "/public/img/capabilitiesImg/Studios.jpg",
  },
];

const CapabilitiesSection = () => {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-5 md:px-0">
        <div className="flex flex-col items-center justify-between gap-4 mb-10 md:mb-15">
          <p className="text-sm uppercase font-bold tracking-widest primary-txt ">
            What Else We Offer
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold saira-font text-center">
            Our{" "}
            <span className="bg-gradient-to-r from-[#800080] to-purple-500 bg-clip-text text-transparent ">
              Capabilities
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl text-center">
            A comprehensive suite of scalable solutions tailored to help brands
            connect, influence, and lead.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilitiesLists.map((capabilitie) => (
            <CapabilitiesCard key={capabilitie.id} capabilitie={capabilitie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CapabilitiesSection;
