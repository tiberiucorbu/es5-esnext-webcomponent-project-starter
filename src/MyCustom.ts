export class MyCustom extends HTMLElement {


    public connectedCallback(): void {

        this.attachShadow({mode: "open"});
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = 'hello custom html element';
        }
    }
}

window.customElements.define('my-element', MyCustom);