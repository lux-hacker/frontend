let src = prompt("Enter sequence")
let stack = []

label: for(s of src){
    switch (s){
        case "(": stack.push(s); break;
        case ")": {
            if (stack.length == 0){
                stack.push(s)
                break label;
            }
            stack.pop(s); 
            break;
        }
    }
}

if (stack.length != 0){
    alert("Error")
} else {
    alert("Cool!")
}