import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function OrderDetails({addFeedbackItem}) {
    const history = useHistory();
    // all the selectors grab the data from the various pages and allows us to use it here.
    const feelings = useSelector(store => store.FeelingReducer)
    console.log('this is our feelings', feelings);

    const understanding = useSelector(store => store.UnderstandingReducer)
    console.log('this is our understanding', understanding);

    const support = useSelector(store => store.SupportReducer)
    console.log('this is our support', support);

    const comments = useSelector(store => store.CommentsReducer)
    console.log('this is our comments', comments);
    // creating a new item to hold the condensed values.
    const newItem = {
        feelings: feelings,
        understanding: understanding,
        support: support,
        comments: comments,
    }
    // once clicked it runs the post command for adding a new item to the database. (or it should)
    function onClick(){
        addFeedbackItem(newItem);
        history.push('/CompletedSurvey');
    }
    return (
        // All of this below is showing the various data points on the DOM for the user to see.
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
            <button onClick={onClick}> Complete Reflection </button>
        </div>

    )
}
export default OrderDetails;