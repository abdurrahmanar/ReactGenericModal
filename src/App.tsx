import './App.css';

import { Login } from './components/login/Login';

import  store  from './redux/store';

import { Provider } from 'react-redux'

 

function App() {

  return (

    <Provider store={store}>

    <div className="App">

      <><Login></Login></>

    </div>

    </Provider>

  );

}

 

export default App;