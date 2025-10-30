export type RoomsCardProps = {
  title: string;
  description: string;
  capacity: "small" | "medium" | "large";
  totalGuestCapacity: number;
  regularPrice: number;
  discountedPrice: number;
  isDiscountApplicable: boolean;
  location: string;
  imageUrl: string;
  _id?: string; // optional, since MongoDB adds this automatically
};
