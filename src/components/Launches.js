import {React, Fragment} from 'react'
import {useQuery} from "@apollo/client"
import LaunchItem from './LaunchItem'
import Legend from './Legend'
import {LAUNCHES_QUERY} from '../graphql/queries'

const Launches = () =>  {
        const { loading, error, data } = useQuery(LAUNCHES_QUERY)
        if(error){
            console.log(error)
        }
        return (
            <Fragment>
                <h1 className="display-4 my-3">Launches</h1>
                <Legend/>
                {loading ? <h4>Loading...</h4> : null}

                {data && data.launches.map(launch => (
                    <LaunchItem key={launch.flight_number} launch={launch}/>
                ))}
            </Fragment>
        )
}

export default Launches