import React from 'react';
import { Feature, Layer } from "react-mapbox-gl";

const polygonPaint = {
    'fill-color': '#6F788A',
    'fill-opacity': 0.7
};

export default props => 
    <Layer 
    id="quarter"
    type="fill" 
    paint={polygonPaint}>
        {console.log(props)}
        <Feature coordinates={props.quarters.geometry.coordinates[[0]]} />
    </Layer>