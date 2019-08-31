import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import StyledText from 'components/StyledText';
import Avatar from 'components/Avatar';
import LinearGradient from 'react-native-linear-gradient';
import Dummy from 'dummyjs';
import styles from 'styles';

function Card({photoUrl, width, height, style}) {
	return (
		<TouchableOpacity style={[inlineStyles.container, style]}>
			<View style={inlineStyles.off}>
				<StyledText.Small style={{color: '#FFFFFF'}}>50% off</StyledText.Small>
			</View>
			<Image
				style={[inlineStyles.cover, {height, width}]}
				source={{uri: photoUrl}}
				resizeMode="cover"
			/>
			<View style={inlineStyles.title}>
				<Avatar size={24} />
				<StyledText style={{color: '#FFFFFF', marginLeft: 8}}>{Dummy.text(1)}</StyledText>
				{/* <View style={[styles.flexColumn, {marginLeft: 8}]}>
					<StyledText.Small
						numberOfLines={2}
						style={{fontSize: 13, color: '#FFFFFF'}}>
						{Dummy.text(2)}
					</StyledText.Small>
				</View> */}
			</View>
			<LinearGradient
				colors={['transparent', 'rgba(0,0,0,0.8)']}
				style={[inlineStyles.linearGradient, {height, width}]}
			/>
		</TouchableOpacity>
	);
}

Card.propTypes = {
	photoUrl: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
};

Card.defaultProps = {
	photoUrl: null,
	width: 120,
	height: 120,
};

const inlineStyles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		// borderRadius: 4,
		overflow: 'hidden',
		position: 'relative',
	},
	title: {
		...styles.flexRow,
		...styles.flexCenter,
		justifyContent: 'flex-start',
		position: 'absolute',
		bottom: 0,
		padding: 10,
		zIndex: 200,
		flex: 1,
	},
	linearGradient: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
	},
	off: {
		position: 'absolute',
		right: 0,
		top: 0,
		zIndex: 200,
		backgroundColor: 'red',
		paddingHorizontal: 5,
		paddingVertical: 2,
		borderBottomLeftRadius: 4,
		// borderTopRightRadius: 4,
	},
});

export default Card;
