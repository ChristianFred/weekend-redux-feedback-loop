import { useHistory } from 'react-router-dom';

function CompletedSurvey(feeling,understanding,support,comments) {
    const history = useHistory();
    // This handle submit clears the related fields and then sends you back to the beginning.
    const handleSubmit = event => {
        event.preventDefault();
        feeling = '';
        understanding = '';
        support = '';
        comments = '';
        console.log(feeling,understanding,support,comments);
        history.push('/');
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