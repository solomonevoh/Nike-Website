import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>

      <div className="flex justify-center items-center mt-3 gap-2.5">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="text-3xl font-palangquin text-center font-bold mt-1">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
