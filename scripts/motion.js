// The following example demonstrates how to bind device rotation to an object.
//
// Project setup:
// - Insert a plane
// - Make sure the Device Motion capability is added in the properties
//==============================================================================

// Load in the required modules
const DeviceMotion = require("DeviceMotion");
const Patches = require("Patches");

// Enable async/await in JS [part 1]
(async function () {
  // Locate the plane in the Scene
  const deviceWorldTransform = DeviceMotion.worldTransform;

  // Bind the rotation of the device to the plane
  await Patches.inputs.setScalar("rotX", deviceWorldTransform.rotationX);
  await Patches.inputs.setScalar("rotY", deviceWorldTransform.rotationY);
  await Patches.inputs.setScalar("rotZ", deviceWorldTransform.rotationZ);
})();
