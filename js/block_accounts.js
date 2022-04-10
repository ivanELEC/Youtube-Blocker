//event listeners
window.addEventListener('DOMContentLoaded', (event) =>{
	var addButtonElem = document.getElementById('block_add_button');
	addButtonElem.onclick = submitAccount;
})

//functions
function addToBlockDropdown(accountName){
	//clone dropdown list item template
	var listItemTemplate = document.getElementById('dropdown-li');
	var clone = listItemTemplate.content.cloneNode(true);

	//set account name in list item
	var cloneLinkNode = clone.querySelectorAll('a');
	cloneLinkNode = cloneLinkNode[0];
	cloneLinkNode.innerText = accountName;

	//insert clone into dropdown list
	var dropdownElem = document.getElementById('accounts-dropdown');
	dropdownElem.appendChild(clone);
	
}

function submitAccount(){
	console.log('test');
	var inputVal = document.getElementById('block_account_name').value;
	addToBlockDropdown(inputVal);
}

