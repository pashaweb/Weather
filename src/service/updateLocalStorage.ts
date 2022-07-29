import { get } from 'svelte/store';

import { selectedCityListStore, citySelectorListStore } from '../store/cityListStore'

export function updateLocalStorage() {
    localStorage.setItem("savedSelectedCityListStore",   JSON.stringify(get(selectedCityListStore)));
    localStorage.setItem("savedCitySelectorListStore",   JSON.stringify(get(citySelectorListStore)));
  }