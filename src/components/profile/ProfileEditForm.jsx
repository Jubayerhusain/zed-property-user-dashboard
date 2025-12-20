import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

const ProfileEditForm = () => {
  const [formData, setFormData] = useState({
    name: 'Russel Petter',
    username: 'Russel0961',
    email: 'Companyname@gmail.com',
    phoneNumber: '017 1236 584',
    country: 'Indonesia',
    state: 'Indonesia'
  });

  const [avatar, setAvatar] = useState('https://api.dicebear.com/7.x/avataaars/svg?seed=Russel');
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePhoto = () => {
    setAvatar('https://api.dicebear.com/7.x/avataaars/svg?seed=default');
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }
    
    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }
    
    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Profile updated successfully!');
    }
  };

  const handleCancel = () => {
    setFormData({
      name: 'Russel Petter',
      username: 'Russel0961',
      email: 'Companyname@gmail.com',
      phoneNumber: '017 1236 584',
      country: 'Indonesia',
      state: 'Indonesia'
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4">
      <div className="space-y-6">
        {/* Breadcrumb */}
        <div className="bg-white rounded-lg shadow-sm p-5">
          <div className="flex items-center gap-2 text-md">
            <span className="text-gray-600">Profile</span>
            <span className="text-gray-400">/</span>
            <span className="text-green-500 font-medium">Profile Edit</span>
          </div>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          {/* Avatar Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 pb-8 border-b border-gray-200">
            <div className="relative">
              <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT29GwaWk7h0eivDe1X33QrmPFJKohsqAFrAQ&s'}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover ring-4 ring-gray-100"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
                <div className="flex items-center gap-2 bg-gradient-to-t from-green-500 to-lime-400 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
                  <Upload size={18} />
                  <span>Upload a new photo</span>
                </div>
              </label>
              <button
                onClick={handleDeletePhoto}
                className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-600 px-4 py-2 rounded-lg border border-gray-300 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Name and Username Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border ${
                    errors.username ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`}
                  placeholder="Enter your username"
                />
                {errors.username && (
                  <p className="mt-1 text-sm text-red-500">{errors.username}</p>
                )}
              </div>
            </div>

            {/* Email and Phone Number Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border ${
                    errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`}
                  placeholder="Enter your phone number"
                />
                {errors.phoneNumber && (
                  <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>
                )}
              </div>
            </div>

            {/* Country and State Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border ${
                    errors.country ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`}
                  placeholder="Enter your country"
                />
                {errors.country && (
                  <p className="mt-1 text-sm text-red-500">{errors.country}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border ${
                    errors.state ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`}
                  placeholder="Enter your state"
                />
                {errors.state && (
                  <p className="mt-1 text-sm text-red-500">{errors.state}</p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <button
                onClick={handleSave}
                className="bg-gradient-to-t from-green-500 to-lime-400 hover:bg-green-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="bg-white hover:bg-gray-50 text-gray-600 px-6 py-2.5 rounded-lg font-medium border border-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditForm;