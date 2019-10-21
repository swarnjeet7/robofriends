import React, { Component } from 'react';
import Card from './Card';


class SearchBox extends Component {
    
    render() {
        const {filter} = this.props;
        // console.log(filter);
        return (
            <div className="pa2">
                <input 
                    className="pa3 ba b--green bg-lightest-blue" 
                    type="search"
                    placeholders="Search Your own Robotos" 
                    onChange={(event) => { filter(event.target) }}
                />
            </div>
        );
    }
}

export default SearchBox;