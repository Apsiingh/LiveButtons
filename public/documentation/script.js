
document.getElementById("copy-button").addEventListener("click", function() {
    var text = document.getElementById("text-to-copy").innerText;
    navigator.clipboard.writeText(text)
      .then(function() {
        console.log('Text copied to clipboard');
        // You can add visual feedback or a message here if needed
      })
      .catch(function(err) {
        console.error('Unable to copy text: ', err);
      });
  });
  