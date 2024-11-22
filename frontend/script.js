// function to fetch all medicines from the backend
async function fetch_medicines() {
    try {
        // fetch the medicines from the backend and store them in the data variable
        const response = await fetch("http://127.0.0.1:8000/medicines");
        const data = await response.json();

        // select the main element and clear its content if there is any already existing
        const main = document.querySelector("main");
        main.innerHTML = "";

        // check if the data variable is not empty
        if (data.medicines && data.medicines.length > 0) {

            // create a list to display medicines
            const list = document.createElement("ul");

            // loop through each item and handle invalid data
            data.medicines.forEach((medicine) => {
                const item = document.createElement("li");
                const name = medicine.name ? medicine.name : "Name unavailable";
                const price = medicine.price ? medicine.price : "Price unavailable";

                item.textContent = `${name} : ${price}`;
                list.appendChild(item);
            });
            main.appendChild(list);
        }

        else {
            // if no medicines are found
            main.textContent = "No medicines found";
        }
    }
    catch (error) {
        // handle errors eg. the server being down
        console.error("Error fetching medicines:", error);
        const main = document.querySelector("main");
        main.textContent = "Failed to fetch medicines. Please try again later.";
    }
}

// initialize the app
function init() {
    fetch_medicines();
}

// wait until the page content is fully loaded
document.addEventListener("DOMContentLoaded", init);