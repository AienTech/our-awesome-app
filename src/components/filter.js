import React from 'react';
import { connect } from 'react-redux';
import { fetchData, fetchDataDone } from "../redux";

class Filter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ""
        }
    }

    handleFilterChange(e) {
        clearTimeout(this.timer);
        const text = e.target.value;

        this.timer = setTimeout(() => {
            const { fetchData, fetchDataDone } = this.props;
            this.setState({
                text
            })

            fetchData();

            fetch(`https://api.spacexdata.com/v2/launches?launch_year=${text}`)
                .then(res => {
                    res.json()
                        .then(data => fetchDataDone(data))
                })
                .catch(err => {
                    console.log(err)
                })
        }, 800)
    }

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple application, which fetches data from SpaceX APIs.</p>
                <hr className="my-4" />
                <p>SpaceX has gained worldwide attention for a series of historic milestones. It is the only private company ever to return a spacecraft from low-Earth orbit, which it first accomplished in December 2010. The company made history again in May 2012 when its Dragon spacecraft delivered cargo to and from the International Space Station — a challenging feat previously accomplished only by governments. Since then Dragon has delivered cargo to and from the space station multiple times, providing regular cargo resupply missions for NASA.</p>
                <div class="form-group">
                    <label for="filter">Filter per year:</label>
                    <input classId="filter" className="form-control" placeholder="Enter a year like 2018" type="text" onChange={this.handleFilterChange.bind(this)} />
                    <small hidden={!this.props.loading} id="filterHelp" class="form-text text-muted">Fetching all {this.state.text} launches...</small>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.theReducer.loading
})

const mapDispatchToProps = {
    fetchData,
    fetchDataDone
}

const FilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)

export default FilterContainer;
