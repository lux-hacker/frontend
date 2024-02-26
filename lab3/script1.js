let array = prompt("Enter array of number").split(" ").map(Number)
array.sort((a,b) => b-a)
alert(array.join(" "))