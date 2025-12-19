function AchievementCard({ data }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-green-600">
      <h3 className="text-xl font-semibold text-gray-800">
        {data.title}
      </h3>

      <p className="text-gray-600 mt-2">
        {data.description}
      </p>

      <div className="flex justify-between mt-4 text-sm text-gray-500">
        <span>{data.type.toUpperCase()}</span>
        <span>{new Date(data.date).toLocaleDateString()}</span>
      </div>
    </div>
  );
}

export default AchievementCard;
