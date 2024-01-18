
let animalsContainer = document.getElementById("animal-info");
let count = 0;

let fetchBtn = document.getElementById("btn");

fetchBtn.addEventListener("click", e => {
    count += 1;
    let link = `./animals-${count}.json`;

    fetch(link).then(data => {
        return data.json();
    }).then(json => {
        console.log(json);
        for (const animal in json) {
            let desc = document.createElement("div");
            desc.textContent = json[animal];

            animalsContainer.append(desc);
        }

    }).catch(err => {
        console.log(err);
    });
    if (count >= 3) {
        fetchBtn.classList.add("hidden");
        return;
    }
});