export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "28faf77327msh372a2efb5d76511p168614jsn29a1c04c3235",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=acura",
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}
