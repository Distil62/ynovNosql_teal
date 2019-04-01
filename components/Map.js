import fetch from 'isomorphic-unfetch';
import NavigationControl from "mapbox-gl";
import React from 'react';
import ReactMapboxGl, { Layer, Marker } from "react-mapbox-gl";
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

    longitude = 4.837754;
    latitude = 45.745716;

    constructor(props) {
        super(props);
        this.state = {
            velovs: []
        }
    };

    render() {
        return (
            <div>
                <SearchBar />
                <this.Mapbox
                    onStyleLoad={this.onStyleLoad}
                    center = {[4.8418314, 45.7463131]}
                    style="mapbox://styles/mapbox/dark-v9"
                    containerStyle={{
                        height: "100vh",
                        width: "100vw"
                    }}>
                    <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "marker-15" }}>
                    {
                        this.state.velovs.length > 0
                            ? this.state.velovs.map(velov => <Marker 
                                onClick={() => { console.log("clicked ! ==> ", velov) }}
                                key={velov._id} 
                                coordinates={velov.geometry.coordinates} />)
                            : null
                    }
                    </Layer>
                </this.Mapbox>
            </div>
        );
    }
    async componentDidMount() {
        const velov = await fetch("http://localhost:3000/api/velov/");
        this.setState({velovs: await velov.json()});
    }
}

export default LoadMap;
