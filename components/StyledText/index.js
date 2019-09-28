import React from 'react';
import {Text, StyleSheet} from 'react-native';

function StyledText(props) {
	return <Text style={styles.text} {...props} />;
}

StyledText.Small = ({style, ...props}) => (
	<StyledText style={[styles.small, style]} {...props} />
);

StyledText.Bold = ({style, ...props}) => (
	<StyledText style={[styles.bold, style]} {...props} />
);

StyledText.Display = ({style, ...props}) => (
	<StyledText style={[styles.display, style]} {...props} />
);

const baseFontStyle = {
	fontSize: 14,
	lineHeight: 24,
	color: '#666666',
};

const styles = StyleSheet.create({
	text: {
		...baseFontStyle,
		fontWeight: '400',
		color: '#000000',
	},
	bold: {
		...baseFontStyle,
		fontWeight: '600',
	},
	small: {
		...baseFontStyle,
		fontSize: 14,
		fontWeight: '300',
	},
	display: {
		fontSize: 28,
		lineHeight: 34,
		fontWeight: '700',
		color: '#444444',
	},
});

export default StyledText;
