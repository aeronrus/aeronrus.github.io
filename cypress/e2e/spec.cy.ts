describe('Home page e2e test', () => {
  beforeEach('visit url', () => {
    cy.visit('/');
  });
  it('input should have empty value', () => {
    cy.get('input').should('have.value', '');
  });

  it('should have logo title', () => {
    cy.get('h1')
      .should('have.text', 'Space Pizza')
      .get('p')
      .should('have.text', 'Лучшая пицца в галактике');
  });
  it('should have cart logo', () => {
    cy.get('.header__cart').should('exist');
  });
});

describe('Cart page e2e test', () => {
  beforeEach('visit url', () => {
    cy.visit('/cart');
  });
  it('should remove Cart logo', () => {
    cy.visit('/')
      .get('.header__cart')
      .should('be.visible')
      .visit('/cart')
      .get('.header__cart')
      .should('not.exist');
  });

  it('get classname cart should exist', () => {
    cy.get('.cart').should('exist');
  });
  it('should have Search input', () => {
    cy.get('input').should('have.value', '');
  });
  it('input should have empty value', () => {
    cy.get('input').should('have.value', '');
  });
  it('should have button for backstage', () => {
    cy.get('span').eq(1).should('exist').get('span').eq(1).should('have.text', 'Вернуться назад');
  });
  it('should have logo title', () => {
    cy.get('h1')
      .should('have.text', 'Space Pizza')
      .get('p')
      .should('have.text', 'Лучшая пицца в галактике');
  });
  it('should have return home page after click on logo', () => {
    cy.get('h1')
      .should('have.text', 'Space Pizza')
      .click()
      .get('.container')
      .should('exist')
      .get('.container--cart')
      .should('not.exist');
  });
});

describe('Error page e2e test', () => {
  beforeEach('visit url', () => {
    cy.visit('/*');
  });
  it('should have content block', () => {
    cy.get('.content__error-info')
      .should('exist')
      .get('h2')
      .should('have.text', 'Технические неполадки 😕')
      .get('p')
      .eq(1)
      .should('have.text', 'К сожалению, не удалось загрузить пиццы. Попробуйте позже.'); //Error
  });
  it('input should have empty value', () => {
    cy.get('input').should('have.value', '');
  });
  it('should have cart logo', () => {
    cy.get('.header__cart').should('exist');
  });
});
