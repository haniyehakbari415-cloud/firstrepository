import { FaInstagram } from "react-icons/fa";
import Shop from "../../assets/Shop.jpg";

function InstagramSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 max-w-md">
            <h2 className="text-3xl font-lobster text-gray-800">
              Follow Instagram
            </h2>

            <div className="flex items-center gap-2 text-gray-700">
              <FaInstagram className="text-xl to-red-700" />
              <span className="text-base">fake_shop</span>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nihil!
              Amet consequuntur placeat odio deserunt minima nisi maiores eos quo?
            </p>

            <button className="mt-4 px-6 py-2.5 border border-rose-300 text-rose-500 
                             rounded-xl text-sm font-medium 
                             hover:bg-red-800 transition-colors duration-300">
              Discover Now
            </button>
          </div>

          <div className="relative">
            <div className="border border-rose-200 rounded-lg overflow-hidden relative">
              <img
                src={Shop}
                alt="Shop"
                className="w-full h-[420px] object-cover"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default InstagramSection;