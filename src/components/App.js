import React from 'react';
import {
  App as PNApp,
  Window
} from 'proton-native';
import Store from '../hooks/Store';
import GraphQl from './Graphql';
import Navigation from './Navigation';
import Notifier from 'node-notifier';

// Object
Notifier.notify({
	title: 'My notification',
	message: 'Hello, there!'
});

class App extends React.Component {
  render() {
    return (
		<Store persist={true}>
			<GraphQl>
				<PNApp>
					<Window style={{ width: 600, height: 600 }}>
						<Navigation />
					</Window>
				</PNApp>
			</GraphQl>
		</Store>
    );
  }
}

export default App;