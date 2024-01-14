const getInitials = (firstName: string, lastName: string): string => {
  // Ensure input is valid
  if (typeof firstName !== "string" || typeof lastName !== "string") {
    return "Invalid input. Please provide valid first and last names.";
  }

  // Get the first initials and capitalize them
  const firstInitial: string = firstName.charAt(0).toUpperCase();
  const lastInitial: string = lastName.charAt(0).toUpperCase();

  // Return the capitalized initials
  return firstInitial + lastInitial;
};

export { getInitials };
