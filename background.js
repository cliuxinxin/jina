chrome.browserAction.onClicked.addListener(function(tab) {
    // 获取当前标签页的URL
    var currentUrl = tab.url;
  
    // 检查URL是否已经包含所需前缀
    if (!currentUrl.startsWith("https://r.jina.ai/")) {
      var newUrl = "https://r.jina.ai/" + currentUrl;
      
      // 在新标签中打开修改后的URL
      chrome.tabs.create({url: newUrl});
    }
  });
  