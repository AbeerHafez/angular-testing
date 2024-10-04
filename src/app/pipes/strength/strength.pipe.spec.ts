import { StrengthPipe } from "./strength.pipe";

describe("strength pipe:", () => {
  let pipe:StrengthPipe
  beforeEach(()=>{
     pipe= new StrengthPipe()
  })
  it('transform should return "4 (weak)" when passing 4', () => {
    expect(pipe.transform(4)).toBe("4 (weak)")
  });
  it('transform should return "12 (strong)" when passing 12', () => {

    expect(pipe.transform(12)).toContain("strong")
  });
  it('transform should return "21 (unbelievable)" when passing 21', () => {

    expect(pipe.transform(21)).toContain("unbelievable")
  });

})
