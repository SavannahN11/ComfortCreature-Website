document.addEventListener("DOMContentLoaded", function () {
  function shareOnFacebook() {
    const urlToShare = 'https://crabbster-roll.github.io/ComfortCreature-Website/';
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
    window.open(facebookShareUrl, 'Share on Facebook', 'width=600,height=400');
  }

  function shareOnTwitter() {
    const urlToShare = 'https://crabbster-roll.github.io/ComfortCreature-Website/';
    const textToShare = 'Check out Creature Comfort!';
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(textToShare)}`;
    window.open(twitterShareUrl, 'Share on X (Twitter)', 'width=600,height=400');
  }

  const shareFacebookButton = document.getElementById("share-facebook");
  const shareTwitterButton = document.getElementById("share-twitter");

  shareFacebookButton.addEventListener("click", shareOnFacebook);
  shareTwitterButton.addEventListener("click", shareOnTwitter);
});
