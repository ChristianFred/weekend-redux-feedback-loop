import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function SupportInput() {
    const dispatch = useDispatch();
    const [support, setSupport] = useState('');
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();

        if (support === "") {
            alert("There needs to be a number input in the field");
        }
        else if (support < 0 || support > 10) {
            alert("That number is out of the range limit please try again.")
        }
        else if (support > 0 && support < 11) {
            console.log('handle submit');
            dispatch({
                type: 'ADD_SUPPORT',
                payload: support
            })
            history.push('/CommentsInput');
        }
    }
    return (
        <>
            <h2>How supported do you feel?</h2>
            <form onSubmit={handleSubmit} className="addSupportInput">
                <input
                    type="number"
                    placeholder=" 1 through 10"
                    value={support}
                    onChange={(event) => setSupport(event.target.value)}
                />
                <button > NEXT </button>
            </form>
        </>
    )
}
export default SupportInput;