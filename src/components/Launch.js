import React, { Fragment } from 'react'
import {useQuery} from '@apollo/client'
import { Link, useParams } from 'react-router-dom'
import {LAUNCH_QUERY} from '../graphql/queries'

const Launch = () => {
    let {flight_number} = useParams();
    flight_number = parseInt(flight_number)
    const { loading, error, data } = useQuery(LAUNCH_QUERY, {variables: {flight_number}})
    if(error){
        console.log(error)
    }

    return (
        <Fragment>
            <h1>Launch</h1>
            {loading ? <h4>Loading...</h4> : 
            <div>
                <h1 className="display-4 my-3">
                    <span className="text-dark">Mission: </span> {data.launch.mission_name}
                </h1>
                <h4 className="mb-3">Launch Details</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        Flight Number: {data.launch.flight_number}
                    </li>
                    <li className="list-group-item">
                        Launch Year: {data.launch.launch_year}
                    </li>
                    <li className="list-group-item">
                        Launch Successful: <span className={data.launch.launch_success ? 'text-success' : 'text-danger'}>
                        {data.launch.launch_success ? 'Yes' : 'No'}
                        </span>
                    </li>
                </ul>
                <h4 className="my-3">Rocket Details</h4>
                <ul className="list-group">
                    <li className="list-group-item">Rocket ID: {data.launch.rocket.rocket_id}</li>
                    <li className="list-group-item">Rocket Name: {data.launch.rocket.rocket_name}</li>
                    <li className="list-group-item">Rocket Type: {data.launch.rocket.rocket_type}</li>
                </ul>
                <hr/>
                <Link to="/" className="btn btn-secondary">Back</Link>
            </div>
            }
        </Fragment>
    )
}

export default Launch
