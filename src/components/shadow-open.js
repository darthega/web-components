class ShadowOpen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // Apply external styles to the shadow dom
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "styles/shadow-open.css");

    // Attach the created element to the shadow dom
    this.shadowRoot.innerHTML = `<h2>Shadow open</h2>
    <p>Shadow DOM element with external stylesheet</p>`;
    this.shadowRoot.appendChild(linkElem);
  }
}

customElements.define("shadow-open", ShadowOpen);
