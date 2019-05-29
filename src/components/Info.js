import React from 'react'
import {Route, Link} from "react-router-dom" //i have to make sure to import route and link to my component

const Info = ({ match }) => {
    return (
      <div>
        <ul>
          <li>
            <Link to={match.url + "/phone"}>Phone</Link>
          </li>
          <li>
            <Link to={match.url + "/email"}>Email</Link>
          </li>
          <li>
            <Link to={match.url + "/address"}>Address</Link>
          </li>
        </ul>
        <hr />
        <Route
          path={match.url + "/phone"}
          render={props => <div>Phone: 123 456 7890</div>}
        />
        <Route
          path={match.url + "/email"}
          render={props => <div>Email: email@email.com</div>}
        />
        <Route
          path={match.url + "/address"}
          render={props => <div>Address: 123 Address</div>}
        />
      </div>
    );
  };


export default Info