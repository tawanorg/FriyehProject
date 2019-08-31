import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import Header from 'components/Header';
import Onboarding from 'containers/Onboarding';
import LoginFlow from 'containers/LoginFlow';
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
	createStackNavigator(
		{
			App: createStackNavigator(
				{
					Main: MainTabNavigator,
				},
				{
					headerMode: 'none',
					navigationOptions: {
						header: () => <Header />,
					},
				},
			),
			Onboarding: Onboarding,
			Login: LoginFlow,
		},
		{
			headerMode: 'none',
		},
	),
);
