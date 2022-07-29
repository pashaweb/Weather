/**
 * @jest-environment jsdom
 */

import CityWeather from "./CityWeather.svelte";

import { render, fireEvent } from '@testing-library/svelte';

const mocCity:string = "London";
const mocTemp:number = 9.0;
const moceOnClick = function(city:string) {
    console.log("in moceOnClick, city = ", city);
} 

describe ('testing CityWeather', () => {

    it('testing CityWeather city weather ', async ()=> {
        const { getByText } = render(CityWeather, {props:{cityName:mocCity, cityTemp:mocTemp, removeSelectedCity:moceOnClick}});

       const div1 = getByText('9.0');
        console.log('div = ', div1)
        console.log('div.innerHTML = ', div1.innerHTML)
        expect(div1.innerHTML).toBe(`
        London
        : 
        9.0
        °C 

      
        <button>
          -
        </button>
      `)
    })
    it('it tests button click', async () => {
        const { getByText } = render(CityWeather, {props:{cityName:mocCity, cityTemp:mocTemp, removeSelectedCity:moceOnClick}});
        const button = getByText('-');
        await fireEvent.click(button);
    })
})