import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
	constructor(){
		super();
		this.update = this.update.bind(this)
		this.updateText = this.updateText.bind(this)
		this.state = { 
			greeting: "Howdy",
			personName: "Charlie",
			red: 0,
			green: 0,
			blue: 0
		}
	}
	update(e){
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
			green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
			blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value,
		})
	}
	updateText(e){
		this.setState({
			greeting: ReactDOM.findDOMNode(this.refs.text.refs.greeting).value,
			personName: ReactDOM.findDOMNode(this.refs.text.refs.personName).value,
		})
	}
	render(){
		return(
			<div>
				<InputWidget ref="text" greeting={this.state.greeting} updateText={this.updateText} personName={this.state.personName}/>
				<Slider ref="red" update={this.update} />
				red: {this.state.red}
				<br />
				<Slider ref="green" update={this.update} />
				green: {this.state.green}
				<br />
				<Slider ref="blue" update={this.update} />
				blue: {this.state.blue}
				<br />
			</div>
		);
	}
}

class Slider extends React.Component {
	render(){
		return(
			<div>
				<input ref="inp" type="range"
				min="0"
				max="255"
				onChange={this.props.update}
				/>
			</div>
		)
	}
}

class InputWidget extends React.Component {
	render(){
		return (
			<div>
				<p>Greeting: {this.props.greeting} {this.props.personName}</p>
				<input type="text" ref="greeting" placeholder="Greeting" onChange={this.props.updateText} />
				<input type="text" ref="personName" placeholder="Name" onChange={this.props.updateText} />
			</div>
		);
	}
}

class IncrementButton extends React.Component {
	constructor(){
		super();
		this.state = {
			value = this.props.value;
		}
	}
	render(){
		return(
			<button onClick={this.increment}>{this.state.value}</button>
		)
	}


	increment = () => {

	}

	getDefaultProps(){
		return {
			value: 0
		}
	})

	}

	propTypes: {
		value: React.PropTypes.number,
	}
}

export default App