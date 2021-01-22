import * as React from 'react';
import { Context } from '../../../hooks/Store';
import View from '../atoms/View';

const Card = (props) => {
	const [state] = React.useContext(Context);
	return (
		<View 
			{...props}
			style={{
				margin: state.theme.space.xs,
				padding: state.theme.space.xs,
				borderRadius: state.theme.radii.md,
				backgroundColor: state.theme.colors.bg1,
				...props.style
			}}>
			{props.children}
		</View>
	);
}

export default Card;