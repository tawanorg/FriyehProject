import React from 'react';
import {
	View,
	Image,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	StatusBar,
	Dimensions,
} from 'react-native';

import StyledText from 'components/StyledText';
import Button from 'components/Button';
import styles from 'styles';

const SIZE = Dimensions.get('screen');

class LoginFlow extends React.Component {
	state = {};

	handleBack() {
		const {navigation} = this.props;
		navigation.navigate('Onboarding');
	}

	handleContinue() {
		this.props.navigation.navigate('App');
	}

	render() {
		return (
			<SafeAreaView style={[styles.container, inlineStyles.container]}>
				{/* <StatusBar barStyle="light-content" /> */}
				<View style={inlineStyles.body}>
					<Image
						source={require('assets/logo-white.png')}
						resizeMode="contain"
						style={inlineStyles.logo}
					/>
					<View
						style={[
							styles.flexColumn,
							styles.flexCenter,
							inlineStyles.bodyBox,
						]}>
						<Button
							kind="primary"
							onPress={() => this.handleContinue()}
							style={[inlineStyles.button, {backgroundColor: '#2673CB'}]}>
							Continue with Facebook
						</Button>
						<Button
							kind="primary"
							onPress={() => this.handleContinue()}
							style={[inlineStyles.button, {backgroundColor: '#51C6FF'}]}>
							Continue with Twitter
						</Button>
						<Button
							kind="default"
							onPress={() => this.handleContinue()}
							style={inlineStyles.button}>
							Continue with Google
						</Button>
					</View>
				</View>
				<View style={inlineStyles.footer}>
					<Button kind="default" onPress={() => this.handleBack()}>
						Back
					</Button>
				</View>
			</SafeAreaView>
		);
	}
}

const inlineStyles = StyleSheet.create({
	container: {
		backgroundColor: '#FF3636',
	},
	logo: {
		width: 120,
		height: 90,
	},
	body: {
		...styles.flexColumn,
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingTop: SIZE.height / 5,
	},
	bodyBox: {
		marginTop: 20,
		paddingHorizontal: 20,
		alignItems: 'stretch',
	},
	footer: {
		...styles.flexRow,
		...styles.flexCenter,
		justifyContent: 'space-around',
		paddingBottom: 30,
	},
	button: {
		marginBottom: 15,
		textAlign: 'center',
	},
});

export default LoginFlow;
