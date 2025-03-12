// alert()

//login button click
document.getElementById("btn-login")
    .addEventListener("click", function (event) {
        // console.log("hello");
        event.preventDefault();
        //put 11 digits in acount number and 1234 as pin
        const accountNumber = document.getElementById("account-number").value;
        const pin = document.getElementById("pin").value;
        const convertedPin = parseInt(pin);

        if(accountNumber.length === 11 && convertedPin === 1234){
            window.location.href ="main.html"
        }
        else{
            alert("invalid input");
        }







    })