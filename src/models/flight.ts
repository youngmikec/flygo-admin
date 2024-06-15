import { TripTypes } from ".";

export interface Flight {
  id: number;
  locationFrom: string;
  locationTo: string;
  price: number;
  tripType: TripTypes;
  departureDate?: string;
  arrivalData?: string;
  duration?: string;
  image: string;
}