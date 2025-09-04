const addbutton = document.querySelector("#add");

//` ------------Adding note--------------------

const addnewnote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");
  const htmldata = `
  <div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
  </div>

<div class="main ${text ? "" : "hidden"}"></div>
<textarea class="${text ? "hidden" : ""}"></textarea>`;

  note.insertAdjacentHTML("afterbegin", htmldata);
  document.body.appendChild(note); //add to body element

  //` ------------------------Deleting & edit the note------------------------------------

  const editbutton = note.querySelector(".edit");
  const delbutton = note.querySelector(".delete");
  const maindiv = note.querySelector(".main");
  const textarea = note.querySelector("textarea");

  delbutton.addEventListener("click", () => {
    note.remove();
    updatelocalstorage();
  });

  editbutton.addEventListener("click", () => {
    maindiv.classList.toggle("hidden"); //toggle means on ya off...so agar div off hoa on krdega
    textarea.classList.toggle("hidden"); //or agar text are on hoa to off krdega...is trh 2no mese ek show hoga
  });

  //` ----------showing text on both div-----------------------
  textarea.value = text;
  maindiv.innerHTML = text;

  textarea.addEventListener("change", (event) => {
    const value = event.target.value;
    maindiv.innerHTML = value;
    updatelocalstorage();
  });
};

addbutton.addEventListener("click", () => addnewnote());

//! ------now storing in array then local storage--------
const updatelocalstorage = () => {
  const textareaAllnotes = document.querySelectorAll("textarea");
  const notes = [];
  textareaAllnotes.forEach((note) => {
    return notes.push(note.value);
  });
  // console.log(notes);
  localStorage.setItem("notes", JSON.stringify(notes)); //local storage store in json format
};

//`------gettind data back from local storage-------------
const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
  notes.forEach((note) => {
    addnewnote(note);
  });
}
