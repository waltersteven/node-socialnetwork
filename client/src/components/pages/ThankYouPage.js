import React from 'react';
import ExternalScript from '../ExternalScript';

const ThankYouPage = () => {
	ExternalScript('https://api-tiger.zoovu.com/api/v1/integrations/lpjpkz/zoovu-tracking');

	return (
		<div>
			<h1 style={{ marginBottom: 40 }}>Success Tracking - Thank You page</h1>
		</div>
	);
};

export default ThankYouPage;
