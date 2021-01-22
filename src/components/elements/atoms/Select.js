import React from 'react';
import PropTypes from 'prop-types';
import { Picker } from 'proton-native';
import { Context } from '../../../hooks/Store';

const Select = (props) => {
    const [state] = React.useContext(Context);

    const onValueChange = (value) => {
        if (typeof props.onChange == 'function') {
            props.onChange(value);
        }
    }

    return (
        <Picker 
            {...props}
            style={{
                borderRadius: state.theme.radii.md,
                minWidth: state.theme.sizes.lgW,
                padding: state.theme.space.xxs,
                color: state.theme.colors.text1,
                backgroundColor: state.theme.colors.negative,
                ...props.style
            }}
            selectedValue={props.value}
            onValueChange={onValueChange}>
            {props.options.map(v => (
                <Picker.Item 
                    style={{
                        padding: state.theme.space.xxs,
                        color: state.theme.colors.text1,
                    }}
                    key={v}
                    label={v} />
            ))}
        </Picker>
    )
}

Select.propTypes = {
    /** options to select from */
    options: PropTypes.array.isRequired,
    /** value of the select */
    value: PropTypes.any.isRequired,
    /** onChange callback function */
    onChange: PropTypes.func,
    /** style for the component */
    style: PropTypes.object
}

export default Select;
