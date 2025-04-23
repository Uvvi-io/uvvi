
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import ImageCarousel from '@/components/property/ImageCarousel';
import PropertyDetails from '@/components/property/PropertyDetails';
import PropertyMap from '@/components/property/PropertyMap';
import ContactForm from '@/components/property/ContactForm';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-estate-gray-light">
      <Navbar />
      
      <main className="flex-grow mb-8">
        <div className="container mx-auto px-4 py-6">
          <ImageCarousel />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Left Column (2/3 width on large screens) */}
            <div className="lg:col-span-2">
              <div id="property-details">
                <PropertyDetails />
              </div>
            </div>
            
            {/* Right Column (1/3 width on large screens) */}
            <div className="space-y-6">
              <div id="property-map">
                <PropertyMap />
              </div>
              <div id="contact-agent">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

