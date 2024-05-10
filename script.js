    // drop down menu function

    let dropdownToggle = document.querySelectorAll(".dropdown-toggle");
    let dropdownMenu = document.querySelectorAll(".dropdown-menu");

    // Add event listeners for each dropdown toggle
    dropdownToggle.forEach(function (toggle, index) {
      toggle.addEventListener("click", function (event) {
        event.preventDefault();
        // Toggle the class for the corresponding dropdown menu
        dropdownMenu[index].classList.toggle("show");
        let icon = toggle.querySelector("i.fa-solid");
        // Toggle the angle icon
        if (dropdownMenu[index].classList.contains("show")) {
          icon.classList.remove("fa-angle-down");
          icon.classList.add("fa-angle-up");
        } else {
          icon.classList.remove("fa-angle-up");
          icon.classList.add("fa-angle-down");
        }
      });

      // Close dropdowns if clicked outside
      document.addEventListener("click", function (event) {
        if (
          !toggle.contains(event.target) &&
          !dropdownMenu[index].contains(event.target)
        ) {
          dropdownMenu[index].classList.remove("show");
          let icon = toggle.querySelector("i.fa-solid");
          icon.classList.remove("fa-angle-up");
          icon.classList.add("fa-angle-down");
        }
      });
    });