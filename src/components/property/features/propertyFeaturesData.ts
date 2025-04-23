
interface FeatureCategory {
  items: string[];
}

export interface PropertyFeaturesData {
  interior: FeatureCategory;
  kitchen: FeatureCategory;
  building: FeatureCategory;
  location: FeatureCategory;
}

export const featuresData: PropertyFeaturesData = {
  interior: {
    items: [
      'Hardwood floors throughout',
      'Central air conditioning and heating',
      'In-unit washer and dryer',
      'Large windows with abundant natural light',
      'Walk-in closet in primary bedroom',
      'En-suite bathroom in primary bedroom'
    ]
  },
  kitchen: {
    items: [
      'Stainless steel appliances',
      'Granite countertops',
      'Custom cabinetry',
      'Kitchen island with seating',
      'Under-cabinet lighting',
      'Gas range and convection oven'
    ]
  },
  building: {
    items: [
      'Elevator access',
      'Secure building entry system',
      'Fitness center',
      'Rooftop deck with city views',
      'Bicycle storage',
      'Package receiving service'
    ]
  },
  location: {
    items: [
      'Walking distance to Metro station',
      'Near popular restaurants and cafes',
      'Close to shopping centers',
      'Proximity to parks and recreation',
      'Easy access to major highways',
      'Excellent school district'
    ]
  }
};
