/*
CONFIGURAZIONI API
*/
export const apiInfo = {
  baseUrl: 'https://api.themoviedb.org/3', //indirizzo api themoviedb
  key: 'b519714a95226da494c42f7586edd696', //chiave autenticazione themoviedb
  endpoints: {
    movies: '/search/movie',
    tvs: '/search/tv',
    genre: '/genre/movie/list',
  },
};
