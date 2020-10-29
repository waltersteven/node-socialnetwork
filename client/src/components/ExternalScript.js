import {useEffect} from 'react'

const ExternalScript = (src) => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = src;
        script.type = 'text/javascript';

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [src])
}

export default ExternalScript