export const colorConverter = color => {
  const colorUpdated = color.replace(' ', '');

  switch (colorUpdated) {
    case 'scarlet':
      return '#ff2400';
    case 'bronze':
      return '#cd7f32';
    default:
      return colorUpdated;
  }
};
