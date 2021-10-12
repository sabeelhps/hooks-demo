import {useState} from 'react'

const useInputState = (initialVal) => {

    const [state, setState] = useState(initialVal);
    const [isValid, setIsValid] = useState(true);

    const setInput = (e) => {
        if (state.trim().length === 0) {
            setIsValid(false)
        } else {
            setIsValid(true);
        }
        setState(e.target.value);
    }

    const resetInput = () => {
        setState("");
    }

    const checkValid = () => {
        setIsValid(!isValid);
    }



    return [state, setInput, resetInput,isValid,checkValid];
}

export default useInputState
