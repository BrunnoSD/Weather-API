// API's

const apiKey = 'a97c22936fcca6fc972cdeaa4a4150ee'
const apiCountryFlag = 'https://countryflagsapi.com/png/'

// Variáveis

const input = document.getElementById('inputSearch');
const btbutton = document.getElementById('btSearch')
const city = document.getElementById('country')
const paisName = document.getElementById('flagPais')
const tempPrincipal = document.getElementById('temperatura')
const condicao = document.getElementById('tempo')
const maxTemp = document.getElementById('tempmax')
const minTemp = document.getElementById('tempmin')
const humidade = document.getElementById('humidity')
const vento = document.getElementById('winder')
const imagem = document.getElementById('imagemBox')
const loader = document.getElementById('loader')

// Funções
loader.style.display = "none"
const getWeatherDate = async (search) => {

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(search)}&units=metric&appid=${apiKey}&lang=en`

    loader.style.display = "block"
    let centralizar = document.getElementById('centralizeitens')
    try {
        const res = await fetch(apiURL)
        if (!res.ok) {
            throw new Error(res.code)
        }
        const data = await res.json()

        if (input.value === "") {
            centralizar.style.display = "none"
        }

        else {
            centralizar.style.display = "flex"
        }
        loader.style.display = "none"
        return data;
    } catch (data) {

        localizada.style.display = "block"

        localizada.style.display = "none"
        centralizar.style.display = "none"
    }

    loader.style.display = "none"
    return null
}


const showWeatherData = async (search) => {
    const data = await getWeatherDate(search)
    if (data === null) {
        input.value = ''
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
        return
    }
    city.innerText = data.name;
    tempPrincipal.innerText = data.main.temp.toFixed(1);
    condicao.innerText = data.weather[0].description;
    paisName.innerText = data.sys.country;
    maxTemp.innerText = data.main.temp_max.toFixed(1).toString().replace('.', ',');
    minTemp.innerText = data.main.temp_min.toFixed(1).toString().replace('.', ',');
    humidade.innerText = data.main.humidity;
    vento.innerText = data.wind.speed.toFixed(1).toString().replace('.', ',');
    imagem.setAttribute('src', `https://openweathermap.org/img/wn/${encodeURI(data.weather[0].icon)}@2x.png`)

    input.value = ''

}
// Eventos

btbutton.addEventListener("click", (e) => {

    e.preventDefault()

    const search = input.value;

    showWeatherData(search)

    if (!search) {
        const alerta = document.getElementById('alert')
        alerta.style.display = "block"
    }

    btbutton.addEventListener("click", () => {
        centralizar.style.display = "flex"
    })
});

input.addEventListener("keyup", (e) => {

    if (e.code === "Enter") {
        const search = e.target.value;
        showWeatherData(search)
    }
})

