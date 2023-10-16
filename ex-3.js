const todos = [
	{ topic: "Doing pre-work", completed: true },
	{ topic: "Workout", completed: false },
	{ topic: "Playing computer games", completed: true },
	{ topic: "Relax", completed: false },
	{ topic: "Clean the room", completed: true },
  ];
  
  function getTodoTopics(todos) {
	// Start coding here
	let topicResult = todos.map(function topics(todos){return todos.topic})
	console.log(topicResult)
  }
  
  getTodoTopics(todos);
  
  /* 
	  Output:
	  [
		  'Doing pre-work',
		  'Workout',
		  'Playing computer games',
		  'Relax',
		  'Clean the room'
	  ]
  */
  
  