class NewComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<style>
      new-component {
        display: block;
        padding: 3em;
      }

      new-component h1 {
        color: red;
      }
    </style>
    <h1>New component!!</h1>`;
  }
}

customElements.define("new-component", NewComponent);
