import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Layout from './hocs/Layout';
import {Provider} from 'react-redux';
import store from './store';
import About from './components/About';
import Signup2 from './containers/Signup2';
import LoginRecommendation from './containers/LoginRecommendation';
import LoginDonation from './containers/LoginDonation';
import LoginOrganization from './containers/LoginOrganization';

const App=() => (
    <Provider store={store}>
    <Router>
            <Routes>
                <Route exact path='/' element={<Layout/>} />
                <Route exact path='/loginRecommendation' element={<LoginRecommendation/>} />
                <Route exact path='/loginDonation' element={<LoginDonation/>} />
                <Route exact path='/loginOrganization' element={<LoginOrganization/>} />
                <Route exact path='/signup' element={<Signup/>} />
                <Route exact path='/signupAsOrg' element={<Signup2/>} />
                <Route exact path='/reset-password' element={<ResetPassword/>} />
                <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>} />
                <Route exact path='/activate/:uid/:token' element={<Activate/>} />
                <Route exact path='/about' element={<About/>} />
            </Routes>
    </Router>
    </Provider>
);
export default App;