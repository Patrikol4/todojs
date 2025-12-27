var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var deleteBtnElement = document.querySelector('#app a')

var todos = [
	'Tomar café',
	'Dar bom-dia pro meu gato',
	'Aprender Javascript',
	'Parar de usar IA de uma vez por todas'
];

function renderTodos() {

	listElement.innerHTML = '';

	for (todo of todos) {
		// ele cria o link da lista
		var todoElement = document.createElement('li');
		todoElement.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start')
		
		var todoText = document.createTextNode(todo); // cria o texto da lista

		var linkElement = document.createElement('button'); // cria o elemento do link do item

		linkElement.setAttribute('href', '#',); // define o link do item
		linkElement.classList.add('btn', 'btn-danger', 'center')

		var pos = todos.indexOf(todo); // indexa todos os itens
		linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

		var linkText = document.createTextNode(' Deletar Tarefa');

		linkElement.appendChild(linkText);

		todoElement.appendChild(todoText);
		todoElement.appendChild(linkElement);
		listElement.appendChild(todoElement);
	}
}

renderTodos();

function addTodo() {
	var todoText = inputElement.value;
	if (!inputElement.value) {
		alert("Você precisa descrever sua tarefa.")
		return console.log("Todo não criado devido a falta de descrição.")
	}
	todos.push(todoText);
	todoText = inputElement.value = '';
	renderTodos();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {

	todos.splice(pos, 1);
	renderTodos();
}

deleteBtnElement.onclick = deleteTodo;