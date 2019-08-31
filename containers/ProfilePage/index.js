import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import StyledText from 'components/StyledText';
import Header from 'components/Header';
import styles from 'styles';

class ProfilePage extends React.Component {
	static navigationOptions = {
		header: () => <Header />,
	};

	render() {
		return (
			<SafeAreaView style={[styles.container, inlineStyles.container]}>
				<StyledText>ProfilePage</StyledText>
			</SafeAreaView>
		);
	}
}

const inlineStyles = StyleSheet.create({
	container: {},
});

export default ProfilePage;
