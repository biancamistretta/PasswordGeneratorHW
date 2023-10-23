var generateBtn = document.querySelector("#generate");

        generateBtn.addEventListener("click", function() {
            var length = parseInt(prompt("Enter password length between 8 and 128 characters:"));
            if (isNaN(length) || length < 8 || length > 128) {
                alert("Please enter a valid password length between 8 and 128.");
                return;
            }
// define the question prompts:
            var includeLowercase = confirm("Include lowercase characters?");
            var includeUppercase = confirm("Include uppercase characters?");
            var includeNumbers = confirm("Include numeric characters?");
            var includeSpecialChars = confirm("Include special characters?");

            // if they do not put an answer in the prompt:
            if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
                alert("At least one character type should be selected.");
                return;
            }
// define the choices for the question promots:
            var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
            var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var numberChars = "0123456789";
            var specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
            var allChars = "";
            var password = "";


            //if statements:
            if (includeLowercase) {
                allChars += lowercaseChars;
                password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
            }
            if (includeUppercase) {
                allChars += uppercaseChars;
                password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
            }
            if (includeNumbers) {
                allChars += numberChars;
                password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
            }
            if (includeSpecialChars) {
                allChars += specialChars;
                password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
            }

            for (var i = password.length; i < length; i++) {
                var randomIndex = Math.floor(Math.random() * allChars.length);
                password += allChars.charAt(randomIndex);
            }
            password = password.split('').sort(function() { return 0.5 - Math.random() }).join('');

            var passwordText = document.querySelector("#password");
            passwordText.textContent = password;
        });


