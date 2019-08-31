import React from 'react';
import {TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from 'styles';
import IconNotification from 'images/icons/notification.svg';
import IconSearch from 'images/icons/search.svg';
import headerHeight from 'utils/headerHeight';

const Header = ({style, kind, children, navigation}) => (
	<View style={inlineStyles.container}>
		<View style={inlineStyles.wrapper}>
			<Image
				source={require('images/logo.png')}
				resizeMode="contain"
				style={inlineStyles.logo}
			/>
			<View style={[styles.flexRow, styles.flexCenter]}>
				<TouchableOpacity style={[inlineStyles.menuItem, {marginRight: 10}]}>
					<IconSearch width={20} height={20} fill="#333" />
				</TouchableOpacity>
				<TouchableOpacity style={inlineStyles.menuItem}>
					<View style={inlineStyles.notify} />
					<IconNotification width={21} height={21} fill="#333" />
				</TouchableOpacity>
			</View>
		</View>
	</View>
);

const inlineStyles = StyleSheet.create({
	container: {
		backgroundColor: '#FFFFFF',
	},
	wrapper: {
		...styles.flexRow,
		...styles.flexCenter,
		position: 'relative',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: 10,
		paddingRight: 15,
		paddingTop: headerHeight,
	},
	logo: {
		width: 90,
		height: 40,
	},
	menuItem: {
		...styles.flexCenter,
		position: 'relative',
		zIndex: 100,
		backgroundColor: '#EEEEEE',
		borderRadius: 38 / 2,
		width: 38,
		height: 38,
	},
	notify: {
		position: 'absolute',
		width: 10,
		height: 10,
		backgroundColor: 'red',
		borderRadius: 10 / 2,
		zIndex: 200,
		right: -1,
		top: 3,
	},
});

export default withNavigation(Header);
