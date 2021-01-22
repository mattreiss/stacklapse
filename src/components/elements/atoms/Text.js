import * as React from 'react';
import { Text as PNText } from 'proton-native';
import { Context } from '../../../hooks/Store';

const Text = (props) => {
    const [state] = React.useContext(Context);
    
    return (
        <PNText 
            {...props}
            style={{
                paddingLeft: state.theme.space.xs,
                paddingRight: state.theme.space.xs,
                minWidth: state.theme.sizes.mdW,
                fontSize: state.theme.fontSizes.md,
                color: state.theme.colors.text1,
                ...props.style
            }}>
            {props.children}
        </PNText>
    );
};

export default Text;
