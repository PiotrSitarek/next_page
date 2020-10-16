import React from 'react';
import MainPage from './mainPage/mainPage';
import { Switch, Route, HashRouter } from 'react-router-dom';
import InternetDetails from './offerdetails/internet/internet';
import InternetTvDetails from './offerdetails/internettv/internettv';
import InternetTvMaxDetails from './offerdetails/internettvmax/internettvmax';
import ContactSection from './contactSection/contactSection';
import PageNotFound from './404/pagenotfound';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/Internet" component={InternetDetails} />
        <Route path="/Internet+Telewizja_M" component={InternetTvDetails} />
        <Route path="/Internet+Telewizja_L" component={InternetTvMaxDetails} />
        <Route path="/Kontakt" component={ContactSection} />


        <Route component={PageNotFound} />
      </Switch>
    </HashRouter>
  );
}
export default App;
