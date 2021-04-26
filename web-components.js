class JourneyItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const template = document.getElementById('journey-item');
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('journey-item', JourneyItem);
