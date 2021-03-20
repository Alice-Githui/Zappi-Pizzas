//DOM elements
const pizzaType = document.getElementById('pizzacheckbox');
const pizzaSize = document.getElementById('pizzasize');
const crustType = document.getElementById('crust-type');
const pizzaToppings = document.getElementById('pizzatoppings')
const pizzaNumbers = document.getElementById('pizzano.')
const deliveryOption = document.getElementById('deliverydetails')
const deliveryCosts = document.getElementById('deliveryprices')


//functions



//event listeners
document.getElementById('checkoutbutton').addEventListener('click', function(event){
    event.preventDefault()

    event.target.textContent = `Your order has been received and is being processed. We will be in touch shortly.`
})
