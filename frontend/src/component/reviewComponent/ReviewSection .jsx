import React, { useRef } from 'react';
import { Carousel, Pagination } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import './ReviewSection.css';
import { useInView } from 'react-intersection-observer';

const reviews = [
  {
    name: "Company 1",
    text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized...",
    position: "Pleasure – Choice Denounced Rightly"
  },
  {
    name: "Company 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.",
    position: "Happy Client"
  },
  {
    name: "Company 3",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    position: "Satisfied Partner"
  }
];

const ReviewSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0 
  });
  const carouselRef = useRef();

  const prev = () => {
    carouselRef.current.prev();
  };

  const next = () => {
    carouselRef.current.next();
  };
  
  return (
    <section className="review-section" ref={ref}>
      {inView && (<>
        <div className="review-header">
        <h1 className='review-header-h1'>Plac Ut Some Est <br /> Eligen Quidei</h1>
        <p className='review-header-p'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized...</p>
      </div>

      <div className="review-slider-container">
        <div className="slider-controls">
          <LeftOutlined onClick={prev} />
          <RightOutlined onClick={next} />
        </div>

        <Carousel ref={carouselRef} dots effect="fade" speed={1000}>
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="review-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="review-image"></div>
              <div className="review-content">
                <h2 className='review-content-h2'>🌟 {review.name}</h2>
                <p className='review-content-p'>{review.text}</p>
                <h3 className='review-content-h3'>{review.position}</h3>
              </div>
            </motion.div>
          ))}
        </Carousel>
        
      </div></>)}

    </section>
  );
};

export default ReviewSection;

