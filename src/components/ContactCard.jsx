import React from 'react';

class ContactCard extends React.Component {
	static propTypes = {
		/*
		* An object that has the contacts details
		*/
		memberInfo: React.PropTypes.object
	}

	_renderSocial(info) {
		let blocks = [];

		info && info.github &&
			blocks.push(<a href={info.github} target="_blank" className="fa fa-1dot5x fa-github-alt"></a>);

		info && info.facebook &&
			blocks.push(<a href={info.facebook} target="_blank" className="fa fa-1dot5x fa-facebook"></a>);

		info && info.email &&
			blocks.push(<a href={info.email} target="_blank" className="fa fa-1dot5x fa-envelope"></a>);

		info && info.phone &&
			blocks.push(<a href={info.phone} target="_blank" className="fa fa-1dot5x fa-mobile-phone"></a>);

		info && info.linkedin &&
			blocks.push(<a href={info.linkedin} target="_blank" className="fa fa-1dot5x fa-linkedin"></a>);

		return blocks;
	}

	render() {
		const member = this.props.memberInfo;
		const imageCss = "face " + member.imageCss;

		return (
			<div className="contact">
				<div className="face-container">
					<div className={imageCss} />
				</div>

				<div className="details">
					<div className="name">{member.name}</div>
					<div className="title-container">
						<div className="title">{member.title}</div>
					</div>
					<div className="social">
						{this._renderSocial(member.social)}
					</div>
				</div>
			</div>
		);
	}
}

export default ContactCard;
