export const getErrorMessage = (error: unknown, defaultMessage?: string): string => {
    if (error instanceof Error) {
      return error.message;
    }

    if (defaultMessage) {
        return defaultMessage;
    }
    
    return "Unknown error";
  };