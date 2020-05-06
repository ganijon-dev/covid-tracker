import React from 'react'
import {Card , CardContent , Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames';
import moment from 'moment'
import classes from './Cards.module.scss'

const Cards = (props) => {

    const {confirmed, recovered, deaths, lastUpdate} = props.data;

    if (!confirmed) {
        return 'Loading....'
    }
    
    return (
        <div className={classes['container']}>
            <Grid container xs-spacing={0} md-spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(classes['card'], classes['infected'])}>
                    <CardContent>
                    <Typography color='textSecondary' gutterBottom>Infected</Typography>
                    <Typography variant='h5'>
                        <CountUp start={0} end={confirmed.value} duration={1} separator=',' />
                    </Typography>
                    <Typography color='textSecondary' >{moment(lastUpdate).calendar()}</Typography>
                    <Typography variant='body2'>Active Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(classes['card'], classes['recovered'])}>
                    <CardContent>
                    <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                    <Typography variant='h5'>
                        <CountUp start={0} end={recovered.value} duration={1} separator=',' />
                    </Typography>
                    <Typography color='textSecondary' >{moment(lastUpdate).calendar()}</Typography>
                    <Typography variant='body2'>Recovered Cases from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(classes['card'], classes['deaths'])}>
                    <CardContent>
                    <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                    <Typography variant='h5'>
                        <CountUp start={0} end={deaths.value} duration={1} separator=',' />
                    </Typography>
                    <Typography color='textSecondary' >{moment(lastUpdate).calendar()}</Typography>
                    <Typography variant='body2'>Deaths Caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Cards
