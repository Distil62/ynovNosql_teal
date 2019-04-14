import React from 'react';
import { Feature, Layer } from "react-mapbox-gl";

const polygonPaint = {
    'fill-color': '#6F788A',
    'fill-opacity': 0.7
};

export default props => 
    <Layer type="fill" paint={polygonPaint}>
        <Feature coordinates={[props.quarter.geometry.coordinates]} />
    </Layer>