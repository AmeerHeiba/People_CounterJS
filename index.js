let counter = 0;
let total = 0;
let counter_sc = document.getElementById("counter_sc");
let history_pan = document.getElementById("history_pan");
let history = [];

function getTotal()
{
    for (i = 0; i < history.length; i++) {

        total +=history[i];
        
      } 

    console.log(total);
}

function increment()
{
    counter = counter + 1;
    counter_sc.innerHTML=(counter);
}

function reset()
{
    counter = 0;
    counter_sc.innerHTML=(counter);
}

function save()
{
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    history.push(counter);
    console.log(history);
    reset();
    history_pan.innerHTML=(history);
    
}




