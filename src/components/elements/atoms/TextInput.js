import * as React from 'react';
import PropTypes from 'prop-types';
import { TextInput as PNTextInput } from 'proton-native';
import { Context } from '../../../hooks/Store';

const TextInput = (props) => {
    const [state] = React.useContext(Context);
    
    const onChangeText = (value) => {
        if (typeof props.onChange == 'function') {
            props.onChange(value);
        }
    }

    return (
        <PNTextInput 
            {...props}
            onChangeText={onChangeText}
            style={{
                borderRadius: state.theme.radii.md,
                minWidth: state.theme.sizes.lgW,
                padding: state.theme.space.xxs,
                color: state.theme.colors.text1,
                backgroundColor: state.theme.colors.negative,
                ...props.style
            }}>
            {props.children}
        </PNTextInput>
    );
};

TextInput.propTypes = {
    /** options to select from */
    options: PropTypes.array.isRequired,
    /** value of the select */
    value: PropTypes.any.isRequired,
    /** onChange callback function */
    onChange: PropTypes.func,
    /** style for the component */
    style: PropTypes.object
}

export default TextInput;
