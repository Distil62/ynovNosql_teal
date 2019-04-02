import { library } from '@fortawesome/fontawesome-svg-core';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faBicycle);

export default props => <div style={{fontSize: '25px'}}>
    <h3 
    style={{marginBottom: '10px'}}>
    <FontAwesomeIcon style={{textAlign: 'middle', marginRight: '10px'}} icon="bicycle"/>
    </h3>
    <h3 
    style={{marginBottom: '10px'}}>
    <FontAwesomeIcon style={{textAlign: 'middle', marginRight: '10px'}} icon="bicycle"/>13
    </h3>
    <h3><FontAwesomeIcon style={{textAlign: 'middle', marginRight: '10px'}} icon="bicycle"/>13</h3>
</div>