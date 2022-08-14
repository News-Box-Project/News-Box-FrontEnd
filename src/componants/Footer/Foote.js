import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default class Footer extends React.Component  {
    render(){
 return(
<>

<MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block text-white'>
          <span>Feel free to get in touch with us❤️</span>
        </div>

      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>
                <MDBIcon icon="gem" className="me-3" />
                News Box
              </h6>
              <p className ='text-white'>
              Here we are to inform you 
              what is happening in the world around you.
            All newly received or noteworthy information, 
            especially about recent events you will found it here.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>CATIGORIES</h6>
              <p>
                <a href='#!' className='text-white'>
                  Sports
                </a>
              </p>
              <p>
                <a href='#!' className=' text-white'>
                  Health
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'>
                  General
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'>
                  Technology
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>SOCIAL MEDIA</h6>
              <p>
                <a href='https://web.facebook.com/?_rdc=1&_rdr' className='text-white'>
                  Facebook
                </a>
              </p>
              <p>
                <a href='https://www.instagram.com/?hl=en' className='text-white'>
                  Insatgram
                </a>
              </p>
              <p>
                <a href='https://twitter.com/?lang=en' className='text-white'>
                  Twitter
                </a>
              </p>
            
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Contact</h6>
              <p className='text-white'>           
                <MDBIcon icon="home"  />
                Jordan , Amman, 15
              </p>
              
              <p className='text-white'>
                <MDBIcon icon="envelope" />
                newsbox001@gmail.com
              </p>
              <p className='text-white'>
                <MDBIcon icon="phone"  /> + 962 795 6783 04
              </p>
              
            </MDBCol>
           
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
    <p>&copy;{new Date().getFullYear()} News Box website - All Right Reserved</p>
      </div>
    </MDBFooter>
    
</>

 )

 }}