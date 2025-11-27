export default async function handler(req, res) {
    const city = req.query.city;

    if (!city || city.trim() === "") {
        return res.status(400).json({ error: "City name is required" });
    }

    const APIkey = process.env.WEATHER_API_KEY;
    

    const encodedCity = encodeURIComponent(city.trim());

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${APIkey}&units=metric`;
    const foreUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${encodedCity}&appid=${APIkey}&units=metric`;

    try {
        // Current weather
        const res1 = await fetch(url);
        const data1 = await res1.json();

        // Forecast weather
        const res2 = await fetch(foreUrl);
        const data2 = await res2.json();

        if (data1.cod === "404") {
            return res.status(404).json({ error: "City not found" });
        }

        res.status(200).json({
            current: data1,
            forecast: data2
        });

    } catch (err) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
}
