



function submitData(){
    let capital,name,price;
    capital = document.querySelector("#select").value;
    name = document.querySelector("#name").value;
    price = document.querySelector("#price").value;
    
    if(capital === 'income'){
        let data = {
            capital:capital,
            name:name,
            price:price
        }
        let income = localStorage.getItem("Incomes");
        income = JSON.parse(income);
        if(income){
            
            income = {
                ...income,
                [data.name]:data,
            }
        }
        else{
            income = {
                [data.name]:data,
            }
        }
        localStorage.setItem("Incomes",JSON.stringify(income));
  
    }
    else{
        let data = {
            capital:capital,
            name:name,
            price:price
        }
        let expense = localStorage.getItem("Expenses");
        expense = JSON.parse(expense);
        if(expense){
            console.log(expense);
            expense = {
                ...expense,
                [data.name]:data,
            }
        }
        else{
            expense = {
                [data.name]:data,
            }
        }
        localStorage.setItem("Expenses",JSON.stringify(expense));
        
    }
    location.reload();
}


function displayData(){
    let incomes = localStorage.getItem("Incomes");//string
    incomes = JSON.parse(incomes);//objects
    incomes = Object.values(incomes);//arrays
    
    incomes.forEach((item) =>{
        let tableBody = document.querySelector(".tableBodyFirst");
        let tableRow = document.createElement("tr");
        let tableDataFirst = document.createElement("td");
        let tableDataSecond = document.createElement("td");
        tableDataFirst.textContent =item.name;
        tableDataSecond.textContent ="$"+ item.price+".00";

        tableBody.appendChild(tableRow);
        tableRow.appendChild(tableDataFirst);
        tableRow.appendChild(tableDataSecond);
        
        
    })

    
    let expense = localStorage.getItem("Expenses");//string
    if(expense){
        expense = JSON.parse(expense);//objects
        expense = Object.values(expense);//arrays
        
        expense.forEach((item) =>{
            let tableBody = document.querySelector(".tableBodySecond");
            let tableRow = document.createElement("tr");
            let tableDataFirst = document.createElement("td");
            let tableDataSecond = document.createElement("td");
            tableDataFirst.textContent =item.name;
            tableDataSecond.textContent ="$"+ item.price+".00";

            tableBody.appendChild(tableRow);
            tableRow.appendChild(tableDataFirst);
            tableRow.appendChild(tableDataSecond);
    })
    
        
        
    };
}

displayData();


function totalIncome(){
    totalPrice = 0;
    //fetching income from ls
    let incomes = localStorage.getItem("Incomes");
    //converting to object
    incomes = JSON.parse(incomes);
    //converting to array
    incomes = Object.values(incomes);
    //looping through each items in an array
    for(let i=0;i<incomes.length;i++){
        let price = incomes[i].price;
        price = parseInt(price);
        totalPrice += price;
        
    }
    localStorage.setItem("totalIncome",totalPrice)
}
totalIncome();

function totalExpense(){
    totalPrice = 0;
    //fetching income from ls
    
    let expense = localStorage.getItem("Expenses");
    if(expense){
        //converting to object
        expense = JSON.parse(expense);
        //converting to array
        expense = Object.values(expense);
        //looping through each items in an array
        for(let i=0;i<expense.length;i++){
            let price = expense[i].price;
            price = parseInt(price);
            totalPrice += price;
            
        }
        localStorage.setItem("totalExpense",totalPrice);
    }
    
}
totalExpense();

function total(){
    //fetching income
    let incomePrice = localStorage.getItem("totalIncome");
    //converting to integer
    incomePrice = parseInt(incomePrice);
    //fetching income
    let expensePrice = localStorage.getItem("totalExpense");
    if(expensePrice){
        //converting to integer
        expensePrice = parseInt(expensePrice);
    }else{
        expensePrice = 0;
    }
    
    
    
    localStorage.setItem("Total",incomePrice+expensePrice);
    document.querySelector(".expenses").textContent = "-$"+expensePrice;

}
total();


function remaining(){
    let income = localStorage.getItem("totalIncome");
    income = parseInt(income);
    let expense = localStorage.getItem("totalExpense");
    if(expense){
        expense = parseInt(expense);
    }else{
        expense = 0;
    }
    

    let remaining = income - expense;
    if(remaining<0){
        document.querySelector(".remaining").textContent = "-$"+remaining*-1;
    }else{
        document.querySelector(".remaining").textContent = "+$"+remaining;
    }
    
    
}
remaining();





/* 
let firstData = document.createElement("td");
        let secondData = document.createElement("td");
        firstData.textContent =name;
        secondData.textContent ="$"+ price;
        let y = document.createElement("tr");
        y.appendChild(firstData);
        y.appendChild(secondData);
        let x = document.querySelector(".tableBodyFirst")
        x.appendChild(y);
*/