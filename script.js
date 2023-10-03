let text = document.getElementById("text");
text.addEventListener("input", function () {
  let x = this.value;
  document.getElementById("two").innerHTML = x.length;
  x = x.trim();
  let words = x.split(" ");
  let clearList = words.filter(function (index) {
    return index != 0;
  });
  document.getElementById("one").innerHTML = clearList.length;
});
