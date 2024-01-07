export function convertToDDMMYYYY(dateString: string) {
  if (!dateString) return "";
  const inputDate = new Date(dateString);

  const day = inputDate.getUTCDate();
  const month = inputDate.getUTCMonth() + 1; // Month starts from 0 (January is 0)
  const year = inputDate.getUTCFullYear();

  const formattedDate = `${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year}`;

  return formattedDate;
}
