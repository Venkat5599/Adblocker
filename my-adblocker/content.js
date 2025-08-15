const adSelectors = [
  'iframe[src*="ads"]',
  '.ad-banner',
  '.adsbygoogle',
  '#player-ads',
  '.ytp-ad-module',
  '.ad-container',
  '.sponsor', 
  '[id*="ad-"]'
];

function removeAds() {
  adSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => el.remove());
  });
}

// Run every second to catch dynamically loaded ads
setInterval(removeAds, 1000);