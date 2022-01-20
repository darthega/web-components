class ShadowOpen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>h2 { font-size: 3em; color: purple; }</style>
    
    <h2>Shadow open</h2>`;
  }
}

customElements.define("shadow-open", ShadowOpen);
