import accommodationData from './data/accommodation_data.json';

const get = () => {
  return accommodationData['accommodations'];
};

export { get };
