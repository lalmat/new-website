describe('I can access to the home page', () => {
    it('Visits the Caen camp website', () => {
        cy.visit('/');
        cy.get('nav > [aria-current="page"]').should('have.text', 'accueil');
    });
});
