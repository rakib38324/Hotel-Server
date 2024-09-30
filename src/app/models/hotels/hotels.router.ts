import express from 'express';
import { HotelControllers } from './hotels.cotroller';
const router = express.Router();

router.get('/', HotelControllers.getAllHotels);
export const hotelRouters = router;
