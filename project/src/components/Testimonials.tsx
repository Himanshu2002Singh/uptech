import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// const testimonials = [
//   {
//     name: "Avinash Kr",
//     role: "Co-Founder at xyz",
//     image: "/assets/img/avinash.jpg",
//     quote:
//       "Like this video and ask your questions in comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.",
//   },
//   {
//     name: "Bharat Kunal",
//     role: "Manager at xyz",
//     image: "/assets/img/bharat.jpg",
//     quote:
//       "Like this video and ask your questions in comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.",
//   },
//   {
//     name: "Prabhakar D",
//     role: "Founder / CEO at xyz",
//     image: "/assets/img/prabhakar.jpg",
//     quote:
//       "Like this video and ask your questions in comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.",
//   },
// ];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative py-16 px-4 bg-white text-center overflow-hidden">
      <h2 className="text-3xl font-bold text-orange-500 mb-1">TESTIMONIALS</h2>
      <p className="text-gray-600 mb-10">
        Subscribe Easy Tutorials YouTube channel to watch more videos.
      </p>

      {/* Background Animation Bubbles */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500 rounded-full animate-float-reverse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-orange-500 rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-100 p-6 shadow-md relative pt-14 h-full rounded-2xl transform transition-transform duration-500 hover:scale-105">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 -top-10 shadow-md"
                />
                <p className="text-gray-700 text-sm italic mb-4">
                  <span className="text-orange-500 text-xl mr-1">❝</span>
                  {testimonial.quote}
                  <span className="text-orange-500 text-xl ml-1">❞</span>
                </p>
                <h3 className="text-orange-500 font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
