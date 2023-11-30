import { render, screen } from "@testing-library/react";

test("Hello World appears", () => {
    render(<div>Hello World!</div>);

    expect(screen.getByText("Hello World!")).toBeVisible();
})