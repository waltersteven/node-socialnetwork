import {useEffect} from 'react'

const ExternalScript = (src) => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = src;
        script.type = 'text/javascript';

        document.getElementById("root").appendChild(script);

        return () => {
            document.getElementById("root").removeChild(script);
        }
    }, [src])
}

export default ExternalScript