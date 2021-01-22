import Theme from '../theme';

export const INITIAL_STATE = {
    _version: 1,
    theme: new Theme(),
    authToken: null,
    user: null,
    route: '/',
    args: {},
}

export const createActions = (dispatch) => {
    const actions = {};
    actions._setState = (_state) => {
        dispatch({
            type: "SET_STATE",
            payload: _state
        });
    };
    actions._replaceState = (_state) => {
        dispatch({
            type: "REPLACE_STATE",
            payload: _state
        });
    }

    actions.setAuth = ({authToken, user}) => actions._setState({
        authToken, 
        user
    });
    actions.setTheme = theme => actions._setState({theme});
    actions.goTo = (route='/', args={}) => actions._setState({route, args});
    actions.logout = () => actions._replaceState(INITIAL_STATE)

    return actions;
}