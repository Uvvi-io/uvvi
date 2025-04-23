
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useProperty } from '@/hooks/useProperty';
import { toast } from '@/components/ui/use-toast';

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
  const [mapError, setMapError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Function to geocode address and initialize map
    const initializeMapWithAddress = async () => {
      if (!data?.property) {
        setIsLoading(false);
        return;
      }

      const { address, city, state, zip_code } = data.property;
      const fullAddress = `${address}, ${city}, ${state} ${zip_code}`;
      
      try {
        setIsLoading(true);
        setMapError(null);
        
        // Get the API key from Supabase Edge Function
        const { data: apiKeyResponse, error: apiKeyError } = await supabase.functions.invoke('get-google-maps-key');
        
        if (apiKeyError || !apiKeyResponse) {
          console.error('Error fetching Google Maps API key:', apiKeyError);
          setMapError('Failed to load Google Maps API key');
          setIsLoading(false);
          toast({
            title: "Error",
            description: "Failed to load Google Maps API key. Please check the Supabase edge function.",
            variant: "destructive"
          });
          return;
        }
        
        const apiKey = apiKeyResponse.key;
        
        if (!apiKey) {
          console.error('Google Maps API key is missing');
          setMapError('Google Maps API key is not configured');
          setIsLoading(false);
          toast({
            title: "Error",
            description: "Google Maps API key is not configured properly.",
            variant: "destructive"
          });
          return;
        }
        
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
          
          // Set up error handling for the script
          script.onerror = () => {
            console.error('Failed to load Google Maps script');
            setMapError('Failed to load Google Maps');
            setIsLoading(false);
            toast({
              title: "Error",
              description: "Failed to load Google Maps. Please check if the API key is valid and Maps JavaScript API is enabled.",
              variant: "destructive"
            });
          };
          
          // Define the callback function
          window.initMap = () => {
            geocodeAndInitMap(fullAddress);
          };
          
          // Append the script to the DOM
          document.head.appendChild(script);
        };
        
        // Function to geocode address and initialize map
        const geocodeAndInitMap = (address: string) => {
          if (mapRef.current && window.google) {
            const geocoder = new window.google.maps.Geocoder();
            
            geocoder.geocode({ address }, (results: any, status: any) => {
              if (status === 'OK' && results && results[0]) {
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
                
                setIsLoading(false);
              } else {
                console.error('Geocode was not successful for the following reason:', status);
                setMapError(`Failed to find location: ${status}`);
                setIsLoading(false);
                toast({
                  title: "Error",
                  description: `Failed to find property location: ${status}`,
                  variant: "destructive"
                });
              }
            });
          } else {
            setIsLoading(false);
          }
        };
        
        // Load the Google Maps script
        loadGoogleMapsScript();
      } catch (error) {
        console.error('Error initializing map:', error);
        setMapError('Failed to initialize map');
        setIsLoading(false);
        toast({
          title: "Error",
          description: "Failed to initialize map",
          variant: "destructive"
        });
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
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-estate-primary"></div>
          </div>
        )}
        
        {mapError && !isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-estate-gray-dark bg-gray-100">
            <AlertCircle size={24} className="mb-2 text-red-500" />
            <p className="text-sm text-center px-4">{mapError}</p>
          </div>
        )}
        
        {!data?.property && !isLoading && !mapError && (
          <div className="absolute inset-0 flex items-center justify-center text-estate-gray-dark">
            <p className="text-sm">{t('property.address')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyMap;
