chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1, 2, 3, 4],
    addRules: [
      {
        id: 1,
        priority: 1,
        action: { type: "block" },
        condition: { urlFilter: "*://*.doubleclick.net/*", resourceTypes: ["script", "image", "xmlhttprequest"] }
      },
      {
        id: 2,
        priority: 1,
        action: { type: "block" },
        condition: { urlFilter: "*://*.googlesyndication.com/*" }
      },
      {
        id: 3,
        priority: 1,
        action: { type: "block" },
        condition: { urlFilter: "*://*.adnxs.com/*" }
      },
      {
        id: 4,
        priority: 1,
        action: { type: "block" },
        condition: { urlFilter: "*://*.adsafeprotected.com/*" }
      }
    ]
  });
});
