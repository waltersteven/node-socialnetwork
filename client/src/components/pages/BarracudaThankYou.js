import React from 'react';
import ExternalScript from '../ExternalScript';

const BarracudaThankYou = () => {
	ExternalScript('https://api-barracuda.zoovu.com/api/v1/integrations/gl6brl/zoovu-tracking');

	return (
		<div>
			<h1 style={{ marginBottom: 40 }}>Barracuda Success Tracking - Thank You page</h1>
		</div>
	);
};

export default BarracudaThankYou;
