import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async(country) => {
    let needUrl = url;
    if (country) {
        needUrl = `${url}/countries/${country}`
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(needUrl);

        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }

    } catch (error) {
        alert(error)
    }
}

export const fetchDailyData = async() => {

    try {
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        return modifiedData;
    } catch (error) {
        alert(error)
    }

}

export const fetchCountries = async() => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`)

        return countries.map(country => ({
            name: country.name,
            code: country.iso2
        }))
    } catch (error) {
        alert(error)
    }
}