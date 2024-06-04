describe('App', () => {
  beforeEach(() => {
    cy.request('DELETE', 'http://localhost:3000/todos/1');
    cy.request('POST', 'http://localhost:3000/todos', {
      id: '1',
      name: 'First Todo',
    });
  });

  it('Should display detail Todo Page', () => {
    cy.visit('/');
    cy.get('title').should('contain', 'Todo INVGATE');
    cy.get('[data-test=itemTodo]')
      .first()
      .click()
      .then(() => {
        cy.wait(200);
        cy.get('[data-test=formAddtask]')
          .find('input')
          .type('Tarea 1')
          .type('{enter}');
      });
  });

  it('Should check first task', () => {
    cy.visit('/');
    cy.get('[data-test=itemTodo]')
      .first()
      .click()
      .then(() => {
        cy.wait(200);
        cy.get('[data-test=formAddtask]')
          .find('input')
          .type('Tarea 1')
          .type('{enter}');
        cy.get('[type=checkbox]')
          .first()
          .click()
          .then(() => {
            cy.wait(200);
            cy.get('[data-test=itemTask]')
              .first()
              .find('div')
              .first()
              .should('have.class', 'line-through');
          });
      });
  });
});
