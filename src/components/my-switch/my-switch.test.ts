import { fixture, expect, html } from "@open-wc/testing";
import "./index.js";
import type { MySwitch } from "./index.js";

describe("my-switch accessibility", () => {
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
