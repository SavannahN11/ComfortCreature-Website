document.addEventListener("DOMContentLoaded", function () {
  // Social Media Sharing Functions
  function shareOnFacebook() {
    // Use your actual website link here
    const urlToShare = 'https://crabbster-roll.github.io/ComfortCreature-Website/';
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
    window.open(facebookShareUrl, 'Share on Facebook', 'width=600,height=400');
  }

  function shareOnTwitter() {
    // Use your actual website link and message here
    const urlToShare = 'https://crabbster-roll.github.io/ComfortCreature-Website/';
    const textToShare = 'Check out Creature Comfort!';
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(textToShare)}`;
    window.open(twitterShareUrl, 'Share on Twitter', 'width=600,height=400');
  }

  // Event listeners for buttons
  const shareFacebookButton = document.getElementById("share-facebook");
  const shareTwitterButton = document.getElementById("share-twitter");

  shareFacebookButton.addEventListener("click", shareOnFacebook);
  shareTwitterButton.addEventListener("click", shareOnTwitter);
});
