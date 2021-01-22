import React, { Component } from 'react';
import StackForm from '../organisms/StackForm';
import Page from '../../../elements/templates/Page';
import Card from '../../../elements/templates/Card';

const Stack = () => {
	console.log('Stack');
	return (
		<Page>
			<Card>
				<StackForm />
			</Card>
		</Page>
	);
}

Stack.route = '/';

export default Stack;
