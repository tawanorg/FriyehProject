import React from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import IconBack from 'images/icon-back.svg';
import IconNext from 'images/icon-next.svg';
import StyledText from '../StyledText';
import styles from 'styles';

const ModalView = ({children, style}) => (
	<SafeAreaView style={style}>
		<View style={[inlineStyles.header, styles.flexRow]}>
			<TouchableOpacity style={inlineStyles.button}>
				<StyledText style={inlineStyles.buttonText}>Back</StyledText>
			</TouchableOpacity>
			<View style={inlineStyles.title}>
				<StyledText>StyledText</StyledText>
			</View>
			<TouchableOpacity style={inlineStyles.button}>
				<StyledText style={inlineStyles.buttonText}>Next</StyledText>
			</TouchableOpacity>
		</View>
		<View style={inlineStyles.body}>{children}</View>
	</SafeAreaView>
);

const inlineStyles = StyleSheet.create({
	header: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		backgroundColor: '#FFFFFF',
		justifyContent: 'space-between',
		position: 'relative',
	},
	title: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 100,
	},
	button: {
		zIndex: 200,
		backgroundColor: '#FF3636',
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 6,
	},
	buttonText: {
		color: '#FFFFFF',
	},
	body: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
});

export default ModalView;
