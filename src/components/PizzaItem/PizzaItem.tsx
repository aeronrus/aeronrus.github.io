import axios from "axios"
import React from "react"
import { NavLink, useParams, useNavigate } from "react-router-dom"


const PizzaItem: React.FC = () =>{
  const navigate=useNavigate();
  const [pizza, setPizza] = React.useState<{
    imageUrl:string,
    title: string,
    price: number
  }>()
  const {id}=useParams()

  React.useEffect(()=>{
    async function fetchPizza() {
      try{
        const {data}=await axios.get('https://63905cbd0bf398c73a84e157.mockapi.io/items/'+id)
        setPizza(data)
      }
      catch(error){
        alert('Ошибка при получении пицц')
        navigate('/')
      } 
    }
    fetchPizza()
  }, [])
  
  if(!pizza){
    return <>Загрузка</>
  }
return(
  <div className="container">
    <img src={pizza.imageUrl} />
    <h2>{pizza.title}</h2>
    <h4>{pizza.price} ₽</h4>
    <NavLink to='/'>
          <button className="button button--outline button--add">
            <span>Назад</span>
          </button>
    </NavLink>
  </div>
)
}


export default PizzaItem