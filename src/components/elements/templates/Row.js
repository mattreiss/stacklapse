import * as React from 'react';
import { Context } from '../../../hooks/Store';
import View from '../atoms/View';

const Row = (props) => {
	const [state] = React.useContext(Context);
	return (
		<View 
			{...props}
			style={{
				flexDirection: 'row',
				padding: state.theme.space.xxs,
				...props.style
			}}>
			{props.children}
		</View>
	);
}

export default Row;