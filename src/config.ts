export class config{
    defualtCityList:string[]
    weatherAPI:string
}

export const defautConfig:config = {
    defualtCityList: ["Kyiv", "Kharkiv", "Odessa", "Dnipro", "Donetsk", "Zaporizhzhia", "Lviv", "Kryvyi Rih", "Mykolaiv", "Mariupol", "Luhansk", "Vinnytsia", "Sevastopol", "Simferopol", "Chernihiv", "Kherson", "Poltava", "Khmelnytskyi"],
    weatherAPI: `https://api.weatherapi.com/v1/current.json?key=8ee68a50f4e94279a4d162815222304&aqi=no&q=`
}
