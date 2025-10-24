// script.js - Creature Comfort share buttons
console.log("script.js loaded");

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM ready - attaching share handlers");

  function openCenteredPopup(url, title, w = 600, h = 400) {
    const left = window.screenX + (window.outerWidth - w) / 2;
    const top  = window.screenY + (window.outerHeight - h) / 2;
    const opts = `width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes`;
    const popup = window.open(url, title, opts);
    if (!popup) {
      console.warn("Popup blocked. Allow popups for this site to test sharing.");
    } else {
      popup.focus && popup.focus();
    }
  }

  function getUrlToShare() {
    try {
      return window.location.href || 'https://crabbster-roll.github.io/ComfortCreature-Website/';
    } catch (e) {
      return 'https://crabbster-roll.github.io/ComfortCreature-Website/';
    }
  }

  function shareOnFacebook(event) {
    event && event.preventDefault();
    const urlToShare = getUrlToShare();
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
    openCenteredPopup(facebookShareUrl, 'Share on Facebook', 600, 480);
    console.log("Facebook share attempted:", facebookShareUrl);
  }

  function shareOnTwitter(event) {
    event && event.preventDefault();
    const urlToShare = getUrlToShare();
    const btn = event && event.currentTarget;
    const textAttr = btn && btn.dataset && btn.dataset.text ? btn.dataset.text : "Check out Creature Comfort!";
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(textAttr)}`;
    openCenteredPopup(twitterShareUrl, 'Share on Twitter', 600, 420);
    console.log("Twitter share attempted:", twitterShareUrl);
  }

  const fbBtn = document.getElementById("share-facebook");
  const twBtn = document.getElementById("share-twitter");

  if (fbBtn) {
    fbBtn.addEventListener("click", shareOnFacebook);
  } else {
    console.warn('share-facebook element not found (id="share-facebook")');
  }

  if (twBtn) {
    twBtn.addEventListener("click", shareOnTwitter);
  } else {
    console.warn('share-twitter element not found (id="share-twitter")');
  }
});
