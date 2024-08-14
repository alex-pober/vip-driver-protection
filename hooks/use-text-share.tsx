"use client"
import { useCallback } from 'react';

interface UseTextShareOptions {
  phoneNumber: string;
  message: string;
}

export const useTextShare = ({ phoneNumber, message }: UseTextShareOptions) => {
  const handleTextClick = useCallback(async () => {
    // Ensure this runs only on the client
    if (typeof window === 'undefined') {
      console.warn('useTextShare called on the server');
      return;
    }

    const url = `sms:${phoneNumber}?&body=${encodeURIComponent(message)}`;

    // Check if the navigator.share API is available
    if (navigator?.share) {
      try {
        await navigator.share({
          text: message,
          url: url,
        });
        console.log('Shared successfully');
      } catch (error) {
        console.error('Sharing failed:', error);
        window.open(url);
      }
    } else {
      window.open(url);
    }
  }, [phoneNumber, message]);

  return handleTextClick;
};
