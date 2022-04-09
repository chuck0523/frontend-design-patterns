import { Component, createSignal, onMount } from "solid-js";
import DogImage from "./DogImage";

export type Dogs = {
    name: string,
    image: string
}[]

const DogImagesContainer: Component = () => {
    const [dogs, setDogs] = createSignal<Dogs>([])

    onMount(async () => {
        setDogs([
            {name: 'foo', image: 'foo.png'}
        ])
    })

    return (
        <DogImage dogs={dogs()} />
    )

}

export default DogImagesContainer;
