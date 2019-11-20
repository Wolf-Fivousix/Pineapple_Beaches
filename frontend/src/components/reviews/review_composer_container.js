import { connect } from 'react-redux';
import { composeReview } from '../../actions/review_actions';
import ReviewCompose from './review_compose';

const mSTP = (state) => {
    return {
        currentUser: state.session.user,
        newReview: state.reviews.new
    };
};

const mDTP = dispatch => {
    return {
        composeReview: data => dispatch(composeReview(data))
    };
};

export default connect(mSTP,mDTP)(ReviewCompose);