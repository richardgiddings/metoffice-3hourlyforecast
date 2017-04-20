import React from 'react';

const Weather = (props) => {
    console.log(props);

    if(props.data) {
        let labels = props.data.data.SiteRep.Wx;
        let weather = props.data.data.SiteRep.DV;
    }

    return (
        <div>Weather</div>
    );
}

export default Weather;