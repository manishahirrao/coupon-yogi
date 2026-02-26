import { ArrowRight } from "lucide-react";

const CouponCard2 = ({ deal }) => {
  return (
    <div className="relative bg-gray-900 text-white rounded-2xl p-6 h-37 flex items-center w-90 shadow-lg">
      {/* Cyclist Image (absolute position) */}
      <img
        src={deal.image}
        alt="Cyclist"
        className="absolute -top-10 left-0 w-24 h-24 rounded-full border-1 border-gray-900 bg-white"
      />

      {/* Text Content */}
      <div className="ml-20">
        <h3 className="text-lg font-semibold">{deal.title}</h3>
        <p className="text-sm text-gray-300">{deal.description}</p>

        {/* CTA Button */}
        <button className="mt-4 bg-white text-gray-900 px-4 py-1.5 rounded-md font-semibold">
          {deal.code}
        </button>
      </div>

      {/* Circular Button */}
      <button className="absolute bottom-6 right-7 translate-x-1/2 translate-y-1/2 bg-gray-800 text-white w-15 h-15 flex items-center justify-center rounded-full shadow-md border-2">
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default CouponCard2;
