<div>
    <slot />
</div>

<style>
    :global(body){
        background-color: #8F8144;
        display: grid;
        place-content: center;
        min-height: 100vh;
    }

    :global(p){
        font-size: 125px;
        margin-top: 0;
        padding-left: 10px;
        color: rgba(250, 250, 225, 0.8);
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    :global(h3){
        color: rgba(250, 250, 225, 0.8);
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    div{
        background-image: url('/fondoWeather.jpeg');
        background-size: cover;
        background-position: center;
        width: 500px;
        max-width: 100%;
        height: 600px;
        display: block;
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
        border-radius: 8px;
        position: relative;
    }
</style>