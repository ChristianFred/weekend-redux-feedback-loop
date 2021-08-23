import { useHistory } from 'react-router-dom';

function CompletedSurvey() {
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        history.push('/FeelingInput');
    }
    return (
        <>
            <h2>We have sent your Survey to the database!</h2>
            <h2>Click the Button to take a new Reflection.</h2>
            <button onClick={handleSubmit} >New Reflection</button>
        </>
    )
}
export default CompletedSurvey;