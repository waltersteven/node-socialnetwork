import React, {useState} from 'react'
import axios from 'axios';

const PanelPage = () => {
    let [accountToken, setAccountToken] = useState("BAKSKX5457545JNKDMFG");

    const publishToken = () => {
        console.log('publishToken method called:');
    
        let data = { type: "FROM_PAGE", text: accountToken};
        window.postMessage(data, "*");
        console.log('token was published');
    }

    const sendRequest = () => {
        axios.get('https://tiger-backend-api.zoovu.com/users/me', {
            headers : {
                'Connector-Token': 'tiger:B1sjJOFHNIzNX3vferqjggpUv7hmFWL9'
            }
        })
        .then(res => console.log('res', res))
        .catch(err => console.error('error captured', err));
    }

    return (
        <div className="row">
            <div className="col-6">
                <label>Account Token: </label>
                <input value={accountToken}></input>
                <button onClick={publishToken} className='btn btn-primary'>Allow extension</button>
            </div>
            <div className="col-6">
                <label>send Request to API</label>
                <button onClick={sendRequest} className='btn btn-primary'>Submit</button>
            </div>
        </div>
    )
}

export default PanelPage
