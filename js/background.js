//array of YouTube accounts to block
const block_list = [];

//initialise blocklist from default
chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({'block_list':block_list}, function(){
		console.log('block_list is:');
		console.log(block_list);
	})
});
