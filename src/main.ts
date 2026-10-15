// Page scaffolding only: toggle, canvas swap and source panel.
import './style.css';
import { run as run0 } from './examples/triangle.ff';
import { run as run1 } from './examples/square.ff';
import { run as run2 } from './examples/hexagon.ff';
import { run as run3 } from './examples/circle.ff';
import squareSource from './examples/square.ff.ts?raw';
import hexagonSource from './examples/hexagon.ff.ts?raw';
import circleSource from './examples/circle.ff.ts?raw';
import triangleSource from './examples/triangle.ff.ts?raw';

// Tipo de formas
type Mode = 'triangle' | 'square' | 'hexagon' | 'circle';
const modes: Mode[] = ['triangle', 'square', 'hexagon', 'circle'];
let currentIndex = 0;

// Colores
type ColorName = 'red' | 'green' | 'blue';
const palette: Record<ColorName, [number, number, number, number]> = {
  red:   [1, 0, 0, 1],
  green: [0, 1, 0, 1],
  blue:  [0, 0, 1, 1], 
};
const colors: ColorName[] = ['red', 'green', 'blue'];
let currentColorIndex = 0;

// Figuras que se pintan
const examples: Record<Mode, { file: string; source: string; run: (canvas: HTMLCanvasElement, color: [number, number, number, number]) => void }> = {
  triangle: { file: 'triangle.ff.ts', source: triangleSource, run: run0 },
  square:   { file: 'square.ff.ts', source: squareSource, run: run1 },
  hexagon:  { file: 'hexagon.ff.ts', source: hexagonSource, run: run2 },
  circle:   { file: 'circle.ff.ts', source: circleSource, run: run3 },
};

const stage = document.getElementById('stage')!;
const fileName = document.getElementById('file-name')!;
const cycleButton = document.getElementById('btn-shape')!;
const colorButton = document.getElementById('btn-color')!;

// Funcion para pintar los ejemplos
function show(mode: Mode): void {
  const canvas = document.createElement('canvas');
  stage.replaceChildren(canvas);
  const currentColorName = colors[currentColorIndex];
  const currentColorRgba = palette[currentColorName];

  if (examples[mode]) {
    examples[mode].run(canvas, currentColorRgba);
  }

  currentIndex = modes.indexOf(mode);
  if (currentIndex === -1) currentIndex = 0;
  cycleButton.textContent = `Shape: ${mode.toUpperCase()}`;
  colorButton.textContent = `Color: ${currentColorName.toUpperCase()}`;

  history.replaceState(null, '', `#${mode}`);
}

cycleButton.addEventListener('click', () => {
  const nextMode = modes[(currentIndex + 1) % modes.length];
  show(nextMode);
});

colorButton.addEventListener('click', () => {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  const currentMode = modes[currentIndex];
  show(currentMode);
});

const initialHash = location.hash.replace('#', '') as Mode;
const initialMode = modes.includes(initialHash) ? initialHash : 'triangle';

show(initialMode);
