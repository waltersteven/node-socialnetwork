import React from 'react';
import ExternalScript from '../ExternalScript';

const IncorrectTigerAssistant = () => {
	ExternalScript('https://api-tiger.zoovu.com/api/v1/advisors/RrbHTD8v/js-loader?locale=en-GB');

	return (
		<div>
			<h1 style={{ marginBottom: 40 }}>Page without zoovu-assistant DIV - Laptop Finder</h1>
		</div>
	);
};

export default IncorrectTigerAssistant;
