

import './index.css';
import './App.css'
import store from './lib/store';

import { Provider } from 'react-redux';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light')
 return (
  <Provider store={store}>
    <NavBar props={{theme: theme}}>
      {/* <div style={{color: theme == 'light' ? '#fff' : '#000'}}>React Child Node</div> */}
    </NavBar>
    <main>
      <div onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}>切换navbar风格:{theme}</div>
    </main>
  </Provider>
 );
}
export default App;
