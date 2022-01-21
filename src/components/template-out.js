class TemplateOut extends HTMLElement {
  // Reflect attributes <--> properties
  get templateSelector() {
    return this.getAttribute("template-selector");
  }
  set templateSelector(newTemplateSelector) {
    this.setAttribute("template-selector", newTemplateSelector);
  }

  static get observedAttributes() {
    return ["template-selector"];
  }

  connectedCallback() {
    this.#loadTemplate();
    console.log("life-cycle - connectedCallback");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`life-cycle`, { name, oldValue, newValue });

    if (name === "template-selector") this.#loadTemplate();

    console.log("life-cycle - attributeChangedCallback");
  }

  #loadTemplate = () => {
    const templateEl = document.querySelector(this.templateSelector);
    const node = document.importNode(templateEl.content, true);

    if (this.templateSelector === ".template-1") {
      const tBody = node.querySelector("table");
      const tRow = document.createElement("tr");
      const tCell1 = document.createElement("td");
      const tCell2 = document.createElement("td");

      tCell1.textContent = "From JS";
      tCell2.textContent = "Too!";

      tRow.appendChild(tCell1);
      tRow.appendChild(tCell2);

      tBody.appendChild(tRow);
    }

    this.innerHTML = "";
    this.appendChild(node);
  };
}

customElements.define("template-out", TemplateOut);
