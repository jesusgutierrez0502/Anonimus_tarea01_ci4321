// Data shared

/** Background color #1b1e2b as linear floats in [0, 1]. */
export const CLEAR_COLOR: readonly [number, number, number, number] = [0x1b / 255, 0x1e / 255, 0x2b / 255, 1];

/** Canvas size in device pixels. Fixed so both versions render the same pixels. */
export const CANVAS_SIZE = 580;

export const STRIDE_BYTES = 3 * 4;

/** Interleaved vertex data: x, y, z. Clip space, counter-clockwise. */
export const TRIANGLE = new Float32Array([
  //  x      y     z 
   0.0,   0.6,  0.0,
  -0.7,  -0.6,  0.0,
   0.7,  -0.6,  0.0,
]);

// Vértices cuadrado
export const SQUARE = new Float32Array([
  //  x      y     z 
   -0.5,  0.5, 0.0,
   0.5,  0.5, 0.0,
  -0.5, -0.5, 0.0,
   0.5, -0.5, 0.0,
]);

// Ángulo para los vertices del hexágono
const Angle = 2*Math.PI *1/6;

// Vértices hexágono
export const HEXAGON = new Float32Array([
  //  x      y     z 
   0.0,  0.0, 0.0, // 
   0.5 * Math.cos(0 * Angle), 0.5 * Math.sin(0 * Angle), 0.0,
   0.5 * Math.cos(1 * Angle), 0.5 * Math.sin(1 * Angle), 0.0,
   0.5 * Math.cos(2 * Angle), 0.5 * Math.sin(2 * Angle), 0.0,
   0.5 * Math.cos(3 * Angle), 0.5 * Math.sin(3 * Angle), 0.0,
   0.5 * Math.cos(4 * Angle), 0.5 * Math.sin(4 * Angle), 0.0,
   0.5 * Math.cos(5 * Angle), 0.5 * Math.sin(5 * Angle), 0.0,
   0.5 * Math.cos(6 * Angle), 0.5 * Math.sin(6 * Angle), 0.0
]);


export const SEGMENTS = 64;
const radius = 0.5;
const Angle1 = (2 * Math.PI) / SEGMENTS;
const vertices: number[] = [];

vertices.push(0.0, 0.0, 0.0);
for (let i = 0; i <= SEGMENTS; i++) {
  const currentAngle = i * Angle1;
  const x = radius * Math.cos(currentAngle);
  const y = radius * Math.sin(currentAngle);
  const z = 0.0;
  vertices.push(x, y, z);
}

// Vértices círculo
export const CIRCLE = new Float32Array(vertices);


