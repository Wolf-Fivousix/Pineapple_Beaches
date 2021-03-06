import React from 'react';
import ReviewBox from '../reviews/review_box';
import ReviewNavbarContainer from "../nav/review_navbar_container";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        reviews: []
    }
  }
  
  componentWillMount() {
    this.props.fetchUserReviews(this.props.currentUser.id);
  }
  
  componentWillReceiveProps(newState) {
    this.setState({ reviews: newState.reviews });
  }   
  
  render() {
    if (this.state.reviews.length === 0) {
      return (
        <div className="profile-page-container">
          <ReviewNavbarContainer/>
          <div className="profile-container">
            <div className="profile-sidebar">
              <div className="title-profile-container">
                <h1 className="title-profile">Profile</h1>
              </div>
              <div className="username-profile-container">
                <h1 className="username-profile">{this.props.currentUser.username}</h1>
              </div>
            </div>
            <div className="profile-content">
              <div className="p-center-content">
                <h1 className="no-profile-reviews">You currently have no reviews</h1>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="profile-page-container">
          <ReviewNavbarContainer/>
          <div className="profile-container">
            <div className="profile-sidebar">
              <div className="title-profile-container">
                <h1 className="title-profile">Profile</h1>
              </div>
              <div className="username-profile-container">
                <h1 className="username-profile">{this.props.currentUser.username}</h1>
              </div>
            </div>
            <div className="profile-content">
              <div className="p-center-content">
                <h1 className="all-profile-reviews">All of your Reviews</h1>
              </div>
              <div className="ul-r-profile">
                <ul className="ul-profile">
                  {Object.keys(this.state.reviews).map(review => (
                    <ReviewBox key={review} post={this.state.reviews[review].post} />
                  ))}
                </ul>
              </div>
              <div className="thanks-container">
                <h1 className="profile-thanks">Thank you for taking time to write reviews</h1>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Profile;