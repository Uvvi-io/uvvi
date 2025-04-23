
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PropertyHeader from './PropertyHeader';
import PropertyKeyDetails from './PropertyKeyDetails';
import NeighborhoodInfo from './NeighborhoodInfo';
import PropertyFeatures from './PropertyFeatures';
import { useProperty } from '@/hooks/useProperty';
import { toast } from '@/components/ui/use-toast';

const PropertyDetails = () => {
  const { t } = useLanguage();
  const { data, isLoading, error } = useProperty();

  // Handle error state
  if (error) {
    toast({
      title: "Error",
      description: "Failed to load property details",
      variant: "destructive"
    });
  }

  // WhatsApp deeplink for scheduling a tour
  const openWhatsAppSchedule = () => {
    const phoneNumber = "1234567890";
    const message = encodeURIComponent(`Hello, I would like to schedule a tour for the property at ${data?.property.address}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // WhatsApp deeplink for contacting the agent
  const openWhatsAppContact = () => {
    const phoneNumber = "1234567890";
    const message = encodeURIComponent(`Hello, I'm interested in the property at ${data?.property.address}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-6">
      <PropertyHeader 
        title={data?.property.title}
        price={data?.property.price}
        address={data?.property.address}
        city={data?.property.city}
        state={data?.property.state}
        zipCode={data?.property.zip_code}
      />
      <PropertyKeyDetails 
        beds={data?.property.beds}
        baths={data?.property.baths}
        squareFeet={data?.property.square_feet}
        yearBuilt={data?.property.year_built}
        onScheduleTour={openWhatsAppSchedule}
        onContactAgent={openWhatsAppContact}
      />
      <NeighborhoodInfo />
      <PropertyFeatures features={data?.features} />
    </div>
  );
};

export default PropertyDetails;

