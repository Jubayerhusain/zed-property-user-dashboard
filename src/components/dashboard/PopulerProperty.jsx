import React from "react";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import { LiaBedSolid } from "react-icons/lia";
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
    <>
      <div>
        {/* property section  */}
        <section className="mx-auto px-2">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Popular Property
            </h2>
            <button className="text-green-500 font-medium hover:underline">
              See more
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <Link
                to={"/property-details/:id"}
                key={property.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative p-3 rounded-xl h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover rounded-xl hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {property.title}
                    </h3>
                    <p className="text-lg font-bold text-gray-900">
                      {property.price}
                    </p>
                  </div>

                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{property.location}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center text-gray-600 text-sm">
                      <img
                        src={solar_bed_broken}
                        alt="Beds"
                        className="w-4 h-4 mr-1"
                      />
                      <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <img
                        src={solar_bath_linear}
                        alt="Baths"
                        className="w-4 h-4 mr-1"
                      />
                      <span>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <img
                        src={maximize}
                        alt="Square Feet"
                        className="w-4 h-4 mr-1"
                      />
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* map section */}
        <section className="p-4">
          <div className=" flex justify-between items-center my-8">
            <h3 className="text-2xl font-semibold">Find the nearest of you</h3>
            <div className="flex items-center gap-2 font-semibold text-[20px]">
              <BiShapeSquare />
              <p className="">Radius 20 km</p>
            </div>
          </div>

          <div className="bg-white shadow p-4 rounded-2xl">
            <div className="flex justify-between items-center my-5">
              <div className="flex items-center gap-2 font-semibold text-[20px]">
                <HiOutlineBuildingOffice2 />
                <p> Showing 9 Resultas</p>
              </div>
              <div className="flex items-center gap-2 font-semibold text-[20px]">
                <IoLocationOutline />
                <p>Semarang, Indoesia</p>
              </div>
            </div>
            <div className="rounded-2xl"> 
                <img className="rounded-2xl" src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg?mbid=social_retweet" alt="" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PopulerProperty;
