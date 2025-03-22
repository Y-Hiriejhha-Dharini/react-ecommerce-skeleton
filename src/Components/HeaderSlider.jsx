import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeaderSlider = () => {
  const slides = [
    {
      image:"https://picsum.photos/1200/400?random=1",
      caption: "Explore the best products!\nFind everything you need in one place.",
    },
    {
      image: "https://picsum.photos/1200/400?random=3",
      caption: "Shop with confidence!\nQuality products from trusted brands.",
    },
    {
      image: "https://picsum.photos/1200/400?random=2",
      caption: "Discover amazing deals!\nUnbeatable prices just for you.",
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full h-96 relative z-0">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-96">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-50 flex justify-center px-4 py-2">
              <p className="text-black text-lg font-semibold whitespace-pre-line">{slide.caption}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default HeaderSlider;
