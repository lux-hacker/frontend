if (localStorage["counter"] == undefined){
    localStorage.setItem("counter", 1)
} else {
    localStorage.setItem("counter", Number(localStorage.getItem("counter")) + 1)
}

alert(localStorage.getItem("counter"))