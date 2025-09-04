

const addButton=document.querySelector("#add")

const addNewNote=(text='')=>{
    const note=document.createElement('div')
    note.classList.add('note')
    const htmlData=`        
<div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>

<div class="main ${text ? "" : "hidden"}"></div>
<textarea class="${text ? "hidden" : ""}"></textarea> `
note.insertAdjacentHTML('afterbegin',htmlData)
document.body.appendChild(note)

// getting ref for editing and deleting
const editButton=note.querySelector('.edit')
const delButton=note.querySelector('.delete')
const mainDiv=note.querySelector('.main')
const textarea=note.querySelector('textarea')

//deleting the note
delButton.addEventListener('click',()=>{
    note.remove()
})
//toggleing the edit button
editButton.addEventListener('click',()=>{
    mainDiv.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
})
//showing data text area to main div
textarea.value=text;
mainDiv.innerHTML=text;
textarea.addEventListener('change',(event)=>{
    const value=event.target.value;
    mainDiv.innerHTML=value;
    updateLSData();
})
}


addButton.addEventListener('click',() => addNewNote())



//local storage work
const updateLSData=()=>{
    const textareadata=document.querySelectorAll('textarea')
    notes=[];
    textareadata.forEach((note)=>{
       return notes.push(note.value)
    })
    localStorage.setItem('notes',JSON.stringify(notes))


}
//------gettind data back from local storage-------------
const notes = JSON.parse(localStorage.getItem('notes'));
if (notes) {
  notes.forEach((note) => {
    addNewNote(note);
  });
}