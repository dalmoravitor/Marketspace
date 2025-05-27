import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

import { AuthRoutes } from './auth.routes';

export function Routes() {

	return (
		<View style={{ flex: 1}}>
			<NavigationContainer>
				<AuthRoutes />
			</NavigationContainer>
		</View>
	);
}