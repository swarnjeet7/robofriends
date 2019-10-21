import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { robot } = this.props;
        return (
            <div className="bg-light-green dib br3 pa3 ma2 tc grow bw2 shadow-5">
                <img src={`https://robohash.org/${robot.username}?200x200`}alt="robots"/>
                <div>
                    <h2>{robot.name}</h2>
                    <p>{robot.email}</p>
                </div>
            </div>
        );
    }
}
 
export default Card;