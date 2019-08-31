import React from 'react';
import {StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import IconFilter from 'images/icons/filter.svg';
import FILTER_DATA from 'mocks/filters';
import StyledText from 'components/StyledText';
import styles from 'styles';

const Filter = ({style}) => (
	<View
		style={[styles.flexRow, styles.flexCenter, inlineStyles.container, style]}>
		<TouchableOpacity
			style={[inlineStyles.filterButton, {marginHorizontal: 10}]}>
			<IconFilter width={20} height={20} fill="#333333" />
		</TouchableOpacity>
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={false}
			data={FILTER_DATA}
			renderItem={({item, index}) => (
				<TouchableOpacity style={[inlineStyles.item, {marginRight: 10}]}>
					<StyledText.Bold style={inlineStyles.itemText}>
						{item}
					</StyledText.Bold>
				</TouchableOpacity>
			)}
		/>
	</View>
);

const inlineStyles = StyleSheet.create({
	container: {},
	item: {
		backgroundColor: '#F1F1F1',
		borderRadius: 20,
		paddingVertical: 5,
		paddingHorizontal: 20,
		marginRight: 10,
	},
	itemText: {
		color: '#333333',
	},
	filterButton: {
		...styles.flexRow,
		...styles.flexCenter,
		position: 'relative',
		zIndex: 100,
		backgroundColor: '#EEEEEE',
		borderRadius: 20,
		width: 38,
		height: 38,
	},
});

export default Filter;
