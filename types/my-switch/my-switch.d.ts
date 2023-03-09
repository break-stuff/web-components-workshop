import { LitElement } from "lit";
/**
 * Switches allow the user to toggle an option on or off.
 *
 * @tag my-switch
 *
 * @cssprop [--size=1rem] - Controls the size of the switch
 *
 * @csspart control - controls styles for the switch button
 * @csspart track - controls styles for the switch track
 * @csspart checked - controls styles for the switch track when checked
 * @csspart switch - controls styles for the switch
 *
 * @event switch-change - Emitted when switch is toggled
 *
 * @slot checked - Displays when switch is on
 * @slot unchecked - Displays when switch is off
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
    /** Identifies where in relation to the switch the label should be placed */
    labelPosition: "top" | "start" | "end" | "bottom";
    toggle(): void;
    private emitChange;
    private getLabelDirection;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "my-switch": MySwitch;
    }
}
