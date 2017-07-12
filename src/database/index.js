import catalogData from '../../data/catalog.json';

export default {
  getById: (id) => catalogData.find(item => item.id === id),
  getAll: () => catalogData,
};
