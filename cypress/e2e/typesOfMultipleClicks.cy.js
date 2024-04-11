describe("Simulating clicks", ()=> {
  it("Multiple clicks", ()=> {
    cy.visit("https://saucedemo.com")
    Cypress._.times(10, function () {
      cy.get('[data-test="login-button"]').click({force:true})
    });
  });

  it("Simple click", ()=> {
    cy.visit("https://saucedemo.com")
    cy.get('[data-test="login-button"]').click({force:true})
  });

  it("Multiple clicks using for loop", ()=> {
    cy.visit("https://saucedemo.com")
    for(let i=0;i<10;i++){
      cy.get('[data-test="login-button"]').click({force:true})
    i++;
    }
  });

  it("Multiple clicks using chain commands", ()=> {
    cy.visit("https://saucedemo.com")
    cy.get('[data-test="login-button"]')
    .click({force:true})
    .click({force:true})
    .click({force:true})
    .click({force:true})
  });

});