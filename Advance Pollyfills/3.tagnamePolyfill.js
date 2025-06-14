// Polyfill of document.getElementsByTagName();

function dfs(element, tagName, result) {
  if (element == null) return;

  if (element.tagName === tagName.toUpperCase()) {
    result.push(element);
  }

  for (const child of element.children) {
    dfs(child, tagName, result);
  }
}

function getElementByTagName(body, tagName) {
  const result = [];
  for (const bodyChild of body.children) {
    dfs(bodyChild, tagName, result);
  }
  return result;
}



str = `  <div>
       <div>
         div1
           <div>
         div 2
  </div>
    
  </div>
     
  </div>
  
  <div>
    <span> Span 1 </span>
     <div>
    div 3
  </div>
  </div>
  
  <span> HI </span>
  <span><span>Hello </span> </span>`



x = getElementByTagName(dom.body, 'SPAN');

console.log(x);
// so can you see i have 16 ram of macos


// now its working well and as you can see these things works so good that


// you can skip sometimes


