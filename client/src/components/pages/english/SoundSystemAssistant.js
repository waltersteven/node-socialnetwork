import React from 'react';
import ExternalScript from '../../ExternalScript';

const SoundSystemAssistant = () => {
	ExternalScript(
		'https://api-barracuda.zoovu.com/api/v1/advisors/XBZLbQVM/js-loader?locale=en-US'
	);

	return (
		<div>
			<h1 style={{ marginBottom: 40 }}>Barracuda Assistant - Sound System</h1>
			<div id='zoovu-assistant'></div>
		</div>
	);
};

export default SoundSystemAssistant;
