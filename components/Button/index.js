import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import StyledText from 'components/StyledText';

const Button = ({style, kind, children, onPress}) => (
	<TouchableOpacity
		onPress={onPress}
		style={[inlineStyles.button, buttonKinds[kind], style]}>
		<StyledText.Bold style={[inlineStyles.buttonText, textKinds[kind]]}>
			{children || 'Button Label'}
		</StyledText.Bold>
	</TouchableOpacity>
);

const textKinds = {
	primary: {
		color: '#FFFFFF',
	},
	default: {
		color: '#000000',
	},
};

const buttonKinds = {
	primary: {
		backgroundColor: '#FF3636',
	},
	default: {
		color: '#FFFFFF',
	},
};

const inlineStyles = StyleSheet.create({
	button: {
		paddingVertical: 10,
		paddingHorizontal: 30,
		borderRadius: 20,
		shadowColor: 'rgba(0,0,0,0.2)',
		shadowOffset: {width: 1, height: 3},
		shadowOpacity: 0.5,
		shadowRadius: 1,
		elevation: 1,
		backgroundColor: '#EEEEEE',
	},
	buttonText: {
		fontSize: 18,
		textAlign: 'center',
	},
});

export default Button;
