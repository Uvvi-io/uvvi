
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PropertyHeader from './PropertyHeader';
import PropertyKeyDetails from './PropertyKeyDetails';
import NeighborhoodInfo from './NeighborhoodInfo';
import PropertyFeatures from './PropertyFeatures';

const PropertyDetails = () => {
  const { t } = useLanguage();

  // WhatsApp deeplink for scheduling a tour
  const openWhatsAppSchedule = () => {
    // Placeholder number - to be replaced with actual agent number
    const phoneNumber = "1234567890";
    const message = encodeURIComponent(`Hello, I would like to schedule a tour for the property at ${t('property.address')}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // WhatsApp deeplink for contacting the agent
  const openWhatsAppContact = () => {
    // Placeholder number - to be replaced with actual agent number
    const phoneNumber = "1234567890";
    const message = encodeURIComponent(`Hello, I'm interested in the property at ${t('property.address')}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="mt-6">
      <PropertyHeader />
      <NeighborhoodInfo />
      <PropertyKeyDetails 
        onScheduleTour={openWhatsAppSchedule}
        onContactAgent={openWhatsAppContact}
      />
      <PropertyFeatures />
    </div>
  );
};

export default PropertyDetails;
