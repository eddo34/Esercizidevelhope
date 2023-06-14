async function alfa() {
    try{
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let json = await res.json();
    const ulTodo = document.createElement("ul");
    document.body.appendChild(ulTodo);

    json.forEach((todo) => {
        const liTodo = document.createElement("li");
        liTodo.innerHTML = todo.title;
        ulTodo.appendChild(liTodo);
        
    });
    } catch(err) {
        console.log(err);
    }

}

alfa()