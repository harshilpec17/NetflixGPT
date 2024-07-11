import React, { useRef, useState } from "react";

import { validateData } from "../../utils/loginConfig/Validate";
import { auth } from "../../utils/loginConfig/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../../utils/redux/userSlice";
import BACKGROUND_IMG from "../../logo/backgroundImage.png";

const Login = () => {
  // This hook will check and modify the component to login or SignUp by checking which state are active
  // If the user is on the login page then condition become true
  const [isSignIn, setIsSignIn] = useState(true);

  // This hook will display the error message coming from the "validate.js" by checking the regex condition
  // If something goes wrong it will use the display the message to the user.
  const [errorMessage, setErrorMessage] = useState(null);

  const [emailValue, setEmailValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);

  // for updating the redux store, we are using the the useDispatch hook.
  const dispatch = useDispatch();

  // It is hook provide by the "react-router-dom" to navigate the URL or USER after certain task

  // This function make the toggle feature, If the "isSignIn" variable is true then it will make the false and vice versa
  const handleSignIn = () => setIsSignIn(!isSignIn);

  // This all three variable is using the "useRef" hook, which connect the dot between the respective input field and functionality
  // "useRef hook" will use to provide the reference to certain point
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  // This function will check the email and password with regex condition by using the function from the validate.js
  const handleValidation = () => {
    const message = validateData(
      emailRef.current.value,
      passwordRef.current.value
    );

    // If the condition is validate pass then it will return the null value or else the respective error message
    setErrorMessage(message);
    if (message) return;
    //--------------
    // If the user is new and not have the account then it will use the CreateUser method to create the account online.
    if (!isSignIn) {
      // Sign Up logic

      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          // to fetch the value from the user like the display name, uid, email to update the value once again in the redux store
          updateProfile(user, {
            displayName: nameRef.current.value,
          })
            .then((response) => {
              // It will get the data from the currentUser, who just signIn in the application,
              // after creating the account on the application
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
              sessionStorage.setItem(
                "Auth Token",
                response._tokenResponse.refreshToken
              );
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    } else {
      // Signed in
      // If the user is already present in the application then, we can use the SignIn functionality
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          sessionStorage.setItem(
            "Auth Token",
            userCredential._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  };

  // It to select the whole email, password, and name on a click of the button
  const selectEmail = () => {
    emailRef.current?.select();
    emailRef.current?.setSelectionRange(0, 100);
  };

  const selectPassword = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
  };

  const selectName = () => {
    nameRef.current?.select();
    nameRef.current?.setSelectionRange(0, 100);
  };

  const handleDefault = () => {
    setEmailValue("test@gmail.com");
    setPasswordValue("Test@12345");
  };

  return (
    <>
      {/* background Image mobile responsive */}
      <img
        className="bg-cover bg-center h-screen md:bg-contain absolute w-screen"
        src={BACKGROUND_IMG}
        alt="background Img"
      />
      {/* This the outer div, present in the signup form*/}
      <div className="relative flex justify-center items-center h-screen my-auto mx-auto flex-col max-w-md bg-transparent">
        {/* form div which contain the Input box */}
        <div className="bg-black/70 max-w-md w-full py-3 px-2 flex flex-col justify-center backdrop-opacity-sm rounded">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col text-white "
          >
            <h1 className="p-2 m-2 text-white font-bold text-xl md:text-4xl">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {/* If the user wants to SingUp then the box will be present or else, it will not show on the screen */}
            {!isSignIn && (
              <input
                type="text"
                placeholder="Full Name"
                ref={nameRef}
                onClick={() => selectName()}
                className="p-2 m-2 max-w-md bg-[#333333] rounded outline-none"
              ></input>
            )}
            {/* Email Input box */}
            <input
              type="text"
              placeholder="Email address or User Name"
              className="p-2 m-2 max-w-md bg-[#333333] rounded outline-none"
              ref={emailRef}
              value={emailValue}
              onClick={() => selectEmail()}
            ></input>

            {/* password Input box */}
            <input
              type="password"
              placeholder="Password"
              ref={passwordRef}
              value={passwordValue}
              onClick={() => selectPassword()}
              className="p-2 m-2 max-w-md bg-[#333333] rounded outline-none"
            ></input>
            {/* Error message */}
            <p className="p-2 m-2 text-[#E87C03]">{errorMessage}</p>

            {/* It will validate the data against the regex configuration */}
            <button
              className="p-2 m-2 max-w-md bg-[#E50815] text-white font-bold outline-none rounded"
              onClick={handleValidation}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>

          {/* To convert the form from the Sign it to sign Up*/}
          <h3
            className="text-white text-lg font-semibold p-2 m-2 cursor-pointer"
            onClick={handleSignIn}
          >
            {isSignIn
              ? "New to app? Sign up now."
              : "Already Register ? Sign In here"}
          </h3>
          {isSignIn ? (
            <h3
              className="bg-orange-400 text-sm font-semibold m-2 p-1 cursor-pointer"
              onClick={handleDefault}
            >
              Continue Without Login or SignUp
            </h3>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Login;
