
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import DesktopFeatures from './features/DesktopFeatures';
import MobileFeatures from './features/MobileFeatures';

const PropertyFeatures = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold text-estate-gray-dark mb-3">
        {t('property.homeFeatures')}
      </h3>
      
      {/* Desktop view */}
      <div className="hidden md:block">
        <DesktopFeatures />
      </div>
      
      {/* Mobile view */}
      <div className="md:hidden">
        <MobileFeatures />
      </div>
    </div>
  );
};

export default PropertyFeatures;
