describe("Footer", () => {
    before(() => {
        cy.visit("http://localhost:3000");
    });
  
    it("Should be able to visualize the footer", () => {
        cy.get("[data-cy=footer]");
    });
  
    it("Title contains Paisaflix", () => {
        cy.get("[data-cy=footer] > [data-cy=footer-first-column] > [data-cy=principal-title]")
            .contains("Paisaflix");
    });

    it("Should be able to type any word in input", () => {
        cy.get("[data-cy=footer-input]").type("Paisano!");
    });

    it("Should be able to visualize links in product list", () => {
        cy.get("[data-cy=footer-product-list] > span")
            .contains("Product");
        cy.get("[data-cy=footer-product-list] > a:nth-child(2)")
            .contains("Movies");
        cy.get("[data-cy=footer-product-list] > a:nth-child(3)")
            .contains("TV Show");
        cy.get("[data-cy=footer-product-list] > a:nth-child(4)")
            .contains("Videos");
    });

    it("Should be able to visualize links in media list", () => {
        cy.get("[data-cy=footer-media-list] > span")
            .contains("Media Group");
        cy.get("[data-cy=footer-media-list] > a:nth-child(2)")
            .contains("Nice Studio");
        cy.get("[data-cy=footer-media-list] > a:nth-child(3)")
            .contains("Nice News");
        cy.get("[data-cy=footer-media-list] > a:nth-child(4)")
            .contains("Nice TV");
    });

    it("Should be able to visualize links in sitemap list", () => {
        cy.get("[data-cy=footer-sitemap-list] > span")
            .contains("Sitemap");
        cy.get("[data-cy=footer-sitemap-list] > a:nth-child(2)")
            .contains("About");
        cy.get("[data-cy=footer-sitemap-list] > a:nth-child(3)")
            .contains("Careers");
        cy.get("[data-cy=footer-sitemap-list] > a:nth-child(4)")
            .contains("Press");
    });
});