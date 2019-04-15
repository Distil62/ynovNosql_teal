import {library} from '@fortawesome/fontawesome-svg-core';
import {faHome, faPhone, faMailBulk, faBicycle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Button} from 'antd';

library.add(faHome, faPhone, faMailBulk, faBicycle);

export default props => <div>
    <h1>{props.interest.properties.nom}</h1>
    <hr/>
    <ul>
        <li><FontAwesomeIcon icon="home"/> {props.interest.properties.address}</li>
        <li><FontAwesomeIcon icon="phone"/> {props.interest.properties.phone}</li>
        <li><FontAwesomeIcon icon="mail-bulk"/> {props.interest.properties.courriel}</li>
    </ul>
    <hr/>
    <Button onClick={() => props.nearCallback(props.interest.geometry.coordinates[0], props.interest.geometry.coordinates[1])}
            style={{marginLeft: "21%"}}
            type="primary">
        <FontAwesomeIcon icon="bicycle"/>Velov proche
    </Button>
</div>