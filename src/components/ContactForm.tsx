import React from 'react';

export default function ContactForm() {
  const [formType, setFormType] = React.useState<'advertiser' | 'vehicle-owner'>('advertiser');

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
      <div className="mb-6">
        <div className="flex space-x-4 mb-6">
          <button
            className={`flex-1 py-2 px-4 rounded-full text-center ${
              formType === 'advertiser'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
            onClick={() => setFormType('advertiser')}
          >
            Place an Ad
          </button>
          <button
            className={`flex-1 py-2 px-4 rounded-full text-center ${
              formType === 'vehicle-owner'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
            onClick={() => setFormType('vehicle-owner')}
          >
            Register Vehicle
          </button>
        </div>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Enter your phone number"
          />
        </div>

        {formType === 'vehicle-owner' && (
          <div>
            <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-1">
              Vehicle Type
            </label>
            <select
              id="vehicleType"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            >
              <option value="rickshaw">Rickshaw</option>
              <option value="car">Car</option>
              <option value="van">Van</option>
            </select>
          </div>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Tell us about your requirements"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}