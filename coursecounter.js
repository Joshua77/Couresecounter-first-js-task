var course = ["HTML", "CSS", "Javascript"];
var name = ["Joshua Akinola"]

var text = "";
var i;
for (i = 1; i <= 200; i++) {
	if(i % 2 != 0)
  console.log(text += i + "<br>");
}
document.getElementById("demo").innerHTML = text;
