import { neonCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

window.addEventListener('DOMContentLoaded', () => {
    neonCursor({
        el: document.getElementById('app'), // The canvas inside the app
        shaderPoints: 10,
        curvePoints: 15,
        curveLerp: 0.5,
        radius1: 1,
        radius2: 5,  // Note: radius2 was incorrect in your script, fixing it here
        velocityTreshold: 10,
        sleepRadiusX: 100,
        sleepRadiusY: 100,
        sleepTimeCoefx: 0.0025,
        sleepTimeCoefY: 0.0025
    });
});
    