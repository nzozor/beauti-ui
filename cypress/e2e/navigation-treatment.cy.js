/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("example to-do app", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("/");
  });

  it("displays two Beauti logo", () => {
    cy.get("app-beauti-logo a").should("have.length", 2);
  });

  it("displays 3 Exclusive stock list image", () => {
    cy.get('[data-test-id="test-example"]').within(() => {
      cy.get("img").should("have.length", 3);
    });
  });

  it("displays 6 dots for the reviews navitation ", () => {
    cy.get(".slick-dots").within(() => {
      cy.get("li").should("have.length", 6);
    });
  });

  it("displays a MapBox Canvas", () => {
    cy.get("#map").within(() => {
      cy.get("canvas").should("have.length", 1);
    });
  });
  // it("should navigate to treatments page", () => {
  //   cy.get(".treatment-button").click();
  //   cy.location("pathname").should("include", "treatments");
  // });
});
