import data from './data/accommodation_data.json';
import availabilityData from './data/accommodation_availability_data.json';
import { find } from 'lodash';

const get = () => {
  return data['accommodations'].slice(0, 10);
};

const getRoomAvailability = roomId => {
  const room = find(availabilityData.rooms, ['@id', roomId]);

  return room ? room['@available'] : 0;
};

export { get, getRoomAvailability };
