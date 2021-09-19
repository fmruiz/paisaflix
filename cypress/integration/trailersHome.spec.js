describe("Trailers Home", () => {
    before(() => {
        cy.visit("http://localhost:3000");
    });
  
    it("Should be able to see trailers container", () => {
        cy.get("[data-cy=trailers-container]");
    });
  
    it("Title contains Trailers", () => {
        cy.get("[data-cy=trailers-container] > [data-cy=trailers-title]")
            .contains("Trailers");
    });

    it("Should be able to see four elements", () => {
        cy.get("[data-cy=trailers-container] > [data-cy=trailers-row] > [data-cy=trailer-1]");
        cy.get("[data-cy=trailers-container] > [data-cy=trailers-row] > [data-cy=trailer-2]");
        cy.get("[data-cy=trailers-container] > [data-cy=trailers-row] > [data-cy=trailer-3]");
        cy.get("[data-cy=trailers-container] > [data-cy=trailers-row] > [data-cy=trailer-4]");
    });
});