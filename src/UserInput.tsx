import {useState} from 'react';
interface UserInputProps {
    onNameChange: (name:string) => void; // It is a callback function with string as argument
}
// A component with an Input Text
const UserInput: React.FC<UserInputProps> = ({onNameChange}) => {
 
    const [input, setInput] = useState('')
  
    const passData = () => {
        console.log(input)
        onNameChange(input);
    }

    // Declare the method onChange
    return (
        <div>
            <h1>User Input</h1>
        <input type="text" placeholder="Enter  your name" 
        onChange={(e)=>setInput(e.target.value)} />
        {/* to do pass data to parent */}
        <button onClick={passData}>Pass back data</button>
        </div>
    );
}

export default UserInput;