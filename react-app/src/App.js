import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import ItemPage from './components/ItemsPage';
import SingleItemPage from './components/Single-ItemPage';
import ChartPage from './components/Chart';
import HistoryPage from './components/History';
import CrashPage from './components/404page';

function App() {
  const {user} = useSelector((state) => state.session)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {user && <NavBar />}
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <ItemPage />
        </ProtectedRoute>
        <ProtectedRoute path='/items/:itemId' exact={true} >
          <SingleItemPage />
        </ProtectedRoute>
        <ProtectedRoute path='/chart' exact={true} >
          <ChartPage />
        </ProtectedRoute>
        <ProtectedRoute path='/history' exact={true} >
          <HistoryPage />
        </ProtectedRoute>
        <ProtectedRoute path='/' >
          <CrashPage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
