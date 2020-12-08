import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout, NavBar } from '@components'

import ListingPhones from './views/ListingPhones'

function Phone() {
  return (
    <Layout navBarNode={<NavBar />}>
      <Switch>
        <Route path="/phones/detail" render={() => <div>Phone Detail</div>} />
        <Route path="/phones" component={ListingPhones} />
      </Switch>
    </Layout>
  )
}

export default Phone
export { Phone }
