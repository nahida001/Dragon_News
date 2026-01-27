import { FaStar, FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";

// Usage: <NewsCard news={news} />
const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    image_url,
    details,
    tags,
    others,
  } = news;

  const date = new Date(news.author.published_date).toLocaleDateString();

  return (
    <div className="card bg-base-100 rounded-xl shadow-sm">
      {/* Header */}
      <div className="flex bg-base-200 items-center justify-between p-5">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">{author.name}</p>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <div className="px-5">
        <h2 className="text-xl font-bold leading-snug">{title}</h2>
      </div>

      {/* Badges */}
      <div className="px-5 pt-2 flex gap-2">
        {others?.is_today_pick && (
          <span className="badge badge-primary">Today&apos;s Pick</span>
        )}
        {others?.is_trending && (
          <span className="badge badge-secondary">Trending</span>
        )}
      </div>

      {/* Image */}
      <figure className="px-5 pt-4">
        <img
          src={image_url}
          alt={title}
          className="rounded-lg w-full"
        />
      </figure>

      {/* Content */}
      <div className="card-body px-5">
        <p className="text-gray-600 line-clamp-3">{details}</p>

        {/* Tags */}
        <p className="text-sm text-gray-500">
          {tags?.map((tag, i) => (
            <span key={i} className="mr-1">#{tag}</span>
          ))}
        </p>

        <button className="text-primary text-sm font-semibold w-fit">
          Read More
        </button>

        <div className="divider my-2" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-orange-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < rating.number ? "opacity-100" : "opacity-30"
                }
              />
            ))}
            <span className="text-sm text-gray-600 ml-1">
              {rating.number}.0
            </span>
          </div>

          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <FaEye /> {total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;