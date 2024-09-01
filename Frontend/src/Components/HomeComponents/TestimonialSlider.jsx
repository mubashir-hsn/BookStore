import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 

  const testimonials = [
    { text: "This bookstore has an amazing selection! I could spend hours browsing the shelves and still not see everything they have to offer.", name: "Sheryl Berge", imgSrc: "https://randomuser.me/api/portraits/men/15.jpg" },
    { text: "The staff here are incredibly knowledgeable and friendly. They've given me some great book recommendations over the years.", name: "Leland Kiehn", imgSrc: "https://randomuser.me/api/portraits/women/15.jpg" },
    { text: "I love the cozy, inviting atmosphere of this bookstore. It's the perfect place to curl up with a good book and get lost in another world.", name: "Peter Renolds", imgSrc: "https://randomuser.me/api/portraits/men/10.jpg" },
    { text: "Their used book section is a treasure trove! I've found some real gems there for just a few dollars.Nmquam vitae dolores error est.", name: "Jessica James", imgSrc: "https://randomuser.me/api/portraits/women/10.jpg" },
    { text: "The children's section is fantastic. My kids love going there and picking out new books to read together.Nmquam vitae dolores error est.", name: "Mark Wahlberg", imgSrc: "https://randomuser.me/api/portraits/men/20.jpg" },
    { text: "I appreciate that they host author events and book clubs. It's a great way to connect with fellow book lovers.Blor eius nam error est.", name : "Megan Fox", imgSrc: "https://randomuser.me/api/portraits/women/20.jpg" },
    { text: "The cafe inside the bookstore is delightful. Their coffee and pastries are the perfect accompaniment to a good read.Blor eius nam. ", name: "Chris Evans", imgSrc: "https://randomuser.me/api/portraits/men/30.jpg" },
    { text: "Even though I've moved away, I make sure to stop by this bookstore whenever I'm in town. It's just that special.I dolor eius nam error est.", name: "Natalie Portman", imgSrc: "https://randomuser.me/api/portraits/women/30.jpg" },
    { text: "With their great prices and wide variety of titles, this is one of the best bookstores I've ever been to. A dolores dolor eius nam error est.", name: "Tom Hardy", imgSrc: "https://randomuser.me/api/portraits/men/40.jpg" },
  ];

  return (
    <section id="testimonials" aria-label="What our customers are saying" className="bg-slate-50 py-10 sm:py-32 dark:bg-slate-900 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-start">
          <h2 className="font-display text-3xl tracking-tight text-blue-500 dark:text-blue-600 my-10 sm:text-4xl">What Our Customers Are Saying</h2>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4 my-16">
              <figure className="relative rounded-2xl bg-white shadow-xl shadow-blue-200 dark:bg-slate-800 dark:text-slate-100 dark:shadow-blue-900/15">
                <svg aria-hidden="true" width="105" height="78" className="absolute left-6 top-6 fill-slate-100 dark:fill-slate-700">
                  <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                </svg>
                <blockquote className="relative p-6">
                  <p className="text-[16px] tracking-tight text-slate-900 dark:text-slate-100">{testimonial.text}</p>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center overflow-hidden rounded-bl-2xl rounded-b-2xl p-6 justify-between border-t bg-blue-400 border-slate-700 pt-6 dark:bg-blue-800">
                  <div>
                    <div className="font-display  text-base text-white font-[Agbalumo]">{testimonial.name}</div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-blue-50">
                    <img alt="" className="h-14 w-14 object-cover" style={{ color: 'transparent' }} src={testimonial.imgSrc} />
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </Slider>
      </div>
    
    </section>
  );
};

export default TestimonialSlider;
