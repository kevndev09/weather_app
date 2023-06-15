<script>
    import {getWeatherFrom} from "../services/weather"

    export let weatherPromises;
    export let finalValue

async function fetchData() {  
  weatherPromises = await getWeatherFrom(finalValue)
}

fetchData();
</script>

<footer>
    {#if weatherPromises}
        <span><i class="bi bi-wind"></i>
            <h3>{weatherPromises.windSpeed}</h3>
        </span>
            
        <span><i class="bi bi-thermometer-half"></i>
            <h3>{weatherPromises.humidity}</h3>
        </span>

        <span><i class="bi bi-clock-fill"></i>
            <h3>{weatherPromises.localtime}</h3>
        </span>
    {/if}
</footer>

<style>
    footer{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        position: absolute;
        bottom: 25px;
        background-color: rgba(0, 100, 255, 0.3);
        border-radius: 50px;
    }

    i{
        color: rgba(250, 250, 225, 0.8);
        font-size: 25px;
        margin-right: 6px;
    }

    span{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>