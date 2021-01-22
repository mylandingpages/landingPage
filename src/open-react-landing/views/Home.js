import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import Radio from '../components/elements/Radio'

const HomeLandingPage = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <Testimonial topDivider />
      {/*<Cta split />
      {/*<FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />wan
      */}
    </>
  );
}

export default HomeLandingPage;