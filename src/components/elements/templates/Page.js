import * as React from 'react';
import { Context } from '../../../hooks/Store';
import View from '../atoms/View';

const Page = (props) => {
	const [state] = React.useContext(Context);
	return (
		<View 
			{...props}
			style={{
				display: 'flex',
				flex: 1,
				backgroundColor: state.theme.colors.bg2,
				...props.style
			}}>
			{props.children}
		</View>
	);
}

export default Page;