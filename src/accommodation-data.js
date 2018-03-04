import data from './data/accommodation_data.json';
import availabilityData from './data/accommodation_availability_data.json';
import { find, filter } from 'lodash';

const getAccommodation = () => {
  return data['accommodations'];
};

const searchAccommodation = searchValue => {
  const accommdations = getAccommodation();
  const regex = new RegExp(searchValue, 'i');

  return filter(accommdations, accom => {
    return regex.test(accom.name);
  });
};

const getRoomAvailability = roomId => {
  const room = find(availabilityData.rooms, ['@id', roomId]);

  return room ? room['@available'] : 0;
};

export { getAccommodation, searchAccommodation, getRoomAvailability };
