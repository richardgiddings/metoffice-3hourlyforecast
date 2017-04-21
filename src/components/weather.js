import React from 'react';
import Day from './day';

const Weather = (props) => {

    let location = null;
    let results = null;

    if(props.data) {
        let labels = props.data.data.SiteRep.Wx;
        let weather = props.data.data.SiteRep.DV;

        location = weather.Location.name;

        results = weather.Location.Period.map((day) => {

            let date = day.value.slice(0, -1)
                                .split('-')
                                .reverse()
                                .join('/');

            let d = new Date(day.value.slice(0, -1))
            let day_of_week = d.toString().substring(0, 3)

            return (
                <div key={date}>
                    <h3>{day_of_week} ({date})</h3>
                    <table className="center">
                        <thead>
                            <tr>
                                <td>Time</td>
                                <td>Temp</td>
                                <td>Feels like</td>
                                <td>UV Index</td>
                                <td>Rain probability</td>
                            </tr>
                        </thead>
                        <Day day={day} />
                    </table>
                </div>
            );
        });
    }

    return (
        <div className="weather">
            <h2>{location}</h2>
            {results}
        </div>
    );
}

export default Weather;