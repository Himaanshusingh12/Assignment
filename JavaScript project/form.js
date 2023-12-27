
        function Validdata() {
            var fname = document.getElementById("fname").value;
            if (fname == "") {
                alert("enter your first name");
                document.getElementById("fname").focus();
                return false;    
            }
            var lname = document.getElementById("lname").value;
            if (lname == "") {
                alert("enter your last name");
                document.getElementById("lname").focus();
                return false;    
            }
            var email = document.getElementById("email").value;
            if (email == "") {
                alert("enter your email id");
                document.getElementById("email").focus();
                return false;    
            }
            var mobile = document.getElementById("number").value;
            if (mobile == "") {
                alert("enter your Mobile no");
                document.getElementById("number").focus();
                return false;    
            }
            var date = document.getElementById("birth").value;
            if (date == "") {
                alert("enter your date of birth");
                document.getElementById("birth").focus();
                return false;    
            }
            var address = document.getElementById("add").value;
            if (address == "") {
                alert("enter your address");
                document.getElementById("add").focus();
                return false;    
            }
            var city = document.getElementById("cit").value;
            if (city == "") {
                alert("enter your city name");
                document.getElementById("cit").focus();
                return false;    
            }
            var pin = document.getElementById("area").value;
            if (pin == "") {
                alert("enter your area");
                document.getElementById("area").focus();
                return false;    
            }
            var state = document.getElementById("stat").value;
            if (state == "") {
                alert("enter your state");
                document.getElementById("stat").focus();
                return false;    
            }
            var password = document.getElementById("pass").value;
            if (password == "") {
                alert("enter your password");
                document.getElementById("pass").focus();
                return false;    
            }
        }