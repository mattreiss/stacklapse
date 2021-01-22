import * as React from 'react';
import View from '../../../elements/atoms/View';
import Text from '../../../elements/atoms/Text';
import TextInput from '../../../elements/atoms/TextInput';
import Button from '../../../elements/atoms/Button';
import Row from '../../../elements/templates/Row';

const SortForm = () => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	
	const onPressSort = async () => {
		console.log('Sort')
	}

	return (
		<View style={{
			justifyContent: 'center',
			alignItems: 'center'
		}}>
			<Row>
				<Text>Email</Text>
				<TextInput
					value={email}
					onChangeText={setEmail}
				/>
			</Row>
			<Row>
				<Text>Password</Text>
				<TextInput
					value={password}
					onChangeText={setPassword}
				/>
			</Row>
			<Row>
				<Button 
					title="Sort" 
					onPress={onPressSort} />
			</Row>
		</View>
	);
}

export default SortForm;
