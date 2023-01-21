import React, { useCallback } from "react";
import qs from 'qs';
import '../scss/app.scss';
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import PizzaBlock from "../components/Pizza-block/PizzaBlock";
import Error  from "./Error";
import Skeleton from "../components/Pizza-block/Skeleton";
import Pagination from "../components/Pagination/Pagination";
import { useSelector} from "react-redux";
import { setCategoryId, setCurrentPage } from "../redux/filter/slice";
import { selectFilter } from "../redux/filter/selector";
import { fetchPizzas } from "../redux/pizza/slice";
import { selectPizza } from "../redux/pizza/selector";
import {  useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/store";



const Home : React.FC= () => {
  const {sortId, categoryId, currentPage, searchValue}=useSelector(selectFilter)

  const dispatch = useAppDispatch()
  const navigate= useNavigate()
  const isSearch = React.useRef(false)
  const isMounted = React.useRef(false) //первый рендер

  const {pizzas, status}=useSelector(selectPizza)
  
const sorts=['rating','price','title']


const searchCategory=categoryId>0? `category=${categoryId}` : '';
const search=searchValue?`search=${searchValue}`:''
const onChangePage=(number:number)=>{
  dispatch(setCurrentPage(number))
}



const onClickCategory = useCallback((id:number) => {
  dispatch(setCategoryId(id))
 
},[])




const getPizzas = async () => {

    dispatch( 
      fetchPizzas({
      sortId,
      sorts,
      search,
      searchCategory,
      currentPage: String(currentPage)
    }))
    
    window.scrollTo(0,0)
}




//Прооверяем были ли изменены параметры в setFilters Если был первый рендер, то запрашиваем пиццы 
React.useEffect(()=>{
    window.scrollTo(0,0) 
   // if(!isSearch.current){
     getPizzas()
   // }
  //isSearch.current=false
},[categoryId, sortId, searchValue, searchValue, currentPage]);



const pizzasList = pizzas.map((obj:any)=><PizzaBlock key={obj.id} id={obj.id} {...obj}/>)
const skeletonList = [...new Array(10)].map((_, index)=><Skeleton key={index} />)
   return (
     <div  className="container">   
          <div  className="content__top">
            <Categories activeIndex={categoryId} onClickCategory={onClickCategory}/>
           <Sort sortId={sortId}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          {status==='error'? (<Error/>)
              :<div className="content__items"> 
              {status==='loading'
              ?skeletonList:pizzasList}
           </div>}
          <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
          </div>
   );
}




export default Home;