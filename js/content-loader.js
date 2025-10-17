document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('content-container');
    
    // 1. Get the file path from the URL's query string
    const urlParams = new URLSearchParams(window.location.search);
    const filePath = urlParams.get('file');

    if (filePath) {
        // 2. Use the fetch API to retrieve the file contents
        fetch(filePath)
            .then(response => {
                // Check if the request was successful
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                // Convert the response to text
                return response.text();
            })
            .then(data => {
                // 3. Inject the fetched content (HTML/XML source) into the container
                container.innerHTML = data;
                
                // 4. (Crucial for Math) Re-render KaTeX/MathJax 
                //    after the new content has been injected
                if (typeof renderMathInElement === 'function') {
                    renderMathInElement(container, {
                        delimiters: [
                            {left: '$$', right: '$$', display: true},
                            {left: '$', right: '$', display: false},
                        ]
                    });
                }
            })
            .catch(error => {
                // Handle any errors (e.g., file not found)
                container.innerHTML = `<p style="color: red;">Error loading content: ${error.message}</p>`;
                console.error('Fetch error:', error);
            });
    } else {
        container.innerHTML = '<p>No problem file specified in the URL.</p>';
    }
});