import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function FeelingInput() {
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('');
    const history = useHistory();

    // handle submit runs when the user clicks the next button. It saves the value entered and sends a
    // message to the index reducers if it qualifies. 
    const handleSubmit = event => {
        event.preventDefault();

        if (feeling === " "){
            alert("There needs to be a number input in the field");
        }
        else if(feeling < 0 || feeling > 10 ){
            alert("That number is out of the range limit please try again.")
        }
        else if(feeling > 0 && feeling < 11){
            console.log('handle submit');
            dispatch({
                type: 'ADD_FEELING',
                payload: feeling
            })
            history.push('/UnderstandingInput');
        }
    }
    return (
        // input value for the related question.
        <>
            <h2>How are you feeling today?</h2>
            <form onSubmit={handleSubmit} className="addPizzaForm">
                <input
                    type ="number"
                    placeholder=" 1 through 10"
                    value={feeling}
                    onChange={(event) => setFeeling(event.target.value)}
                />
                <button > NEXT </button>
            </form>
        </>
    )
}
export default FeelingInput;