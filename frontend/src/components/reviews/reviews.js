import React from 'react';
import { withRouter } from 'react-router-dom';
import ReviewBox from './review_box';

class Review extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: []
        }
    }
    
    componentWillMount() {
        this.props.fetchBeachReviews(this.props.beach_id);
    }

    componentWillReceiveProps(newState) {
        this.setState( {reviews: newState.reviews });
    }

    render() {
        if(this.state.reviews.length === 0) {
            return (
                <div className="no-reviews-container">
                    <h1 className="no-r-title">No Reviews at the moment</h1>
                </div>
            )
        } else {
            return (
                <div className="show-reviews">
                    <h2 className="all-r">All Reviews</h2>
                    <ul className="ul-reviews">
                        {this.state.reviews.map(review => (
                            <ReviewBox key={review._id} post={review.post} />
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default withRouter(Review);