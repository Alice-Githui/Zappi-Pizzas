//business logic
//the client chooses their pizza of choice, crust type, size of pizza, choice of toppings and if they are to be delivered or not 

/*function newPizzaOrder(pizzaType, pizzaSize, crustType){
    this.pizzaType = pizzaType;
    this.pizzaSize = pizzaSize;
    this.crustType = crustType;
    this.choiceToppings = []
} */

function NewPizzaOrder(pizzaType){
    this.pizzaType = pizzaType;
    this.pizzaOptions = [];
}

function PizzaOption(pizzaSize, crustType, choiceToppings){
    this.pizzaSize = pizzaSize;
    this.crustType = crustType;
    this.choiceToppings = choiceToppings;
}

//to check if our constructors are functioning
/*
let newOrder = new NewPizzaOrder("Neopolitan")
console.log(newOrder) 

let chosenoptions = new PizzaOption("large" , "thin" , "bacon")
console.log(chosenoptions)

newOrder.pizzaOptions.push(chosenoptions);
console.log(newOrder)

NewPizzaOrder.prototype.pizzaOrders = function(){return this.pizzaType + " " + this.pizzaOptions}
//user-interface */

$(".table").click(function(event){
    event.preventDefault();

    let inputtedpizzaType = $("input.input").val()
    
})
//function that calculates the price of medium pizzas depending on the number pizzas




//console.log(subTotalPrice) 


//allow the client to customize their pizza depending on the pizza chosen
$(".pizza-type").click(function(){
    $("#pizzachoiceoptions").show() 
})

//calculate the total price of the additional toppings chosen

$(".optionals").click(function(){
    var gettotal = 0;
    $('.optionals:checked').each(function(){
        gettotal += parseInt($(this).val())
    })
    $(".gettotal").html('Kshs.' + gettotal)
})


//On clicking the delivery option, the client will input their delivery location
$("#delivery").click(function(event){
    $(".checkdeliverylocation").show()   
})
$(".submit").click(function(event){
    alert('Your order will be delivered to your location') 
})

//alert('Your order will be delivered to your location')

$("#pick-up").click(function(event){
    $(".checkdeliverylocation").hide()
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