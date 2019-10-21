import React, { Component } from 'react';
import Card from './Card';


class CardList extends Component {
    render() {
        const { robots } = this.props;
        return (
            <div className="tc">
                {
                    robots.map(robot => <Card key={robot.id} robot={robot} />)
                }
            </div>
        );
    }
}

export default CardList;