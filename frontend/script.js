document.addEventListener('DOMContentLoaded', () => {
    const medicine_list = document.getElementById('list');
    const medicine_form = document.getElementById('medicine-form');
    const update_form = document.getElementById('update-form');



    // function to display the list of me
    async function display_medicines() {
        try {
            const response = await fetch('http://localhost:8000/medicines');

            // check if the response is ok
            if (!response.ok) throw new Error('Failed to fetch medicines');

            // parse the response into JSON
            const data = await response.json();

            // clear the current list of medicines
            medicine_list.innerHTML = '';

            // loop through medicines and display each one
            data.medicines.forEach(({ name = "", price = null }) => {
                const item = document.createElement('li');
                const name_span = document.createElement('span');
                const price_span = document.createElement('span');

                name_span.className = 'medicine-name';
                name_span.textContent = name || "Name Unavailable";
                price_span.className = 'medicine-price';
                price_span.textContent = price || "Price Unavailable";

                item.append(name_span, price_span);
                medicine_list.appendChild(item);
            });
        }
        catch (error) {
            console.error('Error:', error);
        }
    }


    // function to add a new medicine
    async function add_medicine(event) {

        // prevent the default form submission
        event.preventDefault();

        // get form values
        const name = document.getElementById('medicine-name').value;
        const price = parseFloat(document.getElementById('medicine-price').value);

        try {
            // create FormData to send form data
            const form_data = new FormData();
            form_data.append('name', name);
            form_data.append('price', price);

            // send POST request to create medicine
            const response = await fetch('http://localhost:8000/create', {
                method: 'POST',
                body: form_data
            });

            if (!response.ok) throw new Error('Failed to add medicine');

            // clear form inputs
            document.getElementById('medicine-name').value = '';
            document.getElementById('medicine-price').value = '';

            // refresh the medicine list
            await display_medicines();
        }
        catch (error) {
            console.error('Error:', error);
            alert('Failed to add medicine. Please try again.');
        }
    }

    // function to update an already existing medicine
    async function update_medicine(event) {

        event.preventDefault();

        const name = document.getElementById('update-name').value;
        const price = parseFloat(document.getElementById('update-price').value);

        try {
            const form_data = new FormData();
            form_data.append('name', name);
            form_data.append('price', price);

            const response = await fetch('http://localhost:8000/update', {
                method: 'POST',
                body: form_data
            });

            if (!response.ok) throw new Error('Failed to update medicine');

            // clear form inputs
            document.getElementById('update-name').value = '';
            document.getElementById('update-price').value = '';

            // refresh the medicine list
            await display_medicines();
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to update medicine. Please try again.');
        }
    }

    // function to delete a medicine
    async function delete_medicine(event) {

        event.preventDefault();

        // get the name of the medicine to delete
        const name = document.getElementById('delete-name').value;

        try {
            // create FormData to send form data
            const form_data = new FormData();
            form_data.append('name', name);

            // send DELETE request to delete medicine
            const response = await fetch('http://localhost:8000/delete', {
                method: 'DELETE',
                body: form_data
            });

            // check if the response is ok
            if (!response.ok) throw new Error('Failed to delete medicine');

            // clear form inputs
            document.getElementById('delete-name').value = '';

            // refresh the medicine list
            await display_medicines();
        }

        catch (error) {
            console.error('Error:', error);
            alert('Failed to delete medicine. Please try again.');
        }
    }


    // function to display the average price of all medicines
    async function average_price(event) {

        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/average');

            if (!response.ok) throw new Error('Failed to fetch average price');

            const data = await response.json();

            alert(`Average Price: ${data.average_price}`);
        }
        catch (error) {
            console.error('Error:', error);
            alert('Failed to fetch average price. Please try again.');
        }
    }

    // add event listeners
    medicine_form.addEventListener('submit', add_medicine);
    update_form.addEventListener('submit', update_medicine);
    const delete_form = document.getElementById('delete-form');
    delete_form.addEventListener('submit', delete_medicine);
    const calculate_button = document.getElementById('calculate-average');
    calculate_button.addEventListener('click', average_price);

    display_medicines();
});