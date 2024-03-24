const gridContainer = document.querySelector('.grid-container')
const widthBtn = document.querySelector('.width-btn')
const initialLightness = 50

// Create a grid with custom width
function createGrid(gridWidth) {
  for (let i = 0; i < gridWidth**2; i++) {
    const gridElement = document.createElement('div')
    gridElement.style.flexBasis = `${100/gridWidth}%`
    gridElement.style.aspectRatio = '1/1'
    gridElement.dataset.lightness = initialLightness
    gridContainer.append(gridElement)
  }
}

// call a new grid on reset button click
widthBtn.addEventListener('click', () => {
  let gridWidth 
  do {
    gridWidth = prompt('Select the grid width\nBetween 1 and 100')
  } while (gridWidth ? gridWidth < 1 || gridWidth > 100 : gridWidth)
  if (!gridWidth) return // in case user cancels the prompt do nothing
  gridContainer.replaceChildren()
  createGrid(gridWidth)
})

//Get a random hue 
function getRandomHue() {
  return Math.floor(Math.random() * 360)
}

// Change the background of the target of an event
function setBackgroundColor (e) {
  if (e.target.dataset.lightness > 0) {
    e.target.dataset.lightness -= initialLightness/10
    e.target.style.backgroundColor = `hsl(${getRandomHue()}, 75%, ${e.target.dataset.lightness}%)`
  }
}

// Set the hover effect
gridContainer.addEventListener('mouseover', setBackgroundColor)

// Initialize grid
createGrid(16)