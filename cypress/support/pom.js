/// <reference types="cypress" />

export const environment_url = 'localhost:3000';

// ----------------- selectors -----------------
export const input_field = "[id='number-to-convert']";
export const converted_value = "[id='result-text']";
export const british_switch = "[id='british-switch']";
export const button_number_0 = "[id='number0']";
export const button_number_1 = "[id='number1']";
export const button_number_2 = "[id='number2']";
export const button_number_3 = "[id='number3']";
export const button_number_4 = "[id='number4']";
export const button_number_5 = "[id='number5']";
export const button_number_6 = "[id='number6']";
export const button_number_7 = "[id='number7']";
export const button_number_8 = "[id='number8']";
export const button_number_9 = "[id='number9']";
export const button_cls = "[id='clr']";
export const button_back = "[id='back']";
export const error_message = "[id='error-message']";

// ----------------- methods -----------------

export const click_element = (selector) => {
  cy.get(selector).click({ force: true });
};

export const click_elements = (selector, index) => {
  cy.get(selector).eq(index).click();
};

export const fill_field = (selector, text, index = 0) => {
  cy.get(selector).invoke('val', '');
  cy.get(selector).eq(index).type(text);
  cy.get(selector).type('{enter}');
};

export const addto_field = (selector, text, index = 0) => {
  cy.get(selector).eq(index).type(text);
  cy.get(selector).type('{enter}');
};

export const verify_text = (selector, text) => {
  cy.get(selector).should('have.text', text);
};

export const verify_value = (selector, text) => {
  cy.get(selector).should('have.value', text);
};

export const verify_visibility = (selector) => {
  cy.get(selector, { timeout: 10000 }).should('be.visible');
};

export const verify_invisibility = (selector) => {
  cy.get(selector, { timeout: 10000 }).should('not.exist');
};
