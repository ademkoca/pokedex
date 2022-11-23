import axios from 'axios';
import React, { useState } from 'react';
import Step1 from '../components/form-steps/Step1';
import Step2 from '../components/form-steps/Step2';
import Step3 from '../components/form-steps/Step3';
import { useUserStore } from '../store';

const Login = () => {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
    termsCheckBox: false,
  });
  console.log('Step: ' + step);
  console.log('User: ' + user.termsCheckBox);
  const loginUser = useUserStore((state) => state.login);
  const handleStep1 = (e) => {
    e.preventDefault();
    if (user.firstName !== '' && user.lastName !== '' && user.email !== '') {
      setStep(step + 1);
    } else alert('You need to fill all fields!');
  };
  const handleStep2 = (e) => {
    e.preventDefault();
    if (user.password !== '' && user.repeatPassword !== '') {
      if (user.password === user.repeatPassword) {
        setStep(step + 1);
      } else alert('Passwords do not match!');
    } else alert('You need to fill all fields!');
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if (user.termsCheckBox) {
      loginUser({
        firstName: user.firstName,
        lastName: user.lastName,
      });
      window.location.href = '/';
    } else alert('You must accept terms of service');
    // if (user.username !== '' && user.password !== '') {
    //   const userToSend = {
    //     username: user.username,
    //     password: user.password,
    //     email: user.email,
    //   };
    //   try {
    //     const res = await axios.post(
    //       'http://localhost:8800/backend/auth/login',
    //       userToSend
    //     );
    //     if (res.status === 200) {
    //       // console.log(res.data);
    //       loginUser({
    //         username: res.data.username,
    //         _id: res.data._id,
    //         isAdmin: res.data.isAdmin,
    //         // wishlist: res.data.wishlist,
    //       });
    //       window.location.href = '/';
    //     } else {
    //       if (res.status === 404) {
    //         // console.log(res.data);
    //       }
    //     }
    //     // window.location.href = '/';
    //     // history.push('/login');
    //   } catch (err) {
    //     console.log(typeof err.response.data);
    //     // setErrorMsg(err.response.data);
    //     // // console.log(errorMsg);
    //     // setErrorMsgShow(true);
    //   }
    // }
  };
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="../pokemon-logo.png"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          {step === 1 && <Step1 user={user} setUser={setUser} />}
          {step === 2 && <Step2 user={user} setUser={setUser} />}
          {step === 3 && <Step3 user={user} setUser={setUser} />}

          {/* <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label for="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div> */}

          <div>
            <button
              onClick={(e) =>
                step === 1
                  ? handleStep1(e)
                  : step === 2
                  ? handleStep2(e)
                  : handleLogin(e)
              }
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#ED1A25] py-2 px-4 text-sm font-medium text-white hover:bg-[#F3666D] focus:outline-none focus:ring-2 focus:ring-[#ED1A25] focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                {/*<!-- Heroicon name: mini/lock-closed -->*/}
              </span>
              {step < 3 ? 'Next' : 'Finish'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
