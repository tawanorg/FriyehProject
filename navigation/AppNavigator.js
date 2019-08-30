import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import Onboarding from 'containers/Onboarding';
import LoginFlow from 'containers/LoginFlow';

export default createAppContainer(
	createStackNavigator(
		{
			Onboarding: Onboarding,
			Login: LoginFlow,
		},
		{
			headerMode: 'none',
			mode: 'modal',
		},
	),
);
