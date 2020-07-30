import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import NavTabs from './shared/NavTabs'

const TouchTyping = lazy(() => import('./view/TouchTyping'))
const Coding = lazy(() => import('./view/Coding'))
const WPMCPM = lazy(() => import('./view/WPMCPM'))

const AppView = () => {
  return (
    <Router>
      <NavTabs />
      <Suspense fallback='loading'>
          <Route
            exact
            path='/touch-typing'
            component={props => <TouchTyping/>}
          />
          <Route 
            exact 
            path='/coding'
            component={props => <Coding/>}
          />
          <Route 
            exact 
            path='/wpm-to-cpm'
            component={props => <WPMCPM/>}
          />
      </Suspense>
    </Router>
  )
}

export default AppView


