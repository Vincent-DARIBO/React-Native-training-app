import '../config';
import { resources } from '../config';
import ENTranslation from '../en/translation.json';
import FRTranslation from '../fr/translation.json';

describe('Testing locale objects', () => {
  const { en, fr } = resources;
  it('this object shoul be equal to the english locale', () => {
    expect(ENTranslation).toEqual(en.translation);
  });
  it('this object shoul be equal to the french locale', () => {
    expect(FRTranslation).toEqual(fr.translation);
  });
});
