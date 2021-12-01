let counter = 1
let $count = document.getElementById("count")


let $menos = document.querySelector(".btn-subtract");
$menos.addEventListener('click', function () {
  if (counter > 0) {
    counter = counter - 1
    $count.innerHTML = `<p>${counter}</p>`
  }
})


let $suma = document.querySelector(".btn-add");
$suma.addEventListener('click', function () {
  if (counter <= 10) {
    counter = counter + 1
    $count.innerHTML = `<p>${counter}</p>`
}
})