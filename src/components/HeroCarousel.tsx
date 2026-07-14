"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import styles from './HeroCarousel.module.css';

interface Slide {
  id: number;
  badge: string;
  title: React.ReactNode;
  description: string;
  image: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
}

const slidesData: Slide[] = [
  {
    id: 1,
    badge: 'Compassionate Care',
    title: (
      <>
        Empowering <br />
        Your <span>Health <br /> Journey</span>
      </>
    ),
    description: 'Caring. Experienced. Knowledgeable. Delta Health Center continues to build a world-class primary health care system committed to caring for vulnerable populations, from newborns to the elderly.',
    image: '/images/hero-composite.png',
    primaryBtnText: 'Find a Provider',
    primaryBtnLink: '/find-a-provider',
    secondaryBtnText: 'View Our Services',
    secondaryBtnLink: '#services'
  },
  {
    id: 2,
    badge: 'Maternal Health',
    title: (
      <>
        Specialized Care <br />
        For <span>Mothers & <br /> Newborns</span>
      </>
    ),
    description: 'Offering comprehensive prenatal, delivery, and postpartum care tailored to support you and your newborn at every step of your journey.',
    image: '/images/maternal_health_hero.png',
    primaryBtnText: 'Maternal Care',
    primaryBtnLink: '/maternal-health',
    secondaryBtnText: 'Our Locations',
    secondaryBtnLink: '/our-locations'
  },
  {
    id: 3,
    badge: 'Behavioral Health',
    title: (
      <>
        Dedicated Support <br />
        For <span>Mental <br /> Wellness</span>
      </>
    ),
    description: 'Our behavioral health specialists provide compassionate counseling and support services to foster emotional healing and resilience.',
    image: '/images/behavior_health_hero_woman.png',
    primaryBtnText: 'Get Support',
    primaryBtnLink: '/behavioral-health',
    secondaryBtnText: 'Contact Us',
    secondaryBtnLink: '/contact'
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000); // Auto-advance every 6 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className={styles.hero}>
      <div className={styles.carouselContainer}>
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            aria-hidden={index !== currentSlide}
          >
            {/* Background/Layout Grid */}
            <div className={styles.gridContainer}>
              {/* Left Side: Content Column */}
              <div className={styles.contentColumn}>
                <div className={styles.content}>
                  <div className={styles.badge}>{slide.badge}</div>
                  <h1 className={styles.title}>{slide.title}</h1>
                  <p className={styles.description}>{slide.description}</p>
                  <div className={styles.actions}>
                    <Link href={slide.primaryBtnLink} className="btn btn-primary">
                      {slide.primaryBtnText}
                    </Link>
                    <Link href={slide.secondaryBtnLink} className="btn btn-secondary">
                      {slide.secondaryBtnText}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Side: Portrait or Hero Image Column */}
              <div className={styles.imageColumn}>
                <div className={styles.imageWrapper}>
                  <img
                    src={slide.image}
                    alt={slide.badge}
                    className={styles.providerImg}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          className={`${styles.controlBtn} ${styles.prevBtn}`}
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          &#10094;
        </button>
        <button
          className={`${styles.controlBtn} ${styles.nextBtn}`}
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          &#10095;
        </button>

        {/* Indicators */}
        <div className={styles.indicators}>
          {slidesData.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
