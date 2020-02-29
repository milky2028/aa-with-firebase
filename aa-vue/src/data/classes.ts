import Price from './price';

export interface AAClass {
  name: string;
  displayName: string;
  subtitle: string;
  ageRange: string;
  image: string;
  shortDescription: string;
  prices: Price[];
  meals: string;
  parentNotes: string;
}

export const classes: AAClass[] = [
  {
    name: 'infants',
    displayName: 'Infants',
    subtitle: 'Learn and Play',
    ageRange: '0 - 12'
    shortDescription:
      'From helpless newborn to active toddler, your child will grow and learn more in their first 12 months than any other time of their life.',
      image: 'images/'
  }
];
