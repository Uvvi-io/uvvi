
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import DesktopFeatures from './features/DesktopFeatures';
import MobileFeatures from './features/MobileFeatures';
import type { PropertyFeature } from '@/hooks/useProperty';

interface PropertyFeaturesProps {
  features?: PropertyFeature[];
}

const PropertyFeatures = ({ features }: PropertyFeaturesProps) => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  // Transform features into the expected format
  const transformedFeatures = features?.reduce((acc, feature) => {
    if (!acc[feature.feature_type]) {
      acc[feature.feature_type] = { items: [] };
    }
    acc[feature.feature_type].items.push(feature.feature_name);
    return acc;
  }, {} as Record<string, { items: string[] }>);

  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold text-estate-gray-dark mb-3">
        {t('property.homeFeatures')}
      </h3>
      
      {isMobile ? (
        <MobileFeatures featuresData={transformedFeatures} />
      ) : (
        <DesktopFeatures featuresData={transformedFeatures} />
      )}
    </div>
  );
};

export default PropertyFeatures;

