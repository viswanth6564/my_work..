function checkLink() {
    let url = document.getElementById("urlInput").value.toLowerCase();
    let result = document.getElementById("result");
  
    let harmfulWords = ["login", "verify", "bank", "free", "reward"];
    let shortenedLinks = ["bit.ly", "tinyurl", "goo.gl"];
  
    let isHarmful = false;
  
    harmfulWords.forEach(word => {
      if (url.includes(word)) {
        isHarmful = true;
      }
    });
  
    shortenedLinks.forEach(short => {
      if (url.includes(short)) {
        isHarmful = true;
      }
    });
  
    if (isHarmful) {
      result.style.color = "red";
      result.innerText = "⚠️ This link may be harmful!";
    } else {
      result.style.color = "green";
      result.innerText = "✅ This link looks safe.";
    }
  }
  