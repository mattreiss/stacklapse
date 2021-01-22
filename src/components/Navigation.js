import React from 'react';
import PropTypes from 'prop-types';
import Page from './elements/templates/Page';
import Card from './elements/templates/Card';
import Text from './elements/atoms/Text';
import Button from './elements/atoms/Button';
import * as features from './features';
import { Context } from '../hooks/Store';

const routes = {};
for (let feature in features) {
	let pages = features[feature];
	for (let pageName in pages) {
		const FeaturePage = pages[pageName];
		console.log(`${pageName}.route = "${FeaturePage.route}"`);
		if (FeaturePage.route) {
			routes[FeaturePage.route] = FeaturePage;
		} else {
			console.warn(`${pageName}.route = "${FeaturePage.route}"`);
		}
	}
}

const PageNotFound = () => {
	const [state, actions] = React.useContext(Context);
	return (
		<Page>
			<Card>
				<Text style={{marginBottom: 16}}>
					Page Not Found : {state.route}
				</Text>
				<Button 
					title="Go Back" 
					onPress={() => actions.goTo('/')} />
			</Card>
		</Page>
	);
};

const Navigation = () => {
	const [state] = React.useContext(Context);
	console.log('Navigation', state.route);
	const FeaturePage = routes[state.route];
	if (FeaturePage) {
		return <FeaturePage />;
	}
	return <PageNotFound />;
}

Navigation.propTypes = {
	children: PropTypes.node,
}

export default Navigation;
  