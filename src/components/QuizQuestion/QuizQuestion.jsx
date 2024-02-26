import {
  Button, FormControl, FormControlLabel, Radio, RadioGroup, ThemeProvider,
} from '@mui/material';
import React, { useMemo, useState } from 'react';
import { gray } from '../../styled';
import { GroupWrapper } from './styled';

const QuizQuestion = ({ questionCount, questionGroup, confirmAnswer }) => {
  const { question } = questionGroup;
  const { answers } = questionGroup;
  const [value, setValue] = useState('');

  const questionCountString = useMemo(() => `Question ${questionCount + 1}. `, [questionCount]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    answers.forEach((answer) => {
      if (answer.text === value) {
        if (answer.isCorrect) {
          confirmAnswer(true);
        } else {
          confirmAnswer(false);
        }
      }
    });
  };

  return (
    <GroupWrapper>
      <h3>{questionCountString + question}</h3>
      <FormControl>
        <RadioGroup onChange={handleChange} value={value} >
          {answers.map((answer, i) => (
            <FormControlLabel
              key={i}
              value={answer.text}
              label={answer.text}
              control={<Radio />} />
          ))}
        </RadioGroup>
      </FormControl>
      <ThemeProvider theme={gray}>
        <Button
          color='gray'
          variant="contained"
          size="large"
          disabled={!value}
          onClick={handleClick}
        >
          Next Question
        </Button>
      </ThemeProvider>
    </GroupWrapper>
  );
};

export default QuizQuestion;
