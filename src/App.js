import './App.css'
import { useState } from 'react'
import Reviews from './reviews'
function App () {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [SelectedRating, setSelectedRating] = useState(0)
  const [ReviewDetails, setReviewDetails] = useState()
  const clearform = () => {
    setSelectedRating(0)
    setTitle()
    setDescription()
  }
  return (
    <div className='appcontainer'>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (title !== '' && SelectedRating !== 0) {
            setReviewDetails({
              rating: SelectedRating,
              title,
              description
            })
          }

          clearform()
        }}
      >
        <div style={{ display: 'flex', gap: '10px' }}>
          {[...Array(5)].map((data, index) => {
            if (index < SelectedRating) {
              return (
                <div
                  onMouseLeave={() => {
                    setSelectedRating(x => index + 1)
                  }}
                  key={index}
                  id='star-fives'
                ></div>
              )
            } else {
              return (
                <div
                  onMouseEnter={() => {
                    setSelectedRating(x => index + 1)
                  }}
                  key={index}
                  id='star-five'
                ></div>
              )
            }
          })}
        </div>
        <input
          type='text'
          placeholder='Enter Title'
          value={title ? title : ''}
          onChange={e => {
            setTitle(e.target.value)
          }}
        />
        <input
          type='text'
          placeholder='Enter Description'
          value={description ? description : ''}
          onChange={e => {
            setDescription(e.target.value)
          }}
        />
        <button type='submit'>Add</button>
      </form>
      <div>{ReviewDetails ? <Reviews details={ReviewDetails} /> : ''}</div>
    </div>
  )
}

export default App
