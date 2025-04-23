import React from 'react';
import { Coffee, Building, Trees } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const PropertyFeatures = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold text-estate-gray-dark mb-3">{t('property.homeFeatures')}</h3>
      
      {/* Tabs for larger screens */}
      <div className="hidden md:block">
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
          
          <TabsContent value="interior" className="p-4 bg-white rounded-md border">
            <ul className="list-disc pl-5 text-estate-gray-dark space-y-1">
              <li>Hardwood floors throughout</li>
              <li>Central air conditioning and heating</li>
              <li>In-unit washer and dryer</li>
              <li>Large windows with abundant natural light</li>
              <li>Walk-in closet in primary bedroom</li>
              <li>En-suite bathroom in primary bedroom</li>
            </ul>
          </TabsContent>
          
          <TabsContent value="kitchen" className="p-4 bg-white rounded-md border">
            <ul className="list-disc pl-5 text-estate-gray-dark space-y-1">
              <li>Stainless steel appliances</li>
              <li>Granite countertops</li>
              <li>Custom cabinetry</li>
              <li>Kitchen island with seating</li>
              <li>Under-cabinet lighting</li>
              <li>Gas range and convection oven</li>
            </ul>
          </TabsContent>
          
          <TabsContent value="building" className="p-4 bg-white rounded-md border">
            <ul className="list-disc pl-5 text-estate-gray-dark space-y-1">
              <li>Elevator access</li>
              <li>Secure building entry system</li>
              <li>Fitness center</li>
              <li>Rooftop deck with city views</li>
              <li>Bicycle storage</li>
              <li>Package receiving service</li>
            </ul>
          </TabsContent>
          
          <TabsContent value="location" className="p-4 bg-white rounded-md border">
            <ul className="list-disc pl-5 text-estate-gray-dark space-y-1">
              <li>Walking distance to Metro station</li>
              <li>Near popular restaurants and cafes</li>
              <li>Close to shopping centers</li>
              <li>Proximity to parks and recreation</li>
              <li>Easy access to major highways</li>
              <li>Excellent school district</li>
            </ul>
          </TabsContent>

          <TabsContent value="description" className="p-4 bg-white rounded-md border">
            <div className="text-estate-gray-dark space-y-4">
              <p>{t('property.description1')}</p>
              <p>{t('property.description2')}</p>
              <p>{t('property.description3')}</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Collapsible sections for mobile */}
      <div className="md:hidden space-y-3">
        <Collapsible className="border rounded-md overflow-hidden">
          <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-estate-gray-light hover:bg-estate-gray-light/80 transition-colors">
            <div className="flex items-center">
              <Coffee size={18} className="mr-2 text-estate-primary" />
              <span className="font-semibold text-estate-gray-dark">{t('property.interiorFeatures')}</span>
            </div>
            <ChevronDown className="h-5 w-5 text-estate-gray-dark transition-transform duration-200" />
          </CollapsibleTrigger>
          <CollapsibleContent className="p-3 bg-white">
            <ul className="list-disc pl-5 text-estate-gray-dark space-y-1">
              <li>Hardwood floors throughout</li>
              <li>Central air conditioning and heating</li>
              <li>In-unit washer and dryer</li>
              <li>Large windows with abundant natural light</li>
              <li>Walk-in closet in primary bedroom</li>
              <li>En-suite bathroom in primary bedroom</li>
            </ul>
          </CollapsibleContent>
        </Collapsible>
        
        <Collapsible className="border rounded-md overflow-hidden">
          <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-estate-gray-light hover:bg-estate-gray-light/80 transition-colors">
            <div className="flex items-center">
              <Building size={18} className="mr-2 text-estate-primary" />
              <span className="font-semibold text-estate-gray-dark">{t('property.kitchen')}</span>
            </div>
            <ChevronDown className="h-5 w-5 text-estate-gray-dark transition-transform duration-200" />
          </CollapsibleTrigger>
          <CollapsibleContent className="p-3 bg-white">
            <ul className="list-disc pl-5 text-estate-gray-dark space-y-1">
              <li>Stainless steel appliances</li>
              <li>Granite countertops</li>
              <li>Custom cabinetry</li>
              <li>Kitchen island with seating</li>
              <li>Under-cabinet lighting</li>
              <li>Gas range and convection oven</li>
            </ul>
          </CollapsibleContent>
        </Collapsible>
        
        <Collapsible className="border rounded-md overflow-hidden">
          <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-estate-gray-light hover:bg-estate-gray-light/80 transition-colors">
            <div className="flex items-center">
              <Building size={18} className="mr-2 text-estate-primary" />
              <span className="font-semibold text-estate-gray-dark">{t('property.buildingAmenities')}</span>
            </div>
            <ChevronDown className="h-5 w-5 text-estate-gray-dark transition-transform duration-200" />
          </CollapsibleTrigger>
          <CollapsibleContent className="p-3 bg-white">
            <ul className="list-disc pl-5 text-estate-gray-dark space-y-1">
              <li>Elevator access</li>
              <li>Secure building entry system</li>
              <li>Fitness center</li>
              <li>Rooftop deck with city views</li>
              <li>Bicycle storage</li>
              <li>Package receiving service</li>
            </ul>
          </CollapsibleContent>
        </Collapsible>
        
        <Collapsible className="border rounded-md overflow-hidden">
          <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-estate-gray-light hover:bg-estate-gray-light/80 transition-colors">
            <div className="flex items-center">
              <Trees size={18} className="mr-2 text-estate-primary" />
              <span className="font-semibold text-estate-gray-dark">{t('property.location')}</span>
            </div>
            <ChevronDown className="h-5 w-5 text-estate-gray-dark transition-transform duration-200" />
          </CollapsibleTrigger>
          <CollapsibleContent className="p-3 bg-white">
            <ul className="list-disc pl-5 text-estate-gray-dark space-y-1">
              <li>Walking distance to Metro station</li>
              <li>Near popular restaurants and cafes</li>
              <li>Close to shopping centers</li>
              <li>Proximity to parks and recreation</li>
              <li>Easy access to major highways</li>
              <li>Excellent school district</li>
            </ul>
          </CollapsibleContent>
        </Collapsible>
        
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
    </div>
  );
};

export default PropertyFeatures;
