import { LitElement } from "lit";
/**
 * Switches allow the user to toggle an option on or off.
 *
 * @tag my-switch
 *
 */
export declare class MySwitch extends LitElement {
    static styles: import("lit").CSSResult;
    /** Adds a description for the switch */
    label?: string;
    /** Used to determine if the switch is on or off */
    checked: boolean;
    /** Prevents switch form changing value */
    disabled: boolean;
    toggle(): void;
    private emitChange;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "my-switch": MySwitch;
    }
}
