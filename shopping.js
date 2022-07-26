var x, shopping_list, count, j, i, k, item;

// Describe this function...
function Moving_Array(x) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  var j_inc = 1;
  if (0 > x) {
    j_inc = -j_inc;
  }
  for (j = 0; j_inc >= 0 ? j <= x : j >= x; j += j_inc) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    shopping_list.push(shopping_list.shift());
  }
  Update_Count();
  var k_inc = 1;
  if (0 > x) {
    k_inc = -k_inc;
  }
  for (k = 0; k_inc >= 0 ? k <= x : k >= x; k += k_inc) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    shopping_list.unshift(shopping_list.pop());
  }
}

// Describe this function...
function Update_Count() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  count = shopping_list.shift();
  count = (typeof count === 'number' ? count : 0) + 1;
  shopping_list.unshift(count);
}

// Describe this function...
function TO_Display() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_new_list = document.getElementById('new_list');
  element_new_list.replaceChildren();
  for (i = 0; i <= 3; i++) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    count = shopping_list[0];
    shopping_list.push(shopping_list.shift());
    item = shopping_list[0];
    shopping_list.push(shopping_list.shift());
    if (count != 0) {
      let new_li = document.createElement('li');
      let new_span = document.createElement('span');
      new_span.innerText = item;

      new_li.appendChild(new_span);
      let new_span2 = document.createElement('span');
      new_span2.innerText = count;

      new_li.appendChild(new_span2);

      element_new_list.appendChild(new_li);
    }
  }
}


shopping_list = [0, 'Cheese', 0, 'Yogurt', 0, 'Butter', 0, 'Cream'];


document.getElementById('cheese').addEventListener('click', (event) => {
  Update_Count();
  TO_Display();

});

document.getElementById('yogurt').addEventListener('click', (event) => {
  Moving_Array(1);
  TO_Display();

});

document.getElementById('butter').addEventListener('click', (event) => {
  Moving_Array(3);
  TO_Display();

});

document.getElementById('cream').addEventListener('click', (event) => {
  Moving_Array(5);
  TO_Display();

});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
