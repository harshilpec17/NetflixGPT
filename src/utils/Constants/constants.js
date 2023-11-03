export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const PROFILE_IMG =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/f9a24fdc-ab8b-4e19-b0f5-4923356a72de/CA-en-20231009-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const OPEN_AI_BACKGROUND_IMG =
  "https://imageio.forbes.com/specials-images/imageserve/65133ef75b24f850bb4ad501/0x0.jpg?format=jpg&crop=3988,2244,x0,y198,safe&height=900&width=1600&fit=bounds";

export const API_TOKEN = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_API_TOKEN,
  },
};

export const MOVIE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const OPEN_AI = process.env.REACT_APP_OPENAI_API_KEY;

export const langs = [
  {
    identifier: "en",
    lang: "english",
  },
  {
    identifier: "french",
    lang: "french",
  },
  {
    identifier: "hindi",
    lang: "hindi",
  },
];
