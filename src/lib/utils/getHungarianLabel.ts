export const getHungarianLabel = (key:string) => {
  switch (key) {
    case 'season':
      return 'Évszak';
    case 'width':
      return 'Szélesség';
    case 'profile':
      return 'Profil';
    case 'diameter':
      return 'Átmérő';
    case 'brand':
      return 'Márka';
    case 'tread':
      return 'Profil minta';
    default:
      return '';
  }
};