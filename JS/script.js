//business logic
//the client chooses their pizza of choice, crust type, size of pizza, choice of toppings and if they are to be delivered or not 

function newPizzaOrder(pizzaType, pizzaSize, crustType){
    this.pizzaType = pizzaType;
    this.pizzaSize = pizzaSize;
    this.crustType = crustType;
    this.choiceToppings = []
}

newPizzaOrder.prototype.pizzaOrder =function(){return this.pizzaType + "" + this.pizzaSize + "" + this.crustType + ""+ this.choiceToppings}

let newOrder = new newPizzaOrder("Neopolitan" , "Thin Crust", " Medium")
console.log(newOrder)

//user-interface 

$(".table").click(function(event){
    event.preventDefault();

    let inputtedpizzaType = $("input.input").val()
    
})

//The client is able to see their delivery costs once they enter the distance 

$("#firstdistance").click(function(event){
    $("#deliverycosts1").toggle()
})

$("#seconddistance").click(function(event){
    $("#deliverycosts2").toggle()
})

$("#thirddistance").click(function(event){
    $("#deliverycosts3").toggle()
})