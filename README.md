This project is a weather forecast website, developed with HTML, CSS and JavaScript. The site consumes a weather API to provide real-time weather information to users. The main goal of the project is to allow users to quickly and intuitively check the temperature of the desired city for any city in the world.

Features
Real-Time Weather Query:

The user can type the name of a city in the search field.
The weather API is called to get the weather data for that specific city.
Weather Data Display:

Current temperature
Weather conditions (e.g. sunny, cloudy, rainy)
Humidity
Wind speed
Responsive Design:

Interface adaptable to different screen sizes, providing a good experience on both mobile devices and desktops.
Animations and Styling:

Using CSS to create a visually appealing interface, with icons and animations that represent the weather conditions (e.g. sun for sunny days, clouds for cloudy days).
Technologies Used
HTML:

Website structure, including input fields, buttons and containers for displaying weather information.
CSS:

Website styling, ensuring that the layout is visually pleasing and responsive.
Using flexbox to organize elements.
JavaScript:

DOM manipulation to update the interface with data obtained from the API.
Consumption of the weather API using fetch.
Error handling and display of error messages if the city is not found or if there is a problem with the request.
Weather API:

Integration with a weather API provided by OpenWeatherMap to obtain updated weather data.
Steps for Execution
Environment Configuration:

Clone the project repository.
Install any necessary dependencies (if applicable).
Getting the API Key:

Register with the chosen weather API service to obtain an API key.
Insert the API key in the JavaScript code responsible for making the requests.
Project Execution:

Open the index.html file in a web browser.

Type the name of a city in the search field and press the search button to view the weather data.

Possible Future Improvements:
Add more weather details, such as hourly forecast.
Implement a geolocation system to automatically detect the user's location and display the current weather.
Create a favorites section where users can save cities of interest.
