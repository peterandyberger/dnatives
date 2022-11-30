import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

const setup = () => {
  const utils = render(<App />);
  const inputElement = document.getElementById('number-to-convert');
  const britishToggle = document.getElementById('british-switch');

  return {
    inputElement,
    britishToggle,
    ...utils,
  };
};

describe('Test numbers', () => {
  test('Add_Number_Under_100_Single_Digit_decimalRecursive', () => {
    const { inputElement } = setup();

    fireEvent.change(inputElement, {
      target: { value: '7' },
    });

    const result = document.getElementById('result-text');
    expect(inputElement.value).toBe('7');
    expect(result.textContent).toContain('seven');
  });

  test('Add_Number_100_Or_Bigger_hundredRecursive_(algorythm logic row: 111)', () => {
    const { inputElement } = setup();

    fireEvent.change(inputElement, {
      target: { value: '100' },
    });

    const result = document.getElementById('result-text');
    expect(inputElement.value).toBe('100');
    expect(result.textContent).toContain('one hundred');
  });
  test('Add_3_Digit_Number_Over_100_With_Single_Digit_After_A_Zero_Using_And_hundredRecursive_(algorythm_logic_row_78_81)', () => {
    const { inputElement } = setup();

    fireEvent.change(inputElement, {
      target: { value: '201' },
    });

    const result = document.getElementById('result-text');
    expect(inputElement.value).toBe('201');
    expect(result.textContent).toContain('two hundred and one');
  });
  test('Add_Number_Under_20_Without_And_and_Dash_decimalRecursive(algorythm logic row 89)', () => {
    const { inputElement } = setup();

    fireEvent.change(inputElement, {
      target: { value: '19' },
    });

    const result = document.getElementById('result-text');
    expect(inputElement.value).toBe('19');
    expect(result.textContent).toContain('nineteen');
  });

  test('Add_Number_Over_1000_With_A_Zero_Before_Decimals_(algorythm logic row 87,114)', () => {
    const { inputElement } = setup();

    fireEvent.change(inputElement, {
      target: { value: '1011' },
    });

    const result = document.getElementById('result-text');
    expect(inputElement.value).toBe('1011');
    expect(result.textContent).toContain('one thousand and eleven');
  });

  test('Add_Number_Under_100000_hundredThousandRecursive_(algorythm logic row: 153,200)', () => {
    const { inputElement } = setup();

    fireEvent.change(inputElement, {
      target: { value: '99999' },
    });

    const result = document.getElementById('result-text');
    expect(inputElement.value).toBe('99999');
    expect(result.textContent).toContain(
      'ninety-nine thousand nine hundred and ninety-nine'
    );
  });

  test('Add_Number_Under_10000000_billionsRecursive_(algorythm logic row 181-182,203-204)', () => {
    const { inputElement } = setup();

    fireEvent.change(inputElement, {
      target: { value: '9999999' },
    });

    const result = document.getElementById('result-text');
    expect(inputElement.value).toBe('9999999');
    expect(result.textContent).toContain(
      'nine million nine hundred and ninety-nine thousand nine hundred and ninety-nine'
    );
  });

  test('Add_Number_Under_1000000_millionsRecursive_(algorythm logic row 202)', () => {
    const { inputElement } = setup();

    fireEvent.change(inputElement, {
      target: { value: '999999' },
    });

    const result = document.getElementById('result-text');
    expect(inputElement.value).toBe('999999');
    expect(result.textContent).toContain(
      'nine hundred and ninety-nine thousand nine hundred and ninety-nine'
    );
  });

  test('Add_Number_With_Invalid_Character_Validator_Check_(algorythm logic row 223-224)', () => {
    const { inputElement } = setup();

    fireEvent.change(inputElement, {
      target: { value: '99999w' },
    });

    const result = document.getElementById('result-text');
    expect(inputElement.value).toBe('99999w');
  });

  test('Add_Number_Between_1000_and_2000_And_Using_British_Toggle_To_Convert_Differently_(tealgorythm logic row 94,142-143,196,262)', () => {
    const { inputElement, britishToggle } = setup();

    fireEvent.change(inputElement, {
      target: { value: '1990' },
    });

    const result = document.getElementById('result-text');
    expect(inputElement.value).toBe('1990');
    expect(result.textContent).toContain(
      'one thousand nine hundred and ninety'
    );
    fireEvent.click(britishToggle);
    expect(result.textContent).toContain('nineteen hundred and ninety');
  });
});
