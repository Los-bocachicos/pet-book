import { TestBed } from '@angular/core/testing';

import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

  it('debe crearse el servicio', () => {
    expect(service).toBeTruthy();
  });

  describe('getImages', () => {
    it('debe retornar todas las imagenes', () => {
      let imagenes = service.getImages();
      expect(imagenes.length).toEqual(5);
    });
  });

  describe('getImage', () => {
    it('Cuando envíe 3 (que está dentro de la lista), entonces debe retornar ese elemento', () => {
      const id = 3;
      let res = service.getImage(id);
      expect(res.brand).toBe('gato');
      expect(res.url).toBe('assets/images/gato1.jpg');
    });

    it('Cuando envíe 7 (que NO está dentro de la lista), entonces debe retornar indefinido', () => {
      const id = 7;
      let res = service.getImage(id);
      expect(res).toBeUndefined();
    });
  });
});
