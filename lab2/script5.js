function isPolyndrom(s){
    for(let i = 0; i < s.lenth/2; i++){
        if (s[i] != s[s.lenth - i - 1]){
            return false
        }
    }
    return true
}

let s = prompt("Enter polyndrom str")
alert(isPolyndrom(s) == true ? "YES" : "NO")