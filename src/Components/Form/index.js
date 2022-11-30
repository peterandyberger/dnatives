import {
  FormControl,
  InputLabel,
  FormHelperText,
  OutlinedInput,
  FormControlLabel,
  Switch,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import RESULT from '../Result';
import { connect, useDispatch } from 'react-redux';
import { addNumber, setBritish } from '../../Redux/actions';
import config from '../../Config/config.json';

const FORM = (props) => {
  const [result, setResult] = useState();
  const [valid, setValid] = useState(true);
  const [showresult, setShowresult] = useState(false);

  const dispatch = useDispatch();

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
    validator(props.value);
  }, [props.value, props.british]);

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

    const britishThousandRecursive = (num) => {
      const string = [...num];
      return (
        numbers[string[0] + string[1]] +
        ' ' +
        scale[1] +
        ' and ' +
        decimalRecursive(num.slice(2, 4))
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
    } else if (numberString > 1000 && numberString < 2000 && props.british) {
      setResult(britishThousandRecursive(numberString));
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
    dispatch(addNumber(e));
  };

  const validator = (entry) => {
    if (entry !== '') {
      if (
        +entry === +entry &&
        !entry.includes('.') &&
        !entry.includes(' ') &&
        entry[0] !== '0'
      ) {
        setValid(true);
        setShowresult(true);
        convert(entry);
      } else {
        setValid(false);
        setShowresult(false);
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
          inputProps={{ maxLength: config.MAX_LENGTH }}
          pattern="[0-9]*"
          value={props.value}
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
        <FormControlLabel
          control={
            <Switch
              onClick={() => {
                dispatch(setBritish(!props.british));
              }}
            />
          }
          label="British English"
        />
      </FormControl>
      {showresult && <RESULT result={result} />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    value: state.value,
    british: state.british,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNumber: (payload) => dispatch(addNumber(payload)),
    setBritish: (payload) => dispatch(setBritish(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FORM);
