import React from "react";
import { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";
faker.seed(9800);

const SavedPosts = createContext();
function Context({ children }) {
  const [savedPosts, setSavedPosts] = useState([]);
  const postsArray = [...Array(50)].map(() => ({
    id: faker.datatype.uuid(),
    title: faker.lorem.lines(1),
    content: faker.lorem.paragraphs(2),
    category: faker.word.noun(),
    date: faker.date.month(),
    author: {
      authorFName: faker.name.firstName(),
      authorLName: faker.name.lastName(),
      job: faker.name.jobTitle(),
      authorAvatar: faker.image.avatar(),
    },
  }));
  console.log(postsArray[10].date);
  const [posts] = useState(postsArray);
  return (
    <SavedPosts.Provider value={{ posts, savedPosts, setSavedPosts }}>
      {children}
    </SavedPosts.Provider>
  );
}

export const PostState = () => {
  return useContext(SavedPosts);
};

export default Context;
