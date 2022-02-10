import React, { useState } from 'react';
import axios from 'axios';
import IPInformation from '../apis/IPData';

const Contact = () => {
    //state variables

    //Feedback state
    const [feedback, setFeedback] = useState('');
    const [feebackWarning, setFeebackWarning] = useState(false);

    //Email state
    const [email, setEmail] = useState('');
    //const [emailWarning, setEmailWarning] = useState(false); //potentially implement in future

    //Name state
    const [name, setName] = useState('');
    //const [nameWarning, setNameWarning] = useState(false); //potentially implement in future

    //IPData state
    const [ip, setIp] = useState('192.168.0.1');

    //backe4app response state
    const [feedbackId, setFeedbackId] = useState('');

    //
    const [activeForm, setActiveForm] = useState(true); //cant be in a class

    //null feedback warning state
    const [warning, setWarning] = useState('');
    const [warningCount, setWarningCount] = useState(0);
    

    const changeFeedbackHandler = (event) => {
        setFeedback(event.target.value);
    };
    const changeEmailHandler = (event) => {
        setEmail(event.target.value);
    }
    const changeNameHandler = (event) => {
        setName(event.target.value);
    }
    
    const submitHandler = (event) => {
        
        //prevent refresh when submit is entered
        event.preventDefault();
        
        //IPData call
        //setIp(IPInformation());
/*         setIp('192.168.0.1');
        if(!ip){
            console.log('rest here');
            console.log(`this is ip ${ip}`);
            setIp('192.168.0.1');
            console.log(`this is ip ${ip}`);
        } */

        //makes feedback not be empty before submit
        if(feedback.length > 0){       
            const article = {
                feedback : feedback,
                FullName : name,
                Email : email,
                ip: ip,            
            }
            console.log('This is the article:');
            console.log(article);
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
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error

                    console.log('Error', error.message);
                }
            });
            //below removes the form div to help with spam submissions
            setActiveForm(false);
        }else{
            setFeebackWarning(true);
            setWarningCount(warningCount+1);

            //meme warning
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
            <div className="ui segment">
                <h1>Hello, friend</h1>
                <p>
                    If you are wishing to get in touch with me this is the page for you! Please fill out the form below
                    and I may respond or meet up with you!
                </p>
                <form onSubmit={submitHandler} className="ui form">
                    <div className="ui field">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="fullName"
                        placeholder="Jonathan Telep"
                        value={name}
                        onChange={changeNameHandler}
                         />
                    </div>
                    <div className="ui field">
                        <label>Email</label>
                        <input 
                        type="text" 
                        name="email"
                        placeholder="telepjonathan@gmail.com" 
                        value={email}
                        onChange={changeEmailHandler}
                        />
                    </div>
                    <div className="ui field">         
                        <label>Message body</label>
                        {
                        feebackWarning ?
                        <div className="ui red segment">{warning}</div>
                        : null
                        }
                        <textarea 
                            type="text"
                            rows="2"
                            name="feedback"
                            placeholder="Type Something..."
                            value={feedback}
                            onChange={changeFeedbackHandler}
                        /> 
                    </div>
                    <button type="submit" className="ui button">Submit</button>
                </form>            
            </div>
            :
            <div className="ui segment"> 
            <h2>Thank you for your entry!</h2>
                <div className="ui segment">
                    Feedback Id: {feedbackId}
                </div> 
                <div className="ui segment">
                    Working on making a much better backend for this. This feature does not work. Please reach out to me at TelepJonathan@gmail.com
                </div> 
            </div>
            }
        </div>
    );
}    


export default Contact;