import {gql} from '@apollo/client'

const LAUNCHES_QUERY = gql`
query LaunchesQuery {
    launches{
        flight_number,
        mission_name,
        launch_date_local,
        launch_year,
        launch_success,
    }
}`;

const LAUNCH_QUERY = gql`
    query Launch($flight_number: Int!){
        launch(flight_number: $flight_number){
            flight_number,
            mission_name,
            launch_success,
            launch_year,
            launch_date_local,
            rocket{
                rocket_id,
                rocket_name,
                rocket_type   
            }
        }
    }
`;

export {LAUNCHES_QUERY, LAUNCH_QUERY}
