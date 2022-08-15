import React from "react";
import { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";
faker.seed(9800);

const SavedPosts = createContext();
function Context({ children }) {
  const [savedPosts, setSavedPosts] = useState([]);

  return (
    <SavedPosts.Provider value={{ savedPosts, setSavedPosts }}>
      {children}
    </SavedPosts.Provider>
  );
}

export const SavedPostState = () => {
  return useContext(SavedPosts);
};

export default Context;
