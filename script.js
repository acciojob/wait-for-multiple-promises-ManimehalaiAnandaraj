function createPromise(id) {
	const delay=Math.random() * 2000 + 1000;
	return new Promise(resolve =>{
		setTimeout(() => {
			resolve ({id:id,time:delay/1000});
		},delay);
	});	
}

function populateTable(results) {
	const output=document.getElementById('output');
	output.innerHTML='';

	results.forEach((result) => { // you forgot to wrap result in parentheses
		const Row=document.createElement('tr');
		const idCell=document.createElement('td');
		idCell.textContent=`Promise ${result.id}`;
		const timeCell=document.createElement('td');
		timeCell.textContent=`${result.time.toFixed(2)} seconds`;
		Row.appendChild(idCell);
		Row.appendChild(timeCell);
		output.appendChild(Row);
	});
}

document.addEventListener('DOMContentLoaded',() => {

	const output=document.getElementById('output');	
	const loadingRow=document.createElement('tr');
	const loadingCell=document.createElement('td');
	loadingCell.textContent='Loading...';
	loadingCell.colSpan = 2;
	loadingRow.appendChild(loadingCell);
	output.appendChild(loadingRow)

	const promises=[ // changed Promises to promises
		createPromise(1),
		createPromise(2),
		createPromise(3)
	];

	Promise.all(promises) // now it matches the array name
		.then(results => {
			results.sort((a,b) => a.id - b.id);
			populateTable(results);
		});	
});