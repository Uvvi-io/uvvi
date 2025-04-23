
import React, { useState } from 'react';
import { Bed, Bath, Ruler, History } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import PropertyTour from './PropertyTour';

interface PropertyKeyDetailsProps {
  beds?: number;
  baths?: number;
  squareFeet?: number;
  yearBuilt?: number;
  onScheduleTour: () => void;
  onContactAgent: () => void;
}

const PropertyKeyDetails = ({ 
  beds = 2,
  baths = 2,
  squareFeet = 1200,
  yearBuilt = 2005,
  onScheduleTour, 
  onContactAgent 
}: PropertyKeyDetailsProps) => {
  const { t } = useLanguage();
  const [showTour, setShowTour] = useState(false);

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center p-3 border rounded-lg">
            <Bed size={24} className="text-estate-primary mb-1" />
            <span className="text-sm text-estate-gray-dark">{t('property.beds')}</span>
            <span className="font-bold text-lg text-estate-gray-dark">{beds}</span>
          </div>
          <div className="flex flex-col items-center p-3 border rounded-lg">
            <Bath size={24} className="text-estate-primary mb-1" />
            <span className="text-sm text-estate-gray-dark">{t('property.baths')}</span>
            <span className="font-bold text-lg text-estate-gray-dark">{baths}</span>
          </div>
          <div className="flex flex-col items-center p-3 border rounded-lg">
            <Ruler size={24} className="text-estate-primary mb-1" />
            <span className="text-sm text-estate-gray-dark">{t('property.sqft')}</span>
            <span className="font-bold text-lg text-estate-gray-dark">{squareFeet}</span>
          </div>
          <div className="flex flex-col items-center p-3 border rounded-lg">
            <History size={24} className="text-estate-primary mb-1" />
            <span className="text-sm text-estate-gray-dark">{t('property.yearBuilt')}</span>
            <span className="font-bold text-lg text-estate-gray-dark">{yearBuilt}</span>
          </div>
        </div>

        <div className="mt-6">
          <Button 
            className="w-full bg-estate-primary hover:bg-estate-primary/90 text-white"
            onClick={() => setShowTour(true)}
          >
            {t('property.viewTour')}
          </Button>
          {showTour && <PropertyTour onClose={() => setShowTour(false)} />}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Button 
            className="flex-1 bg-estate-accent hover:bg-estate-accent/90 text-white"
            onClick={onScheduleTour}
          >
            {t('property.scheduleTour')}
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 border-estate-primary text-estate-primary hover:bg-estate-primary/10"
            onClick={onContactAgent}
          >
            {t('property.contactAgent')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyKeyDetails;

