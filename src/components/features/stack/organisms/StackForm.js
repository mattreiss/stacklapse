import * as React from 'react';
import { photoshop } from 'photoshop-scripts';
import View from '../../../elements/atoms/View';
import Text from '../../../elements/atoms/Text';
import Select from '../../../elements/atoms/Select';
import TextInput from '../../../elements/atoms/TextInput';
import NumberInput from '../../../elements/atoms/NumberInput';
import Button from '../../../elements/atoms/Button';
import Row from '../../../elements/templates/Row';

const BlendMode = {
	LIGHTEN: 8,
	DARKEN: 4,
	NORMAL: 2
};

const VideoOptions = [
	'720@24',
	'720@30',
	'720@60',
	'1080@24',
	'1080@30',
	'1080@60',
	'2304@24',
]

const StackForm = () => {
	const [blendMode, setBlendMode] = React.useState(BlendMode.LIGHTEN);
	const [effect, setEffect] = React.useState('commet');
	const [stackLength, setStackLength] = React.useState(32);
	const [stackGrowth, setStackGrowth] = React.useState(1);
	const [autoAlign, setAutoAlign] = React.useState(false);
	const [action, setAction] = React.useState('Action');
	const [displacement, setDisplacement] = React.useState(1);
	const [video, setVideo] = React.useState('1080@24');
	const [delayLength, setDelayLength] = React.useState(0);
	const [growEvery, setGrowEvery] = React.useState(1);
	const [stackOnce, setStackOnce] = React.useState(false);
	const [selectedFolder, setSelectedFolder] = React.useState('~/Desktop/sunset');
	
	const onPressStack = async () => {
		console.log('stack')
		const data = {
			blendMode,
			effect,
			stackLength,
			stackGrowth,
			autoAlign,
			action,
			displacement,
			video,
			delayLength,
			growEvery,
			stackOnce,
			selectedFolder,
		};
		let formString =  JSON.stringify(data);
		for (let key in data) {
		  formString = formString.replace('"' + key + '"', key)
		}
		photoshop('Stacker', [
			data.selectedFolder, 
			formString
		]);
	}

	return (
		<View style={{
			justifyContent: 'center',
			alignItems: 'center'
		}}>
			<Row>
				<Text>Folder</Text>
				<TextInput
					value={selectedFolder}
					onChange={setSelectedFolder}
				/>
			</Row>
			<Row>
				<Text>Stack Length</Text>
				<NumberInput
					value={stackLength}
					onChange={setStackLength}
				/>
			</Row>
			<Row>
				<Text>Video</Text>
				<Select
					value={video}
					onChange={setVideo}
					options={VideoOptions}
				/>
			</Row>
			<Row>
				<Button 
					title="Stack" 
					onPress={onPressStack} />
			</Row>
		</View>
	);
}

export default StackForm;
