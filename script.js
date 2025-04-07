//your JS code here. If required.
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

	results.forEach(result) => {
	const row=document.createElement('tr');
	const idCell=document.createElement('td');
	idCell.textContent=`Promise ${result.id}`;
	const timeCell=document.createElement('td');
	timeCell.textContent=`${result.time.toFixed(2)} seconds`;
	row.appendChild(idCell);
	row.appendChild(timeCell);
	output.appendChild(row);
	});
}

document.addEventListener('DOMContentLoaded',() => {

const output=document.getElementById('output');	
const loadingrow=document.createElement('tr');
const loadingCell=document.createElement('td');
	loadingCell.textContent='Loading...';
	loadingCell.colSpan = 2;
	loadingrow.appendChild(loadingCell);
	output.appendChild(loadingrow)

	const Promises=[
		createPromise(1),
		createPromise(2),
		createPromise(3)
	];

	Promise.all(promises)
		.then(results => {
			results.sort((a,b) => a.id - b.id);
			populateTable(results);
		});	
});
