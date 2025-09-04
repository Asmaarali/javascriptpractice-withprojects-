// btn = document.getElementById("btn");
// input = document.getElementById("input");
// listcontainer = document.getElementById("list-container");
// let localTodoLists = []

// // get local storage 
// const getdata = () => {
//     return JSON.parse(localStorage.getItem("jstodo"));
    
// }
// localTodoLists = getdata() || []
// // ------------------------

// const btnclicked = () => {

//     if (input.value === '') {
//         alert("plz write some text")
//     } else if(localTodoLists.includes(input.value)){
//         alert("plz avoid duplicate values")
//     }
//      else {
//         //local storage in array form
//         localTodoLists.push(input.value)
//         localTodoLists = [...new Set(localTodoLists)] //using set to prevent from duplicates and covert again in array
//         console.log(localTodoLists)
//         localStorage.setItem("jstodo" , JSON.stringify(localTodoLists))
//         // ----------------------
//         let li = document.createElement("li");
//         li.innerText = input.value;
//         listcontainer.append(li)
//         //cross
//         let span = document.createElement("span")
//         span.innerText = "\u00d7";
//         li.append(span)
//     }
//     input.value = ''

// }


// listcontainer.addEventListener("click", (event) => {
//     if (event.target.tagName == 'LI') {
//         event.target.classList.toggle("checked")

//     }
//     else if (event.target.tagName == 'SPAN') {
//         event.target.parentElement.remove();
//         localTodoLists = localTodoLists.filter((curElem) => {

//             // console.log(curElem);
//             // console.log(event.target.parentElement.firstChild.textContent);
            
//             return curElem !== event.target.parentElement.firstChild.textContent
            
//         })
//         // let tagg=event.target.tagName == 'LI';
//         console.log(localTodoLists);
//         localStorage.setItem("jstodo" , JSON.stringify(localTodoLists))

        
        


//     }
//     console.log(event)
// })


// btn.addEventListener("click", btnclicked)



// // -------getting local storage--------------

 
// const showdata = () => {
//     console.log(getdata())
//     let fetch = getdata()
//     fetch.forEach((curElem)=>{
//         let li = document.createElement("li");
//         li.innerText = curElem;
//         listcontainer.append(li)
//         //cross
//         let span = document.createElement("span")
//         span.innerText = "\u00d7";
//         li.append(span)
//     }) 
        
        
    
// }
// showdata()

// ----------------------------------------------------------------

const btn = document.getElementById("btn");
const input = document.getElementById("input");
const listcontainer = document.getElementById("list-container");
let localTodoLists = [];

// Get local storage data
const getdata = () => {
    return JSON.parse(localStorage.getItem("jstodo")) || [];
};

// Initialize localTodoLists with data from local storage
localTodoLists = getdata();

// Save data to local storage
const saveData = () => {
    localStorage.setItem("jstodo", JSON.stringify(localTodoLists));
};

// Add new todo item
const btnclicked = () => {
    const newItemText = input.value.trim().toLowerCase();

    if (newItemText === '') {
        alert("Please write some text");
    } else if (localTodoLists.some(item => item.text === newItemText)) {
        alert("Please avoid duplicate values");
    } else {
        // Add new item to the list and local storage
        const newItem = { text: newItemText, checked: false };
        localTodoLists.push(newItem);
        saveData();
        addItemToDOM(newItem);
    }

    input.value = '';
};

// Add an item to the DOM
const addItemToDOM = (item) => {
    let li = document.createElement("li");
    li.innerText = item.text;
    if (item.checked) {
        li.classList.add("checked");
    }

    // Create and append the delete (×) span
    let span = document.createElement("span");
    span.innerText = "\u00d7";
    li.append(span);

    listcontainer.append(li);
};

// Handle clicks on the todo list
listcontainer.addEventListener("click", (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle("checked");
        
        // Update the checked state in localTodoLists
        const itemText = event.target.firstChild.textContent.trim().toLowerCase();
        localTodoLists = localTodoLists.map(item => {
            if (item.text === itemText) {
                item.checked = !item.checked;
            }
            return item;
        });

        saveData(); // Update local storage with the new checked state
    } else if (event.target.tagName === 'SPAN') {
        const itemText = event.target.parentElement.firstChild.textContent.trim().toLowerCase();
        
        // Remove item from localTodoLists and update local storage
        localTodoLists = localTodoLists.filter(item => item.text !== itemText);
        saveData();
        
        // Remove the item from the DOM
        event.target.parentElement.remove();
    }
});

// Load and display existing todo items from local storage
const showdata = () => {
    localTodoLists.forEach(addItemToDOM);
    console.log(localTodoLists);
    
};

// Set up event listeners
btn.addEventListener("click", btnclicked);

// Initial display of stored todo items
showdata();
