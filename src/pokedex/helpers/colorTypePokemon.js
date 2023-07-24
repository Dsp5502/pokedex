export const getTypeBackgroundColor = (type) => {
  switch (type) {
    case 'grass':
      return 'bg-green-500';
    case 'fire':
      return 'bg-red-500';
    case 'water':
      return 'bg-blue-500';
    case 'bug':
      return 'bg-green-800';
    case 'poison':
      return 'bg-purple-500';
    case 'flying':
      return 'bg-blue-300';
    case 'electric':
      return 'bg-yellow-500';
    case 'ground':
      return 'bg-yellow-800';
    case 'fairy':
      return 'bg-pink-500';
    case 'fighting':
      return 'bg-red-800';
    case 'psychic':
      return 'bg-purple-800';
    case 'rock':
      return 'bg-yellow-700';
    case 'steel':
      return 'bg-gray-400';
    case 'ice':
      return 'bg-blue-200';
    case 'ghost':
      return 'bg-purple-900';
    case 'dragon':
      return 'bg-red-900';
    case 'dark':
      return 'bg-gray-900';
    default:
      return 'bg-gray-500';
  }
};
