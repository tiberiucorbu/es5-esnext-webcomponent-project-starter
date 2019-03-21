export class MyCustom extends HTMLElement {

    public connectedCallback(): void {

        this.attachShadow({mode: "open"});
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = '<div>Custom html element</div>';
        }
    }
}

window.customElements.define('my-element', MyCustom);