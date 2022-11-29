import React from 'react';

const TourItem = ({tour}) => {
    return (<>
        <tbody>
        <tr>
            <td>{tour.country}</td>
            <td>{tour.city}</td>
            <td>{tour.type}</td>
        </tr>
        </tbody>
    </>);
};

export default TourItem;