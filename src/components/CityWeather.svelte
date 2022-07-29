<script lang="ts">
    //import { removeSelectedCity } from '../service/unselectCity'
    export let cityName:string;
    export let cityTemp:number;
    export let removeSelectedCity:Function;

</script>

<span></span>{cityName}: <span>{cityTemp.toFixed(1)}</span>°C <button on:click={() => removeSelectedCity(cityName)}> - </button>
