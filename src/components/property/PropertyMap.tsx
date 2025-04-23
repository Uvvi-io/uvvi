
import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useProperty } from '@/hooks/useProperty';

// Define types for the Google Maps window object
declare global {
  interface Window {
    initMap: () => void;
    google?: {
      maps: any;
    };
  }
}

const PropertyMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { data } = useProperty();
  
  useEffect(() => {
    // Function to geocode address and initialize map
    const initializeMapWithAddress = async () => {
      if (!data?.property) return;

      const { address, city, state, zip_code } = data.property;
      const fullAddress = `${address}, ${city}, ${state} ${zip_code}`;
      
      try {
        // Get the API key from Supabase Edge Function
        const { data: apiKeyData } = await supabase.functions.invoke('get-google-maps-key');
        const apiKey = apiKeyData.key;

        // Function to load the Google Maps script
        const loadGoogleMapsScript = () => {
          // Check if script is already loaded
          if (window.google) {
            geocodeAndInitMap(fullAddress);
            return;
          }
          
          // Create the script element
          const script = document.createElement('script');
          script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
          script.async = true;
          script.defer = true;
          
          // Define the callback function
          window.initMap = () => geocodeAndInitMap(fullAddress);
          
          // Append the script to the DOM
          document.head.appendChild(script);
        };
        
        // Function to geocode address and initialize map
        const geocodeAndInitMap = (address: string) => {
          if (mapRef.current && window.google) {
            const geocoder = new window.google.maps.Geocoder();
            
            geocoder.geocode({ address }, (results: any, status: any) => {
              if (status === 'OK' && results[0]) {
                const propertyLocation = results[0].geometry.location;
                
                // Create a new map
                const map = new window.google.maps.Map(mapRef.current, {
                  center: propertyLocation,
                  zoom: 15,
                  mapTypeControl: true,
                  streetViewControl: true,
                  fullscreenControl: true,
                });
                
                // Add a marker for the property
                new window.google.maps.Marker({
                  position: propertyLocation,
                  map,
                  title: address,
                  animation: window.google.maps.Animation.DROP,
                });
              }
            });
          }
        };
        
        // Load the Google Maps script
        loadGoogleMapsScript();
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };
    
    initializeMapWithAddress();
    
    // Cleanup function
    return () => {
      window.initMap = () => {};
    };
  }, [data?.property]);

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 bg-estate-gray-light mb-6">
      <div className="p-4 bg-white border-b border-gray-200">
        <h3 className="text-lg font-bold text-estate-gray-dark flex items-center">
          <MapPin size={18} className="mr-2 text-estate-primary" />
          {t('property.location')}
        </h3>
      </div>
      <div 
        ref={mapRef} 
        className="relative h-[300px] w-full"
        aria-label="Map showing property location"
      >
        {!data?.property && (
          <div className="absolute inset-0 flex items-center justify-center text-estate-gray-dark">
            <p className="text-sm">{t('property.address')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyMap;
