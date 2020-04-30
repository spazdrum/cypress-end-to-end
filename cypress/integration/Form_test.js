// describe === context, it === specify, beforeEach
/*global cy*/

describe("Test our form inputs", function () {
    beforeEach(function() {
        cy.visit("http://localhost:3000/")
    })

    it("adds text to inputs", function() {
        
        cy.get('[data-cy="name"]')
        .type("Josh")
        .should("have.value", "Josh");
    
        cy.get('[data-cy="email"]')
        .type("email@email.com")
        .should("have.value", "email@email.com");
        
        cy.get("textarea")
        .type("I want to help")
        .should("have.value", "I want to help");

        cy.get(`#positons`)
        .select("Yard Work")
        .should("have.value", "Yard Work");

        cy.get(`[type="checkbox"]`)
        .check()
        .should("be.checked");

        cy.contains('Submit').click();
    });
});