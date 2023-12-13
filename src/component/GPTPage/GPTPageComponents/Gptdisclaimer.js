import React from "react";

const GptDisclaimer = () => {
  return (
    <>
      <div className="md:max-w-3xl max-w-md relative bg-gray-950 m-auto px-2">
        <h1 className="text-center text-[#80CAA9] font-bold text-2xl border-b p-2 py-3 shadow-2xl">
          Welcome to Movie Search AI!
        </h1>
        <div className="px-6">
          <div className="p-2">
            <h2 className="  text-white font-semibold text-lg pb-1 ">
              🔍 Search Examples:
            </h2>
            <p className="text-[#D1D7E0] font-light">
              <span className="text-[#027BB5] font-semibold">
                {" "}
                Feeling down?{" "}
              </span>
              Type{" "}
              <span className="text-green-500">
                {" "}
                "I am sad, please show me some movies that make me laugh."{" "}
              </span>{" "}
              <p>
                <span className="text-orange-500 font-semibold">
                  {" "}
                  Angry and need a mood lift?{" "}
                </span>{" "}
                Try{" "}
                <span className="text-green-500">
                  {" "}
                  " I am angry, show me romantic comedy movies."{" "}
                </span>
              </p>{" "}
              <p>
                <span className="text-yellow-500 font-semibold">
                  {" "}
                  Already in a good mood? Fantastic!{" "}
                </span>{" "}
                Try <span className="text-green-500"> "Surprise me" </span> and
                let our AI pick a movie to add an extra dash of joy to your day.
              </p>
            </p>
            <h2 className="text-white font-semibold text-lg py-2 ">
              {" "}
              🌐 Filter by Language:{" "}
            </h2>
            <p className="text-[#D1D7E0] font-normal">
              Want results in a specific language? No worries! You can filter
              out posters later to match your language preferences.
            </p>
            <h2 className="text-white font-semibold text-lg py-2 ">
              🎬 How it Works:
            </h2>
            <p className="text-[#D1D7E0] font-normal">
              When you search for a movie, we use OpenAI to generate a title.
              This title becomes our query to the movie database. The database
              then returns every poster related to that title, even those with
              OpenAI's unique twist.
            </p>

            <h2 className="text-white font-semibold text-lg py-2 ">
              🤖 AI Magic:{" "}
            </h2>
            <p className="text-[#D1D7E0] font-normal">
              Bear in mind, our AI has its quirks. It strives for accuracy, but
              a margin of error is part of the game. Click on the movie poster
              for more details, and enjoy the surprises!
            </p>
            <h2 className="text-[#80CAA9] font-semibold text-lg py-3 ">
              Happy exploring! 🍿✨{" "}
            </h2>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default GptDisclaimer;
