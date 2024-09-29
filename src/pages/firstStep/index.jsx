import React, { useEffect, useState } from 'react';
import InputField from '../../components/input/index';
import SelectField from '../../components/selectField/index';
import Button from '../../components/button/index';
import { FormContainer, Heading } from './index.styles';
import TableContainer from '../../components/tableContainer';


const BasicDetails = ({ onNext, questions, setQuestions, examName, setExamName, duration, setDuration }) => {
  
  const [questionPicking, setQuestionPicking] = useState('Auto');
  const [isOpenTable, setOpenTable] = useState(false)
  const [isClicked, setCliked] = useState(false);

  useEffect(() => {
    if(questions.length > 0){
      setOpenTable(true);
    }
  },[])

  const clickHandler = () => {
    setCliked(true);
    if(examName && parseInt(duration)){
      setOpenTable(true);
      if(questions.length > 0){
        onNext()
      }
    }
  };
  
  return (
    <FormContainer>
      <Heading>Step 1: Basic Details</Heading>
      
      <InputField
        value={examName}
        onChange={(e) => setExamName(e.target.value)}
        placeholder="Exam Name"
        error={(!examName && isClicked) ? 'Name is required':""}
      />

      <InputField
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Exam Duration (minutes)"
        error={((duration === '0' || !duration) && isClicked) ? 'Duration is required':""}
      />

      <SelectField
        value={questionPicking}
        onChange={(e) => setQuestionPicking(e.target.value)}
        options={[
          { label: 'Auto', value: 'Auto' },
          { label: 'Manual', value: 'Manual' }
        ]}
        
      />

      {isOpenTable && (
        <TableContainer questions={questions} setQuestions={setQuestions} isClicked={isClicked} questionPicking={questionPicking}/>
      )}

      <Button onClick={clickHandler}>
        Next
      </Button>

    </FormContainer>
  );
};

export default BasicDetails;

