import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignIn from './views/auth/signIn/SignIn';
import Home from './views/home';
import './css/root.css'
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

