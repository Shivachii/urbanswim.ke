import React from 'react'
import './styles.css'

const Kids = () => {
  return (
    <div>
        <table className='p-2 m-2 md:p-5 md:m-5 table-auto w-full text-sm md:text-base '>
  <thead>
    <tr>
      <th>Size</th>
      <th>Age</th>
      <th>Height (in)</th>
      <th>Weight (lbs)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>XS</td>
      <td>4-5</td>
      <td>39-45</td>
      <td>35-45</td>
    </tr>
    <tr>
      <td>S</td>
      <td>6-7</td>
      <td>45-51</td>
      <td>45-55</td>
    </tr>
    <tr>
      <td>M</td>
      <td>8-9</td>
      <td>51-57</td>
      <td>55-70</td>
    </tr>
    <tr>
      <td>L</td>
      <td>10-11</td>
      <td>57-62</td>
      <td>70-85</td>
    </tr>
    <tr>
      <td>XL</td>
      <td>12-13</td>
      <td>62-67</td>
      <td>85-100</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Kids