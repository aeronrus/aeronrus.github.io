import React from "react";
import styles from  "./search.module.scss"
import cr from "../../assets/img/crest.svg"

import { setSearchValue } from "../../redux/filter/slice";
import { selectFilter } from "../../redux/filter/selector";
import debounce from 'lodash.debounce'
import { useDispatch, useSelector } from "react-redux";



const Search : React.FC= () => {
  const searchValue = useSelector(selectFilter)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const[value, setValue]=React.useState('')
  const dispatch=useDispatch()

  const onClickClear=(event:React.MouseEvent<HTMLImageElement>)=>{

    dispatch(setSearchValue(''))
    setValue('')
    inputRef.current?.focus()
  }

 
  const updateSearchValue = React.useCallback(
    debounce((str:string)=>{
      dispatch(setSearchValue(str))      
    }, 1000),
    [],
  )

  const onChangeInput=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(event.target.value)
    updateSearchValue(event.target.value)
    //console.log(value)
    //console.log(searchValue)
  }


   return (  
    <div className="container">
    <input ref={inputRef} className={styles.input} value={value} onChange={onChangeInput} placeholder='Поиск пиццы' ></input> 
   {value && <img onClick={onClickClear} className={styles.delete_icon} src={cr}></img>}
    </div>
   )
}




export default Search;
