import { useState } from "react";


const useStoredState = (storageKey, defaultState) => {

    const getInitialState = () => {
        const storagedState = localStorage.getItem(storageKey)
        return storagedState ?? defaultState;
    }

    const [state, setState] = useState(getInitialState);
    const setAndStoreState = (state) => {
        setState(state);
        localStorage.setItem(storageKey, state)
    }
    return [state, setAndStoreState];
}

export default useStoredState;