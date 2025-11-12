import { render, screen } from "@testing-library/react";
import { Contact } from "../Pages/Contact.jsx";
import Festivals from "../Components/utils/contextApi.jsx";
import "@testing-library/jest-dom";

describe("Test cases for Contact Page", () => {
  test("Should load Contact component and all input fields", () => {
    const festivalValue = { festivalName: "Diwali" };   

    render(
      <Festivals.Provider value={festivalValue}>
        <Contact />
      </Festivals.Provider>
    );

    // Check heading
    expect(
      screen.getByRole("heading", { name: /Contact Me/i })
    ).toBeInTheDocument();

    // Check input fields using placeholder text
    expect(screen.getByPlaceholderText("Enter Your Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter Your Email")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter Your Message")
    ).toBeInTheDocument();

    // Check submit button
    expect(
      screen.getByRole("button", { name: /Send 🚀/i })
    ).toBeInTheDocument();

    // Check festival name
    expect(screen.getByText("Diwali")).toBeInTheDocument();
  });
});
