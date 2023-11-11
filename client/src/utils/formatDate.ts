export function formatDate(dateTimeString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const formattedDate = new Date(dateTimeString).toLocaleDateString(
    undefined,
    options
  );
  return formattedDate;
}
