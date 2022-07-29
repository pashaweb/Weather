<script lang="ts">
    console.log("in citySelectoerList");
    import type { Writable } from 'svelte/store';

   //import { selectCity } from '../store/cityListStore'
    //import { selectCity } from '../service/selectCity'

    //import { citySelectorListStore } from "../store/cityListStore";

    export let listStore:Writable<string[]>
    export let selectCity:Function;

    //export let citySelectoerList;
    
    // function onClickCity(city:script) {
    //     console.log('in onClickCity city = ', city)
    //      selectCity(city)
    // }
</script>

{#each $listStore as city}
    <!-- <div on:click={() => onClickCity(city)}>{city}</div> -->
    <div on:click={() => selectCity(city)}>{city}</div>
    <!-- <div>{city}<button on:click={() => onClickCity(city)}>select</button></div> -->
{/each}
