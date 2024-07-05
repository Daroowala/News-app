const API_KEY = "619473900424456592b4698adb953061";
const API_URL = "https://newsapi.org/v2/everything?q=";

window. addEventListener = ('load', () => fetchNews("Pakistan"));

async function  fetchNews (query) {
    const res = await fetch(`${url}${query}&apikey=${API_KEY}`);
    const data = await res.json();
    console.log(data);
}