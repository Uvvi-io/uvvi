
import React from 'react';
import { Coffee, Building, Trees, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { featuresData } from './propertyFeaturesData';

const MobileFeatures = () => {
  const { t } = useLanguage();

  const icons = {
    interior: Coffee,
    kitchen: Building,
    building: Building,
    location: Trees,
  };

  const titles = {
    interior: t('property.interiorFeatures'),
    kitchen: t('property.kitchen'),
    building: t('property.buildingAmenities'),
    location: t('property.location'),
  };

  return (
    <div className="space-y-3">
      {Object.entries(featuresData).map(([key, category]) => {
        const Icon = icons[key as keyof typeof icons];
        return (
          <Collapsible key={key} className="border rounded-md overflow-hidden">
            <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-estate-gray-light hover:bg-estate-gray-light/80 transition-colors">
              <div className="flex items-center">
                <Icon size={18} className="mr-2 text-estate-primary" />
                <span className="font-semibold text-estate-gray-dark">
                  {titles[key as keyof typeof titles]}
                </span>
              </div>
              <ChevronDown className="h-5 w-5 text-estate-gray-dark transition-transform duration-200" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-3 bg-white">
              <ul className="list-disc pl-5 text-estate-gray-dark space-y-1">
                {category.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        );
      })}

      <Collapsible className="border rounded-md overflow-hidden">
        <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-estate-gray-light hover:bg-estate-gray-light/80 transition-colors">
          <div className="flex items-center">
            <Trees size={18} className="mr-2 text-estate-primary" />
            <span className="font-semibold text-estate-gray-dark">{t('property.aboutHome')}</span>
          </div>
          <ChevronDown className="h-5 w-5 text-estate-gray-dark transition-transform duration-200" />
        </CollapsibleTrigger>
        <CollapsibleContent className="p-3 bg-white">
          <div className="text-estate-gray-dark space-y-4">
            <p>{t('property.description1')}</p>
            <p>{t('property.description2')}</p>
            <p>{t('property.description3')}</p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default MobileFeatures;
