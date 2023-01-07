import { fixture, expect } from "@open-wc/testing";
import { html } from "lit-html";
import { MySwitch } from "./my-switch";

describe("date picker accessibility", () => {
  it("test basic element accessibility", async () => {
    // Arrange
    const el = await fixture<MySwitch>(
      html`<my-switch label="Select Date"></my-switch>`
    );

    // Act

    // Assert
    await expect(el).to.be.accessible();
  });
});
