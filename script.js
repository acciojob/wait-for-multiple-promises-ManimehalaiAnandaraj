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
let maxTime = 0;
	results.forEach((result) => { // you forgot to wrap result in parentheses
		const row = document.createElement('tr');
		const idCell = document.createElement('td');
		idCell.textContent=`Promise ${result.id}`;
		const timeCell=document.createElement('td');
		timeCell.textContent=`${result.time.toFixed(2)} seconds`;
		row.appendChild(idCell);
		row.appendChild(timeCell);
		output.appendChild(row);

		  if (result.time > maxTime) {
            maxTime = result.time;
        }
	});
	
	// Add a row for the total time
    const totalRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    totalCell.textContent = 'Total';
    const totalTimeCell = document.createElement('td');
    totalTimeCell.textContent = `${maxTime.toFixed(2)} seconds`;
    totalRow.appendChild(totalCell);
    totalRow.appendChild(totalTimeCell);
    output.appendChild(totalRow);
}
}

document.addEventListener('DOMContentLoaded',() => {

	const output=document.getElementById('output');	
	const loadingRow=document.createElement('tr');
	loadingRow.id = 'loading'; // Assign the id 'loading' to the row
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
