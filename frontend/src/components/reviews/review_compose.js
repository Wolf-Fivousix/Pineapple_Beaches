import React from 'react';
import { Link } from 'react-router-dom';

class ReviewCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post:"",
            newReview:""
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // this.setState( {newReview: nextProps.newReview.post})
    }

    handleSubmit(e) {
        e.preventDefault();
        let review = {
            post: this.state.post,
            beach: this.props.currentBeach
        };
    
        this.props.composeReview(review);
        this.setState({post: ''})
        console.log(this.props)
    }

    update() {
        return e => this.setState({
            post: e.currentTarget.value
        });
    }

    render() {
        return (
            <div className="review-form-container">
                <form className="review-form" onSubmit={this.handleSubmit}>
                    <Link className="back-arrow" to="/">&#8592;</Link>
                    <h1 className="add-review">Add Review</h1>
                    <div className="r-texta-container">
                        <textarea className="review-textarea"
                            value={this.state.post}
                            onChange={this.update()}
                            placeholder="How was the Beach...?">
                        </textarea>
                        <input className="review-submit" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default ReviewCompose;