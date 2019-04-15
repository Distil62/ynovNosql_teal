import { AutoComplete } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import '../style/global.css';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        };
    }


    render () {
        return (
            <div className="search-bar">
                <AutoComplete
                    dataSource={this.props.datasource}
                    placeholder="Rechercher..."
                    onChange={(value) => { this.setState({searchValue: value}) }}
                    filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                    onSelect={(value) => this.props.searchCallback(value)}
                />
            </div>
        );
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            window.addEventListener('keypress', (key) => {
                if (key.key === 'Enter') {
                    this.props.searchCallback(this.state.searchValue);
                }
            })
        }
    }
}

export default SearchBar;