import React from 'react';
import { Header} from 'semantic-ui-react'

const Country = (props) => {
    return (
        <div>
            <h3>{props.country.photo_url}</h3>
            <p>{props.country.name}</p>
        </div>
    )
}

export default Country