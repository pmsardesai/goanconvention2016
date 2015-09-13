import React from 'react';

class Button extends React.Component {
	static propTypes = {
		/*
		* Custom class name.
		*/
		customCss: React.PropTypes.string,

		/*
		* The click handler.
		*/
		onClick: React.PropTypes.func,

		/*
		* The text to put inside the button.
		*/
		text: React.PropTypes.string
	}

	render() {
		const baseClass = 'button';

		const className = baseClass
			+ (this.props.customCss
				? ' ' + this.props.customCss : '');

		return (
			<button
				className={className}
				onClick={this.props.onClick}>
				{this.props.text}
			</button>
		);
	}
}

export default Button;
