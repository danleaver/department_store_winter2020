import { useEffect, useState } from "react";
import axios from 'axios';
import Category from "./Category";

const Item = (props) => {
const [ categories, setCategories ] = useState([])
const [ itemCategories, setItemCategories ] = useState([])


  useEffect(() => {
    axios.get(`/api/items/${props.item.id}/item_categories`)
      .then(res => {
        setItemCategories(res.data)
        getCategoryNames(res.data)    
      })
      .catch(console.log)
  }, [])


  //do one api call and get all categories, then match names
  const getCategoryNames = (itemCategories) => {
    
    axios.get(`/api/categories`)
      .then(res => {
        let cats = []
        res.data.forEach(category => {
          itemCategories.forEach(itemCategory => {
            if (itemCategory.category_id === category.id) {
              cats = cats.concat(category)
            }
          })
        })
        setCategories(cats)
      })
  }

  //or this: do an api call for each category id and get name 
  //this doesn't work because it setState incorrectly, and only displays one piece of data
  //mapping like this causes a 'race condition' when setting state
  const getCategoryNames2 = (itemCategories) => {

    itemCategories.map(itemCategory => (
      axios.get(`/api/categories/${itemCategory.category_id}`)
        .then(res => {
          // console.log(`data from categories ${props.item.name}`, res.data)
          setCategories(categories.concat(res.data))
        })
        .catch(console.log)
    ))
  }
   
  //OPTION 3: change item_categories controller to return category names

  return (
    <div>
      {props.item.name} &nbsp;
      ${props.item.price}
      {/* {categories.map(category => <Category key={category.id} {...category} /> )} */}
      { itemCategories.map(itemCategory => (
      <div style={{background: 'skyblue'}}>
        <Category key={itemCategory.id} {...itemCategory} />
      </div>
      ))}
      <div style={{background: 'lightpink'}} >
        { categories.map(category => category.name)}
      </div>
    </div>
  )
}

export default Item