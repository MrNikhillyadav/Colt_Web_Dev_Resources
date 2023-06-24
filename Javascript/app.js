let todos = ['Wake up at 6', "Go for a walk"];
let input = prompt("What would you like to do?");
while(input !== 'quit' && input !== 'q'){

    if(input === 'list'){
            console.log('##################')
            for(i=0 ; i < todos.length; i++){
                console.log(` ${i}: ${todos[i]}`);
            }
            console.log('##################')
    }

    else if(input === 'new'){

        const newTodo = prompt("Enter new todo items");

        todos.push(newTodo);
        console.log(` ${newTodo} added to the list`);
    }
    else if( input === 'delete'){

        const index = parseInt(prompt('Enter the index you want to delete'));
        console.log(index);
        //*****Important Condition*******/
        if(!isNaN(index) && index >= 0 && index < todos.length){
            const deleted = todos.splice(index,1);
            console.log(' ${deleted[0]} is deleted! '); // Access the first element of the deleted array //
        }else{
            console.log('Unknown Index');
        }
    }

    input = prompt("What would you like to do?");
    
}
console.log("OK YOU QUIT THE APP");