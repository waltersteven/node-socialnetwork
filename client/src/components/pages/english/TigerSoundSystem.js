import React from 'react';
import ExternalScript from '../../ExternalScript';

function TigerSoundSystem() {
	ExternalScript('https://api-tiger.zoovu.com/api/v1/advisors/rTqgTJKz/js-loader?locale=en-US');

	return (
		<div>
			<h1 style={{ marginBottom: 40 }}>Tiger Assistant - Sound System</h1>
			<div id='zoovu-assistant'></div>
		</div>
	);
}

export default TigerSoundSystem;
