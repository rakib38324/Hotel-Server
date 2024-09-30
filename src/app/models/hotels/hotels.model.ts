import { model, Schema } from "mongoose";
import { TBathroomDetails, TBedroomDetails, THotel } from "./hotels.interface";

// BathroomDetails schema
const bathroomDetailsSchema = new Schema<TBathroomDetails>({
    bathroomCount: { type: Number, required: true },
    facilities: {
      type: [String],
      enum: [
        'Step-free bathroom access',
        'Toilet grab bar',
        'Shower or bath chair',
        'Bathroom entrance wider than 32 inches',
      ],
      required: true,
    },
  });
  
  // BedroomDetails schema
  const bedroomDetailsSchema = new Schema<TBedroomDetails>({
    bedroomCount: { type: Number, required: true },
    facilities: {
      type: [String],
      enum: [
        'King-size bed',
        'Normal bed',
        'Step-free bedroom access',
        'Bedroom entrance wider than 32 inches',
      ],
      required: true,
    },
  });
  
  // THotel schema
  const hotelSchema = new Schema<THotel>({
    image: { type: [String], required: true },
    price: { type: Number, required: true },
    bedRoomDetails: { type: bedroomDetailsSchema, required: true },
    bathroomDetails: { type: bathroomDetailsSchema, required: true },
    location: { type: String, required: true },
    nameWithCity: { type: String, required: true },
    availableDate: { type: String, required: true },
    priceFor5Days: { type: Number, required: true },
    discountForWeek: { type: String, required: true },
    apartmentType: { 
      type: String, 
      enum: ['Home', 'Apartment', 'Guesthouse'], 
      required: true 
    },
    amenities: {
      type: [String],
      enum: ['Wifi', 'Kitchen', 'Washer', 'TV', 'Iron', 'Air Conditioning'],
      required: true,
    },
    features: {
      type: [String],
      enum: ['Pool', 'Free Parking', 'GYM', 'BBQ Grill', 'Breakfast', 'EV Charging'],
      required: true,
    },
    loationType: {
      type: String,
      enum: ['Beatchfont', 'Waterfont'],
      required: true,
    },
    bookingOption: {
      type: [String],
      enum: ['Instant Book', 'Self check-in', 'Allows pets'],
      required: true,
    },
    hostLanguage: {
      type: [String],
      enum: ['Bangla', 'English', 'German', 'Chinese', 'French', 'Italian'],
      required: true,
    },
    Category: {
      type: String,
      enum: [
        'Icons', 'Rooms', 'Countryside', 'OMG!', 'Caves',
        'Earth homes', 'Amazing views', 'Bed & breakfast', 'Top of the world',
        'Arctic', 'Islands', 'Beachfont', 'Grand pians', 'Lakefront', 'New',
        'Tiny homes', 'Camping', 'Amazing pool', 'Cabins', 'National parks',
        'Luxe', 'Lake', 'Tropical', 'Off-the-gird', 'Design', 'Brans',
        'Top cities', 'Golfing', 'Trulli', 'Mansions', 'Trending', 'Theehouses',
      ],
      required: true,
    },
  });
  
  // Create and export the Hotel model
  export const HotelModel = model<THotel>('Hotel', hotelSchema);