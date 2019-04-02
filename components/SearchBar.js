import { AutoComplete } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import '../style/global.css';

const quarter = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

class SearchBar extends React.Component {


    render () {
        return (
            <div className="search-bar">
                <AutoComplete
                    dataSource={quarter}
                    placeholder="Rechercher ..."
                    filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                />
            </div>
        );
    }
}

export default SearchBar;