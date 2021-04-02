import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    //state variables
    const [feedback, setFeedback] = useState('');
    //const [ip, setIp] = useState('');
    const [feedbackId, setFeedbackId] = useState('');
    const [activeForm, setActiveForm] = useState(true); //cant be in a class
    const [warning, setWarning] = useState('');
    const [warningCount, setWarningCount] = useState(0);
    const [hideWarning, setHideWarning] = useState(false);
    const changeHandler = (e) => {
        setFeedback(e.target.value);
    };
    
    const submitHandler = (e) => {
        //prevent refresh when submit is entered
        e.preventDefault();
        //makes feedback not be empty before submit
        if(feedback.length > 0){       
            const article = {
                feedback : feedback,
                ip: '192.26.26.26',            
            }
            const headers = {
                'X-Parse-Application-Id' : `${process.env.REACT_APP_JT_FEEDBACK_APP_ID}`,
                'X-Parse-REST-API-Key' : `${process.env.REACT_APP_JT_FEEDBACK_API_KEY}`
            };
            //below sends submission to backend
            axios.post('https://parseapi.back4app.com/classes/feedback', article, { headers })
            .then(response => setFeedbackId(response.data.objectId))
            .catch(function (error){
                if (error.response) {
                    // Request made and server responded
                    console.log("1000start");
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    console.log("1000end");
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log("2000here");
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("3000here");
                    console.log('Error', error.message);
                }
            });
            //below removes the form div to help with spam submissions
            setActiveForm(false);
        }else{
            setHideWarning(true);
            setWarningCount(warningCount+1);
            console.log(`Can't submit null, tried: ${warningCount} times`);
            if(warningCount < 3){
                setWarning(`Can't submit null, attempts: ${warningCount}`);
            }else{
                setWarning(`Counting is hard, null submission ${warningCount} attempts`);
            }

        }
    }
    return (
        <div>
            { activeForm ?
            <div class="ui segment">
                <form onSubmit={submitHandler} className="ui form">
                    <div className="ui field">
                        <label>Please send me a message!</label>
                        {
                        hideWarning ?
                        <div className="ui red segment">{warning}</div>
                        : null
                        }
                        <textarea 
                            type="text"
                            rows="2"
                            name="feedback"
                            value={feedback}
                            onChange={changeHandler}
                        /> 
                    </div>
                    <button type="submit" class="ui button">Submit</button>
                </form>            
            </div>
            :
            <div class="ui segment"> 
            <h2>Thank you for your entry!</h2>
                <div className="ui segment">
                    Feedback Id: {feedbackId}
                </div> 
                <div className="ui segment">
                    Note, if the feedbackId is empty. Something failed on backend and a error report will be sent instead :/
                </div> 
            </div>
            }
        </div>
    );
}    


export default Contact;