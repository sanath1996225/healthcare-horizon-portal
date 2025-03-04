
/**
 * Utility to handle image loading fallbacks
 * @param imageSrc Original image URL
 * @param fallbackSrc Fallback image URL if original fails to load
 * @returns A function that will set fallback on error
 */
export const handleImageError = (imageSrc: string, fallbackSrc: string = '/placeholder.svg') => {
  return (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const imgElement = event.currentTarget;
    console.log(`Image failed to load: ${imageSrc}, using fallback`);
    imgElement.src = fallbackSrc;
    imgElement.onerror = null; // Prevent infinite error loop
  };
};

/**
 * Validate an image URL to ensure it's properly formatted
 */
export const isValidImageUrl = (url: string): boolean => {
  // Basic URL validation
  try {
    new URL(url);
    // Check if it's an image URL by extension
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  } catch (e) {
    return false;
  }
};

/**
 * Get a backup image URL from a collection of reliable sources
 */
export const getBackupImageUrl = (index: number = 0): string => {
  const backupImages = [
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80',
    'https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80',
    'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80',
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80'
  ];
  
  return backupImages[index % backupImages.length];
};
