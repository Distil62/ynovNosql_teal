import Drawer from 'antd/lib/drawer';
import fetch from 'isomorphic-unfetch';
import NavigationControl from "mapbox-gl";
import React from 'react';
import ReactMapboxGl, { Layer, Marker } from "react-mapbox-gl";
import DrawerContent from './DrawerContent';
import Quarters from './Quarters';
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

    constructor(props) {
        super(props);
        this.state = {
            velovs: [],
            displayVelovs: [],
            visible: false,
            currentVelov: null,
            zoom: [10],
            searchElems: ["caca"]
        }
    };

    searchByName(name) {
        if (!name || name.length <= 0) {
            this.setState({
                displayVelovs: this.state.velovs
            });
        } else {
            const searchRes = this.state.velovs.filter((v) => v.properties.name === name);

            if (searchRes.length > 1 ) {
                const midIndex = Math.round(searchRes.length / 2);

                this.setState({
                    visible: false,
                    displayVelovs: searchRes,
                    currentVelov: searchRes[midIndex],
                    zoom: [14]
                });
            } else {
                this.setState({
                    displayVelovs: this.state.velovs,
                    currentVelov: searchRes[0],
                    visible: true,
                    zoom: [17]
                });
            }
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.currentVelov
                        ? <Drawer
                            title={this.state.currentVelov.properties.name}
                            onClose={() => this.setState({visible: false})}
                            visible={this.state.visible}>
                                    <DrawerContent velov={this.state.currentVelov} />
                        </Drawer>
                        : null
                }
                <SearchBar searchCallback={(name) => this.searchByName(name)} datasource={this.state.searchElems} />
                <this.Mapbox
                    onStyleLoad={this.onStyleLoad}
                    center = {
                        this.state.currentVelov
                            ? [this.state.currentVelov.properties.lng, this.state.currentVelov.properties.lat]
                            : [4.8418314, 45.7463131]
                        
                    }
                    style="mapbox://styles/mapbox/dark-v9"
                    zoom={this.state.zoom}
                    containerStyle={{
                        height: "100vh",
                        width: "100vw"
                    }}>
                    <Quarters/>
                    <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "marker-15" }}>
                    {
                        this.state.displayVelovs.length > 0
                            ? this.state.displayVelovs.map(velov => <Marker
                                onClick={() => this.setState({displayVelovs: this.state.velovs, currentVelov: velov, visible: true, zoom: [17]})}
                                key={velov._id} 
                                coordinates={velov.geometry.coordinates}/>)
                            : null
                    }
                    </Layer>
                </this.Mapbox>
            </div>
        );
    }
    async componentDidMount() {
        const response = await fetch("http://localhost:3000/api/velov/");
        const velov = await response.json();
        const datasourceSearch = [];

        velov.forEach((v) => {
            if (!datasourceSearch.includes(v.properties.name)) {
                datasourceSearch.push(v.properties.name);
            }
        });

        datasourceSearch.sort();

        this.setState({
            velovs: velov,
            displayVelovs: velov,
            searchElems: datasourceSearch
        });
    }
}

export default LoadMap;
