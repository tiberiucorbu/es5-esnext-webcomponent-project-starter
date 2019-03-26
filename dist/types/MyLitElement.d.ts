/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 **/
import { LitElement } from 'lit-element';
/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <my-element> as an HTML tag.
 */
export declare class MyLitElement extends LitElement {
    /**
     * Create an observed property. Triggers update on change.
     */
    foo: string;
    /**
     * Implement `render` to define a template for your element.
     */
    render(): import("lit-element").TemplateResult;
}
