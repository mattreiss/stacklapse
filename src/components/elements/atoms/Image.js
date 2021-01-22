import React from 'react';
import {
    Image as PNImage
} from 'proton-native';

class Image extends React.Component {
    render() {
        return (
            <PNImage {...this.props}>
                {this.props.children}
            </PNImage>
        );
    }
};

export default Image;
