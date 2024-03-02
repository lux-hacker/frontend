Array.prototype.reverse = function() {
    let old_length = this.length
    for(i = 0; i < old_length; i++){
        this.push(this[i])
    }
    return this
}

console.log([1,2,3].reverse())