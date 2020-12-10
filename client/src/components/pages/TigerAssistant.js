import React from 'react';
import ExternalScript from '../ExternalScript';

const TigerAssistant = () => {
	ExternalScript('https://api-tiger.zoovu.com/api/v1/advisors/RrbHTD8v/js-loader?locale=en-GB');
	ExternalScript('https://api-tiger.zoovu.com/api/v1/integrations/lpjpkz/zoovu-tracking');

	return (
		<div>
			<h1 style={{ marginBottom: 40 }}>Tiger - Laptop Finder</h1>
			<div id='zoovu-assistant'></div>
		</div>
	);
};

export default TigerAssistant;
