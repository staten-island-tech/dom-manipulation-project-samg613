const DOMSelectors = {
  form: document.getElementById("data-form"),
  nameInput: document.getElementById("name"),
  emailInput: document.getElementById("email"),
  dataList: document.getElementById("data-list"),
};

function createDataObject(event) {
  event.preventDefault();
  const newData = {
    name: DOMSelectors.nameInput.value,
    email: DOMSelectors.emailInput.value,
  };

  injectObjectIntoDOM(newData);
  clearInputFields();
}

function injectObjectIntoDOM(data) {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("item");

  itemDiv.innerHTML = `
        <span>${data.name} (${data.email})</span>
        <span class="remove-btn" onclick="removeObject(this)">Remove</span>
    `;

  DOMSelectors.dataList.appendChild(itemDiv);
}

function clearInputFields() {
  DOMSelectors.nameInput.value = "";
  DOMSelectors.emailInput.value = "";
}

function removeObject(element) {
  const itemDiv = element.parentElement;
  DOMSelectors.dataList.removeChild(itemDiv);
}

DOMSelectors.form.addEventListener("submit", createDataObject);