import {useState} from "react";
import './page.css';
import ContentTable from './Appcomponents/content.table';
import SearchBar from "./Appcomponents/filter";



export default function Page(){
    const [message,setMessage] =useState('')
    const [checked,setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setMessage(event.target.value);
        console.log(event.target.value);
    }
    const handleCheck = ()=>{
        setChecked(!checked);
        console.log(checked)
    }
    return(
        <div>
        <SearchBar handleChange={handleChange} message={message} checked={checked} handleCheck={handleCheck}/>
        <ContentTable message={message} checked={checked}/>
        </div>
    )
}


