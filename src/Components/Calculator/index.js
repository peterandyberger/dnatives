import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addNumber } from '../../Redux/actions';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import config from '../../Config/config.json';

const CALCULATOR = (props) => {
  const dispatch = useDispatch();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <Box
      sx={{ flexGrow: 1 }}
      alignItems="center"
      justifyContent="center"
      padding={'20px'}
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={1}>
          <Item
            onClick={() => {
              if (props.value.length < config.MAX_LENGTH) {
                dispatch(addNumber(props.value + '1'));
              }
            }}
          >
            1
          </Item>
        </Grid>
        <Grid item xs={1}>
          <Item
            onClick={() => {
              if (props.value.length < config.MAX_LENGTH) {
                dispatch(addNumber(props.value + '2'));
              }
            }}
          >
            2
          </Item>
        </Grid>
        <Grid item xs={1}>
          <Item
            onClick={() => {
              if (props.value.length < config.MAX_LENGTH) {
                dispatch(addNumber(props.value + '3'));
              }
            }}
          >
            3
          </Item>
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={1}>
          <Item
            onClick={() => {
              if (props.value.length < config.MAX_LENGTH) {
                dispatch(addNumber(props.value + '4'));
              }
            }}
          >
            4
          </Item>
        </Grid>
        <Grid item xs={1}>
          <Item
            onClick={() => {
              if (props.value.length < config.MAX_LENGTH) {
                dispatch(addNumber(props.value + '5'));
              }
            }}
          >
            5
          </Item>
        </Grid>
        <Grid item xs={1}>
          <Item
            onClick={() => {
              if (props.value.length < config.MAX_LENGTH) {
                dispatch(addNumber(props.value + '6'));
              }
            }}
          >
            6
          </Item>
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={1}>
          <Item
            onClick={() => {
              if (props.value.length < config.MAX_LENGTH) {
                dispatch(addNumber(props.value + '7'));
              }
            }}
          >
            7
          </Item>
        </Grid>
        <Grid item xs={1}>
          <Item
            onClick={() => {
              if (props.value.length < config.MAX_LENGTH) {
                dispatch(addNumber(props.value + '8'));
              }
            }}
          >
            8
          </Item>
        </Grid>
        <Grid item xs={1}>
          <Item
            onClick={() => {
              if (props.value.length < config.MAX_LENGTH) {
                dispatch(addNumber(props.value + '9'));
              }
            }}
          >
            9
          </Item>
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={1}>
          <Item
            onClick={() => {
              dispatch(addNumber(''));
            }}
          >
            clr
          </Item>
        </Grid>
        <Grid item xs={1}>
          <Item
            onClick={() => {
              if (props.value.length < config.MAX_LENGTH) {
                dispatch(addNumber(props.value + '0'));
              }
            }}
          >
            0
          </Item>
        </Grid>
        <Grid item xs={1}>
          <Item
            onClick={() => {
              dispatch(addNumber(props.value.slice(0, -1)));
            }}
          >
            back
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    value: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNumber: (payload) => dispatch(addNumber(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CALCULATOR);
