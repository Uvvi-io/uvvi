
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  beds: number;
  baths: number;
  square_feet: number;
  year_built: number;
  description: string;
}

export interface PropertyFeature {
  id: string;
  property_id: string;
  feature_type: string;
  feature_name: string;
}

export const useProperty = (propertyId?: string) => {
  return useQuery({
    queryKey: ['property', propertyId],
    queryFn: async () => {
      // If no propertyId is provided, fetch the first property (for demo purposes)
      const { data: property, error: propertyError } = await supabase
        .from('properties')
        .select('*')
        .limit(1)
        .single();

      if (propertyError) throw propertyError;

      // Fetch features for the property
      const { data: features, error: featuresError } = await supabase
        .from('property_features')
        .select('*')
        .eq('property_id', property.id);

      if (featuresError) throw featuresError;

      return {
        property,
        features: features || []
      };
    }
  });
};

