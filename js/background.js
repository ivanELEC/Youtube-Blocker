//array of YouTube accounts to block
const block_list = [];

//initialise blocklist from default if doesn't exist
chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.get("block_list", ({block_list}) => {
		if(!block_list){
			chrome.storage.sync.set({'block_list':block_list}, function(){
				console.log('block_list is:');
				console.log(block_list);
			});
		}
	});
});
