let src = prompt("Enter sequence")
let stack = []

for(s of src){
    switch (s){
        case "(": stack.push(s); break;
        case ")": stack.pop(s); break;
    }
}

if (stack.length != 0){
    alert("Error")
} else {
    alert("Cool!")
}