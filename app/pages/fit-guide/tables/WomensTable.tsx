import React from 'react'

const WomensTable = () => {
  return (
    <div>
         <table className='p-5 m-5 '>
  <thead className=''>
    <tr className=''>
      <th >Size</th>
      <th>Bust (in)</th>
      <th>Waist (in)</th>
      <th>Hips (in)</th>
      <th>Torso (in)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>XS</td>
      <td>31-32</td>
      <td>24-25</td>
      <td>33-34</td>
      <td>57-59</td>
    </tr>
    <tr>
      <td>S</td>
      <td>33-34</td>
      <td>26-27</td>
      <td>35-36</td>
      <td>60-62</td>
    </tr>
    <tr>
      <td>M</td>
      <td>35-36</td>
      <td>28-29</td>
      <td>37-38</td>
      <td>63-65</td>
    </tr>
    <tr>
      <td>L</td>
      <td>37-39</td>
      <td>30-32</td>
      <td>39-41</td>
      <td>66-68</td>
    </tr>
    <tr>
      <td>XL</td>
      <td>40-42</td>
      <td>33-35</td>
      <td>42-44</td>
      <td>69-71</td>
    </tr>
    <tr>
      <td>XXL</td>
      <td>43-45</td>
      <td>36-38</td>
      <td>45-47</td>
      <td>72-74</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default WomensTable