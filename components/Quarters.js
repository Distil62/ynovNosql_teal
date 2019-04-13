import React from 'react';
import { Feature, Layer } from "react-mapbox-gl";

class Quarters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quarters: [],
            coordinates: []
        }
    };

    polygonPaint = {
        'fill-color': '#6F788A',
        'fill-opacity': 0.7
    };

    render() {
        return (
            <Layer type="fill" paint={this.polygonPaint}>
            <Feature coordinates={quarter.geometry.coordinates} />
            </Layer>
        )
    }

    async componentDidMount() {
        const response = await fetch("http://localhost:3000/api/quarters/");
        const quarter = await response.json();


        this.setState({
            quarters: quarter
        });
    }
}

export default Quarters;