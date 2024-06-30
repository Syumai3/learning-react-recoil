import { useRecoilState, } from "recoil"
import "./InputTask.css"
import { inputTitleState } from "../states/inputTitleState"
import { useCallback } from "react"
import { addTitleState } from "../states/addTitleState"

const getKey = () => Math.random().toString(32).substring(2)

function InputTask() {
    // const inputTitle = useRecoilValue(inputTitleState)
    // const setInputTitle = useSetRecoilState(inputTitleState)
    const [inputTitle,setInputTitle] = useRecoilState(inputTitleState)
    const [addTitle,setAddTitle] = useRecoilState(addTitleState)

const handleClick = () => {
    setAddTitle([...addTitle,{id:getKey(),title:inputTitle}])
    setInputTitle("")
    console.log(addTitle)
}

const onChange = useCallback((e:React.ChangeEvent<HTMLInputElement>)=> {
setInputTitle(e.target.value)
console.log(inputTitle)
},[inputTitle])

  return (
    <div className='inputField'>
        <input type="text" className='inputTitle' onChange={onChange} value={inputTitle}/>
        <button type='button' className='addButton' onClick={handleClick}>追加</button>
    </div>
  )
}

export default InputTask