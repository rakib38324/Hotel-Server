// Define the types for the hotel object
export type TBathroomDetails = {
  bathroomCount: number;
  facilities: Array<
    | 'Step-free bathroom access'
    | 'Toilet grab bar'
    | 'Shower or bath chair'
    | 'Bathroom entrance wider than 32 inches'
  >;
};

export type TBedroomDetails = {
  bedroomCount: number;
  facilities: Array<
    | 'King-size bed'
    | 'Normal bed'
    | 'Step-free bedroom access'
    | 'Bedroom entrance wider than 32 inches'
  >;
};

export type THotel = {
  image: string[];
  price: number;
  bedRoomDetails: TBedroomDetails;
  bathroomDetails: TBathroomDetails;
  location: string;
  nameWithCity: string;
  availableDate: string;
  priceFor5Days: number;
  discountForWeek: string;
  apartmentType: 'Home' | 'Apartment' | 'Guesthouse';
  amenities: Array<
    'Wifi' | 'Kitchen' | 'Washer' | 'TV' | 'Iron' | 'Air Conditioning'
  >;
  features: Array<
    'Pool' | 'Free Parking' | 'GYM' | 'BBQ Grill' | 'Breakfast' | 'EV Charging'
  >;
  loationType: 'Beatchfont' | 'Waterfont';

  bookingOption: Array<'Instant Book' | 'Self check-in' | 'Allws pets'>;
  hostLanguage: Array<
    'Bangla' | 'English' | 'German' | 'Chinese' | 'French' | 'Italian'
  >;

  Category:
    | 'Icons'
    | 'Rooms'
    | 'Countryside'
    | 'OMG!'
    | 'Caves'
    | 'Earth homes'
    | 'Amazing views'
    | 'Bed & breakfast'
    | 'Top of the world'
    | 'Arctic'
    | 'Islands'
    | 'Beachfont'
    | 'Grand pians'
    | 'Lakefront'
    | 'New'
    | 'Tiny homes'
    | 'Camping'
    | 'Amazing pool'
    | 'Cabins'
    | 'National parks'
    | 'Luxe'
    | 'Lake'
    | 'Tropical'
    | 'Off-the-gird'
    | 'Design'
    | 'Brans'
    | 'Top cities'
    | 'Golfing'
    | 'Trulli'
    | 'Mansions'
    | 'Trending'
    | 'Theehouses';
};
