import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HeroServiceForLab } from './hero.lab.service';
import { Hero } from '../../hero';

describe('3-hero service (http) integration testing:', () => {
  let heroService: HeroServiceForLab;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroServiceForLab],
    });

    heroService = TestBed.inject(HeroServiceForLab);
    httpTestingController = TestBed.inject(HttpTestingController); 
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('getHeroes function: send request and receive response successfully', () => {
    const expectedHeroes: Hero[] = [
      {
        id: 1,
        name: 'Superman',
      },
      {
        id: 2,
        name: 'Batman',
      },
    ];

    heroService.getHeroes().subscribe((heroes) => {
      expect(heroes).toEqual(expectedHeroes);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/heroes');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedHeroes);
  });

  it('updateHero function: send request and receive response successfully', () => {
    const updatedHero: Hero = {
      id: 1,
      name: 'Superman Updated',
    };

    heroService.updateHero(updatedHero).subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne('http://localhost:3000/heroes');
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(updatedHero);
    req.flush(updatedHero);
  });
});
