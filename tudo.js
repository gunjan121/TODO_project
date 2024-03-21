// let todolist=[]
let todolist=[
		{
			item:'buy milk',
			dueDate:'4/3/2023'
		},
		{
			item:'go to college',
			dueDate:'4/7/2023'
		}
	];


display()

function addTodo()
{
	let inputelement=document.querySelector("#input-ele");
	// let inputItem=inputelement.value;
	let todoitem=inputelement.value;

	let dateElement=document.querySelector("#todo-Date")
	let todoDate=dateElement.value;

	todolist.push({item : todoitem, dueDate : todoDate})
  	inputelement.value='';
  	dateElement.value='';
  	display()
}


// function display(){
// 	let displayElement=document.querySelector("#todo-item");
// 	displayElement.innerText=''
// 	for(let i=0; i<todolist.length;i++)
// 	{
// 	displayElement.innerText=displayElement.innerText+' '+todolist[i];

// 	}

// }


function display(){
	let containerElements=document.querySelector(".todo-container");
	console.log("conatainer value",containerElements)
	let newhtml='';
	for(let i=0; i<todolist.length;i++)
	{
		let todoItem=todolist[i].item;
		let dueDate=todolist[i].dueDate;
		//destructuring 
		//let {item,dueDate}=todolist[i];

		newhtml +=`
		<div>
			<span>${todoItem}</span>
			<span>${dueDate}</span>
			<button onclick="todolist.splice(${i},1);
			display()"> Delete</button>
		</div>
		`;
	}


	// 	newhtml +=`
	// 	<div>
	// 		<span>${todolist[i]}</span>
	// 		<button onclick="todolist.splice(${i},1);
	// 		display()"> Delete</button>
	// 	</div>
	// 	`;
	// }
	containerElements.innerHTML=newhtml;
}
