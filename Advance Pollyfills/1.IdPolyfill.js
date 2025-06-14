function dfsById(element, id) {
    if (element == null) return null;
}


if (element.id == id) {
    return element;
}

for (const child of element.children) {
    const found = dfsById(child, id);
    if (found) return found;{
        
    }
    return null;
}




function getElementById(body, id) {
    for (const bodyChild of body.children) {
        const found = dfsById(bodyChild, id);
        if (found ) return found;
    }
    return null;
}