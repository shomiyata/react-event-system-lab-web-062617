import React from 'react'

export default class Keypad extends React.Component {

	logIt = () => {
		console.log('Entering password...')
	}

	render(){
		return <input type="password" onKeyUp={this.logIt}> </input>
	}
}