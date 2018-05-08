import React, {Component} from 'react';
import {FlatList, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class Home extends Component {

	_onPressItem = () => {
		console.log(this.props);
		const {navigation: {navigate}} = this.props;

		navigate('detail');
	};

	_renderItem = ({item}) => {
		return (
			<TouchableOpacity onPress={this._onPressItem}>
				<View style={[styles.block, {backgroundColor: item.backgroundColor}]}/>
			</TouchableOpacity>
		);
	};

	_keyExtractor = (item) => `${item.id} ${item.backgroundColor}`;

	_getItemLayout = (data, index) => {
		return  {length: 300, offset: 300 * index, index};
	};

	render() {
		const items = [
			{
				id: 1,
				backgroundColor: 'red'
			},
			{
				id: 2,
				backgroundColor: 'green'
			},
			{
				id: 3,
				backgroundColor: 'blue'
			},
			{
				id: 4,
				backgroundColor: 'purple'
			},
			{
				id: 5,
				backgroundColor: 'yellow'
			},
			{
				id: 6,
				backgroundColor: 'red'
			},
			{
				id: 7,
				backgroundColor: 'green'
			},
			{
				id: 8,
				backgroundColor: 'blue'
			},
			{
				id: 9,
				backgroundColor: 'purple'
			},
			{
				id: 10,
				backgroundColor: 'yellow'
			},
			{
				id: 11,
				backgroundColor: 'red'
			},
			{
				id: 12,
				backgroundColor: 'green'
			},
			{
				id: 13,
				backgroundColor: 'blue'
			},
			{
				id: 14,
				backgroundColor: 'purple'
			},
			{
				id: 15,
				backgroundColor: 'yellow'
			}
		];

		return (
			<FlatList
				style={styles.flatlist}
				windowSize={2}
				initialNumToRender={1}
				keyExtractor={this._keyExtractor}
				data={items}
				renderItem={this._renderItem}
				getItemLayout={this._getItemLayout}
			/>
		);
	}
}

const styles = StyleSheet.create({
	flatlist: {
		flex: 1
	},
	block: {
		height: 300
	}
});
