  function registerUser() {
      const name = document.getElementById("firstname").value.trim();
      const email = document.getElementById("email").value.trim();
      const mobile = document.getElementById("mobno").value.trim();
      const password = document.getElementById("pass").value;
      const confirmPassword = document.getElementById("confirmpass").value;

     
      if (!name || !email || !mobile || !password || !confirmPassword) {
        alert("Please fill all fields!");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      const userData = {
        name: name,
        email: email,
        mobile: mobile,
        password: password
      };

    
      localStorage.setItem("registerUser", JSON.stringify(userData));

      alert("Registration successful!\n\n" +
            `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}`);

      document.getElementById("firstname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("mobno").value = "";
      document.getElementById("pass").value = "";
      document.getElementById("confirmpass").value = "";
    }