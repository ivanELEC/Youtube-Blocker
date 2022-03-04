//array of YouTube accounts to block
let block_list = [];

//initialise blocklist from default
chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({block_list})
});