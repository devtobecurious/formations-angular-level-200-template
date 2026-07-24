export interface Weather {  
    code: number;
    temperature: number;
}

export type WeatherResponse = {
    current_weather: {
        temperature: number;
        weathercode: number;
    };
};