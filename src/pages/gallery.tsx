import React from 'react'
import PictureGallery from '../components/resources/gallery'

function gallery() {
  const images = [
    { src: '/images/pic1.jpg', alt: 'Picture 1' },
    { src: '/images/pic2.jpg', alt: 'Picture 2' },
    { src: '/images/pic3.jpg', alt: 'Picture 3' },
    { src: '/images/pic4.jpg', alt: 'Picture 4' },
    { src: '/images/pic5.jpg', alt: 'Picture 5' },
    { src: '/images/pic6.jpg', alt: 'Picture 6' },
    { src: '/images/pic1.jpg', alt: 'Picture 7' },
    { src: '/images/pic2.jpg', alt: 'Picture 8' },
    { src: '/images/pic3.jpg', alt: 'Picture 9' },
    { src: '/images/pic4.jpg', alt: 'Picture 10' },
    { src: '/images/pic5.jpg', alt: 'Picture 11' },
    { src: '/images/pic6.jpg', alt: 'Picture 12' },
    { src: '/images/pic1.jpg', alt: 'Picture 13' },
    { src: '/images/pic2.jpg', alt: 'Picture 14' },
    { src: '/images/pic3.jpg', alt: 'Picture 15' },
    { src: '/images/pic4.jpg', alt: 'Picture 16' },
    { src: '/images/pic5.jpg', alt: 'Picture 17' },
    { src: '/images/pic6.jpg', alt: 'Picture 18' },
    { src: '/images/pic1.jpg', alt: 'Picture 19' },
    { src: '/images/pic2.jpg', alt: 'Picture 20' },
    { src: '/images/pic3.jpg', alt: 'Picture 21' },
    { src: '/images/pic4.jpg', alt: 'Picture 22' },
    { src: '/images/pic5.jpg', alt: 'Picture 23' },
    { src: '/images/pic6.jpg', alt: 'Picture 24' },
    { src: '/images/pic1.jpg', alt: 'Picture 25' },
    { src: '/images/pic2.jpg', alt: 'Picture 26' },
    { src: '/images/pic3.jpg', alt: 'Picture 27' },
    { src: '/images/pic4.jpg', alt: 'Picture 28' },
    { src: '/images/pic5.jpg', alt: 'Picture 29' },
    { src: '/images/pic6.jpg', alt: 'Picture 30' },
    { src: '/images/pic1.jpg', alt: 'Picture 31' },
    { src: '/images/pic2.jpg', alt: 'Picture 32' },
    { src: '/images/pic3.jpg', alt: 'Picture 33' },
    { src: '/images/pic4.jpg', alt: 'Picture 34' },
    { src: '/images/pic5.jpg', alt: 'Picture 35' },
    { src: '/images/pic6.jpg', alt: 'Picture 36' },
    { src: '/images/pic1.jpg', alt: 'Picture 37' },
    { src: '/images/pic2.jpg', alt: 'Picture 38' },
    { src: '/images/pic3.jpg', alt: 'Picture 39' },
    { src: '/images/pic4.jpg', alt: 'Picture 40' },
    { src: '/images/pic5.jpg', alt: 'Picture 41' },
    { src: '/images/pic6.jpg', alt: 'Picture 42' },
  ]

  return <PictureGallery images={images} />
}

export default gallery
