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
  test('testing: single number', () => {
    const { inputElement } = setup();

    fireEvent.change(inputElement, {
      target: { value: '7' },
    });

    const result = document.getElementById('result-text');
    expect(inputElement.value).toBe('7');
    expect(result.textContent).toContain('seven');
  });

  test('testing: 100, algorythm logic row: 111', () => {
    const { inputElement, britishToggle } = setup();

    fireEvent.change(inputElement, {
      target: { value: '100' },
    });

    const result = document.getElementById('result-text');
    expect(inputElement.value).toBe('100');
    expect(result.textContent).toContain('one hundred');
  });
  test('testing: 201 algorythm logic row 78-81', () => {
    const { inputElement } = setup();

    fireEvent.change(inputElement, {
      target: { value: '201' },
    });

    const result = document.getElementById('result-text');
    expect(inputElement.value).toBe('201');
    expect(result.textContent).toContain('two hundred and one');
  });
  test('testing: 19 algorythm logic row 89', () => {
    const { inputElement } = setup();

    fireEvent.change(inputElement, {
      target: { value: '19' },
    });

    const result = document.getElementById('result-text');
    expect(inputElement.value).toBe('19');
    expect(result.textContent).toContain('nineteen');
  });

  test('testing: 30', () => {
    const { inputElement } = setup();

    fireEvent.change(inputElement, {
      target: { value: '30' },
    });

    const result = document.getElementById('result-text');
    expect(inputElement.value).toBe('30');
    expect(result.textContent).toContain('thirty');
  });
  test('testing: 35', () => {
    const { inputElement } = setup();

    fireEvent.change(inputElement, {
      target: { value: '35' },
    });

    const result = document.getElementById('result-text');
    expect(inputElement.value).toBe('35');
    expect(result.textContent).toContain('thirty-five');
  });

  test('testing: 1011 algorythm logic row 87,114', () => {
    const { inputElement } = setup();

    fireEvent.change(inputElement, {
      target: { value: '1011' },
    });

    const result = document.getElementById('result-text');
    expect(inputElement.value).toBe('1011');
    expect(result.textContent).toContain('one thousand and eleven');
  });

  test('testing: 99999 algorythm logic row: 153,200', () => {
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

  test('testing: 9999999 algorythm logic row 181-182,203-204', () => {
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

  test('testing: 999999 algorythm logic row 202', () => {
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

  test('testing: 99999w algorythm logic row 223-224', () => {
    const { inputElement } = setup();

    fireEvent.change(inputElement, {
      target: { value: '99999w' },
    });

    const result = document.getElementById('result-text');
    expect(inputElement.value).toBe('99999w');
  });

  test('testing: 1999 algorythm logic row 94,142-143,196,262', () => {
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
