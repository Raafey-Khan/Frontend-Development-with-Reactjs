//   Using the `load` event


window.addEventListener(`load`, function() {
    console.log('All resources finished loading')
});



// Using the 'DomContentLoaded' event


document.addEventListener('DomContentLoaded', function() {
    console.log('DOM Fully loaded and parsed, but other resouces like images may slow')
})