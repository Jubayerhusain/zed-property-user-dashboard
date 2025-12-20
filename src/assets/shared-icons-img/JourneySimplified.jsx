import React from "react";
import { Building2, Calendar, MapPin } from "lucide-react";

export default function JourneySimplified() {
  const steps = [
    {
      id: "01",
      icon: <Building2 className="w-6 h-6 " />,
      title: "Discover Property",
      description:
        "Find a wide selection of properties that perfectly suit your needs and preferences. Browse a comprehensive list of properties that offer detailed information.",
    },
    {
      id: "02",
      icon: <Calendar className="w-6 h-6 " />,
      title: "Schedule Visit",
      description:
        "Once you find a property of interest, schedule a visit at your convenience. Choose a date and time, and our team will ensure a smooth viewing experience.",
    },
    {
      id: "03",
      icon: <MapPin className="w-6 h-6 " />,
      title: "Property Visit",
      description:
        "Visit, explore the neighborhood, and ensure every detail meets your expectations. Our team will be on hand to answer questions and provide information.",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-800 mb-2 font-manrope">How It Work</p>
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            Your{" "}
            <span
              className="bg-gradient-to-t to-[#0BC147] from-[#b6f50a] 
  bg-clip-text text-transparent italic"
            >
              Journey
            </span>
            , Simplified
          </h2>
          <p className="text-gray-500 text-sm font-manrope ">
            Search, connect, and move in—buying or renting property has never
            been easier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white border font-manrope border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 relative"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-white border-lime-300 border text-lime-400 rounded-xl flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="text-4xl font-bold text-gray-800">
                  {step.id}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
