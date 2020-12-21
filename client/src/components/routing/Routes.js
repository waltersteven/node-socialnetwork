import React from 'react';
import { Route, Switch } from 'react-router-dom';
//
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import AddExperience from '../profile-forms/AddExperience';
import AddEducation from '../profile-forms/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import NotFound from '../layout/NotFound';
import TigerAssistant from '../pages/TigerAssistant';
import BarracudaAssistant from '../pages/BarracudaAssistant';
import NoDivAssistant from '../pages/NoDivAssistant';
import NoScriptAssistant from '../pages/NoScriptAssistant';
import Blank from '../pages/Blank';

//
import PrivateRoute from '../routing/PrivateRoute';
import TigerAssistantES from '../pages/spanish/TigerAssistantES';

const Routes = () => {
	return (
		<section className='container'>
			<Alert />
			<Switch>
				<Route exact path='/tiger-assistant' component={TigerAssistant}></Route>
				<Route exact path='/es-tiger-assistant' component={TigerAssistantES}></Route>
				<Route exact path='/barracuda-assistant' component={BarracudaAssistant}></Route>
				<Route exact path='/no-div-assistant' component={NoDivAssistant}></Route>
				<Route exact path='/no-script-assistant' component={NoScriptAssistant}></Route>
				<Route exact path='/blank-page' component={Blank}></Route>
				<Route exact path='/register' component={Register}></Route>
				<Route exact path='/login' component={Login}></Route>
				<Route exact path='/profiles' component={Profiles}></Route>
				<Route exact path='/profile/:id' component={Profile}></Route>
				<PrivateRoute exact path='/dashboard' component={Dashboard}></PrivateRoute>
				<PrivateRoute exact path='/create-profile' component={CreateProfile}></PrivateRoute>
				<PrivateRoute exact path='/edit-profile' component={EditProfile}></PrivateRoute>
				<PrivateRoute exact path='/add-experience' component={AddExperience}></PrivateRoute>
				<PrivateRoute exact path='/add-education' component={AddEducation}></PrivateRoute>
				<PrivateRoute exact path='/posts' component={Posts}></PrivateRoute>
				<PrivateRoute exact path='/posts/:id' component={Post}></PrivateRoute>
				<Route component={NotFound} />
			</Switch>
		</section>
	);
};

export default Routes;
