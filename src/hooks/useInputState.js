import { useState } from 'react';

export default initialVal => {
  const [ val, setValue ] = useState(initialVal);
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const resetValue = () => {
    setValue('')
  }
  return [val, handleChange, resetValue]
}