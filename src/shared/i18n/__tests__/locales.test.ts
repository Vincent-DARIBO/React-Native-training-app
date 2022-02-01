import { locale, FRLocale, ENLocale } from '../locales';

describe('locales test', () => {
  it('the current locale should not be null', () => {
    expect(locale).not.toBeNull();
  });
  it('The french locale object should not be null', () => {
    expect(FRLocale.ordinal).not.toBeNull();
  });
  it('The english locale object should not be null', () => {
    expect(ENLocale).not.toBeNull();
  });
  it('the member ordinal of english locale object should be equal to 1st', () => {
    expect(ENLocale.ordinal(1)).toMatch('1st');
  });
  it('the member ordinal of english locale object should be equal to 2nd', () => {
    expect(ENLocale.ordinal(2)).toMatch('2nd');
  });

  it('the member ordinal of english locale object should be equal to 3rd', () => {
    expect(ENLocale.ordinal(3)).toMatch('3rd');
  });

  it('the member ordinal of english locale object should be equal to 10th', () => {
    expect(ENLocale.ordinal(10)).toMatch('10th');
  });
  it('the member ordinal of english locale object should be equal to 130th', () => {
    expect(ENLocale.ordinal(130)).toMatch('130th');
  });
  it('the member ordinal of french locale object should be equal 1er', () => {
    expect(FRLocale.ordinal(1)).toMatch('1er');
  });
  it('the member ordinal of french locale object should be equal 233e', () => {
    expect(FRLocale.ordinal(233)).toMatch('233e');
  });
});
