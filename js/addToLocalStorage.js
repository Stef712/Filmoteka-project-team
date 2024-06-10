const API_KEY = '68066e6b67ccb3661b36f337be0c8c4a';
const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODA2NmU2YjY3Y2NiMzY2MWIzNmYzMzdiZTBjOGM0YSIsInN1YiI6IjY2NjQyZTM4NGUzOTM4NDU2YWU5YTY1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-iIaxEjAHDiON4DR6yEMpaLYopf3brFQ3CyMO_fuHOo',
  },
};

fetch('https://api.themoviedb.org/3/authentication', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
