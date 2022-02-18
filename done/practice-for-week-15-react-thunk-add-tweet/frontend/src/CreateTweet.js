import { useState, useEffect } from "react";
import { createTweetThunk } from "./store/tweet";
import { useDispatch } from "react-redux";

const CreateTweet = () => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (message.length > 0) {
            dispatch(createTweetThunk(message));
        }
    }

    return (
        <>
            <form>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button>Submit</button>
            </form>
        </>
    )
};

export default CreateTweet;
