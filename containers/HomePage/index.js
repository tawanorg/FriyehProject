import React from 'react';
import {
	View,
	SafeAreaView,
	StyleSheet,
	FlatList,
	Dimensions,
} from 'react-native';

import Card from 'components/Card';
import Header from 'components/Header';
import Filter from 'components/Filter';
import styles from 'styles';
import MOCK_LISTING from 'mocks/listing';

const SIZE = Dimensions.get('screen');

class HomePage extends React.Component {
	static navigationOptions = {
		header: () => <Header />,
	};

	render() {
		return (
			<SafeAreaView style={[styles.container, inlineStyles.container]}>
				<View style={inlineStyles.filterBox}>
					<Filter />
				</View>
				<FlatList
					numColumns={2}
					data={MOCK_LISTING}
					renderItem={({index, item}) => (
						<Card
							key={index + Math.random()}
							photoUrl={item.photoUrl}
							width={SIZE.width / 2 - 2.05}
							height={200}
							style={{
								marginRight: index % 2 === 0 ? 2 : 0,
								marginLeft: index % 2 === 0 ? 0 : 2,
								marginBottom: 4,
							}}
						/>
					)}
				/>
			</SafeAreaView>
		);
	}
}

const inlineStyles = StyleSheet.create({
	container: {},
	filterBox: {
		marginVertical: 10,
	},
});

export default HomePage;
