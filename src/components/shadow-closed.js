class shadowClosed extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "closed" });
  }

  connectedCallback() {
    this.root.innerHTML = `<style>:host { display: block; padding: 1.5em; } h2 { font-size: 3em; color: darkblue; }</style>
    
    <h2>Shadow closed, shhhh!!</h2>
    <p>Styles defined online inside the component</p>`;
  }
}

customElements.define("shadow-closed", shadowClosed);
