import httpStatus from 'http-status';
import catchAsync from '../../utiles/catchAsync';
import commonRes from '../../utiles/commonResponse';
import { HotelServices } from './hotels.service';

const getAllHotels = catchAsync(async (req, res) => {
  const result = await HotelServices.getAllHotelsFromDB();
  commonRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Hotel retrieved successfully',
    data: result,
  });
});

export const HotelControllers = {
  getAllHotels,
};
