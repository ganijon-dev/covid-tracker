import React , {useState, useEffect, Fragment} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import {fetchCountries} from '../../api'
import classes from './CountryPicker.module.scss'

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect( () => {
        const fetchedAPI = async () => {
            setFetchedCountries(await fetchCountries())

        }
        fetchedAPI();
    }, [setFetchedCountries])

    
    return (
        <FormControl className={classes['form-control']}>
            {/* <ReactCountryFlag code="US"  countryCode="US" svg /> */}
            <NativeSelect defaultValue="" onChange={(event) => handleCountryChange(event.target.value)}>
            
                <option value=''> Global </option>
                    {fetchedCountries.map((country,i) => <Fragment key={i}>  <option  value={country.name} >{country.name}</option></Fragment>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker