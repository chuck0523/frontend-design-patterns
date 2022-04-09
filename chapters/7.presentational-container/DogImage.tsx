import { Component, For } from "solid-js";
import { Dogs } from "./DogImageContainer";

const DogImage: Component<{ dogs: Dogs }> = ({ dogs }) => {
  return (
    <For each={dogs}>
      {(dog) => (
        <>
          <img src={dog.image} alt={dog.name} />
          <p>{dog.name}</p>
        </>
      )}
    </For>
  );
};
export default DogImage;
