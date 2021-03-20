//DOM elements
const pizzaType = document.getElementById('pizzacheckbox');
const pizzaSize = document.getElementById('pizzasize');
const crustType = document.getElementById('crust-type');
const pizzaToppings = document.getElementById('pizzatoppings')
const pizzaNumbers = document.getElementById('pizzano.')
const deliveryOption = document.getElementById('deliverydetails')
const deliveryCosts = document.getElementById('deliveryprices')


//functions
function updateTotalCost(){

}



//event listeners
document.getElementById('checkoutbutton').addEventListener('click', function(event){
    event.preventDefault()

    event.target.textContent = `Your order has been received and is being processed. We will be in touch shortly.`
})

//on type of pizza

pizzaType.addEventListener('change', function(event){
    event.preventDefault()

    pizzaPrice = event.target.value
   // console.log(pizzaPrice)

   updateTotalCost()
})

pizzaSize.addEventListener('change', function(event){
    event.preventDefault()

    pizzaSizePrice = parseInt(event.target.value)
    console.log(pizzaSizePrice)

    updateTotalCost()
})

crustType.addEventListener('change', function(event){
    event.preventDefault()

    crustTypePrice = parseInt(event.target.value)
    console.log(crustTypePrice)

    updateTotalCost()
})

pizzaToppings.addEventListener('change', function(event){
    event.preventDefault()

    pizzaToppingsPrice = parseInt(event.target.value)
    console.log(pizzaToppingsPrice)

    updateTotalCost()
})

pizzaNumbers.addEventListener('change', function(event){
    event.preventDefault()

    pizzaPriceOnQuantity = parseInt(event.target.value)
    console.log(pizzaPriceOnQuantity)

    updateTotalCost()
})

deliveryCosts.addEventListener('change', function(event){
    event.preventDefault()

    deliveryCostsPaid = parseInt(event.target.value)
    console.log(deliveryCostsPaid)

    updateTotalCost()
})
