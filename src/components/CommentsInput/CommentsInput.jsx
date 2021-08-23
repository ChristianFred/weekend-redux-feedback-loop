import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function CommentsInput() {
    const dispatch = useDispatch();
    const [comments, setComments] = useState('');
    const history = useHistory();
    // handle submit runs when the user clicks the next button. It saves the value entered and sends a
    // message to the index reducers if it qualifies. 
    const handleSubmit = event => {
        event.preventDefault();

        console.log('handle submit');
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments
        })
        history.push('/OrderDetails');
    }
    return (
        // input value for the related question.
        <>
            <h2>Any Comments for Prime?</h2>
            <form onSubmit={handleSubmit} className="addCommentsInput">
                <input
                    placeholder="Comments go here"
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}
                />
                <button > NEXT </button>
            </form>
        </>
    )
}
export default CommentsInput;