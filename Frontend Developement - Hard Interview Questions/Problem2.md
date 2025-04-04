Question 2)

Why should one avoid extending native JavaScript objects ?



// Problematic extension of a native object

Array.prototype.customMethod = function(){
    // Custom Implementation
}


// Another Libraray doing the same


Array.prototype.customMethod = function() {
    // Different implementation
}


// Polyfill example

if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^\s+\s+$\g, '')
    }
}