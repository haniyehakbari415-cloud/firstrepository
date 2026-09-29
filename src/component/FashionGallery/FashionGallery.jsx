import image1 from '../../assets/girl.jpg';
import image2 from '../../assets/girls.jpg';
import image3 from '../../assets/man.jpg';
import image4 from '../../assets/woman.jpg';

const FashionGallery = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        
        <div className="h-64 md:h-full rounded-xl overflow-hidden">
          <img
            src={image1}
            alt="Woman shopping"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-rows-2 gap-3 h-64 md:h-full">
          
          <div className="rounded-xl overflow-hidden">
            <img
              src={image4}
              alt="Woman holding clothes"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl overflow-hidden">
              <img
                src={image3}
                alt="Man with sunglasses"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src={image2}
                alt="Two women posing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionGallery;