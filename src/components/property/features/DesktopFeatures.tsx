
import React from 'react';
import { Coffee, Building, Trees } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { featuresData } from './propertyFeaturesData';

const DesktopFeatures = () => {
  const { t } = useLanguage();

  return (
    <Tabs defaultValue="interior" className="w-full">
      <TabsList className="grid grid-cols-5 mb-4">
        <TabsTrigger value="interior" className="text-estate-gray-dark">
          <Coffee size={18} className="mr-2 text-estate-primary" />
          {t('property.interiorFeatures')}
        </TabsTrigger>
        <TabsTrigger value="kitchen" className="text-estate-gray-dark">
          <Building size={18} className="mr-2 text-estate-primary" />
          {t('property.kitchen')}
        </TabsTrigger>
        <TabsTrigger value="building" className="text-estate-gray-dark">
          <Building size={18} className="mr-2 text-estate-primary" />
          {t('property.buildingAmenities')}
        </TabsTrigger>
        <TabsTrigger value="location" className="text-estate-gray-dark">
          <Trees size={18} className="mr-2 text-estate-primary" />
          {t('property.location')}
        </TabsTrigger>
        <TabsTrigger value="description" className="text-estate-gray-dark">
          <Trees size={18} className="mr-2 text-estate-primary" />
          {t('property.aboutHome')}
        </TabsTrigger>
      </TabsList>

      {Object.entries(featuresData).map(([key, category]) => (
        <TabsContent key={key} value={key} className="p-4 bg-white rounded-md border">
          <ul className="list-disc pl-5 text-estate-gray-dark space-y-1">
            {category.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </TabsContent>
      ))}

      <TabsContent value="description" className="p-4 bg-white rounded-md border">
        <div className="text-estate-gray-dark space-y-4">
          <p>{t('property.description1')}</p>
          <p>{t('property.description2')}</p>
          <p>{t('property.description3')}</p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default DesktopFeatures;
