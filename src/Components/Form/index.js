import {
  FormControl,
  InputLabel,
  FormHelperText,
  OutlinedInput,
} from '@mui/material';
import { useEffect, useState } from 'react';
import RESULT from '../Result';

const FORM = (props) => {
  const [result, setResult] = useState();
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(true);
  const [showresult, setShowresult] = useState(false); //TODO: SHOW ONLY IF ITS MEANINGFUL
  const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };
  const tenners = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  };
  const mid = ['and'];
  const scale = {
    0: 'teen',
    1: 'hundred',
    2: 'thousand',
    3: 'million',
    4: 'billion',
  };

  useEffect(() => {
    validator(value);
  }, [value]);

  const convert = (numberString) => {
    const decimalRecursive = (num, and = false) => {
      const string = [...num];
      if (string.length === 1) {
        return numbers[string[0]];
      } else {
        if (string[0] === '0') {
          if (string[1] === '0') {
            return '';
          } else {
            if (and) {
              return mid + ' ' + numbers[string[1]];
            } else {
              return numbers[string[1]];
            }
          }
        } else {
          if (num < 20) {
            if (and) {
              return mid + ' ' + numbers[num];
            } else {
              return numbers[num];
            }
          } else {
            if (and) {
              if (string[1] === '0') {
                return mid + ' ' + tenners[string[0]];
              } else {
                return (
                  mid + ' ' + tenners[string[0]] + '-' + numbers[string[1]]
                );
              }
            } else {
              if (string[1] === '0') {
                return tenners[string[0]];
              } else {
                return tenners[string[0]] + '-' + numbers[string[1]];
              }
            }
          }
        }
      }
    };
    const hundredRecursive = (num) => {
      const string = [...num];
      if (string[0] === '0') {
        return decimalRecursive(num.slice(1, 3), true);
      } else {
        if (decimalRecursive(num.slice(1, 4), true) === '') {
          return numbers[string[0]] + ' ' + scale[1];
        } else {
          return (
            numbers[string[0]] +
            ' ' +
            scale[1] +
            ' ' +
            decimalRecursive(num.slice(1, 4), true)
          );
        }
      }
    };

    const thousandRecursive = (num) => {
      const string = [...num];
      return (
        numbers[string[0]] +
        ' ' +
        scale[2] +
        ' ' +
        hundredRecursive(num.slice(1, 4))
      );
    };

    const hundredThousandRecursive = (num) => {
      return (
        decimalRecursive(num.slice(0, 2), false) +
        ' ' +
        scale[2] +
        ' ' +
        hundredRecursive(num.slice(2, 5))
      );
    };

    const millionsRecursive = (num) => {
      if (hundredRecursive(num.slice(0, 3)) === '') {
        if (hundredRecursive(num.slice(3, 6)) === '') {
          return '';
        } else {
          return hundredRecursive(num.slice(3, 6));
        }
      } else {
        return (
          hundredRecursive(num.slice(0, 3)) +
          ' ' +
          scale[2] +
          ' ' +
          hundredRecursive(num.slice(3, 6))
        );
      }
    };

    const billionsRecursive = (num) => {
      const string = [...num];
      return (
        numbers[string[0]] +
        ' ' +
        scale[3] +
        ' ' +
        millionsRecursive(num.slice(1, 7))
      );
    };

    if (numberString < 100) {
      setResult(decimalRecursive(numberString));
    } else if (numberString < 1000) {
      setResult(hundredRecursive(numberString));
    } else if (numberString < 10000) {
      setResult(thousandRecursive(numberString));
    } else if (numberString < 100000) {
      setResult(hundredThousandRecursive(numberString));
    } else if (numberString < 1000000) {
      setResult(millionsRecursive(numberString));
    } else if (numberString < 10000000) {
      setResult(billionsRecursive(numberString));
    }
  };
  const process = (e) => {
    console.log('ezt processelem: ' + e);
    setValue(e);
  };

  const validator = (entry) => {
    console.log('ENTRY ' + entry);
    if (entry !== '') {
      if (
        +entry === +entry &&
        !entry.includes('.') &&
        !entry.includes(' ') &&
        entry[0] !== '0'
      ) {
        setValid(true);
        setShowresult(true);
        console.log('VALID ' + valid);
        convert(entry);
      } else {
        setValid(false);
        setShowresult(false);
        console.log('VALID ' + valid);
      }
    } else {
      setValid(true);
      setShowresult(false);
    }
  };

  return (
    <>
      <FormControl error={!valid}>
        <InputLabel
          htmlFor="convert-input"
          error={!valid}
          style={{ padding: '10px' }}
        >
          {valid ? null : <div>Only digits allowed and no leading zero</div>}
        </InputLabel>
        <OutlinedInput
          inputProps={{ maxLength: 7 }}
          color="secondary"
          id="number-to-convert"
          aria-describedby="number-to-convert"
          onChange={(e) => process(e.target.value)}
        />
        <FormHelperText id="my-helper-text">
          <div className="helpertext">
            We will convert numeric input into an English phrase.
          </div>
        </FormHelperText>
      </FormControl>
      {showresult && <RESULT result={result} />}
    </>
  );
};

export default FORM;
