import React, { useEffect, useState } from 'react';
import tw from "tailwind-styled-components";
import AdvancedSettings from '../secondStep';
import BasicDetails from '../firstStep';

const Container = tw.div`
min-h-screen 
flex items-center 
justify-center 
bg-gray-100 
p-4 
relative
`;

const Notify = tw.div`
text-green-400 
border-2 
border-green-500 
bg-green-50 
font-bold 
px-4 py-2 
text-xl 
rounded 
absolute 
top-10
`;

const AddExam = () => {
  const [step, setStep] = useState('basic');
  const [questions, setQuestions] = useState([]);
  const [examName, setExamName] = useState('');
  const [duration, setDuration] = useState('');
  const [submit, handleSubmit] = useState(false);
  const [FinalData, setFinalData] = useState([]);
  const [showNotify, setShowNotify] = useState(false)

  const handleNext = () => {
    setStep("advance");
  };

  useEffect(() => {
    if(submit){
      setFinalData([...FinalData,{
        name:examName,
        duration:duration,
        questions:questions
    }]);
    setStep("basic")
    setExamName("");
    setDuration("")
    setQuestions([])
    handleSubmit(false);
    setShowNotify(true)
    setTimeout(() => {
      setShowNotify(false)
    },2000)
    }
  },[submit]);

  return (
    <Container>
      {(step === 'basic') ? 
          <BasicDetails 
             onNext={handleNext} 
             examName={examName}
             setExamName={setExamName}
             questions={questions}
              setQuestions={setQuestions} 
              duration={duration}
              setDuration={setDuration}
              /> 
          : 
          <AdvancedSettings  
             setStep={setStep}
             handleSubmit={handleSubmit}/>
      }

      {showNotify && <Notify>Data Saved</Notify>}
    </Container>
  );
};

export default AddExam;
