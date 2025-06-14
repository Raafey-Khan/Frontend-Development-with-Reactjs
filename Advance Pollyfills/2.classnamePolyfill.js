// getElementByClassName

function dfsByClass(element, className, result) {
    if (element == null) return;

    if (element.classList && element.classList.contains(className)) {
        result.push(element);
    }

    for (const child of element.children){
        dfsByClass(child, className, result)
    }


}


function getElementByClassName(body, className) {
    const result = [];
    for(const bodyChild of body.children) {
        dfsByClass(bodyChild, className, result);
    }
    return result
}
