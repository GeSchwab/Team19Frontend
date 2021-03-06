"use strict";

import React from 'react';

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { UserLoginView } from "./views/ProfileViews/UserLoginView";
import { UserSignupView } from "./views/ProfileViews/UserSignupView";
import {LoadStudyplanView} from './views/LoadStudyplanView';
import {CreateStudyplanView} from './views/Studyplan/CreateStudyplanView';
import {CreateStudyplanQueryView} from './views/Studyplan/CreateStudyplanQueryView';
import {ProfileView} from "./views/ProfileViews/ProfileView";
import {Welcome} from "./components/Welcome/Welcome"
import {WelcomeUniversity} from "./components/Welcome/WelcomeUniversity";
import {CreateStudyplanWithFilter} from "./components/CreateStudyplan/CreateStudyplanWithFilter"

import {CourseView} from "./views/CourseView"

import {CourseSelectionView} from "./views/CourseSelectionView"

import UserService from "./services/UserService";


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'SMART',
            university: '',
            fieldOfStudy:'',

            routes: [

                {component:CreateStudyplanWithFilter, path:'/test'},


                { component: Welcome, path: '/', exact:true},
                { component: CreateStudyplanQueryView, path: '/studyplans/create'},
                { component: WelcomeUniversity, path: '/welcomeUniversities'},
                { component: CourseView, path: '/courses/:id'},
                { component: CourseSelectionView, path: '/courses'},
                { component: UserSignupView, path: '/register'},


                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<LoadStudyplanView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/'}/>)
                        }} , path: '/studyplans', exact:true},


                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<CreateStudyplanQueryView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }} , path: '/home'},


                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<CreateStudyplanView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/'}/>)
                        }} , path: '/studyplans/:id'},


                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<ProfileView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/'}/>)
                        }}, path: '/profile',exact:true},

            ]
        };
        //bind  set University & fieldofStudy
    }

    setUniversity( uni)
    {
        this.setState(this.state.university=uni);
    }

    setFieldOfStudy(fos)
    {
        this.setState(this.state.fieldOfStudy=fos);
    }

    componentDidMount(){
        document.title = this.state.title;
    }

    render() {

        return(
            <div>
                <Router>
                    <Switch>
                        {this.state.routes.map((route, i) => (<Route key={i} {...route}/>) )}
                    </Switch>
                </Router>
            </div>
        );
    }
}

