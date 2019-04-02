import { library } from '@fortawesome/fontawesome-svg-core';
import { faBicycle, faParking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faBicycle, faParking);

export default props => 
<ul style={{fontSize: '15px'}}>
    <li style={{marginBottom: '25px'}}>
       <h2 style={{fontSize: '18px', textTransform: 'capitalize'}}><span>{props.velov.properties.commune}</span></h2>
    </li>
    <li style={{marginBottom: '10px'}}>
        <h3
        style={(props.velov.properties.bike_stands) === 0 ? {color: "#f5222d"} : {color: "#52c41a"}}>
            <FontAwesomeIcon style={{marginRight: '15px'}} icon="parking"/>
            totales: <span style={{fontWeight: 'bold'}}>{props.velov.properties.bike_stands}</span>
        </h3>
    </li>
    <li style={{marginBottom: '10px'}}>
        <h3
        style={(props.velov.properties.available_bike_stands) === 0 ? {color: "#f5222d"} : {color: "#52c41a"}}>
            <FontAwesomeIcon style={{marginRight: '15px'}} icon="parking"/>
            disponibles: <span style={{fontWeight: 'bold'}}>{props.velov.properties.available_bike_stands}</span>
        </h3>
    </li>
    <li style={{marginBottom: '200px'}}>
        <h3
        style={(props.velov.properties.available_bikes) === 0 ? {color: "#f5222d"} : {color: "#52c41a"}}>
            <FontAwesomeIcon style={{marginRight: '13px', marginLeft: '-5px'}} icon="bicycle"/>
            disponibles: <span style={{fontWeight: 'bold'}}>{props.velov.properties.available_bikes}</span>
        </h3>
    </li>
</ul>