/** @jsx createElement */
import createElement from '../../jsx-runtime.js';

import RequestHandler from '../RequestHandler/RequestHandler.jsx';
import ContentTypeTable from '../ContentTypeTable/ContentTypeTable.jsx';

const ContentTypeTabs = () => {

    let handleResponse = (r) => {
        const contentTypes = r.data.filter(item => item.isDisplayed).map(item => {
            return {
                name: item.label,
                attributes: item.schema.attributes,
                collectionName: item.schema.info.name
            }
        })

        return (
            <div>
                <div class="row">
                    {contentTypes.map(
                        (contentType) => <button key={contentType.name}>{contentType.name}</button>
                    )}
                </div>

                <div class="row">
                    
                    {contentTypes.map(
                        (contentType) => <ContentTypeTable contentType={contentType} />
                    )}
                </div>
            </div>
        )
    }

    return <RequestHandler
        url='http://localhost:1337/content-manager/content-types'
        responseHandler={handleResponse}
    />
}

export default ContentTypeTabs;
