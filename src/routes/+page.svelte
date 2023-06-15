<script>
    import { getWeatherFrom } from '../services/weather'
    import Footer from '../components/footer.svelte'
    import Typed from 'typed.js';
    import { onMount } from 'svelte';

onMount(() => {
    const typed = new Typed('#text', {
    strings: ["Busca aca tu ciudad!", "Search here your city!"],

    typeSpeed: 55, 
	startDelay: 400,
	backSpeed: 60, 
	smartBackspace: true,
	shuffle: false, 
	backDelay: 1500, 
	loop: true, 
	loopCount: false, 
	showCursor: true,
	cursorChar: '|',
    });
});

    export let finalValue = ''
    
   export function handleInput(event){
    return finalValue = event.target.value
   }
   
   let weatherPromises
   function fetchData(){
        weatherPromises = getWeatherFrom(finalValue)
    }
    </script>

{#await weatherPromises then weather}

    {#if weather}
    <div>
        <h3><i class="bi bi-geo-alt-fill"></i>{weather.locationName} - {weather.country}</h3>
    </div>
        <p>{weather.temperature}°</p>
        <h2>{weather.conditionalText}</h2>
    <Footer {finalValue} {weatherPromises}/>
{:else}
    <article>
        <h3>
            <span id="text"></span>
        </h3>
    </article>

        <form>          
            <input type="text" bind:value={finalValue} on:click={handleInput}>
            <button on:click={fetchData}>Search</button>
        </form>
    {/if}
{/await}
    
<style>
    h2{
        transform: rotate(-89deg);
        color: rgba(250, 250, 225, 0.8);
        position: absolute;
        top: 125px;
        right: 10px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  
    div{
        width: auto;
        display: flex;
        justify-content: center;
    }

    i{
        margin-right:  5px;
        color: rgba(250, 250, 225, 0.8);
        font-size: 12px;
    }

    article{
        display: flex;
        justify-content: center;
        gap: 3px;
        margin-top:80px;
    }

    input{
        background-color: rgba(0, 100, 255, 0.3);
        font-size: 1.5rem;
        border: none;
        border-radius: 10px;
        outline: none;
        padding: 10px;
        caret-color: whitesmoke;
    }

    form{
        display: flex;
        justify-content: center;
        gap: 3px;
    }

    button{
        background-color: rgba(0, 100, 255, 0.5);
        border: none;
        border-radius: 3px;
        height: '';
        font-weight: bold;        
    }

    #text{
        color: black;
        text-align: center;
    }

</style>