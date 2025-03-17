const newParagraph = document.createElement("p")
newParagraph.innerHTML = "P Tag 3 created using javascript"

const firstDiv = document.getElementById("div1")
firstDiv.appendChild(newParagraph)