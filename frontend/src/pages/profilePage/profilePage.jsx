import React, {  useState } from 'react';
import Navbar from '../../components/navigation/navbar';
import './profilePage.css';

export default function ProfilePage(props) {
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({
    bride: '',
    brideNumber: '',
    groom: '',
    groomNumber: '',
    display: true
  })


  const editHandler = () => {
    setEdit(!edit);
    setData((prevState)=> ({
        ...prevState,
        display: !data.display
    }))
  };



  return (
    <>
      <Navbar autentification={props.autentification} logoutUser={props.logoutUser}/>
      <div className='profilePageContainer'>
        <div className='col-lg-6 col-md-6 col-sm-12 mb-12'>
          <div className='card justify-content-center align-items-left'>
            <div className='card-body '>
              <h5 className='card-title'>
                Informacije koje će se prikazivati gostima:
                <button className='btn editBtn' onClick={editHandler}>
                  {!edit ? 'Uredi' : 'Spremi'}
                </button>
              </h5>
              <div className='hiperLine'></div>

              <div className='profilePageTxt' style={data.display ? {justifyContent: 'flex-start'} : {justifyContent: 'space-between'}}>
                Mlada: <p className='inputText'>{data.display ? data.bride : ''}</p>
                {edit && (
                  <input
                    type='text'
                    className='form-control inputField'
                    id='name'
                    name='name'
                    placeholder='Ime i prezime mlade'
                    value={data.bride}
                    onChange={(e) => {setData(prevState=> ({
                        ...prevState,
                        bride: e.target.value
                    }))}}
                    required
                  />
                )}
              </div>
              <div className='profilePageTxt' style={data.display ? {justifyContent: 'flex-start'} : {justifyContent: 'space-between'}}>
                Kontakt broj mlada: <p className='inputText'>{data.display ? data.brideNumber : ''}</p>
                {edit && (
                  <input
                    type='number'
                    className='form-control inputField'
                    id='name'
                    name='name'
                    placeholder='Broj mlade'
                    value={data.brideNumber}
                    onChange={(e) => {setData(prevState=> ({
                        ...prevState,
                        brideNumber: e.target.value
                    }))}}
                    required
                  />
                )}
              </div>
              <div className='hiperLine'></div>
              <div className='profilePageTxt' style={data.display ? {justifyContent: 'flex-start'} : {justifyContent: 'space-between'}}>
                Mladoženja: <p className='inputText'>{data.display ? data.groom : ''}</p>
                {edit && (
                  <input
                    type='text'
                    className='form-control inputField'
                    id='name'
                    name='name'
                    placeholder='Ime i prezime mladoženje'
                    value={data.groom}
                    onChange={(e) => {setData(prevState=> ({
                        ...prevState,
                        groom: e.target.value
                    }))}}
                    required
                  />
                )}
              </div>
              <div className='profilePageTxt' style={data.display ? {justifyContent: 'flex-start'} : {justifyContent: 'space-between'}}>
                Kontakt broj mladoženja: <p className='inputText'>{data.display ? data.groomNumber : ''}</p>
                {edit && (
                  <input
                    type='number'
                    className='form-control inputField'
                    id='name'
                    name='name'
                    placeholder='Broj mladoženje'
                    value={data.groomNumber}
                    onChange={(e) => {setData(prevState=> ({
                        ...prevState,
                        groomNumber: e.target.value
                    }))}}
                    required
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
