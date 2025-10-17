// Initialization for List.js
document.addEventListener('DOMContentLoaded', (event) => {
    var options = {
        // 'problems-list' is the ID of the main container in index.html
        valueNames: [ 'title', 'description', 'topic', 'difficulty' ]
        // List.js will search the text content of any element 
        // with one of these classes inside the container.
    };

    var problemList = new List('problems-list', options);
    
    // Optional: Add logic for KaTeX to render the math after the list is loaded
    // This uses the Katex auto-render extension to process the LaTeX in your HTML.
    renderMathInElement(document.body, {
        delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
        ]
    });
});