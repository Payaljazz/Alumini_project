import React, { useEffect, useState } from "react";
import { getAchievements } from "../../api/achievementApi";
import AchievementCard from "../../components/AchievementCard";

function Achievements({ userId }) {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    getAchievements(userId).then(res => setAchievements(res.data));
  }, [userId]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-6">
        My Achievements
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map(item => (
          <AchievementCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Achievements;
