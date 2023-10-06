const corsButton = document.getElementById('corsButton') as HTMLButtonElement;
const resultParagraph = document.getElementById('result') as HTMLParagraphElement;

corsButton.addEventListener('click', () => {
    // Make a fetch request to the CORS-enabled API
    fetch('http://localhost:3000/api2/data', {
        method: 'GET',
        credentials: 'include', // Send credentials if needed (cookies, HTTP authentication)
    })
        .then((response) => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
        })
        .then((data) => {
        resultParagraph.textContent = `CORS Response: ${data.message}`;
        })
        .catch((error) => {
        resultParagraph.textContent = `CORS Error: ${error.message}`;
        console.error('CORS Error:', error);
        });
});
