import React from 'react';
import ReactDOM from 'react-dom';
import {ReadMore} from 'react-read-more';
import Style from './styles';

export default class ReviewItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {review} = this.props;
        const createdDate = (new Date(review.createdAt)).toLocaleDateString();
        return (
            <div style={Style.reviewItemContainer}>
                <div style={Style.userDetailsContainer}>
                    
                    <img src={review.customerProfilePhotoUrl} style={Style.profilePicStyle}/>
                    
                    <div style={Style.nameContainer}>
                        <div style={Style.nameStyle}>{review.customerName}</div>
                        <div style={Style.dateStyle}>{createdDate}</div>
                    </div>
                </div>
                <div style={Style.reviewTextContainer}>
                    <span><ReadMore style={{color: 'red'}} lines={3} text="Read more">
                        {review.customerReview}
                        </ReadMore>
                    </span>
                </div>
            </div>   
        )
    }
}