//event listeners
window.addEventListener('DOMContentLoaded', function(){
	var addButtonElem = document.getElementById('block_add_button');
	//handle account submission
	addButtonElem.addEventListener('click', function(){
		submitAccount();
	});
})

function updateDropdownList(accountName){
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

function updateStorage(accountName){
	chrome.storage.sync.get("block_list", ({block_list}) => {
		block_list.push(accountName)
		chrome.storage.sync.set({'block_list':block_list}, function(){
			console.log('block_list is:');
			console.log(block_list);
		})
	})
}

function submitAccount(){
	//get account name from input 
	var inputVal = document.getElementById('block_account_name').value;
	updateDropdownList(inputVal);
	updateStorage(inputVal);
}