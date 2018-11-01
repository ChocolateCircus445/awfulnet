function keyTest(event) {
  if (event.which == 13) {
    document.getElementById("iAmGroot").setAttribute("style", "color: black; user-select: none;");
    setTimeout(function(){
      document.getElementById("iAmGroot").setAttribute("style", "color: white; user-select: none;");
    }, 5000)
  }
}
