import { Input } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import '../style/global.css';

const Search = Input.Search;


class SearchBar extends React.Component {


    render () {
        return (
            <div className="search-bar">
                <Search
                    placeholder="Rechercher ..."
                    onSearch={value => console.log(value)}
                />
            </div>
        );
    }
}

export default SearchBar;