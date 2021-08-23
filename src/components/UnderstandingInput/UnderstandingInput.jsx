import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function UnderstandingInput() {
    const dispatch = useDispatch();
    const [understanding, setUnderstanding] = useState('');
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        if (understanding === "") {
            alert("There needs to be a number input in the field");
        }
        else if (understanding < 0 || understanding > 10) {
            alert("That number is out of the range limit please try again.")
        }
        else if (understanding > 0 && understanding < 11) {
            console.log('handle submit');
            dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: understanding
            })
            history.push('/SupportInput');
        }
    }
    return (
        <>
            <h2>How are you Understanding the Material?</h2>
            <form onSubmit={handleSubmit} className="addUnderstandingInput">
                <input
                    type="number"
                    placeholder=" 1 through 10"
                    value={understanding}
                    onChange={(event) => setUnderstanding(event.target.value)}
                />
                <button > NEXT </button>
            </form>
        </>
    )
}
export default UnderstandingInput;