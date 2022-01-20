class LifeCycle extends HTMLElement {
  constructor() {
    super();
    console.log("life-cycle - constructor");
  }

  // Reflect attributes <--> properties
  get value() {
    return this.getAttribute("value");
  }
  set value(newValue) {
    this.setAttribute("value", newValue);
  }

  // Properties are named as the attribute but in camelCase
  get hasBoolean() {
    // Attributes allow hyphenation '-'
    return this.hasAttribute("has-boolean");
  }
  set hasBoolean(has) {
    if (has) {
      this.setAttribute("has-boolean", "");
    } else {
      this.removeAttribute("has-boolean");
    }
  }

  static get observedAttributes() {
    return ["value", "has-boolean"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`life-cycle`, { name, oldValue, newValue });
    console.log("life-cycle - attributeChangedCallback");
  }

  adoptedCallback() {
    console.log("life-cycle - adoptedCallback");
  }

  connectedCallback() {
    console.log("life-cycle - connectedCallback");
  }

  disconnectedCallback() {
    console.log("life-cycle - disconnectedCallback");
  }
}

customElements.define("life-cycle", LifeCycle);
