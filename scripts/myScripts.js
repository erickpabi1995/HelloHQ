const ExpandIcon = document.getElementById("expandIcon");

if (ExpandIcon) {
  ExpandIcon.addEventListener("click", function () {
    this.innerText =
      this.innerText === "expand_less" ? "expand_more" : "expand_less";
  });
}
