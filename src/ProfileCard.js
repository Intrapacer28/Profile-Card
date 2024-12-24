import React, { useState, useEffect } from 'react';

const ProfileCard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(response => response.json())
      .then(data => {
        setUserData(data.results[0]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100">
        <div className="text-xl text-indigo-600 animate-pulse font-semibold">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Employee Profile
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4 rounded-full"/>
        </div>

        {/* Main Card */}
        <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
          <div className="p-1 bg-gradient-to-r from-indigo-600 to-purple-600">
            <div className="bg-white p-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Image Section */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-300"/>
                  <div className="relative w-48 h-48">
                    <img 
                      src={userData?.picture.large} 
                      alt={`${userData?.name.first} ${userData?.name.last}`}
                      className="w-full h-full object-cover rounded-2xl shadow-lg ring-4 ring-white"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-6">
                  {/* Name and Title */}
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                      {userData?.name.first} {userData?.name.last}
                    </h2>
                    <p className="text-indigo-600 font-medium">{userData?.email}</p>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl">
                      <p className="text-sm text-indigo-600 font-medium mb-1">Location</p>
                      <p className="text-gray-800">{userData?.location.city}, {userData?.location.country}</p>
                    </div>

                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl">
                      <p className="text-sm text-indigo-600 font-medium mb-1">Phone</p>
                      <p className="text-gray-800">{userData?.phone}</p>
                    </div>

                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl">
                      <p className="text-sm text-indigo-600 font-medium mb-1">Age</p>
                      <p className="text-gray-800">{userData?.dob.age} years</p>
                    </div>

                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl">
                      <p className="text-sm text-indigo-600 font-medium mb-1">Gender</p>
                      <p className="text-gray-800 capitalize">{userData?.gender}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:opacity-90 transition-all duration-300">
                      Contact Profile
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 px-6 py-3 rounded-xl font-medium border border-gray-200 hover:shadow-lg hover:opacity-90 transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-600">
          <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;