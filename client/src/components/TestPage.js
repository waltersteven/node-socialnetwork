import React from 'react'
import ExternalScript from "./ExternalScript";

const TestPage = () => {

    ExternalScript("https://api-tiger.zoovu.com/api/v1/advisors/RrbHTD8v/js-loader?locale=en-GB");
    ExternalScript("https://api-tiger.zoovu.com/api/v1/integrations/lpjpkz/zoovu-tracking")

    return (
        <div>
            <h1>Test Page</h1>
            <div id="zoovu-assistant"></div>
        </div>
    )
}

export default TestPage
