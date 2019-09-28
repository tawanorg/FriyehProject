import React from 'react';
import {View, Image, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import {withNavigation} from 'react-navigation';
import StyledText from 'components/StyledText';
import Button from 'components/Button';

import styles from 'styles';

const SIZE = Dimensions.get('screen');

class Onboarding extends React.Component {
	state = {
		step: 1,
		stepInfo: [
			{
				index: 1,
				title: 'Discover Great Deals\nOn Everyday Items',
				subtitle: 'Search, Share and Shop',
			},
			{
				index: 2,
				title: 'Share and Earn',
				subtitle: 'Earn points when you SHARE any DISCOUNT items you found',
			},
			{
				index: 3,
				title: 'Ready to shopping?',
				subtitle:
					'Nobody wants to pay full price when we can help you find a discount.',
			},
		],
	};

	handleNextStep = () => {
		const {step, stepInfo} = this.state;
		const {navigation} = this.props;

		if (step > stepInfo.length - 1) {
			navigation.navigate('Login');
			this.setState({
				step: 1,
			});
			return;
		}

		return this.setState(prevState => ({
			step: prevState.step + 1,
		}));
	};

	handleBackStep = () => {
		const {step} = this.state;
		const {navigation} = this.props;

		if (step === 1) {
			navigation.navigate('Login');
			return;
		}

		return this.setState(prevState => ({
			step: prevState.step - 1,
		}));
	};

	render() {
		const {step, stepInfo} = this.state;

		return (
			<SafeAreaView style={styles.container}>
				<View style={inlineStyles.body}>
					<Image
						source={require('assets/logo.png')}
						resizeMode="contain"
						style={inlineStyles.logo}
					/>
					<View style={inlineStyles.bodyBox}>
						{stepInfo
							.filter(s => s.index === step)
							.map(({title, subtitle}) => (
								<React.Fragment>
									<StyledText.Display
										style={[
											styles.textCenter,
											{marginBottom: 10, lineHeight: 44},
										]}>
										{title}
									</StyledText.Display>
									<StyledText.Bold
										style={[styles.textCenter, {lineHeight: 24}]}>
										{subtitle}
									</StyledText.Bold>
								</React.Fragment>
							))}
					</View>
				</View>
				<View style={inlineStyles.footer}>
					<Button onPress={() => this.handleBackStep()} kind="default">
						{step === 1 ? 'Login' : 'Back'}
					</Button>
					<Button
						onPress={() => this.handleNextStep()}
						kind="primary"
						style={inlineStyles.buttonText}>
						{step === 3 ? 'Yeh!' : 'Next'}
					</Button>
				</View>
			</SafeAreaView>
		);
	}
}

const inlineStyles = StyleSheet.create({
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
		paddingHorizontal: 20,
	},
	footer: {
		...styles.flexRow,
		...styles.flexCenter,
		justifyContent: 'space-around',
		paddingBottom: 30,
	},
});

export default withNavigation(Onboarding);
