import React from 'react'
import Navbar from '../../components/navigation/navbar'

export default function ContactPage(props) {
  return (
    <>
    <Navbar autentification={props.autentification} logoutUser={props.logoutUser}/>
    <div className='profilePageContainer'>
        <div className='col-lg-6 col-md-6 col-sm-12 mb-12'>
          <div className='card justify-content-center align-items-left'>
            <div className='card-body '>
              <h5 className='card-title'>
                Informacije o mladencima:
              </h5>
              <div className='hiperLine'></div>

              <div className='profilePageTxt' >
                Mlada:

              </div>
              <div className='profilePageTxt' >
                Kontakt broj mlada: 

              </div>
              <div className='hiperLine'></div>
              <div className='profilePageTxt' >
                Mladoženja: 

              </div>
              <div className='profilePageTxt' >
                Kontakt broj mladoženja:

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
