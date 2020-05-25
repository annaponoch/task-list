let container = document.querySelector('#container');
let input = document.createElement('input');
let btn = document.createElement('button');
let ul = document.createElement('ul');

btn.textContent = 'Add';
//
      container.appendChild(ul);
      container.appendChild(input);
      container.appendChild(btn);
//
let your_tasks = [];
if(localStorage.getItem('your_tasks') && localStorage.getItem('your_tasks').length != 0) {
	let sorted = JSON.parse(localStorage.getItem("your_tasks"));
	sorted.forEach(function(elem, index) {
		element = document.createElement('li')
		element.textContent = elem
		ul.appendChild(element)
	});
}
//
     function sorting() {
let arr = Array.from(document.querySelectorAll('li'));
let sorted = arr.map(elem => elem.textContent).sorting()
       localStorage.setItem("your_tasks", JSON.stringify(sorted));
       sorted.forEach((elem, index) =>
		arr[index].textContent = elem
	)
}
//
    btn.onclick = function() {
if(input.value.length != 0 && input.value.replace(/\s/g,"") != "") {
let li = document.createElement('li');
   li.textContent = input.value;
   ul.appendChild(li);
   input.value = '';

sorting();
	}
}
//
input.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
event.preventDefault();
btn.click();
  }
});