import React from 'react';

class Card extends React.Component {

    render() {
        const {item} = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{item.rocket.rocket_name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{item.rocket.rocket_type}</h6>
                    <p className="card-text">{item.details}</p>
                    <a target="_blank" href={item.links.article_link} className="card-link">Article</a>
                    <a target="_blank" href={item.links.video_link} className="card-link">Watch Video</a>
                </div>
            </div>
        );
    }
}

export default Card;
