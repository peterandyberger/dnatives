import {
  environment_url,
  input_field,
  fill_field,
  converted_value,
  verify_visibility,
  verify_text,
  british_switch,
  click_element,
  button_cls,
  verify_value,
  verify_invisibility,
  button_back,
  button_number_1,
  button_number_2,
  button_number_3,
  button_number_4,
  button_number_5,
  button_number_6,
  button_number_7,
  button_number_8,
  button_number_9,
  button_number_0,
  error_message,
  addto_field,
} from '../../support/pom';

describe('Converter basic tests', () => {
  beforeEach(() => {
    cy.visit(environment_url);
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('Test basic: 7  ', () => {
    try {
      fill_field(input_field, '7');
      verify_visibility(converted_value);
      verify_text(converted_value, 'seven');
    } catch (e) {
      console.log(e);
    }
  });

  it('Test basic: 42  ', () => {
    try {
      fill_field(input_field, '42');
      verify_visibility(converted_value);
      verify_text(converted_value, 'forty-two');
    } catch (e) {
      console.log(e);
    }
  });

  it('Test basic: 1999  ', () => {
    try {
      fill_field(input_field, '1999');
      verify_visibility(converted_value);
      verify_text(converted_value, 'one thousand nine hundred and ninety-nine');
    } catch (e) {
      console.log(e);
    }
  });

  it('Test basic: 2001', () => {
    try {
      fill_field(input_field, '2001');
      verify_visibility(converted_value);
      verify_text(converted_value, 'two thousand and one');
    } catch (e) {
      console.log(e);
    }
  });

  it('Test basic: 17999  ', () => {
    try {
      fill_field(input_field, '17999');
      verify_visibility(converted_value);
      verify_text(
        converted_value,
        'seventeen thousand nine hundred and ninety-nine'
      );
    } catch (e) {
      console.log(e);
    }
  });

  it('Test basic: 100001  ', () => {
    try {
      fill_field(input_field, '100001');
      verify_visibility(converted_value);
      verify_text(converted_value, 'one hundred thousand and one');
    } catch (e) {
      console.log(e);
    }
  });

  it('Test basic: 342251  ', () => {
    try {
      fill_field(input_field, '342251');
      verify_visibility(converted_value);
      verify_text(
        converted_value,
        'three hundred and forty-two thousand two hundred and fifty-one'
      );
    } catch (e) {
      console.log(e);
    }
  });

  it('Test basic: 1300420  ', () => {
    try {
      fill_field(input_field, '1300420');
      verify_visibility(converted_value);
      verify_text(
        converted_value,
        'one million three hundred thousand four hundred and twenty'
      );
    } catch (e) {
      console.log(e);
    }
  });
});

describe('Converter input tests', () => {
  beforeEach(() => {
    cy.visit(environment_url);
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('British English', () => {
    try {
      click_element(british_switch);
      fill_field(input_field, '1212');
      verify_visibility(converted_value);
      verify_text(converted_value, 'twelve hundred and twelve');
    } catch (e) {
      console.log(e);
    }
  });

  it('British English and back', () => {
    try {
      click_element(british_switch);
      fill_field(input_field, '1212');
      verify_visibility(converted_value);
      verify_text(converted_value, 'twelve hundred and twelve');
      click_element(british_switch);
      verify_text(converted_value, 'one thousand two hundred and twelve');
    } catch (e) {
      console.log(e);
    }
  });

  it('British English when added number as normal english and deleting back', () => {
    try {
      fill_field(input_field, '17999');
      verify_text(
        converted_value,
        'seventeen thousand nine hundred and ninety-nine'
      );
      click_element(british_switch);
      click_element(button_back);
      verify_text(converted_value, 'seventeen hundred and ninety-nine');
      click_element(british_switch);
      addto_field(input_field, '9');
      verify_text(
        converted_value,
        'seventeen thousand nine hundred and ninety-nine'
      );
      click_element(button_back);
      verify_text(
        converted_value,
        'one thousand seven hundred and ninety-nine'
      );
    } catch (e) {
      console.log(e);
    }
  });

  it('Clear button works properly', () => {
    try {
      fill_field(input_field, '1212');
      verify_value(input_field, '1212');
      verify_text(converted_value, 'one thousand two hundred and twelve');
      click_element(button_cls);
      verify_value(input_field, '');
      verify_invisibility(converted_value);
    } catch (e) {
      console.log(e);
    }
  });

  it('Back button works properly', () => {
    try {
      fill_field(input_field, '1212');
      verify_value(input_field, '1212');
      verify_text(converted_value, 'one thousand two hundred and twelve');
      click_element(button_back);
      verify_value(input_field, '121');
      verify_text(converted_value, 'one hundred and twenty-one');
    } catch (e) {
      console.log(e);
    }
  });
  it('Back button works as CLR button', () => {
    try {
      fill_field(input_field, '1212');
      verify_value(input_field, '1212');
      verify_text(converted_value, 'one thousand two hundred and twelve');
      click_element(button_back);
      click_element(button_back);
      click_element(button_back);
      click_element(button_back);
      verify_value(input_field, '');
      verify_invisibility(converted_value);
    } catch (e) {
      console.log(e);
    }
  });
  it('Adding value by using calculator', () => {
    try {
      click_element(button_number_1);
      click_element(button_number_2);
      click_element(button_number_1);
      click_element(button_number_2);
      verify_value(input_field, '1212');
      verify_text(converted_value, 'one thousand two hundred and twelve');
    } catch (e) {
      console.log(e);
    }
  });
  it('All buttons work properly', () => {
    try {
      click_element(button_number_1);
      click_element(button_number_2);
      click_element(button_number_3);
      click_element(button_number_4);
      click_element(button_number_5);
      click_element(button_number_6);
      click_element(button_number_7);
      verify_value(input_field, '1234567');
      verify_text(
        converted_value,
        'one million two hundred and thirty-four thousand five hundred and sixty-seven'
      );
      click_element(button_cls);
      click_element(button_number_8);
      click_element(button_number_9);
      click_element(button_number_0);
      verify_value(input_field, '890');
      verify_text(converted_value, 'eight hundred and ninety');
    } catch (e) {
      console.log(e);
    }
  });
});

describe('Converter error tests', () => {
  beforeEach(() => {
    cy.visit(environment_url);
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('Leading zero test - Error message should appear and converted text should not be visible', () => {
    try {
      fill_field(input_field, '0');
      verify_visibility(error_message);
      verify_text(error_message, 'Only digits allowed and no leading zero');
      verify_invisibility(converted_value);
    } catch (e) {
      console.log(e);
    }
  });

  it('Input is not a digit test - Error message should appear and converted text should not be visible', () => {
    try {
      fill_field(input_field, 'w');
      verify_visibility(error_message);
      verify_text(error_message, 'Only digits allowed and no leading zero');
      verify_invisibility(converted_value);
    } catch (e) {
      console.log(e);
    }
  });

  it('Input is not a digit test after digit - Error message should appear and converted text should not be visible', () => {
    try {
      fill_field(input_field, '12');
      verify_visibility(converted_value);
      addto_field(input_field, 'w');
      verify_text(error_message, 'Only digits allowed and no leading zero');
      verify_invisibility(converted_value);
    } catch (e) {
      console.log(e);
    }
  });

  it('Input should not contain dot - Error message should appear and converted text should not be visible', () => {
    try {
      fill_field(input_field, '12');
      verify_visibility(converted_value);
      addto_field(input_field, '.');
      verify_text(error_message, 'Only digits allowed and no leading zero');
      verify_invisibility(converted_value);
    } catch (e) {
      console.log(e);
    }
  });

  it('Input should not contain space - Error message should appear and converted text should not be visible', () => {
    try {
      fill_field(input_field, '12');
      verify_visibility(converted_value);
      addto_field(input_field, ' ');
      verify_text(error_message, 'Only digits allowed and no leading zero');
      verify_invisibility(converted_value);
    } catch (e) {
      console.log(e);
    }
  });

  it('Fixing issue should let the converter work again - Error message should disappear and converted number should appear', () => {
    try {
      fill_field(input_field, '12');
      verify_visibility(converted_value);
      addto_field(input_field, ' ');
      verify_text(error_message, 'Only digits allowed and no leading zero');
      click_element(button_back);
      verify_visibility(converted_value);
      verify_value(input_field, '12');
      verify_text(converted_value, 'twelve');
    } catch (e) {
      console.log(e);
    }
  });
});
