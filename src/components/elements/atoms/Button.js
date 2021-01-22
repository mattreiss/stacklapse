import * as React from 'react';
import { Button as PNButton } from 'proton-native';
import { Context } from '../../../hooks/Store';

const Button = (props) => {
    const [state] = React.useContext(Context);
    
    return (
        <PNButton 
            {...props}
            style={{
                fontSize: state.theme.fontSizes.md,
                borderRadius: state.theme.radii.md,
                padding: state.theme.space.xxs,
                paddingRight: state.theme.space.md,
                paddingLeft: state.theme.space.md,
                color: state.theme.colors.white,
                backgroundColor: state.theme.colors.primary,
                ...props.style
            }}>
            {props.children}
        </PNButton>
    );
};

export default Button;
