(function () {
  var shareUrl = function (hook, vm) {
    hook.doneEach(function () {
      // supports share
      if (navigator.share) {
        var share_text = document.getElementById("__docsify_share_text");
        var text = share_text?.innerText;
        if (share_text) share_text.remove();
        window.sharepost = () => {
          navigator.share({
            url: window.location.href,
            text: text || document.title,
            title: document.title,
          });
        };
      } //else alert?
    });
  };

  // Add plugin
  $docsify = $docsify || {};
  $docsify.plugins = [].concat($docsify.plugins || [], shareUrl);
})();