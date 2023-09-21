import React from 'react'

function HomePart2() {
  return (
<>
<section className="section-padding section-paragraph bg-graylight">
  <div className="container">
    <div className="row flex-xl-row-reverse align-items-center">
      <div className="col-lg-6 col-xl-7">
        <div>
          <img
            alt="Trusted by Top Leading companies"
            src="/images/trustedby-company.jpg"
            className="new-trusted-by-img w-auto"
            data-pagespeed-url-hash="704781"
            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
          />
        </div>
      </div>

      <div className="col-lg-6 col-xl-5">
        <div className="boxed bg-white testimonial-box shadow-custom text-center">
          <div className="section-title-and-desc">
            <div className="section-title-block">
              <h2 className="section-title-text h1">
                <span className="text-primary">Trusted by</span> Top Leading Companies in UK
              </h2>
              <p className="text-primary  text-col mb-3">Customer Satisfaction is Our Highest Priority</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img
                alt="David Carta"
                src="/images/thomas.jpg"
                className="w-auto trustedby-profile-img"
                data-pagespeed-url-hash="438029833"
                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
              />
              <h6 className="text-primary text-col">Thomas D vale</h6>
              <p className="mb-3">President at Digital-Q</p>
              <p>
                I am glad to have worked with Bacancy on this project. The team was always available for questions
                and clarifications when needed. Overall, the team is transparent and communicative, and their technical
                expertise is also remarkable.
              </p>
            </div>
          </div>
          <div className="round-dot-slider testimonial-slider owl-carousel owl-theme">
            <div className="item">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img
                  alt="David Carta"
                  src="/images/thomas.jpg"
                  className="w-auto trustedby-profile-img"
                  data-pagespeed-url-hash="438029833"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <h6 className="text-primary">Thomas D vale</h6>
                <p className="mb-3">President at Digitalq</p>
                <p>
                  I am glad to have worked with Bacancy on this project. The team was always available for questions
                  and clarifications when needed. Overall, the team is transparent and communicative, and their technical
                  expertise is also remarkable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12 text-center mt-5">
        <a href="#form" className="btn bg-yel btn-primary btn-radious text-uppercase ls-xs">
          START 15 Days RISK FREE TRIAL
        </a>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default HomePart2