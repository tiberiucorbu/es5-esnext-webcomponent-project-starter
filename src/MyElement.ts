export class MyElement extends HTMLElement {


    public connectedCallback(): void {

        this.attachShadow({mode: "open"});
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = 'hello';
        }
    }
}

window.customElements.define('my-element', MyElement);