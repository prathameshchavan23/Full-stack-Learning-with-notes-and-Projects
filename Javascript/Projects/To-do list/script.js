const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todoval');
const addBtn = document.querySelector('.btn');

// addBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     const todoText = todoInput.value;
//     if (todoText) {
//         const todoItem = document.createElement('li');
//         todoItem.className = 'todo-item';
//         todoItem.innerHTML = `
//             <span class="todo-text">${todoText}</span>
//             <button class="delete-btn">Delete</button>
//         `;
//         todoList.appendChild(todoItem);
//         todoInput.value = '';
//     }
// });

// todoList.addEventListener('click', (e) => {
//     if (e.target.classList.contains('delete-btn')) {
//         e.target.parentElement.remove();
//     }
// });


addBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    const todoText = todoInput.value;
    if(todoText){
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
            <span class="todo-text">${todoText}</span>
            <button class="delete-btn">Delete</button>
        `;
        todoList.append(todoItem);
        todoInput.value = '';
    }
})

