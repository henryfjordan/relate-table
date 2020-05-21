/** @jsx createElement */
import createElement from '../../jsx-runtime.js';

import RequestHandler from '../RequestHandler/RequestHandler.jsx';
import plural from '../../utils/plural.js';


const ContentTypeTable = ({contentType}) => {
    let handleResponse = (r) => {
        console.log(contentType)
        console.log(r)

        const tableHeaders = Object.keys(contentType.attributes)

        let rowData = r.map((row) => {
            return <tr>
                {tableHeaders.map((header) => <td>{row[header]}</td>)}
            </tr>
        })

        console.log(rowData)

        return <>
            <h3>{contentType.name}</h3>
            <table>
                <tr>
                    {tableHeaders.map(
                        (attr) => <th>{attr}</th>
                    )}
                </tr>

                {rowData}
            </table>
        </>
    }

    return <RequestHandler
        url={`http://localhost:1337/${plural(contentType.name)}`}
        responseHandler={handleResponse}
    />
}

export default ContentTypeTable;
