import accommodationData from './data/accommodation_data.json';

const get = () => {
  return accommodationData['accommodations'].slice(0, 10);
};

export { get };
