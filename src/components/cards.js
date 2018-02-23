import React from 'react';
import { connect } from 'react-redux';
import Card from './card';

class Cards extends React.Component {

    render() {
        const { items } = this.props;

        return (
            <div className="card-columns">
                {
                    items.map((item) => {
                        return (
                            <Card item={item} />
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.theReducer.items
})

const CardsContainer = connect(
    mapStateToProps,
    null
)(Cards)

export default CardsContainer;
