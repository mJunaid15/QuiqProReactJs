import React from 'react'
import Button from '@mui/material/Button'

const FooterBanner = () => {
  return (
    <>
      <section className='footerbanner d-flex align-items-center '>
        <div className='container '>
          <div className='text-center my-5'>
            <h1> Top finance experts are in high demand. </h1>

            <Button
              variant='outlined'
              className='footerbannerbtn'
              style={{ color: '#fff', border: '1px solid #fff' }}
            >
              Get started with QuiqPro{' '}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default FooterBanner
