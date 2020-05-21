/** @jsx createElement */
import createElement from '../../jsx-runtime.js';

/**
 * Example:
 *
 *    const handleResponse = (r) => return <div>{r.name}</div>;
 *
 *    <RequestHandler
 *       url='http://localhost:1337/json'
 *       responseHandler={handleResponse}
 *   />
 *
 */
const RequestHandler = (props) => {
    if (!props.url || !props.responseHandler) {
        return <p>RequestHandler requires a url and responseHandler function!</p>
    }

    async function makeRequest() {
        const response = await fetch(props.url);
        return await response.json()
    }

    let RequestWrapper = () => {
        let container = <div class="requestHandler"></div>

        makeRequest().then((result) => {
            let newElem = props.responseHandler(result)
            Array.isArray(newElem) ?
                newElem.forEach((e) => container.appendChild(e)) :
                container.replaceWith(newElem)
        })

        return container
    }

    return <RequestWrapper />
}

export default RequestHandler;
