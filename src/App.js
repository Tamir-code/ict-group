import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import "./main.scss"
import ComingPage from './components/ComingPage/ComingPage';
import HomePage from './components/HomePage/HomePage';
import ProfilePage from './components/CustomPage/ProfilePage/ProfilePage'
import CompanyListPage from './components/CustomPage/CompanyListPage/CompanyListPage';
import ProgramPage from './components/CustomPage/ProgramPage/ProgramPage';

function App() {
  return (
    <BrowserRouter>
      <div className="main-section">
        <Switch>
          
          <Route exact path="/HomePage" component={HomePage} />
          <Route exact path="/" component={ComingPage} />
          <Route exact path="/CompanyListPage" component={CompanyListPage}/>
          <Route exact path="/ProfilePage" component={ProfilePage} />
          <Route exact path="/ProgramPage" component={ProgramPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

