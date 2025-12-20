import React from "react";
import { MapPin } from "lucide-react";
import maximize from "../../assets/shared-icons-img/maximize-3.png";
import solar_bath_linear from "../../assets/shared-icons-img/solar_bath-linear.png";
import solar_bed_broken from "../../assets/shared-icons-img/solar_bed-broken.png";
import { Link } from "react-router-dom";
import { BiShapeSquare } from "react-icons/bi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";

const PopulerProperty = () => {
  const properties = [
    {
      id: 1,
      title: "Classic Damara",
      price: "ZMW 480,500",
      location: "Lusaka, Kitwe and Ndola",
      beds: 4,
      baths: 2,
      sqft: "2,826",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Manstret Haven",
      price: "ZMW 425,000",
      location: "Lusaka, Kitwe and Ndola",
      beds: 4,
      baths: 2,
      sqft: "2,820",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Boston Retreat",
      price: "ZMW 350,800",
      location: "Lusaka, Kitwe and Ndola",
      beds: 3,
      baths: 2,
      sqft: "2,640",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto  sm:px-4 lg:px-6">
      <section className="py-6 sm:py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Popular Property
          </h2>
          <button className="text-green-500 font-medium hover:underline self-start sm:self-auto">
            See more
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-5 lg:gap-6">
          {properties.map((property) => (
            <Link
              to={`/property-details/${property.id}`}
              key={property.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative p-3 h-52 sm:h-56 lg:h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover rounded-xl hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex justify-between items-start mb-2 sm:mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {property.title}
                  </h3>
                  <p className="text-base sm:text-lg font-bold text-gray-900">
                    {property.price}
                  </p>
                </div>

                <div className="flex items-start gap-1 text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">
                  <MapPin className="w-4 h-4 mt-[2px]" />
                  <span>{property.location}</span>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-200 text-xs sm:text-sm">
                  <div className="flex items-center text-gray-600">
                    <img
                      src={solar_bed_broken}
                      alt="Beds"
                      className="w-4 h-4 mr-1"
                    />
                    {property.beds} Beds
                  </div>

                  <div className="flex items-center text-gray-600">
                    <img
                      src={solar_bath_linear}
                      alt="Baths"
                      className="w-4 h-4 mr-1"
                    />
                    {property.baths} Baths
                  </div>

                  <div className="flex items-center text-gray-600">
                    <img
                      src={maximize}
                      alt="Sqft"
                      className="w-4 h-4 mr-1"
                    />
                    {property.sqft} sqft
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold">
            Find the nearest of you
          </h3>

          <div className="flex items-center gap-2 font-semibold text-base sm:text-lg">
            <BiShapeSquare />
            <p>Radius 20 km</p>
          </div>
        </div>

        <div className="bg-white shadow p-3 sm:p-4 rounded-2xl">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 my-4 sm:my-5">
            <div className="flex items-center gap-2 font-semibold text-sm sm:text-lg">
              <HiOutlineBuildingOffice2 />
              <p>Showing 9 Results</p>
            </div>

            <div className="flex items-center gap-2 font-semibold text-sm sm:text-lg">
              <IoLocationOutline />
              <p>Semarang, Indonesia</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-56 sm:h-72 lg:h-[420px]">
            <img
              className="w-full h-full object-cover"
              src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
              alt="Map"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopulerProperty;
