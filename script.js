document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    // Placeholder for sending data (we’ll update this later)
    fetch('https://script.google.com/macros/s/AKfycbypLLt6e9LhN_IK9z1xyEtxNozteuxf442Q5tC9101cD6Wlb-Z4BS4W6UebBHhr56rf/exec', {
        method: 'POST',
        body: JSON.stringify({ email, message }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            formMessage.textContent = 'Message sent successfully!';
            formMessage.style.color = 'green';
            this.reset(); // Clear the form
        } else {
            formMessage.textContent = 'Error sending message.';
            formMessage.style.color = 'red';
        }
    })
    .catch(error => {
        formMessage.textContent = 'Error: ' + error.message;
        formMessage.style.color = 'red';
    });
});