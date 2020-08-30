import { FilterimagesPipe } from './filterimages.pipe';

describe('FilterimagesPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter all', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe.transform(ImagesdelatilsMock, "all")).toEqual(ImagesdelatilsMock);
  })

  it('should filter one', () => {
    const pipe = new FilterimagesPipe();
    const detailExpected = [    
      { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" }
    ]
    expect(pipe.transform(ImagesdelatilsMock, "perro")).toEqual(detailExpected);
  })

  it('should filter none', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe.transform(ImagesdelatilsMock, "hamster")).toEqual([]);
  })
});

const ImagesdelatilsMock = [    
  { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
  { "id": 2, "brand": "gato", "url": "assets/images/perro2.jpg" },
]