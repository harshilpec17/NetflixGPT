import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ContactUs = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  const [emailToggle, setEmailToggle] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const user = useSelector((store) => store.user);
  return (
    user && (
      <>
        <div className="w-full text-[#D1D7E0] pt-40 md:pt-32 pb-10 bg-sky-950 ">
          <div className="container mx-auto py-8 bg-black rounded-lg">
            <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
              <div className="col-span-4 sm:col-span-3">
                <div className="bg-[#12100E] shadow rounded-lg p-6">
                  <div className="flex flex-col items-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/94.jpg"
                      alt="profile"
                      className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                    ></img>
                    <h1 className="text-xl font-bold">Harshil Suthar</h1>
                    <p className="text-gray-700">Frontend Developer</p>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-center mt-3 -mb-2">
                      Find me on
                    </h3>
                    <div className="flex justify-center items-center gap-6 my-6">
                      <div
                        onClick={() =>
                          openInNewTab(
                            "https://www.linkedin.com/in/harshil-s-854570248/"
                          )
                        }
                      >
                        <img
                          src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-1024.png"
                          alt="Linkedin Logo"
                          className="md:w-12 w-8 bg-white cursor-pointer"
                        />
                      </div>
                      <div
                        onClick={() =>
                          openInNewTab("https://github.com/harshilpec17")
                        }
                      >
                        <img
                          src="https://cdn1.iconfinder.com/data/icons/picons-social/57/github_rounded-1024.png"
                          alt="GitHub Logo"
                          className="md:w-12 w-8 bg-white cursor-pointer"
                        />
                      </div>
                      <div onClick={() => setEmailToggle(!emailToggle)}>
                        <img
                          src="https://cdn.iconscout.com/icon/free/png-512/free-email-532-433830.png?f=webp&w=512"
                          alt="Email"
                          className="md:w-12 w-8 bg-white cursor-pointer"
                        ></img>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-between">
                      <h2 className="text-xl font-bold mt-4  text-red-400">
                        Language and Library
                      </h2>
                      <div className=" flex flex-col gap-3 mt-4">
                        <img
                          alt="HTML"
                          src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                        ></img>
                        <img
                          alt="CSS"
                          src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                        ></img>
                        <img
                          alt="Javascript"
                          src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                        ></img>
                        <img
                          alt="OPEN AI"
                          src="https://img.shields.io/badge/Openai-%23121011.svg?style=for-the-badge&logo=openai&logoColor=white"
                        ></img>
                        <img
                          alt="firebase"
                          src="https://img.shields.io/badge/firebase-%23E34F26.svg?style=for-the-badge&logo=firebase&logoColor=white"
                        ></img>

                        <img
                          alt="NodeJS"
                          src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                        ></img>

                        <img
                          alt="React"
                          src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                        ></img>
                        <img
                          alt="React Router"
                          src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
                        ></img>
                        <img
                          alt="Redux"
                          src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"
                        ></img>
                        <img
                          alt="Tailwind CSS"
                          src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                        ></img>
                        <img
                          alt="Babel"
                          src="https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black"
                        ></img>
                        <img
                          alt="Vercel"
                          src="https://img.shields.io/badge/vercel-%23121011.svg?style=for-the-badge&logo=vercel&logoColor=white"
                        ></img>
                        <img
                          alt="ES Lint"
                          src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white"
                        ></img>
                        <img
                          alt="GitHub"
                          src="https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                        ></img>
                      </div>
                    </div>
                    <span className="bg-orange-400 text-center font-semibold text-black px-2">
                      {emailToggle ? "harshilsuthar1995@gmail.com" : null}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-4 sm:col-span-9">
                <div className="bg-[#12100E] shadow rounded-lg p-6">
                  <div className="my-2">
                    <h2 className="text-xl font-bold mb-2 text-red-400">
                      Overview
                    </h2>

                    <span className=" text-md">
                      The Movie Recommendation Web App is an innovative platform
                      designed to provide personalized movie recommendations
                      based on the user's mood. Powered by the{" "}
                      <span className="text-orange-400 font-bold">
                        GPT-3.5 Turbo{" "}
                      </span>
                      model, the app leverages advanced natural language
                      processing to understand user inputs and generate relevant
                      movie suggestions.
                    </span>
                  </div>
                  <div className="mt-4">
                    <h2 className="text-xl font-bold text-red-400">
                      Key Features:
                    </h2>
                  </div>
                  <div className="my-2">
                    <p>
                      <span className="font-semibold text-yellow-400">
                        Mood-based Recommendations:
                      </span>{" "}
                      Users can input their mood, and the app will generate
                      movie recommendations tailored to their emotional state.
                    </p>
                    <p>
                      <span className="font-semibold text-yellow-400">
                        Advanced Search:
                      </span>{" "}
                      Users can specify detailed criteria such as genre, release
                      year, and language to refine their movie search.
                    </p>
                    <p>
                      <span className="font-semibold text-yellow-400">
                        Comprehensive Movie Information:
                      </span>{" "}
                      The app fetches movie data from the{" "}
                      <span className="text-orange-400 font-bold">
                        {" "}
                        TMDB API{" "}
                      </span>
                      , providing users with detailed information including
                      descriptions, posters, cast information, language, and
                      ratings.
                    </p>{" "}
                    <p>
                      <span className="font-semibold text-yellow-400">
                        Streaming Platform Integration:
                      </span>{" "}
                      Utilizing the{" "}
                      <span className="text-orange-400 font-bold">
                        {" "}
                        JustWatch API{" "}
                      </span>{" "}
                      , the app displays information on where users can stream
                      or purchase the recommended movies.
                    </p>{" "}
                    <p>
                      <span className="font-semibold text-yellow-400">
                        Language Filter:
                      </span>{" "}
                      Users can filter movie results based on language
                      preferences.
                    </p>
                    <p>
                      <span className="font-semibold text-yellow-400">
                        Multi-language Support:
                      </span>{" "}
                      The app offers the option to select a preferred language,
                      translating the entire page for a more localized
                      experience.
                    </p>
                    <p>
                      <span className="font-semibold text-yellow-400">
                        Responsive UI:
                      </span>{" "}
                      he app is designed with a responsive user interface,
                      ensuring optimal viewing and interaction experiences
                      across a wide range of devices and screen sizes.
                    </p>
                    <p>
                      <span className="font-semibold text-yellow-400">
                        Error Handling:
                      </span>{" "}
                      Robust error handling mechanisms are implemented to
                      gracefully manage and display errors, providing users with
                      informative feedback and maintaining a smooth user
                      experience.
                    </p>
                    <p>
                      <span className="font-semibold text-yellow-400">
                        Shimmer UI:
                      </span>{" "}
                      Shimmer UI effects are integrated to enhance the loading
                      experience, providing users with visual feedback while
                      content is being fetched or processed.
                    </p>
                  </div>

                  <div className="mt-4">
                    <h2 className="text-xl font-bold text-red-400">
                      Technology
                    </h2>
                  </div>
                  <div className="my-2">
                    <ul className="text-gray-100">
                      <li>
                        <span className="font-bold py-1 text-blue-400">
                          React:{" "}
                        </span>{" "}
                        The app's front end is developed using React, a popular
                        JavaScript library for building user interfaces,
                        enabling fast and interactive components.
                      </li>
                      <li>
                        <span className="font-bold text-blue-400">
                          HTML & CSS:
                        </span>{" "}
                        The app's structure and styling are created using HTML
                        and CSS, ensuring a clean and visually appealing layout.
                      </li>
                      <li>
                        <span className="font-bold text-blue-400">
                          Tailwind CSS:
                        </span>{" "}
                        Tailwind CSS is used for rapid UI development, providing
                        utility classes to style elements and components
                        efficiently.
                      </li>
                      <li>
                        <span className="font-bold text-blue-400">
                          React Router:
                        </span>{" "}
                        React Router is utilized for navigation, enabling
                        dynamic routing and rendering of different components
                        based on the URL.
                      </li>

                      <li>
                        <span className="font-bold text-blue-400">
                          Redux Toolkit:
                        </span>{" "}
                        Redux Toolkit is employed for state management, allowing
                        the app to manage complex state logic and data flow
                        efficiently.
                      </li>
                      <li>
                        <span className="font-bold text-blue-400">Vercel:</span>{" "}
                        Vercel is used for deployment, providing a seamless and
                        efficient platform for hosting the app and managing its
                        deployment lifecycle.
                      </li>
                      <li>
                        <span className="font-bold text-blue-400">
                          Firebase:
                        </span>{" "}
                        Firebase is used for backend services such as
                        authentication, database management, and hosting,
                        enabling real-time updates and data synchronization.
                      </li>

                      <li>
                        <span className="font-bold text-blue-400">
                          Custom Hooks:
                        </span>{" "}
                        Custom hooks are created to encapsulate reusable logic,
                        enhancing code reusability and maintainability.
                      </li>
                      <li>
                        <span className="font-bold text-blue-400">
                          Popup Modal:
                        </span>{" "}
                        Popup modals are implemented to provide a user-friendly
                        way to display additional information or interact with
                        the app's features.
                      </li>
                    </ul>
                  </div>

                  <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                  <div className="mb-6">
                    <div className="flex justify-between flex-wrap gap-2 w-full">
                      <span className="text-gray-700 font-bold">
                        Web Developer
                      </span>
                      <p>
                        <span className="text-gray-700 mr-2">
                          at ABC Company
                        </span>
                        <span className="text-gray-700">2017 - 2019</span>
                      </p>
                    </div>
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed finibus est vitae tortor ullamcorper, ut vestibulum
                      velit convallis. Aenean posuere risus non velit egestas
                      suscipit.
                    </p>
                  </div>
                  <div className="mb-6">
                    <div className="flex justify-between flex-wrap gap-2 w-full">
                      <span className="text-gray-700 font-bold">
                        Web Developer
                      </span>
                      <p>
                        <span className="text-gray-700 mr-2">
                          at ABC Company
                        </span>
                        <span className="text-gray-700">2017 - 2019</span>
                      </p>
                    </div>
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed finibus est vitae tortor ullamcorper, ut vestibulum
                      velit convallis. Aenean posuere risus non velit egestas
                      suscipit.
                    </p>
                  </div>
                  <div className="mb-6">
                    <div className="flex justify-between flex-wrap gap-2 w-full">
                      <span className="text-gray-700 font-bold">
                        Web Developer
                      </span>
                      <p>
                        <span className="text-gray-700 mr-2">
                          at ABC Company
                        </span>
                        <span className="text-gray-700">2017 - 2019</span>
                      </p>
                    </div>
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed finibus est vitae tortor ullamcorper, ut vestibulum
                      velit convallis. Aenean posuere risus non velit egestas
                      suscipit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default ContactUs;
