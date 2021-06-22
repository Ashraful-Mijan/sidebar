import './App.css';
import { IntlProvider } from 'react-intl';
import Layout from './Components/Layout';
// import  messages from './Components/message';
import './styles/App.scss';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// messages={messages[locale]}
function App() {
  const [locale, setLocale] = useState('en');
  return (
    <IntlProvider locale={locale} >
      <Layout setLocale={setLocale} />
    </IntlProvider>
  );
}

export default App;
