import * as React from "react";
import PropTypes from 'prop-types';
import Reducer from './Reducer';
import { INITIAL_STATE, createActions } from './Actions';
import Theme from "../theme";

const saveState = async (jsonValue) => {
    try {
        jsonValue._oldTheme = jsonValue.theme.currentTheme;
        delete jsonValue.theme;
        delete jsonValue.authToken;
        delete jsonValue.user;
        const value = JSON.stringify(jsonValue);
        // TODO: save json to file
    } catch (e) {
        console.log("Store.saveState error", e, jsonValue)
    }
};

const loadState = async () => {
    try {
        return INITIAL_STATE;
        // TODO: load json from file
        console.log("Store.loadState", value, jsonValue);
        return jsonValue;
    } catch(e) {
        console.log("Store.loadState error", e)
    }
};

  
const Store = ({children, persist}) => {
    const [state, dispatch] = React.useReducer(Reducer, INITIAL_STATE);
    
    const actions = createActions(dispatch);

    const hydrate = async () => {
        let data = await loadState();
        if (data && persist) {
            if (data._version !== state._version) {
                data = state;
            }
            if (data._oldTheme) {
                data.theme = new Theme(data._oldTheme);
            }
            data.graphqlUrl = state.graphqlUrl;
            data._isHydrated = true;
            actions._setState(data)
        }
    }

    React.useEffect(() => {
        hydrate();
        return () => {
            saveState(state);
        }
    }, []);
    
    return (
        <Context.Provider value={[state, actions]}>
            {children}
        </Context.Provider>
    )
};

Store.propTypes = {
    children: PropTypes.node.isRequired,
    /** persist the state saved in the store  */
    persist: PropTypes.bool,
}

export const Context = React.createContext(INITIAL_STATE);
export default Store;