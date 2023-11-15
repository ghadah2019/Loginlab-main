


document.getElementById("btn").addEventListener("click", () => {
    let name = document.getElementById("name");
    let password = document.getElementById("password");
    

    if (name.value === "" || password.value === "") {
      Swal.fire({
title: "Error",
text: "input in empty",
icon: "error",
confirmButtonText: "OK",
});
      // alert("input in empty");
    } else {
      fetch("https://655127797d203ab6626e943b.mockapi.io/users")
        .then((response) => response.json())
        .then((data) => {
          let userValid = data.find(
            (d) => name.value === d.name && password.value === d.password
          );

          if (!userValid) {
            // alert("name or password is invalled");
            Swal.fire({
title: "Error",
text: "name or password is invalled",
icon: "error",
confirmButtonText: "OK",
});
          } else {
            localStorage.setItem("User", name.value);
            window.location.href = "blog.html";
          }
        });
    }





  });
