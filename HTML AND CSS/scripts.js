document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(this);
    const data = {
        name: formData.get('user_name'),
        cityname: formData.get('user_cityname'),
        email: formData.get('user_email'),
        contactnumber: formData.get('user_number'),
        gender: formData.get('user_gender')
    };

    // Send data to server using Fetch API
    fetch('https://jsonplaceholder.typicode.com/posts', { // Mock API endpoint for testing
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(result => {
        alert('Registration successful!');
        console.log(result);
    })
    .catch(error => {
        alert('Error in registration.');
        console.error('Error:', error);
    });
});
