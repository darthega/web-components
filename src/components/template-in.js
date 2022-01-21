class TemplateIn extends HTMLElement {
  #valueInterpolate = "Value to be interpolated";
  #templateEl = document.createElement("template");
  #templateContent = `
  <h3>Internally defined template</h3>
  <div>
    <p><b>Interpolated value</b>: ${this.#valueInterpolate}</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur temporibus voluptatum unde. Adipisci doloribus laboriosam labore quasi consectetur corrupti aut reprehenderit in natus animi? Dolor excepturi reprehenderit mollitia sunt iure?</p>
  </div>`;

  connectedCallback() {
    this.#templateEl.innerHTML = this.#templateContent;
    this.appendChild(this.#templateEl.content.cloneNode(true));
  }
}

customElements.define("template-in", TemplateIn);
