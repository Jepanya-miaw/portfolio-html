const form = document.getElementById('contactForm');

    form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevent the default form submission

      const formData = new FormData(form); // Gather form data

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          alert('Your message has been sent successfully!');
          form.reset(); // Clear the form fields
        } else {
          alert('There was an error sending your message. Please try again.');
        }
      } catch (error) {
        alert('An error occurred. Please check your connection and try again.');
      }
    });  