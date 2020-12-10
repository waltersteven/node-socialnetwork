import React from 'react';
import ExternalScript from '../ExternalScript';

function BarracudaAssistant() {
	ExternalScript(
		'https://api-barracuda.zoovu.com/api/v1/advisors/D1vwwZlk/js-loader?locale=en-US'
	);
	return (
		<div>
			<h1 style={{ marginBottom: 40 }}>Barracuda - Smartphone Finder</h1>
			<div id='zoovu-assistant'></div>
		</div>
	);
}

export default BarracudaAssistant;
