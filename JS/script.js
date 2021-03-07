//business logic
//the total price of the pizza will be based on price of pizza, price of toppings and cost of delivery 

/*function PizzaOrder(pizzaType){
    this.pizzaType = pizzaType;
    this.pizzaOptions = [];
}

function PizzaOption(pizzaSize, crustType, choiceToppings){
    this.pizzaSize = pizzaSize;
    this.crustType = crustType;
    this.choiceToppings = choiceToppings;
}

NewPizzaOrder.prototype.pizzaOrders = function(){return this.pizzaType + " " + this.pizzaOptions}

$('#placeorder').click(function(event){
    event.preventDefault();
    let inputtedPizzaType = $(".pizzacheckbox input").val()
    let inputtedCrustType = $(".crusts input").val()
    let inputtedChoiceToppings = $("form.optionals").val()

    let newPizzaOrder = new PizzaOrder(inputtedPizzaType, inputtedCrustType, inputtedChoiceToppings);
    $("ul#orderbasket").append("<span class = 'order'>" +newPizzaOrder.pizzaOrders() + "</span>")
}); */


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


//allow the client to choose their pizza size and get price 

$(".pizzacheckbox").click(function(){
    $(".pizzasize").show()
})

$(".optionalsize").click(function getTotalOne(){
    var getSubTotal = 0;
    $('.optionalsize:checked').each(function(){
      getSubTotal = parseInt($(this).val())
    })
    $("#getfirstsubtotal").html('Kshs.' + getSubTotal)
}) 

//calculate the total prices based on the number of pizzas chosen


//calculate the total price of the additional toppings chosen

$(".optionals").click(function getTotalTwo(){
    var getTotal = 0;
    $('.optionals:checked').each(function(){
        getTotal += parseInt($(this).val())
    })
    $("#gettotal").html('Kshs.' + getTotal)
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

//Client is able to add their delivery costs to their location

$(".d-distance").click(function getTotalThree(){
    var getDeliveryPrices= 0;
    $('.d-distance:checked').each(function(){
      getDeliveryPrices += parseInt($(this).val())
    })
    $("#getdeliverycosts").html('Kshs.' + getDeliveryPrices)
})

//The client is able to get their total price on checkout

function getAllCosts(){
    var getFinalPrice = getTotalOne() + getTotalTwo() + getTotalThree();

    document.getElementById("getfinalprice").innerHTML = "Your total cost is Kshs."+  getFinalPrice

} 

