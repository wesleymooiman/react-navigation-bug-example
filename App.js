import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import Home from './Home';
import Detail from './Detail';

const Router = StackNavigator({
	'home': {
		screen: Home,
	},
	'detail': {
		screen: Detail,
	}
},
	{
		initialRouteName: 'home'
	});

export default class App extends Component {
	render() {
		return <Router/>;
	}
}