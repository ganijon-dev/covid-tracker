import React, {Component} from 'react';

import { Cards, Chart, CountryPicker} from './components'
import { fetchData } from './api'
import covidImg from './img/covid.png'
import classes from './App.module.scss';

class App extends Component {
    state = {
        data:{},
        country: ''
    }

    async componentDidMount() {
        const data = await fetchData();

        this.setState({
            data:data
        })
    }

    handleCountryChange = async (country) => {
        
        const fetchedData = await fetchData(country);
        this.setState({
            data:fetchedData,
            country: country
        })
    }
    render() {
        
        const {data, country}  = this.state;
        return (
            <div className={classes['container']}>
                <img  src={covidImg} alt="Covid-19" className={classes['image']}/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
          );
    }
 
}

export default App;
