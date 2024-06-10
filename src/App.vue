<script>
import axios from 'axios';
import { store } from './store';
export default {
  name: 'BoolFlix',
  data() {
    return {
      store,
    };
  },
  methods: {
    searchMovies() {
      console.log('ho cliccato sul bottone');

      //chiamata api

      //url con api key concatenata
      // const url =
      //   this.store.apiInfo.baseUrl +
      //   this.store.apiInfo.endpoints.movies +
      //   '?api_key=' +
      //   this.store.apiInfo.key;

      const url =
        this.store.apiInfo.baseUrl + this.store.apiInfo.endpoints.movies;

      // console.log(url);

      axios
        .get(url, {
          params: {
            api_key: this.store.apiInfo.key,
            language: this.store.languageKey,
            query: this.store.searchKey,
          },
        })
        .then((response) => {
          console.log(response.data.results);
          this.store.movies = response.data.results;

          console.log(this.store.movies);
        }) //chiamata andata a buon fine
        .catch((error) => console.log(error)); // qualcosa non va, verificare
    },
  },
};
</script>
<template>
  <h1>BoolFlix</h1>

  <div>
    <label for="search-movie">Ricerca un film</label>
    <input type="text" id="search-movie" v-model="store.searchKey" />
    <button @click="searchMovies">Cerca</button>
  </div>

  <div>
    <ul>
      <li v-for="movie in store.movies">
        <div>
          <p>Titolo: {{ movie.title }}</p>
          <p>Titolo originale: {{ movie.original_title }}</p>
          <p v-if="movie.original_language === 'it'">
            Lingua:{{ movie.original_language }} bandiera it
          </p>
          <p v-else-if="movie.original_language === 'en'">
            Lingua:{{ movie.original_language }} bandiera en
          </p>
          <p v-else>Lingua:{{ movie.original_language }}</p>
          <p>Voto: {{ movie.vote_average }}</p>
        </div>
        <hr />
        <!-- componente card film-->
      </li>
    </ul>
  </div>
</template>
<!-- <style></style> -->
