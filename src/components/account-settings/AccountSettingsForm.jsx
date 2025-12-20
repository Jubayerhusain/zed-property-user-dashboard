import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const AccountSettingsForm = () => {
  const [formData, setFormData] = useState({
    firstName: 'Russel',
    lastName: 'Petter',
    email: 'Companyname@gmail.com',
    phoneNumber: '017 123 568 5245',
    password: 'abcd 1234'
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPasswordModal, setShowPasswordModal] = useState(false);

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

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Account settings updated successfully!');
    }
  };

  const handleCancel = () => {
    setFormData({
      firstName: 'Russel',
      lastName: 'Petter',
      email: 'Companyname@gmail.com',
      phoneNumber: '017 123 568 5245',
      password: 'abcd 1234'
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-50  sm:p-4">
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-5">
          <h1 className="text-md font-bold text-gray-900">Account Settings</h1>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <div className="space-y-6">
            {/* First Name and Last Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
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

            {/* Phone Number */}
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

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 pr-12 border ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
              <p className="mt-2 text-sm text-gray-600">
                Want to change the password?{' '}
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(true)}
                  className="text-green-500 hover:text-green-600 font-medium underline transition-colors"
                >
                  Click here
                </button>
              </p>
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

        {/* Password Change Modal */}
        {showPasswordModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Change Password</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter current password"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter new password"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Confirm new password"
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => {
                      setShowPasswordModal(false);
                      alert('Password changed successfully!');
                    }}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-medium transition-colors"
                  >
                    Update Password
                  </button>
                  <button
                    onClick={() => setShowPasswordModal(false)}
                    className="flex-1 bg-white hover:bg-gray-50 text-gray-600 px-4 py-2.5 rounded-lg font-medium border border-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountSettingsForm;