import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import VirtualizedSelect from 'react-virtualized-select'

require('../style/select-style.css');

const BASE_URL = "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/";
const API_KEY = '<key>';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            locations: []
        };

        this.getLocations = this.getLocations.bind(this);
    }

    getLocations() {

        const url = `${BASE_URL}sitelist?key=${API_KEY}`;

        return axios.get(url)
        .then((response) => {
            const locations = response.data.Locations.Location

            this.setState({ locations });

            return { options: locations };
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    loadWeather(value) {
        const url = `${BASE_URL}${value.id}?res=3hourly&key=${API_KEY}`;

        return axios.get(url)
        .then((response) => {
            console.log(response);

            return { weather: response };
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    render() {
        const { locations } = this.state;
        var isLoadingExternally = true;

        return (
            <div>
                <VirtualizedSelect
                    async
                    backspaceRemoves={false}
                    labelKey='name'
                    loadOptions={this.getLocations}
                    onChange={this.loadWeather}
                    options={locations}
                    valueKey='id'
                    isLoading={isLoadingExternally}
                    matchPos='start'
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));