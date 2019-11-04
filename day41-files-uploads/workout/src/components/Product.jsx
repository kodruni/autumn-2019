import React from 'react';

export default class Product extends React.Component {

    render() {
        return (
            <div className="product">
                <img src={ this.props.img_url } alt={ this.props.name } />
                <div className="name">{ this.props.name }</div>
            </div>
        )
    }
}