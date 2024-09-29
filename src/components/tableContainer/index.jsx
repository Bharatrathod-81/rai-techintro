import React, { useEffect, useState } from 'react';
import InputField from '../input/index';
import Button from '../button/index';
import QuestionsTable from '../questionsTable/index';
import { Error } from './index.styles';
import TopicSearch from '../topicSearch/TopicSearch';
import { MockAutoQuestions } from '../../services/mockData';

const TableContainer = ({questions, setQuestions, isClicked, questionPicking}) => {

    const [newQuestion, setNewQuestion] = useState({ topic: '', easy: 0, medium: 0, hard: 0 });
    const [clickedAdd, setClickedAdd] = useState(false);
    const [isEdit, setEdit] = useState(null);
    const isOptionError = (!isNaN(newQuestion.easy) && newQuestion.easy !== 0) || (!isNaN(newQuestion.hard) && newQuestion.hard !== 0) || (!isNaN(newQuestion.medium) && newQuestion.medium !== 0);

    useEffect(() => {
        setQuestions(questionPicking === 'Auto'? MockAutoQuestions.slice(0, 5):[])
    },[questionPicking]);

    const handleAddQuestion = () => {
        setClickedAdd(true);
        if(isOptionError && newQuestion.topic){
            if(isEdit !== null){
                setQuestions(questions?.map((e,i) => i === isEdit ? newQuestion:e));
                setEdit(null);
            }else{
                setQuestions([...questions, newQuestion]);
            }
            setNewQuestion({ topic: '', easy: 0, medium: 0, hard: 0 });
            setClickedAdd(false);
        }
      };

      const handleTopicSelect = (selectedTopic) => {
        setNewQuestion({ ...newQuestion, topic: selectedTopic })
      };

  return (
    <>
          <TopicSearch onSelectTopic={handleTopicSelect} placeholder="Topic" error={!newQuestion.topic && clickedAdd ? "Topic name is required":""} value={newQuestion.topic}/>

          <InputField
            type="number"
            value={newQuestion.easy}
            onChange={(e) => setNewQuestion({ ...newQuestion, easy: parseInt(e.target.value) || 0 })}
            placeholder="Easy Questions"
          />
          <InputField
            type="number"
            value={newQuestion.medium}
            onChange={(e) => setNewQuestion({ ...newQuestion, medium: parseInt(e.target.value) || 0})}
            placeholder="Medium Questions"
          />
          <InputField
            type="number"
            value={newQuestion.hard}
            onChange={(e) => setNewQuestion({ ...newQuestion, hard: parseInt(e.target.value) || 0 })}
            placeholder="Hard Questions"
          />

          {clickedAdd && !isOptionError && <Error>Add atleast 1 question type</Error>}
          
          <Button onClick={handleAddQuestion}>Add Question</Button>
          
          {isClicked && questions.length < 1 && <Error>Add atleast 1 question table</Error>}

          <QuestionsTable
            questions={questions}
            setQuestions={setQuestions}
            setNewQuestion={setNewQuestion}
            setEdit={setEdit}
          />
        </>
  )
}

export default TableContainer
