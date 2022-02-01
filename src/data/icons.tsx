import B from '../icons/b.png';
import C from '../icons/c.png';
import S from '../icons/s.png';
import P from '../icons/p.png';
import E from '../icons/e.png';

const icons: any = {
  B,
  C,
  S,
  P,
  E,
};

export const getIcon = (letter: string) => icons[letter];
