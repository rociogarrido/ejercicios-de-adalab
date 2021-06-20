import { render, screen } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// Ejercicio 1
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Aprendiendo react/i);
  expect(linkElement).toBeInTheDocument();
});

// Ejercicio 2
test('check if "Learn React" is a link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Aprendiendo react/i);
  console.log(linkElement.nodeName);
  const linkTagName = linkElement.nodeName;
  expect(linkTagName).toBe("A");
});
