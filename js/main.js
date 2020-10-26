// Enter your JavaScript for the solution here...
window.addEventListener("load", function () {
  let form = document.querySelector(".meme-form");
  let viewMeme = document.querySelector(".meme-display img");
  const memeImage = document.querySelector("#meme-image");

  memeImage.addEventListener("change", function (e) {
    const selectedImage =
      e.currentTarget.options[e.currentTarget.selectedIndex];
    updateImage(e.currentTarget.value);
  });

  function updateImage(whichImage) {
    const path = `img/${whichImage}.png`;
    viewMeme.src = path;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let error = document.querySelector(".error");
    let form = e.target;
    let topText = form.elements.memeTopText;
    let bottomText = form.elements.memeBottomText;

    if (topText.value.trim() == "") {
      error.innerHTML = "Please enter a value for the top text";
      topText.focus();
    } else if (bottomText.value.trim() == "") {
      error.innerHTML = "Please enter a value for the bottom text";
      bottomText.focus();
    } else {
      document.querySelector("p.top-text").innerHTML = topText.value;
      topText.value = "";
      document.querySelector("p.bottom-text").innerHTML = bottomText.value;
      bottomText.value = "";
      error.innerHTML = "";
    }

    function resetForm(e) {
      document.getElementsByTagName("img").src =
        "https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown";
      document.querySelector("p.top-text").innerHTML = "";
      document.querySelector("p.bottom-text").innerHTML = "";
    }
    form.addEventListener("reset", resetForm);
  });
});
