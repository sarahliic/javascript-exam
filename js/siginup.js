let btn = document.querySelector("#sub-btn");

// Events Listener
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let username = document.querySelector(".username");
  let user = document.querySelector(".user");
  let emailUser = document.querySelector(".email-user");
  let passwordUser = document.querySelector(".password-user");

  let usernameRegex = /^[A-Za-z]{3,}$/;
  let userValue = /^[A-Za-z]{5,}$/;
  let emailRegex =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  let passwordUserValue = /^\d{4,}$/;

  // validation
  if (
    username.value === "" ||
    user.value === "" ||
    emailUser.value === "" ||
    passwordUser.value === ""
  ) {
    alert("inputs is empty");
  } else if (username.value.match(usernameRegex)) {
    alert("invalied user name");
  } else if (user.value.match(userValue)) {
    alert("invalied user ");
  } else if (emailUser.value.match(emailRegex)) {
    alert("invalied Email");
  } else if (passwordUser.value.match(passwordUserValue)) {
    alert("invalied password name");
  } else {
    fetch("https://655b181fab37729791a889d6.mockapi.io/user", {
      method: "POST",
      body: JSON.stringify({
        username: username.value,
        user: user.value,
        emailUser: emailUser.value,
        password: passwordUser.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        window.location.href = "Login.html";
      });
  }
});
