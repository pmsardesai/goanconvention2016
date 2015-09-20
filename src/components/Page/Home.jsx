import React from 'react';
import Button from '../Simple/Button';
import Label from '../Simple/Label';

class Home extends React.Component {
	render() {
		return (
			<div className='content home'> 
				<div className='content-inner'>
					<div className='tagline'>
						<Label customCss='hindi' text="थंड वार्यार दर्या ल्हारार, गोंया तुजी याद येता" />
						<Label customCss='english' text="Come enjoy Goa in Southern California" />
					</div>
					<div className='event-details'>
						<Label customCss='title' text="Goan Convention" />
						<Label customCss='phone' text="July 2 - 4, 2016" />
						<Label customCss='hotel' text="Hilton" />
						<Label customCss='address' text="Address and Postal Code" />
					</div>
					<div className='button-container'>
						<Button customCss='register-button' text='Register' />
						<Button customCss='donate-button' text='Donate' />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;