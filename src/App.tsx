import { useAppDispatch, useAppSelector } from './redux/hooks';
import { Navigate, Route, Routes } from 'react-router-dom';
import classNames from 'classnames';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Main from './components/Main';
import RegistrationConfirmation from './pages/RegistrationConfirmation';
import Success from './pages/Success';
import AddPost from './pages/addPost';
import ResetPasword from './pages/ResetPasword';
import NewPasword from './pages/NewPassword';
import OneBlog from './pages/OneBlog';
import './scss/app.scss';
import NoFaund from './components/NoFaund';
import { useEffect } from 'react';
import { getUserData } from './redux/Sign/signInSlice';
import React from 'react';

const App: React.FC = () => {
  const valueOnMon = useAppSelector((state) => state.menuSlice.valueOnMon);
  const registered = useAppSelector((state) => state.signInSlice.registered);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (registered) {
      dispatch(getUserData());
    }
  }, [registered]);

  return (
    <div
      className={classNames(
        'app',
        valueOnMon ? { bodyMon: valueOnMon } : 'bodySun'
      )}
    >
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Main />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route
            path="registrationConfirmation"
            element={<RegistrationConfirmation />}
          />
          <Route path="/activate/:uid/:token" element={<Success />} />

          <Route
            path="addPost"
            element={registered ? <AddPost disabled error /> : <Navigate to="/signIn" />}
          />
            <Route
            path="one-blog/:id/edit"
            element={registered ? <AddPost disabled error /> : <Navigate to="/signIn" />}
          />
          <Route path="resetPassword" element={<ResetPasword />} />
          <Route path="newPassword" element={<NewPasword />} />
          <Route path="one-blog/:id" element={<OneBlog />} />
          <Route path="*" element={<NoFaund />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
