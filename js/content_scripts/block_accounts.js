//handle list of accounts to block
chrome.storage.sync.get("block_list", ({block_list}) => {
	const contentsElement = document.getElementById("contents");
	
	//setup mutation observer to check for changes in child elements of contents
	const observerConfig = {attributes: false, childList: true, subtree: true};
	
	/*function for applying filter anytime:
	 child node added
	 child node is of className for grid row of content
	*/
	const callback = function(mutationsList, observer){
		for(const mutation of mutationsList){
			if(mutation.type === 'childList'){
				if(mutation.addedNodes.length > 0){
					var addedNode = mutation.addedNodes[0];
					if(addedNode.className === 'style-scope ytd-rich-item-renderer'){
						console.log(addedNode);
						filterVideosInHome(block_list);
					}
				}
			}
		}
	}
	
	//create observer and start it
	const observer = new MutationObserver(callback);
	observer.observe(contentsElement, observerConfig);
});

//filters videos made by any account name in account_list in the YouTube homepage
function filterVideosInHome(account_list){
	//select channel name divs in block list
	let channels = getChannelNameDivsHome(account_list);
	
	/*for each element found remove closest div with id content
		note: this assumes that closes div (child or parent) is the parent one that 
		contains the video and thumbnail
	*/
	for(let i=0; i < channels.length; i++){
		let parent = getParentContentElementHome(channels[i], '#content');
		parent.remove();
	}
}

//function to select all title elements that have list of channels
function getChannelNameDivsHome(account_list){
	//to store elements with a channel name
	var elementArray = []; 
	let contentElement = document.getElementById("contents");
	let channelElements = Array.from(contentElement.querySelectorAll('.style-scope ytd-channel-name'));
	
	for(let i=0; i < channelElements.length; i++){
		//add to elementArray if element's inner text is included in account_list array
		account_list.find(account =>{
			if(account.includes(channelElements[i].innerText)){
				elementArray.push(channelElements[i]);
			}
		});
	};
	
	return elementArray;
}

//function to select nth parent of element where id=content
function getParentContentElementHome(element, elementSelector){
	//loop up parent elements until condition is met
	let parentElement = element.closest(elementSelector);
	return parentElement
}