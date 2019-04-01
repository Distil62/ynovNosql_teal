import NavigationControl from "mapbox-gl";
import React from 'react';
import ReactMapboxGl, { Feature, Layer } from "react-mapbox-gl";
import SearchBar from './SearchBar';

class LoadMap extends React.Component {
    
    Mapbox = ReactMapboxGl({
        accessToken: "pk.eyJ1IjoiaW1teXN0IiwiYSI6ImNqdHlkN2FtdDAxcjEzem4zbnJpcGs2aXAifQ.mz6mN7OZY5yLfnslk4jXGQ"
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
            <div>
                <SearchBar />
                <this.Mapbox
                    onStyleLoad={this.onStyleLoad}
                    style="mapbox://styles/mapbox/dark-v9"
                    containerStyle={{
                        height: "100vh",
                        width: "100vw"
                    }}>
                    <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "marker-15" }}>
                    <Feature coordinates={[4.837754, 45.745716]}/>
                    </Layer>
                </this.Mapbox>
            </div>
        );
    }
}

export default LoadMap;
