# flow-field


https://github.com/chaithanyakota/flow-field/assets/86480711/b4e15170-97a1-41ad-8cb6-479591adb7fc

## Overview 
Perlin noise is a gradient noise function often used in computer graphics to create natural-looking textures, randomness, and smooth transitions. This project uses Perlin noise to generate a flowfield that influences the movements of particles, creating a visually appealing pattern. 

## Perlin Noise
Perlin noise is a pseudo-random gradient noise function. It's widely used for creating natural-seeming randomness and smooth transitions. The function assigns values to each point in space, creating a continuous gradient that can be used for various applications, including procedural texture generation, terrain generation, and more.

## Flowfield
The flowfiled involves associating each point in space with a vecor the defines the direction of movement at that points. Using Perlin noise to determine the vector values creates a dynamic flowfield where the vectors change smoothly across the canvas. When particles move through this flowfield, they follow the direction of the vectors, resulting in an organic movement pattern. 
