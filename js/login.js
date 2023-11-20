let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  let name = document.getElementsByClassName("name");
  let password = document.getElementsByClassName("password");
  let validation = document.getElementById("validation");

  if (name.value === "" || password.value === "") {
    validation.innerHTML = "There inputs is empty";
    validation.style.color = "red";
  } else {
    fetch("https://655b181fab37729791a889d6.mockapi.io/user")
      .then((response) => response.json())
      .then((data) => {
        let userValid = data.find(
          (d) => name.value === d.name && password.value === d.password
        );

        if (!userValid) {
          name.style.border = "1px solid red";
          password.style.border = "1px solid red";
          validation.innerHTML = "name or password is invalled";
          validation.style.color = "red";
        } else {
          localStorage.setItem("User", name.value);
          sessionStorage.setItem("id", name.value);
          window.location.href =
            "weather.html?username=" + encodeURIComponent(name.value);
        }
      });
  }
});
