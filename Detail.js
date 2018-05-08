import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Detail extends Component {

	render() {
		return (
			<View style={styles.view}>
				<Text>
					Detail page
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	view: {
		flex: 1
	}
});
