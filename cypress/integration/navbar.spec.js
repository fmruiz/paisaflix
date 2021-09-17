describe("Navbar", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should be able to visualize the navbar", () => {
    cy.get("[data-cy=navbar]");
  });

  it("Title contains Paisaflix", () => {
    cy.get("[data-cy=principal-title]").contains("Paisaflix");
  });

  it("Should be able to visualize four links in navbar", () => {
    cy.get("[data-cy=navbar-container-links] > [data-cy=navbar-home]")
        .contains("Home");
    cy.get("[data-cy=navbar-container-links] > [data-cy=navbar-contact]")
        .contains("Contact Us");
    cy.get("[data-cy=navbar-container-links] > [data-cy=navbar-faq]")
        .contains("FAQ");
    cy.get("[data-cy=navbar-container-links] > [data-cy=navbar-pricing]")
        .contains("Pricing");
  });
});
