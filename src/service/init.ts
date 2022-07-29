import { selectedCityListStore, citySelectorListStore } from "../store/cityListStore";
import { defautConfig } from "../config";

export const init = function() {
    console.log("in init")
    const savedSelectedCityList = localStorage.getItem("savedSelectedCityListStore")
    selectedCityListStore.set(savedSelectedCityList ? JSON.parse(savedSelectedCityList) : []);
    
    const savedNotSelectedC = localStorage.getItem("savedCitySelectorListStore")
    citySelectorListStore.set(savedNotSelectedC ? JSON.parse(savedNotSelectedC) : defautConfig.defualtCityList);

}