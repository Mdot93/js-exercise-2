var userSubmit = document.querySelector('#user-submit');
var toDoList = document.querySelector('#to-do-list');
function addToDo(event){
	event.preventDefault();

	
	var toDoList = document.querySelector('#to-do-list');

	if(userInput.value === ''){
		return false;
	}
	
	toDoList.innerHTML += '<li><i class="fa fa-window-close" aria-hidden="true"></i>' + userInput.value + '</li>';

	userInput.value = '';
}
function removeToDo(event){
	console.log(event.target.classList.contains('close-to-do'));
	if (event.target.classList.contains('close-to-do')){

	}
}



toDoList.addEventListener('click' ,removeToDo,false);
userSubmit.addEventListener('click', addToDo, false);