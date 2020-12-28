import React from 'react';
import ExternalScript from '../../ExternalScript';

function CoffeeMachinesAssistant() {
	ExternalScript(
		'https://api-barracuda.zoovu.com/api/v1/advisors/0PGsS1bc/js-loader?locale=en-US'
	);

	return (
		<div>
			<h1 style={{ marginBottom: 40 }}>Barracuda Assistant - Bikes Finder</h1>
			<div id='zoovu-assistant'></div>
		</div>
	);
}

export default CoffeeMachinesAssistant;
