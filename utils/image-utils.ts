export const getProjectImage = (imagePath: string) => {
  // Always ensure the path starts with a forward slash
  if (!imagePath.startsWith('/')) {
    imagePath = '/' + imagePath;
  }
  
  // Return default image if no image path provided
  if (!imagePath || imagePath === '/') {
    return '/projects/placeholder.svg';
  }
  
  return imagePath;
}; 