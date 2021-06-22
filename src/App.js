import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Properties from './Components/Dashboard/Properties/Properties';
import { IntlProvider } from 'react-intl';
import Layout from './Components/Dashboard/Layout';
import './Components/Dashboard/styles/App.scss'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


function App() {
  const [locale, setLocale] = useState('en');
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Properties />
        </Route>
        <Route path="/dashboard">
          <IntlProvider locale={locale} >
            <Layout setLocale={setLocale} />
          </IntlProvider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
