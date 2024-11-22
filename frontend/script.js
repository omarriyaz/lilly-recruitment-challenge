document.addEventListener('DOMContentLoaded', () => {
    const medicine_list = document.getElementById('list');

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

    // fetch medicines when the page loads
    display_medicines();
});