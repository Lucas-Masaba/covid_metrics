const date = new Date();
const recentDate = date.toISOString().split('T')[0];
const baseURL = `https://api.covid19tracking.narrativa.com/api/${recentDate}`;

export const fetchCountriesFromAPI = async () => {
  const response = await fetch(`${baseURL}`);
  const getResponse = await response.json();
  return getResponse;
};

export const fetchACountryFromAPI = async (id) => {
  const response = await fetch(`${baseURL}/country/${id}`);
  const getResponse = await response.json();
  return getResponse;
};

export default { fetchCountriesFromAPI, fetchACountryFromAPI };
