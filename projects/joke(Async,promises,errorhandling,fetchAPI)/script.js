const jokes = document.querySelector("#joke");
const jokebtn = document.querySelector("#jokebtn");

//` -----------------------------USING ASYNC-WAIT (MOSTLY USED & NEW)------------------------------

const generatejokes = async () => {
  try {
    const setheader = {
      headers: {
        Accept: "application/json",
      },
    };
    const responce = await fetch("https://icanhazdadjoke.com/", setheader);
    const data = await responce.json();
    jokes.innerHTML = data.joke;
  } catch (err) {
    console.log(err);
  }
};

//` --------------------------------------------------------------------------

//` -----------------------------USING PROMISES------------------------------
// const setheader = {
//   headers: {
//     Accept: "application/json",
//   }
// }

// const generatejokes = () => {
//   fetch('https://icanhazdadjoke.com/', setheader) //API is in html format so set header object to covert html to json
//     .then((res) => res.json())
//     .then((data)=> jokes.innerHTML=data.joke)
//     .catch((err) => console.log(err))
// };
//` --------------------------------------------------------------------------

jokebtn.addEventListener("click", generatejokes);
generatejokes();
