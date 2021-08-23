import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function OrderDetails() {


    const feelings = useSelector(store => store.FeelingReducer)
    console.log('this is our feelings', feelings);

    const understanding = useSelector(store => store.UnderstandingReducer)
    console.log('this is our understanding', understanding);

    const support = useSelector(store => store.SupportReducer)
    console.log('this is our support', support);

    const comments = useSelector(store => store.CommentsReducer)
    console.log('this is our comments', comments);
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();

        axios({
            method: 'POST',
            url: '/feedbackRouter',
            data: { 
                feelings,
                understanding,
                support,
                comments
            }
        }).then((response) => {
            console.log(response);
            history.push('/CompletedSurvey');
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <div>
            <h3> Review Reflection </h3>
            {feelings.map((feeling, i) => {
                return (
                    <div>
                        <h5>Your current feelings about today are: {feeling}</h5>
                    </div>
                )
            })}

            {understanding.map((understanding, i) => {
                return (
                    <div>
                        <h5>Your current understanding of the material is: {understanding}</h5>
                    </div>
                )
            })}

            {support.map((support, i) => {
                return (
                    <div>
                        <h5>Your current view of support from prime is: {support}</h5>
                    </div>
                )
            })}

            {comments.map((comments, i) => {
                return (
                    <div>
                        <h5>Your comments for prime are: {comments}</h5>
                    </div>
                )
            })}
            <button onClick={handleSubmit}> Complete Reflection </button>
        </div>

    )
}
export default OrderDetails;