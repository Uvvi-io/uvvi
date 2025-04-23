
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { FootprintsIcon, Bike, Bus } from 'lucide-react';

const NeighborhoodInfo = () => {
  const { t } = useLanguage();
  
  return (
    <Card className="w-full mb-6">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-estate-gray-dark mb-4">{t('neighborhood.title')}</h3>
        
        {/* Walkability Scores */}
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-estate-primary/10 rounded-full p-3 mb-2">
              <FootprintsIcon size={24} className="text-estate-primary" />
            </div>
            <span className="text-2xl font-bold text-estate-gray-dark">92</span>
            <span className="text-sm text-estate-gray-dark text-center">{t('neighborhood.walkers')}</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-estate-primary/10 rounded-full p-3 mb-2">
              <Bike size={24} className="text-estate-primary" />
            </div>
            <span className="text-2xl font-bold text-estate-gray-dark">86</span>
            <span className="text-sm text-estate-gray-dark text-center">{t('neighborhood.bikeable')}</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-estate-primary/10 rounded-full p-3 mb-2">
              <Bus size={24} className="text-estate-primary" />
            </div>
            <span className="text-2xl font-bold text-estate-gray-dark">78</span>
            <span className="text-sm text-estate-gray-dark text-center">{t('neighborhood.transit')}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeighborhoodInfo;
