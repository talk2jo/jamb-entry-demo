const mySearch = () => {
  let index = 0;
  let e = document.getElementById("searchOption");
  let selectedValue = e.options[e.selectedIndex].text;

  if (selectedValue == "Reg-no") {
    index = 1;
  } else if (selectedValue == "Year") {
    index = 5;
  } else if (selectedValue == "University") {
    index = 6;
  }

  console.log(selectedValue);

  // Declare variables 
  let input, filter, tr, td, i, txtValue;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("tbody");
  tr = document.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[index];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}