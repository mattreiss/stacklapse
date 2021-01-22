const Reducer = (state, action) => {
    // console.log('reducer', action);
    switch (action.type) {
        case 'SET_STATE':
            return {
                ...state,
                ...action.payload
            };
        case 'REPLACE_STATE':
            return {
                ...action.payload,
                theme: state.theme
            };
        default:
            return state;
    }
};

export default Reducer;