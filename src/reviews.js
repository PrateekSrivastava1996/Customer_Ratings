import React, { memo, useState, useEffect } from 'react'

function Reviews ({ details }) {
  const [ListofReview, setListofReview] = useState([])

  useEffect(() => {
    setListofReview(list => [...list, details])
  }, [details])

  return (
    <>
      {ListofReview &&
        ListofReview.map((data, index) => {
          return (
            <div key={index} className='review_card'>
              <div className='review_card_top'>
                <img src='data:image/jpeg;base64,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' />
                <div>
                  {/* <p>User Name</p> */}
                  <div style={{ display: 'flex', gap: '5px' }}>
                    {[...Array(5)].map((rating, index) => {
                      if (index < data.rating) {
                        return <div key={index} id='star-fives'></div>
                      } else {
                        return <div key={index} id='star-five'></div>
                      }
                    })}
                  </div>
                </div>
                {/* <p>Timing</p> */}
                <div
                  onClick={() =>
                    setListofReview([
                      ...ListofReview.slice(0, index),
                      ...ListofReview.slice(index + 1)
                    ])
                  }
                >
                  delete
                </div>
              </div>
              <div className='review_card_bottom'>
                <h4>{data?.title}</h4>
                <small>{data?.description}</small>
              </div>
            </div>
          )
        })}
    </>
  )
}
export default memo(Reviews)
