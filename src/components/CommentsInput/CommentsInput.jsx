import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function CommentsInput() {
    const dispatch = useDispatch();
    const [comments, setComments] = useState('');
    const history = useHistory();

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