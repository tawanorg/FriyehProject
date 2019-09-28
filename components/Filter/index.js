import React from 'react';
import {StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import IconFilter from 'assets/icons/filter.svg';
import FILTER_DATA from 'mocks/filters';
import StyledText from 'components/StyledText';
import styles from 'styles';

const Filter = ({style}) => (
	<View
		style={[styles.flexRow, styles.flexCenter, inlineStyles.container, style]}>
		<TouchableOpacity
			style={inlineStyles.filterButton}>
			<IconFilter width={15} height={15} fill="#333333" />
		</TouchableOpacity>
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={false}
			data={FILTER_DATA}
			renderItem={({item, index}) => (
				<TouchableOpacity style={[inlineStyles.item, index === 0 && inlineStyles.backgroundSelected, {marginRight: 5}]}>
					<StyledText.Bold style={[inlineStyles.itemText, index === 0 && inlineStyles.textSelected]}>
						{item}
					</StyledText.Bold>
				</TouchableOpacity>
			)}
		/>
	</View>
);

const inlineStyles = StyleSheet.create({
	container: {
		alignItems: 'stretch',
	},
	item: {
		backgroundColor: '#F1F1F1',
		borderRadius: 20,
		paddingVertical: 2,
		paddingHorizontal: 10,
	},
	itemText: {
		color: '#333333',
		fontSize: 13,
	},
	textSelected: {
		color: '#FFFFFF',
	},
	backgroundSelected: {
		backgroundColor: '#FF3636',
	},
	filterButton: {
		...styles.flexRow,
		...styles.flexCenter,
		position: 'relative',
		zIndex: 100,
		backgroundColor: '#EEEEEE',
		borderRadius: 20,
		width: 30,
		height: '100%',
		marginLeft: 10,
		marginRight: 5,
	},
});

export default Filter;
