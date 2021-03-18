# Waste Matters

## Project purpose
Waste matters Ltd. offers waste and recycling solutions to Irish businesses. 
The primary purpose of this website is to advertise and sell polystyrene
compacting machines. The user will interact with the machine while receiving
key facts about polystyrene recycling and waste matters.

## UX

### User stories
* As a potential customer, I would like the user experience on the website to be
intuitive.

* As a potential customer, I want to learn about polystyrene compactors and how
they work.

* As a potential customer, I want to be able to compare polystyrene compactor
models and assess which one would be the most suitable for my needs.

* As a potential customer, I want to see a professional user interface that will
allow me to be confident in my purchasing decision.

* As a potential customer, I want to learn about the services provided by Waste
Matters.

### Strategy
__Goal__:

### Scope

#### Colour Scheme

#### Typography

#### Imagery

### Wireframes

## Technologies Used
### Languages used

### Frameworks, Libraries & Programs Used

## Testing

### Code Validation


### Functionality test
Error: textures were not appearing on matter.js shapes
Fix: disable render wireframes


Problem: Couldn't get polystyrene blocks to appear behind the compactor image in
the canvas (3D effect)
Fix: The order in which you add objects to the world determines the z-index.
Adding the foreground image 
of the compactor after the polystyrene blocks allows the blocks to appear behind
the image, giving the desired 3D effect.

Problem: when user creates a polystyrene block, they appear in-front of the
images, giving no 3D effect.
Fix: use add to world method within the polystyrene creation function and re-add
the images on each call.

Problem: on-screen messages were interfering with the mouse drag function
* [Image of mouse drag bug](https://github.com/Wbwren/waste-matters/blob/master/assets/images/mouse-drag-bug.png)

Fix: add a style attribute of 'pointer-events: none;' to the message div
* [Image of mouse drag bug fix](https://github.com/Wbwren/waste-matters/blob/master/assets/images/mouse-drag-bug-fix.png)

bug: could not get vertices to work correctly on matter.js
* [Image of vertices bug](https://github.com/Wbwren/waste-matters/blob/master/assets/images/vertices-bug.png)


## Deployment to Github Pages

## Clone

## Credits
### Acknowledgments
styrofoam texture: https://3dtextures.me/2019/03/21/styrofoam-001/
speech bubble: http://clipart-library.com/clipart/6TroXbg6c.html
p button image: https://www.pngkey.com/detail/u2w7q8e6y3e6a9a9_pow-button-mario-pixel-art-mario-christmas-pixel/
floor block: <a href='https://webstockreview.net'>https://webstockreview.net</a>
https://webstockreview.net/image/brick-clipart-super-mario/125781.html
lever https://www.kissclipart.com/cartoon-lever-png-clipart-computer-icons-clip-art-1f8vxo/s
refresh-arrow: http://clipart-library.com/clipart/8T68KdEGc.htm