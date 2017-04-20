import React from 'react';

const Day = (props) => {

    let results = props.day.Rep.map((day) => {

        let time = day.$ / 60 + ":00";

        return (
            <tr key={time}>
                <td>{time}</td>
                <td>{day.T}&deg;C</td>
                <td>{day.F}&deg;C</td>
                <td>{day.U}</td>
                <td>{day.Pp}&#37;</td>
            </tr>
        );
    });

    return (
        <tbody>
            {results}
        </tbody>
    );
}

export default Day;