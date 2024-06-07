import { reactive } from 'vue';

import { apiInfo } from './config/api';
import { searchKey, languageKey } from './config/search';

export const store = reactive({
  movies: [], //array risultati
  searchKey,
  languageKey, //chiave di ricerca
  apiInfo,
});
