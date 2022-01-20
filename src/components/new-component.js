class NewComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1>New component!!</h1>`;
  }
}

customElements.define("new-component", NewComponent);
