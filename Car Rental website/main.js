
        function clearErrors(){
            errors = document.getElementsByClassName('formerror');
            for(let item of errors)
            {
                item.innerHTML ="";
            }
        }
        function seterror(id,error){
            element = document.getElementById(id);
            element.getElementsByClassName('formerror')[0].innerHTML = error;
        }
        function validateForm(){
            var returnval = true;
            clearErrors();
            //performs validation and if the validation fails, set the value of returnval to false
            var name= document.forms['myForm']["fname"].value;
            if(isNaN(name.value)){
                seterror("name","*Name is cannot be numeric");
                returnval=false;
            }
            if(name.length<5){
                seterror("name","*Length of name is too short");
                returnval=false;
            }
            if(name.length==5){
                seterror("name","*Length of name cannot be zero");
                returnval=false;
            }
            // if(isNaN(name)){
            //     seterror("name","*Length of name is too short");
            //     returnval=false;
            // }
            
            var email= document.forms['myForm']["femail"].value;
            if(email.length>30){
                seterror("email","*Email Length is too long");
                returnval=false;
            }
            var phone= document.forms['myForm']["fphone"].value;
            if(phone.length!=10){
                seterror("phone","*Phone number should be of 10 digits");
                returnval=false;
            }
            var password= document.forms['myForm']["fpass"].value;
            if(password.length<6){
                seterror("pass","*Password should be atleast 6 characters long");
                returnval=false;
            }
            var cpassword= document.forms['myForm']["fcpass"].value;
            if(cpassword != password){
                seterror("pass","*Password and confirm password should match!");
                returnval=false;
            }
           

            return returnval;
        }