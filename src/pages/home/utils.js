import { onNavigate } from '../../utils/history.js';

export const returnHome = (response) => {
        if (response) {
          onNavigate('/posts');
        }
      }
