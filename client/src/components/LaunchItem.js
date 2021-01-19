import React from 'react'
import Moment from 'react-moment'
import {Link} from 'react-router-dom'

const LaunchItem = ({launch}) => {
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4 className={launch.launch_success ? 'text-success' : 'text-danger'}>Mission: {launch.mission_name}</h4>
                    <p>Date: <Moment format="MMMM Do YYYY HH:mm" date={launch.launch_date_local}/></p>

                </div>
                <div className="col-md-3">
                    <Link to={`/launch/${launch.flight_number}`} className="btn btn-secondary">Launch Details</Link> 

                </div>
            </div>
        </div>
    )
}

export default LaunchItem
