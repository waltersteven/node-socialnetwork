import React, {useState} from 'react'

const PanelPage = () => {
    let [accountToken, setAccountToken] = useState("BAKSKX5457545JNKDMFG");

    const publishToken = () => {
        console.log('publishToken method called:');
    
        let data = { type: "FROM_PAGE", text: accountToken};
        window.postMessage(data, "*");
        console.log('token was published');
    }

    return (
        <div>
            <div>
            <label>Account Token: </label>
            <input value={accountToken}></input>
            </div>
            <button onClick={publishToken} className='btn btn-primary'>Allow extension</button>
        </div>
    )
}

export default PanelPage
