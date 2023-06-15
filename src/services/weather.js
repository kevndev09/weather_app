const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        'X-RapidAPI-Key': '3b967cf311msh6cc5d69d1aa05dcp108989jsn0f0ce0eb3945'
	}
};

export async function getWeatherFrom (query){
    const response = await fetch(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, FETCH_OPTIONS
    )

    const data = await response.json()
    console.log(data);
   
    const {location, current} = data
    const {country, localtime, name} = location
    const {
        condition,
        humidity, 
        feelslike_c, 
        is_day,
        temp_c, 
        wind_kph, 
        wind_dir
    } = current
    const {code, text} = condition

    return{
        conditionCode: code,
        conditionalText: text,
        country,
        localtime,
        locationName:name,
        humidity,
        isDay:is_day,
        feelsLike:feelslike_c,
        temperature:temp_c,
        windSpeed:wind_kph,
        windDir:wind_dir
        }
    }