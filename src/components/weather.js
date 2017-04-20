import React from 'react';

const Weather = (props) => {
    console.log(props);

    let labels = props.data.SiteRep.WX;
    let weather = props.data.SiteRep.DV;

    return (
        <div>Weather</div>
    );
}

export default Weather;