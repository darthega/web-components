class shadowClosed extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "closed" });
  }

  connectedCallback() {
    this.root.innerHTML = `
    <style>h2 { font-size: 3em; color: darkblue; }</style>
    
    <h2>Shadow closed, shhhh!!</h2>`;
  }
}

customElements.define("shadow-closed", shadowClosed);
