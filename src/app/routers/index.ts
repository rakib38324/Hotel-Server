import { Router } from 'express';
import { hotelRouters } from '../models/hotels/hotels.router';

const router = Router();

const moduleRouters = [
  {
    path: '/hotel',
    route: hotelRouters,
  },
];

moduleRouters.forEach((route) => router.use(route.path, route.route));
export default router;
