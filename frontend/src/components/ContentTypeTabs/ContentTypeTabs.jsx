/** @jsx createElement */
import createElement from '../../jsx-runtime.js';

import RequestHandler from '../RequestHandler/RequestHandler.jsx';


const ContentTypeTabs = () => {

    let handleResponse = (r) => {

        const contentTypes = r.data.filter(item => item.isDisplayed).map(item => {
            return {
                name: item.label,
                attributes: item.schema.attributes,
                collectionName: item.schema.info.name
            }
        }).map((contentType) => <p>{contentType.name}</p>)

        return <div>{contentTypes}</div>
    }

    return <RequestHandler
        url='http://localhost:1337/content-manager/content-types'
        responseHandler={handleResponse}
    />
}

export default ContentTypeTabs;
