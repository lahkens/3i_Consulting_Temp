import React from "react";
import './Home.css';
import testimonialProfile1 from '../../Assets/Images/Ellipse 175.png';
import testimonialProfile2 from '../../Assets/Images/testimonialProfile.png';
import testimonialProfile3 from '../../Assets/Images/Ellipse 176.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft} from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import semicolon from '../../Assets/Images/“.svg';
import whiteSemiColon from '../../Assets/Images/“.png';




function TestimonialsSection(){
    return(<>
     <div classname="container-fluid testimonialSection">
        <div className="text-center mb-5 testimonialHeader">
            <h1 >Trusted by Thousands <br/> of Happy Customer</h1>
            <p>These are the stories of our customers who have joined us with great <br/>
                 pleasure when using our crazy services.</p>
        </div>
    <div id="carouselExampleControl" class="carousel slide mb-5" data-intervall="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row testimonialRow">
            <div class="col-md-3 testimonialCol">

              <div class="card p-3 testimonialCard">
                <div className="imgBox ">
                <img class="card-img-round mr-4 testimonialImg" src={testimonialProfile1} alt="Card image cap"/>
                <div className="imgContentBox">
                <h5 className="">Vishal Singh</h5>
                <p> DM, Bhadohi </p>
                </div>
                </div>
                <div class="card-body testimonialBody">
                  <p class="card-text testimonialText">Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community
                  </p>
                  <div className="d-flex justify-content-end">
                 <img className="" src={semicolon} /> 
                  </div>
                </div>
              </div>


            </div>
            <div class="col-md-3 testimonialCol">

            <div class="card p-3 testimonialCard">
                <div className="imgBox ">
                <img class="card-img-round mr-4 testimonialImg" src={testimonialProfile2} alt="Card image cap"/>
                <div className="imgContentBox">
                <h5 className="">Girish pati Tripathi</h5>
                <p> Mayor, Ayodhya </p>
                </div>
                </div>
                <div class="card-body testimonialBody">
                  <p class="card-text testimonialText">Financial planning and investment advice I received from this team completely transformed my future. I couldn't be happier with the results.
                  </p>
                  <div className="d-flex justify-content-end">
                 <img className="svgImg"  src={whiteSemiColon} /> 
                  </div>
                </div>
              </div>


            </div>
            <div class="col-md-3 testimonialCol">


            <div class="card p-3 testimonialCard">
                <div className="imgBox ">
                <img class="card-img-round mr-4 testimonialImg" src={testimonialProfile3} alt="Card image cap"/>
                <div className="imgContentBox">
                <h5 className="">Vishwa Bhusan Mishra</h5>
                <p> CEO, SKVT </p>
                </div>
                </div>
                <div class="card-body testimonialBody">
                  <p class="card-text testimonialText">Estate planning is crucial, and they made the process seamless and stress-free. I can rest assured knowing family's future is secure
                  </p>
                  <div className="d-flex justify-content-end">
                 <img className="" src={semicolon} /> 
                  </div>
                </div>
              </div>


            </div>
          
          </div>

        </div>
        <div class="carousel-item">
          <div class="row testimonialRow">
            <div class="col-md-3 testimonialCol">

            <div class="card p-3 testimonialCard">
                <div className="imgBox ">
                <img class="card-img-round mr-4 testimonialImg" src={testimonialProfile1} alt="Card image cap"/>
                <div className="imgContentBox">
                <h5 className="">Vishal Singh</h5>
                <p> DM, Bhadohi </p>
                </div>
                </div>
                <div class="card-body testimonialBody">
                  <p class="card-text testimonialText">Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community
                  </p>
                  <div className="d-flex justify-content-end">
                 <img className="" src={semicolon} /> 
                  </div>
                </div>
              </div>


            </div>
            <div class="col-md-3 testimonialCol">

            <div class="card p-3 testimonialCard">
                <div className="imgBox ">
                <img class="card-img-round mr-4 testimonialImg" src={testimonialProfile2} alt="Card image cap"/>
                <div className="imgContentBox">
                <h5 className="">Girish pati Tripathi</h5>
                <p> Mayor, Ayodhya </p>
                </div>
                </div>
                <div class="card-body testimonialBody">
                  <p class="card-text testimonialText">Financial planning and investment advice I received from this team completely transformed my future. I couldn't be happier with the results.
                  </p>
                  <div className="d-flex justify-content-end">
                 <img className="" src={whiteSemiColon} /> 
                  </div>
                </div>
              </div>

            </div>
            <div class="col-md-3 testimonialCol">

            <div class="card p-3 testimonialCard">
                <div className="imgBox ">
                <img class="card-img-round mr-4 testimonialImg" src={testimonialProfile3} alt="Card image cap"/>
                <div className="imgContentBox">
                <h5 className="">Vishwa Bhusan Mishra</h5>
                <p> CEO, SKVT </p>
                </div>
                </div>
                <div class="card-body testimonialBody">
                  <p class="card-text testimonialText">Estate planning is crucial, and they made the process seamless and stress-free. I can rest assured knowing family's future is secure
                  </p>
                  <div className="d-flex justify-content-end">
                 <img className="" src={semicolon} /> 
                  </div>
                </div>
              </div>

            </div>
        
          </div>
        </div>

      </div>
      <a class="carousel-control-prev" href="#carouselExampleControl" role="button" data-slide="prev">
        {/* <span class="carousel-control-prev-icon" aria-hidden="true"> */}
        <FontAwesomeIcon className="leftArrow" style={{color : 'black' , height: '50px', marginRight: '3rem'}} icon={faChevronLeft} />
        {/* </span> */}
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControl" role="button" data-slide="next">
        {/* <span class="carousel-control-next-icon" aria-hidden="true"> */}
        <FontAwesomeIcon className="rightArrow" style={{color : 'black' , height: '50px' , marginLeft: '3rem'}} icon={faChevronRight} />
        {/* </span> */}
        <span class="sr-only">Next</span>
      </a>
    </div>
    </div>
    </>)
}

export default React.memo(TestimonialsSection);