import React from 'react';
import ExternalScript from '../../ExternalScript';

function CoffeeMachinesAssistant() {
	ExternalScript('https://api-tiger.zoovu.com/api/v1/advisors/FgVwh5XJ/js-loader?locale=en-US');

	return (
		<div>
			<h1 style={{ marginBottom: 40 }}>Tiger Assistant - Coffee Machines</h1>
			<div id='zoovu-assistant'></div>
		</div>
	);
}

export default CoffeeMachinesAssistant;
