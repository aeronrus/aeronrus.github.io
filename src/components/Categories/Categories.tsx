import React from "react"


type CategoriesProps = {
  activeIndex:number;
  onClickCategory: (Id:number)=>void; 
}

const Categories: React.FC <CategoriesProps> = React.memo(({activeIndex, onClickCategory}) => {



   
  

const categories =['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']



let list = categories.map((item:string,index:number)=>(<li key={index} onClick={()=>onClickCategory(index)} className={activeIndex===index?'active':''}>{item}</li>
  )
)

return(
<div className="categories">
              <ul>
                {list}
              </ul>
            </div>
)
}
)

export default Categories