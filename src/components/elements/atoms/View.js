import React from 'react';
import {
    View as PNView
} from 'proton-native';

export default class View extends React.Component {
    render() {
        return (
            <PNView  {...this.props}>
                {this.props.children}
            </PNView>
        );
    }
};
