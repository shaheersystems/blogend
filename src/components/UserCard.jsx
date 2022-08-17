import React, { useState, useEffect } from "react";
function UserCard({ author, month }) {
  const [fakeDate, setFakeDate] = useState("");
  useEffect(() => {
    const createRandomeDate = () => {
      const random = Math.floor(Math.random() * 30) + 1;
      setFakeDate(random);
    };
    createRandomeDate();
  }, []);
  return (
    <div className="w-full h-16 flex items-center justify-between">
      <div className="flex py-2 items-center gap-4">
        <div>
          <img
            className="h-8 w-8 rounded-full"
            src={author.authorAvatar}
            alt={author.authorFName + "-avatar"}
          />
        </div>
        <div>
          <h1 className="text-sm font-semibold">
            {author.authorFName + " " + author.authorLName}
          </h1>
          <span className="text-sm text-gray-600">{author.job}</span>
        </div>
      </div>
      <div>
        <span className="text-sm text-gray-600">{month + " " + fakeDate}</span>
      </div>
    </div>
  );
}

export default UserCard;
