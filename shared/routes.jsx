import React     from 'react'
import { Route, IndexRoute } from 'react-router'
import Ducky from './components/ducky.jsx'
import Marketing from './components/marketing/marketing.jsx'
import Pricing from './components/pricing/pricing.jsx'
import StoryMode from './components/storymode/storymode.jsx'
import About from './components/about/about.jsx'
import Register from './components/register/register.jsx'
import Login from './components/login/login.jsx'

export default (
  <Route name='ducky' component={Ducky} path='/'>
  	<IndexRoute component={Marketing} path='' />
	<Route path='pricing' component={Pricing} />
	<Route path='believe' component={StoryMode} />
	<Route path='about' component={About} />
	<Route path='register' component={Register} />
	<Route path='login' component={Login} />
  </Route>
);
