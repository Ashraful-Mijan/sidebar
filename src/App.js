import './App.css';
import { IntlProvider } from 'react-intl';
import Layout from './Components/Layout';
import './styles/App.scss';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
function App() {
  const [locale, setLocale] = useState('en');
  return (
    <IntlProvider locale={locale} >
      <Layout setLocale={setLocale} />
    </IntlProvider>
  );
}

export default App;
