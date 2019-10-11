import {LitElement, html, css, customElement, property} from 'lit-element';

// This decorator defines the element.
@customElement('my-typed-lit-element')
export class MyTypedLitElement extends LitElement {

    // This decorator creates a property accessor that triggers rendering and
    // an observed attribute.
    @property()
    mood = 'great';

    static styles = css`
        span {
          color: green;
        }`;

    // Render element DOM by returning a `lit-html` template.
    render() {
        return html`
            <div> This lit element has a mood:
                <span>${this.mood}</span>
             </div>`;
    }

}
