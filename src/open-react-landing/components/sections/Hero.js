import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import FormLabel from '../elements/FormLabel';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              ¿Tienes las manos congeladas?
              <br/><span className="text-color-primary"> Descrubre los CALIENTAMANOS</span>
            </h3>
             <div className="container-xs">
              {/*<p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Ten tus manos calientes en cualquier situación, a un precio económico, descubre sus tipos:
  </p>*/}
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="light" wideMobile href="https://calientamanos.es/calienta-manos-electricos/">
                  Eléctricos
                    </Button>
                  <Button tag="a" color="light" wideMobile href="https://calientamanos.es/calienta-manos-gel/">
                   De gel
                    </Button>
                    <Button tag="a" color="light" wideMobile href="https://calientamanos.es/calienta-manos-catalitico/">
                    Combustible
                    </Button>
                  <Button tag="a" color="primary" wideMobile href="https://calientamanos.es/">
                    Más info
                    </Button>
                  <Button tag="a" color="custom" wideMobile href="https://amzn.to/398pS7B">
                    COMPRAR YA!
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
              <Image
                className="has-shadow"
                src={require('./../../assets/images/calientamanos.jpg')}
                alt="Hero"
                width={896}
                height={504} />
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;