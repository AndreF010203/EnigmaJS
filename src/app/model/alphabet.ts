export class Alphabet {
  static list: string;
  static len: number;

  static index(x: string): number {
    return Alphabet.list.indexOf(x);
  }

  static charAt(x: number): string {
    return Alphabet.list.charAt(Alphabet.normalize(x));
  }

  static normalize(n: number): number {
    const mod = n % Alphabet.len;
    return mod < 0 ? Alphabet.len + mod : mod;
  }

  static setAlphabet(list: string) {
    this.list = list;
    this.len = list.length;
  }
}