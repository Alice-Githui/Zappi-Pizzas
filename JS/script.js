//DOM elements
const pizzaType = document.getElementById('pizzacheckbox');
const pizzaSize = document.getElementById('pizzasize');
const crustType = document.getElementById('crust-type');
const pizzaToppings = document.getElementById('pizzatoppings')
const pizzaNumbers = document.getElementById('pizzano.')
const deliveryOption = document.getElementById('deliverydetails')
const deliveryCosts = document.getElementById('deliveryprices')

const pizzaDetails = document.getElementById('allpizzadetails')
const payableDeliveryFees = document.getElementById('returned-delivery-costs')
const totalCostsCharged = document.getElementById('basketdetails')

//values of above variables
let pizzaVariety = (pizzaType.value);
let pizzaSizePrice = parseInt(pizzaSize.value);
let crustTypePrice = parseInt(crustType.value);
let pizzaToppingsPrice = parseInt(pizzaToppings.value);
let pizzaPriceOnQuantity = parseInt(pizzaNumbers.value);
let deliveryCostsPaid = parseInt(deliveryCosts.value)

//console.log(pizzaVariety)

//functions
function updateTotalCost(){

    
    pizzaDetails.innerHTML = `You have ordered a ${pizzaVariety}`
    payableDeliveryFees.innerHTML = `Your delivery fees are Kshs. ${deliveryCostsPaid}`
    totalCostsCharged.innerHTML = ((pizzaSizePrice + crustTypePrice + pizzaToppingsPrice )* (pizzaPriceOnQuantity)) + (deliveryCostsPaid)

}



//event listeners
document.getElementById('checkoutbutton').addEventListener('click', function(event){
    event.preventDefault()

    event.target.textContent = `Your order has been received and is being processed. We will be in touch shortly.`
})

//on type of pizza

pizzaType.addEventListener('change', function(event){
    event.preventDefault()

    pizzaVariety = event.target.value
    console.log(pizzaVariety)

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


document.getElementById('location-button').addEventListener('click', function(event){
    event.preventDefault()

    event.target.textContent = `We will deliver your order to your location`
})

