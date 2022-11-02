import { useAppSelector } from './redux/hooks';
import { Route, Routes } from 'react-router-dom';

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

const App: React.FC = () => {
  const valueOnMon = useAppSelector((state) => state.menuSlice.valueOnMon);
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
          <Route path="success" element={<Success />} />
          <Route path="addPost" element={<AddPost />} />
          <Route path="resetPassword" element={<ResetPasword />} />
          <Route path="newPassword" element={<NewPasword />} />
          <Route path="one-blog/:slag" element={<OneBlog />} />
          <Route path="*" element={<h1>No Found</h1>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
