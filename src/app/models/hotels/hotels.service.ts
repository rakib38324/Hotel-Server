import { HotelModel } from './hotels.model';

const getAllHotelsFromDB = async () => {
  const userExists = await HotelModel.find();
  return userExists;
};

export const HotelServices = {
  getAllHotelsFromDB,
};
