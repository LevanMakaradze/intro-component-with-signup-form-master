
//author: Levan Makaradze //

function empty(input,id){
        let Input=input;
        let ID=id;

        document.getElementById(ID).style.backgroundImage="url('assets/images/icon-error.svg')";
        document.getElementById(ID).style.backgroundRepeat="no-repeat";
        document.getElementById(ID).style.backgroundPosition="95%";
        document.getElementById(ID).style.borderColor="hsl(0, 100%, 74%)";
        document.getElementById(ID).value="";
}
function revert(input,id){
    let Input=input;
    let ID=id;
    document.getElementById(ID).style.backgroundImage="revert";
    document.getElementById(ID).value=input;
    document.getElementById(ID).style.color="grey";
    document.getElementById(ID).style.borderColor="grey";

}   
    xnam=0;
    xsur=0;
    xem=0;
    xpas=0;
function confirm(){
    Name=document.getElementById("name").value;
    Surname=document.getElementById("surname").value;
    Email=document.getElementById("email").value;
    Password=document.getElementById("pass").value;
    
    cor=0;
    if(Name==false || Name=="First Name") {
        empty("First Name","name");
        document.getElementById("noname").innerHTML="First Name cannot be empty";
        xnam++;
    }

    else {if(xnam>0){revert("First Name","name"); xnam--;}; cor++}


    if(Surname==false || Surname == "Last Name") {
        empty("Last Name","surname");
        document.getElementById("nosure").innerHTML="Last Name cannot be empty";
        xsur++;
    }
    else {if(xsur>0){revert("Last Name","surname");xsur--;}; cor++;}


    if(Email==false || Email=="Email Address") {
        empty("YourMail@example.com", "email");
        document.getElementById("noemail").innerHTML="Email Address cannot be empty";
        xem++;
    }
    else {if(xem>0){revert("Email Address","email"); xem--;}; 
            if(ValidateEmail(document.getElementById("email").value)==true) cor++; 
                else {document.getElementById("noemail").innerHTML="Looks like this is not an email";
                document.getElementById("email").style.backgroundImage="url('assets/images/icon-error.svg')";
                document.getElementById("email").style.backgroundRepeat="no-repeat";
                document.getElementById("email").style.backgroundPosition="95%";
                document.getElementById("email").value="email@example.com";
                document.getElementById("email").style.borderColor="hsl(0, 100%, 74%)";
                document.getElementById("email").style.color="hsl(0, 100%, 74%)";
    }
}


    if(Password==false || Password=="Password") {
        empty("Password", "pass");
        document.getElementById("nopass").innerHTML="Password cannot be empty";
        xpas++;
    }
    else {if(xpas>0){revert("Password","pass"); xpas--;}; cor++;}

    


    if(cor==4) {
        console.log("Submited succesfuly");
        document.getElementById("register").innerHTML="You have successfully claimed free Trial";
    }
    
}


  function ValidateEmail(input) {
    validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}
