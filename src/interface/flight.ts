export interface Flight {
  originAirport: Airport;
  destinationAirport: Airport;
  arrivalDateTimeDisplay: string;
  departureDateTimeDisplay: string;
  flightDuration: string;
  fareCategories: FareCategory;
}

export interface Airport {
  name: string;
  code: string;
  city: Location;
  country: Location;
}

export interface Location {
  code: string;
  name: string;
}

export interface Subcategory {
  brandCode: string;
  price: Price;
  order: number;
  status: string;
  rights: string[];
}

export interface Price {
  amount: number;
  currency: string;
}

export interface FareCategory {
  [key: string]: Record<string, Subcategory[]>;
}
