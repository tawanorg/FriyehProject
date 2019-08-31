import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import HomePage from 'containers/HomePage';
import PostPage from 'containers/PostPage';
import ProfilePage from 'containers/ProfilePage';

import IconHome from 'images/icons/home.svg';
import IconUser from 'images/icons/user.svg';
import IconPlus from 'images/icons/plus.svg';

const HomeStack = createStackNavigator({
	Home: HomePage,
});

HomeStack.navigationOptions = {
	tabBarLabel: () => null,
	tabBarIcon: ({focused}) => (
		<IconHome fill={focused ? '#FF3636' : '#333333'} width={23} height={23} />
	),
};

const PostStack = createStackNavigator({
	Post: PostPage,
});

PostStack.navigationOptions = {
	tabBarLabel: () => null,
	tabBarIcon: ({focused}) => (
		<IconPlus fill={focused ? '#FF3636' : '#333333'} width={24} height={24} />
	),
};

const ProfileStack = createStackNavigator({
	Profile: ProfilePage,
});

ProfileStack.navigationOptions = {
	tabBarLabel: () => null,
	tabBarIcon: ({focused}) => (
		<IconUser fill={focused ? '#FF3636' : '#333333'} width={28} height={28} />
	),
};

export default createBottomTabNavigator({
	HomeStack,
	PostStack,
	ProfileStack,
});
