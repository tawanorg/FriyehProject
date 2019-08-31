import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import styles from 'styles';
// import StyledText from 'components/StyledText';

const Avatar = ({size}) => (
	<View
		style={[
			inlineStyles.container,
			{
				width: size,
				height: size,
				borderRadius: size / 2,
			},
		]}>
		<Image
			source={{
				uri: `https://i.pravatar.cc/${size}`,
			}}
			style={[
				inlineStyles.avatar,
				{
					width: size - 2,
					height: size - 2,
					borderRadius: size - 2 / 2,
				},
			]}
		/>
	</View>
);

Avatar.propTypes = {
	size: PropTypes.number,
};

Avatar.defaultProps = {
	size: 33,
};

const inlineStyles = StyleSheet.create({
	container: {
		...styles.flexRow,
		...styles.flexCenter,
		borderWidth: 2,
		borderColor: '#888888',
	},
	avatar: {
		borderWidth: 1,
		borderColor: '#333333',
	},
});

export default Avatar;
