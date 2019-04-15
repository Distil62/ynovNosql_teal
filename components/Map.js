import Drawer from 'antd/lib/drawer';
import fetch from 'isomorphic-unfetch';
import NavigationControl from "mapbox-gl";
import React from 'react';
import ReactMapboxGl, { Layer, Marker} from "react-mapbox-gl";
import DrawerContent from './DrawerContent';
import DrawerContentInterest from './DrawerContentInterest';
import SearchBar from './SearchBar';
import interests from '../requests/interests';

const image = new Image();
image.src = "static/img/interestMarker.png";
const interestImages = ['interest-marker', image];

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
            currentTarget: null,
            zoom: [10],
            searchElems: ["ronaldo"],
            interests: [],
            interestVisible: false
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
                    currentTarget: searchRes[midIndex],
                    zoom: [14]
                });
            } else {
                this.setState({
                    displayVelovs: this.state.velovs,
                    currentTarget: searchRes[0],
                    visible: true,
                    zoom: [17]
                });
            }
        }
    }

    async nearVelov(lat, long) {
        const response = await fetch('http://locahost:3000/api/velov/nearAvailableBikes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                lat: lat,
                lon: long,
                distance: 1000000
            })
        });
        const targetVelov = await response.json();

        this.setState({
            currentTarget: targetVelov,
            visible: true,
            zoom: [17],
            interestVisible: false
        });

    }

    render() {
        return (
            <div>
                {
                    this.state.currentTarget
                        ? <Drawer
                            title={this.state.currentTarget.properties.name}
                            onClose={() => this.setState({visible: false})}
                            visible={this.state.visible}>
                            {
                                this.state.interestVisible
                                    ? <DrawerContentInterest nearCallback={(lat, long) => this.nearVelov(lat, long)} interest={this.state.currentTarget} />
                                    : <DrawerContent velov={this.state.currentTarget} />
                            }
                        </Drawer>
                        : null
                }
                <SearchBar searchCallback={(name) => this.searchByName(name)} datasource={this.state.searchElems} />
                <this.Mapbox
                    onStyleLoad={this.onStyleLoad}
                    center = {
                        this.state.currentTarget
                            ? [this.state.currentTarget.geometry.coordinates[0], this.state.currentTarget.geometry.coordinates[1]]
                            : [4.8418314, 45.7463131]
                        
                    }
                    style="mapbox://styles/mapbox/dark-v9"
                    zoom={this.state.zoom}
                    containerStyle={{
                        height: "100vh",
                        width: "100vw"
                    }}>
                    <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "marker-15" }}

                    >
                    {
                        this.state.displayVelovs.length > 0
                            ? this.state.displayVelovs.map(velov => <Marker
                                onClick={() => this.setState({currentTarget: velov, visible: true, zoom: [17], interestVisible: false})}
                                key={velov._id}
                                coordinates={velov.geometry.coordinates}/>)
                            : null
                    }
                    </Layer>
                    <Layer
                        type="symbol"
                        id="interests"
                        layout={{ "icon-image": "interest-marker" }}
                        images={interestImages}>
                        {
                            this.state.interests.length > 0
                                ? this.state.interests.map(interest => <Marker
                                    onClick={() => this.setState({currentTarget: interest, visible: true, zoom: [17], interestVisible: true}) }
                                    key={interest.properties.nom}
                                    coordinates={interest.geometry.coordinates}/>)
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
        const interestPoints = interests();

        velov.forEach((v) => {
            if (!datasourceSearch.includes(v.properties.name)) {
                datasourceSearch.push(v.properties.name);
            }
        });

        interestPoints.forEach(p => {
            if (!datasourceSearch.includes(p.properties.nom)) {
                datasourceSearch.push(p.properties.nom);
            }
        });

        datasourceSearch.sort();

        this.setState({
            velovs: velov,
            displayVelovs: velov,
            searchElems: datasourceSearch,
            interests: interestPoints
        });
    }
}

export default LoadMap;
