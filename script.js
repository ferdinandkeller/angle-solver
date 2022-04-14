// define the input & output fields
let r1_input = document.getElementById('r1')
let r2_input = document.getElementById('r2')
let theta_input = document.getElementById('theta')
let r_output = document.getElementById('r')
let phi_output = document.getElementById('phi')

// define the function that shows impossible result
function impossible() {
  // clear outputs
  r_output.innerText = '🟥'
  phi_output.innerText = '🟥'
}

// define the function that solves the problem
function solver() {// verify that there are inputs
  if (r1_input.value === '' || r2_input.value === '' || theta_input.value === '') {
    impossible()
    return
  }

  // verify that the inputs are valid
  if (isNaN(r1_input.value) || isNaN(r2_input.value) || isNaN(theta_input.value)) {
    impossible()
    return
  }

  // get the values from the input fields
  r1 = parseFloat(r1_input.value)
  r2 = parseFloat(r2_input.value)
  theta = parseFloat(theta_input.value)

  if (theta <= 0 || 180 <= theta) {
    impossible()
    return
  }

  // convert theta into radians
  theta = theta * Math.PI / 180

  // compute the solution
  let h2 = (r2*Math.cos(theta) - r1)/Math.sin(theta)
  let h1 = r2*Math.sin(theta) + h2*Math.cos(theta)

  let r = Math.sqrt(r2*r2 + h2*h2)
  let phi = Math.atan2(h1, r1)

  // convert phi to degrees
  phi = phi * 180 / Math.PI

  // show the results on the screen
  r_output.innerText = r
  phi_output.innerText = phi
}

// register modify events
r1_input.addEventListener('input', solver)
r2_input.addEventListener('input', solver)
theta_input.addEventListener('input', solver)

// run the code by default
solver()