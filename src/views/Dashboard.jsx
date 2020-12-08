import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Phone from './Phone'

function Dashboard() {
  return (
    <Switch>
      <Route path="/phones" render={Phone} />
      <Route path="*">
        <Redirect to="/phones" />
      </Route>
    </Switch>
  )
}

export default Dashboard
export { Dashboard }
