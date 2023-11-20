let btn = document.querySelector("#sub-btn");

// Events Listener
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let username = document.querySelector(".username");
  let user = document.querySelector(".user");
  let emailUser = document.querySelector(".email-user");
  let passwordUser = document.querySelector(".password-user");

  //   let usernameRegex = /d+$/g;
  let userValue = /\d+$/g;
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  //   let passwordUserValue = /^\d+([0-9]+$/g;

  // validation
  if (
    username.value === "" ||
    user.value === "" ||
    emailUser.value === "" ||
    passwordUser.value === ""
  ) {
    alert("inputs is empty");
  } else if (username.value.length > 3 && typeof username.value === "string") {
    alert("invalied user name");
  } else if (user.value.match(userValue)) {
    alert("invalied user ");
  } else if (emailUser.value.match(emailRegex)) {
    alert("invalied Email");
  } else if (
    passwordUser.value.length > 4 &&
    typeof passwordUser.value === "number"
  ) {
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
      });
  }
});
