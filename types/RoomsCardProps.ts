export type AmenityType =
  | "wifi"
  | "air conditioning"
  | "tv"

export type RoomsCardProps = {
  amenities: AmenityType[],
  title: string;
  description: string;
  capacity: "small" | "medium" | "large";
  totalGuestCapacity: number;
  regularPrice: number;
  discountedPrice: number;
  isDiscountApplicable: boolean;
  location: string;
  imageUrl: string;
  availableRooms:number;
  _id?: string; // optional, since MongoDB adds this automatically
};
