import NavigationControl from "mapbox-gl";
import React from 'react';
import ReactMapboxGl, { Feature, Layer } from "react-mapbox-gl";

class LoadMap extends React.Component {
    
    Mapbox = ReactMapboxGl({
        accessToken: "pk.eyJ1IjoiaW1teXN0IiwiYSI6ImNqdHkzZHMzMzBka3M0ZG1oZHVzeXdhbjEifQ.BLqaWXGcWlWrivD9jacH4w"
      });

    onStyleLoad = (map) => {
        map.addControl(new NavigationControl.GeolocateControl({
            positionOptions: {
            enableHighAccuracy: true
            },
            trackUserLocation: true
        }));
    };
    render() {

        return (
            <this.Mapbox
                onStyleLoad={this.onStyleLoad}
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: "100vh",
                    width: "100vw"
                }}>
                <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
                </Layer>
            </this.Mapbox>
        );
    }
}

export default LoadMap;
