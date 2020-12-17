
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const Category = (props) => {
  const [ category, setCategory ] = useState();

  useEffect(() => {
    axios.get(`/api/categories/${props.category_id}`)
    .then(res => {
      setCategory(res.data)
    })
    .catch(console.log)
  }, [])

  return <> {category && category.name} </>
}

export default Category