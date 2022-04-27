import Directory from "../../components/directory/directory.component";

import { useReducer } from "react";

const textReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_TEXT":
      return {
        ...state,
        text: payload,
      };
    default:
      throw new Error(`unhandled type: ${type} in textReducer`);
  }
};

const INITIAL_STATE = {
  text: "",
};

const Home = () => {
  //const [text, setText] = useState("");
  const [{ text }, dispatch] = useReducer(textReducer, INITIAL_STATE);

  const setTextValue = (event) => {
    dispatch({ type: "SET_TEXT", payload: event.target.value });
    //setText(event.target.value);
  };

  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womes",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
      <input type="text" value={text} onChange={setTextValue} />
      <span>{text}</span>
    </div>
  );
};

export default Home;
