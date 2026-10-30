
let output = document.querySelector("#output");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {

  let input = document.querySelector("#input").value;

  // Convert input string into an array of numbers
  let arr = input.trim().split("").map(Number);

  // Get array size
  let size = arr.length;

  // Create a Map
  let mp = new Map();

  // Count frequency of each number
  arr.forEach((num) => {

    if (mp.has(num)) {
      mp.set(num, mp.get(num) + 1);
    } else {
      mp.set(num, 1);
    }

  });

  let ans = -1;

  // Find majority element
  mp.forEach((freq, num) => {

    if (freq > Math.floor(size / 2)) {
      ans = num;
    }

  });

  output.textContent = ans;

});


