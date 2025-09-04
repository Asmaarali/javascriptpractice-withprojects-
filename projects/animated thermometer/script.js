const temp = document.querySelector("#temp");
const heading = document.querySelector("#heading");

const tempload = () => {
  temp.innerHTML = "&#xf2cb";
  temp.style.color = "lightblue";
  heading.style.color = "lightblue";

  setTimeout(() => {
    temp.innerHTML = "&#xf2ca";
    temp.style.color = "lightgreen";
    heading.style.color = "lightgreen";
  }, 1000);
  setTimeout(() => {
    temp.innerHTML = "&#xf2c9";
    temp.style.color = "orange";
    heading.style.color = "orange";
  }, 2000);
  setTimeout(() => {
    temp.innerHTML = "&#xf2c8";
    temp.style.color = "darkorange";
    heading.style.color = "darkorange";
  }, 3000);
  setTimeout(() => {
    temp.innerHTML = "&#xf2c7";
    temp.style.color = "red";
    heading.style.color = "red";
  }, 4000);
};

tempload();
setInterval(tempload, 5000);
