import React from 'react'

function HomePart15() {
  return (
<>
<section className="section-padding bg-graylight" id="footer-form-id">
<div className="container">
<form action className="inquiry-form-block form--square" id="contactForm" data-success="Thanks for your enquiry, we'll be in touch soon" data-error="Please fill all required fields" novalidate>
<div className="row align-items-lg-baseline">
<div className="col-lg-3">
<h2 className="h1 font-semibold form-group mb-lg-0">How Can We
Help?
</h2>
</div>
<div className="col-lg-9">
<div className="m-0">
<div className="row">
<div className="col-lg-4">
<div className="form-group">
<input type="text" className="form-control validate-required" name="contactName" placeholder="Full Name" />
</div>
</div>
<div className="col-lg-4">
<div className="form-group">
<input type="text" className="form-control validate-required" placeholder="Email" name="contactEmail" />
</div>
</div>
<div className="col-lg-4">
<div className="form-group">
<input type="text" className="form-control validate-required" placeholder="Phone Number" name="contactPhone" nkeypress="return isNumberKey(event)" />
</div>
</div>
<div className="col-12">
<div className="form-group">
<textarea className="form-control validate-required" rows="3" placeholder="Message" name="contactMessage"></textarea>
</div>
</div>
<div className="  col-12 text-right">
<button className="btn  btn-outline-primary text-uppercase ls-xs" name="submit">inquire now</button>
</div>
</div>
</div>
</div>
</div>
</form>
</div>
</section>
</>
  )
}

export default HomePart15