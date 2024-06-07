<script>
export default {
  name: 'BoolFlix',
  methods: {
    searchMovies() {
      console.log('ho cliccato sul bottone');
    },
  },
};
</script>
<template>
  <h1>BoolFlix</h1>

  <div>
    <label for="search-movie">Ricerca un film</label>
    <input type="text" id="search-movie" />
    <button @click="searchMovies">Cerca</button>
  </div>
</template>
<!-- <style></style> -->
