AFRAME.registerComponent('movement-controls', {
  init: function() {
    const el = this.el;
    const speed = 0.5; // Adjust the speed as needed

    // Event listener for keydown
    document.addEventListener('keydown', (event) => {
      // Get the current position of the character
      var position = el.getAttribute('position');
      let x = position.x;
      let z = position.z;
      let y = position.y

      // Update the position based on the pressed key
      if (event.key === "d") {
        x += speed;
        };

      if (event.key === "a") {
          x -= speed;
        };

      if (event.key === "w") {
          z -= speed;
        };

      if (event.key === "s") {
          z += speed;
        };

        if (event.key === "q") {
          y += speed;
        };
        if (event.key === "e") {
          y -= speed;
        };

      // Set the new position of the character
      el.setAttribute('position', {x: x, y: y, z: z});
    });
  }
});