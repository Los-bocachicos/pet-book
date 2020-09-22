import { FilterimagesPipe } from './filterimages.pipe';

describe('FilterimagesPipe', () => {
  it('Debe crear la instacia', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe).toBeTruthy();
  });

  it('Al enviar "all" debe filtrar todas las imagenes', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe.transform(ImagesdelatilsMock, 'all')).toEqual(ImagesdelatilsMock);
  });

  it('Al enviar "perro" (que está dentro de la lista) debe filtrar ese elemento', () => {
    const pipe = new FilterimagesPipe();
    const detailExpected = [
      { id: 1, brand: 'perro', url: 'assets/images/perro1.jpg' },
    ];
    expect(pipe.transform(ImagesdelatilsMock, 'perro')).toEqual(detailExpected);
  });

  it('Al enviar "hamster" (que NO está dentro de la lista) debe retornar una lista vacía', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe.transform(ImagesdelatilsMock, 'hamster')).toEqual([]);
  });
});

const ImagesdelatilsMock = [
  { id: 1, brand: 'perro', url: 'assets/images/perro1.jpg' },
  { id: 2, brand: 'gato', url: 'assets/images/perro2.jpg' },
];
