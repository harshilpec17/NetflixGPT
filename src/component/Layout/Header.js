import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../../utils/loginConfig/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../../utils/redux/userSlice";
import { LOGO, PROFILE_IMG, langs } from "../../utils/Constants/constants";
import { GptToggle } from "../../utils/redux/GPTSearchSlice";
import { addLanguage } from "../../utils/redux/languageSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const gptToggle = useSelector((store) => store.gpt.gptToggleValue);
  // for updating the redux store, we are using the the useDispatch hook.
  const dispatch = useDispatch();

  // It is hook provide by the "react-router-dom" to navigate the URL or USER after certain task
  const navigate = useNavigate();

  // This utility function provided by the firebase application, to "Sign Out the user",
  // you can find this function inside the "Password Authentication" tab.
  // after the promise full-filled redirect use to the home Page
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // when the use SignUp in the application, once and for all we are updating the user setting in the redux store.
  // we are using the `useEffect` hook to update the information for one time only
  // this utility function comes from the firebase application from the "Manage User Tab"

  /* ***--- 
  when we are using the useEffect and navigate inside the header component, 
  It is the way to use the navigate, as Navigate or useNavigate function will only be able to use at the children of the react-routing DOM
  Header is the only component which will be available at the every place in the application. So, When we put the useEffect and its function inside the Header
  component it will work. 

  Another way to avoid the problem of navigate, we can put create routing at the root level of the application which is APP.js in this case.
  but still we need to use the navigate at every auth change, or every place where the functionality of the authentication was placed.

  ---***/
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptToggle = () => {
    dispatch(GptToggle());
  };

  const selectLanguage = (e) => {
    dispatch(addLanguage(e.target.value));
  };

  return (
    <>
      <div className="px-10 z-50 w-screen flex absolute bg-gradient-to-b from-black ">
        <div>
          <img className="w-60" src={LOGO} alt="Netflix logo" />
        </div>
      </div>
      <div>
        {user && (
          <div
            className={`w-screen items-center py-4 px-10 ${
              gptToggle ? "absolute" : "relative"
            } z-50 flex justify-end`}
          >
            <div className="flex items-center justify-between gap-6">
              {gptToggle && (
                <select
                  className="bg-gray-500 px-2 py-1 rounded outline-none text-white"
                  onChange={selectLanguage}
                >
                  {langs.map((ref) => (
                    <option key={ref.identifier} value={ref.identifier}>
                      {ref.lang}
                    </option>
                  ))}
                </select>
              )}
              <button
                onClick={handleGptToggle}
                className="px-6 py-2 outline-none rounded text-white font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  cursor-pointer"
              >
                {gptToggle ? "HomePage" : "GPT Search"}
              </button>
              <img className="w-16 h-16" src={PROFILE_IMG} alt="Profile png" />
              {/* Onclick function for the signOut function  */}
              <button
                onClick={handleSignOut}
                className="px-8 py-2 outline-none text-white font-bold rounded bg-[#E50815] cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;