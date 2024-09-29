import React, { useState } from 'react';
import Checkbox from '../../components/checkbox/index';
import Textarea from '../../components/textaira/index';
import Button from '../../components/button';
import Input from '../../components/input';
import { FormContainer, Heading, Subheading } from './index.styles';


const AdvancedSettings = ({setStep, handleSubmit}) => {
  const [negativeMarking, setNegativeMarking] = useState(0);
  const [marks, setMarks] = useState({ easy: 0, medium: 0, hard: 0 });
  const [minPassingScore, setMinPassingScore] = useState(0);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [captureImage, setCaptureImage] = useState(false);
  const [timeInterval, setTimeInterval] = useState(0);
  const [instructions, setInstructions] = useState('Please read all instructions carefully before proceeding.');

  const handleSave = () => {
    console.log('Exam saved');
    handleSubmit(true);
  };

  return (
    <FormContainer>
      <div className='flex justify-between items-center'>
        <Heading>Step 2: Advanced Settings</Heading>
        <svg onClick={() => setStep('basic')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 rounded-full p-1 hover:bg-slate-100">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
        </svg>
      </div>
      
      <Input
        type="number"
        value={negativeMarking}
        onChange={(e) => setNegativeMarking(e.target.value)}
        placeholder="Negative Marking (%)"
      />

    
      <Subheading>Assign Marks</Subheading>

      <Input
        type="number"
        value={marks.easy}
        onChange={(e) => setMarks({ ...marks, easy: e.target.value })}
        placeholder="Easy"
      />

      <Input
        type="number"
        value={marks.medium}
        onChange={(e) => setMarks({ ...marks, medium: e.target.value })}
        placeholder="Medium"
      />

      <Input
        type="number"
        value={marks.hard}
        onChange={(e) => setMarks({ ...marks, hard: e.target.value })}
        placeholder="Hard"
      />

     
      <Input
        type="number"
        value={minPassingScore}
        onChange={(e) => setMinPassingScore(e.target.value)}
        placeholder="Minimum Passing Score (%)"
      />

     
      <Checkbox
        checked={showRegistrationForm}
        onChange={(e) => setShowRegistrationForm(e.target.checked)}
        label="Show Registration Form"
      />

      {showRegistrationForm && (
        <p className="text-gray-600">Registration form configuration here...</p>
      )}

      
      <Checkbox
        checked={captureImage}
        onChange={(e) => setCaptureImage(e.target.checked)}
        label="Capture Image During Exam"
      />

      {captureImage && (
        <Input
          type="number"
          value={timeInterval}
          onChange={(e) => setTimeInterval(e.target.value)}
          placeholder="Time Interval (seconds)"
        />
      )}

    
      <Textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Instructions"
      />

     
      <Button onClick={handleSave}>Save and Close</Button>
    </FormContainer>
  );
};

export default AdvancedSettings;

