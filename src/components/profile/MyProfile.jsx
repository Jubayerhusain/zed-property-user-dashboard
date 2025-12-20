import React, { useState } from "react";
import { Edit, MapPin, Bed, Bath, Maximize, Star } from "lucide-react";
import maximize from "../../assets/shared-icons-img/maximize-3.png";
import solar_bath_linear from "../../assets/shared-icons-img/solar_bath-linear.png";
import solar_bed_broken from "../../assets/shared-icons-img/solar_bed-broken.png";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Profile Data
  const profileData = {
    name: "Russel Petter",
    username: "Russel0961",
    email: "Companyname@gmail.com",
    phone: "017 1000000",
    state: "Indonesia",
    country: "Indonesia",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT29GwaWk7h0eivDe1X33QrmPFJKohsqAFrAQ&s",
  };

  // Properties Data
  const propertiesData = [
    {
      id: 1,
      name: "Manstret Haven",
      price: "$425.000",
      location: "New York, United States",
      beds: 4,
      baths: 2,
      area: "2,820 sqft",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Manstret Haven",
      price: "$425.000",
      location: "New York, United States",
      beds: 4,
      baths: 2,
      area: "2,820 sqft",
      image:
        "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Manstret Haven",
      price: "$425.000",
      location: "New York, United States",
      beds: 4,
      baths: 2,
      area: "2,820 sqft",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Manstret Haven",
      price: "$425.000",
      location: "New York, United States",
      beds: 4,
      baths: 2,
      area: "2,820 sqft",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      name: "Manstret Haven",
      price: "$425.000",
      location: "New York, United States",
      beds: 4,
      baths: 2,
      area: "2,820 sqft",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    },
  ];

  // Feedback Data
  const feedbackData = [
    {
      id: 1,
      agentLabel: "Agent",
      name: "Emilia Sigh",
      date: "22/04/2025",
      time: "12:42 AM",
      feedback:
        "Friendly service Josh, Lunar and everyone at Just Property in Hastings deserved a big Thank You from us for moving us from Jakarta to Medan during the lockdown.",
      rating: 4.95,
      status: "Excellent",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9us0MxB35Wv3z03TJFrxhub-WyxqpBKAsjQ&s",
    },
    {
      id: 2,
      agentLabel: "Agent",
      name: "Patlison Parkur",
      date: "22/04/2025",
      time: "12:42 AM",
      feedback:
        "Dealing with Syamsudin and Bakri was a joy. I got in touch with Just Property after seeing a couple of properties that caught my eye. Both Syamsudin and Bakri strive to deliver a professional .",
      rating: 4.95,
      status: "Excellent",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt5DucWb5DkKEsnj_QnoAbHomcjIv4KCd8Eg&s",
    },
  ];

  const handleScroll = (direction) => {
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (
      direction === "right" &&
      currentIndex < propertiesData.length - 1
    ) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 sm:p-4">
      <div className="space-y-6">
        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Profile</h2>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-4">
              <img
                src={profileData.avatar}
                alt={profileData.name}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {profileData.name}
                </h3>
                <p className="text-sm text-gray-500">{profileData.username}</p>
              </div>
            </div>
            <Link to={'/profile/profile-edit'}  className="flex items-center gap-2 bg-gradient-to-t from-green-500 to-lime-400 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
              <Edit size={16} />
              <span>Edit Profile</span>
            </Link>
          </div>

          {/* Profile Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex gap-2 items-center">
              <p className="text-sm text-gray-600">Name:</p>
              <p className="font-semibold text-gray-900">{profileData.name}</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-sm text-gray-600 ">Email:</p>
              <p className="font-semibold text-gray-900">{profileData.email}</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-sm text-gray-600 ">State:</p>
              <p className="font-semibold text-gray-900">{profileData.state}</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-sm text-gray-600 ">Username:</p>
              <p className="font-semibold text-gray-900">
                {profileData.username}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-sm text-gray-600 ">Phone Number:</p>
              <p className="font-semibold text-gray-900">{profileData.phone}</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-sm text-gray-600 ">Country:</p>
              <p className="font-semibold text-gray-900">
                {profileData.country}
              </p>
            </div>
          </div>
        </div>

        {/* My Properties Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            My Properties ({propertiesData.length} Properties)
          </h3>

          {/* Properties Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex gap-4 transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / Math.min(4, propertiesData.length))
                  }%)`,
                }}
              >
                {propertiesData.map((property) => (
                  <div
                    key={property.id}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
                  >
                    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="relative rounded-2xl p-3 h-56 overflow-hidden">
                        <img
                          src={property.image}
                          alt={property.name}
                          className="rounded-2xl w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900">
                            {property.name}
                          </h4>
                          <span className="text-lg font-bold text-gray-900">
                            {property.price}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                          <MapPin size={14} />
                          <span>{property.location}</span>
                        </div>
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
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            {propertiesData.length > 4 && (
              <>
                <button
                  onClick={() => handleScroll("left")}
                  disabled={currentIndex === 0}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-green-500 rounded-full p-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-500 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => handleScroll("right")}
                  disabled={currentIndex >= propertiesData.length - 4}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-green-500 rounded-full p-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-500 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Feedback Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Feedback You Gave
          </h3>

          <div className="space-y-4">
            {feedbackData.map((feedback) => (
              <div
                key={feedback.id}
                className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <img
                  src={feedback.avatar}
                  alt={feedback.name}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <div>
                      <p className="text-xs text-gray-500 ">
                        {feedback.agentLabel}
                      </p>
                      <h4 className="font-semibold text-gray-900">
                        {feedback.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {feedback.date}{" "}
                        <span className="font-semibold">{feedback.time}</span>
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        {feedback.status}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star
                          size={16}
                          className="fill-yellow-400 text-yellow-400"
                        />
                        <span className="font-semibold text-gray-900">
                          {feedback.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {feedback.feedback}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
