import { sumar, multiplicar, restar, dividir } from '../maths.js';

describe('Calculos matemáticos', () => {
  test('Prueba de sumas', () => {
    expect(sumar(1,1)).toBe(2);
  });
  test('Prueba de multiplicar', () => {
    expect(multiplicar(2,4)).toBe(8);
  });
  test('Prueba de dividir', () => {
    expect(dividir(2,4)).toBe(0.5);
  });
  test('Prueba de restar', () => {
    expect(restar(4,1)).toBe(3);
  });
});