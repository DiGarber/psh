export default (data) => {
  const header = Object.keys(data?.[0] || {}).join(",") + "\n";

  const rows = data.map((obj) => Object.values(obj).join(",") + "\n");

  const csv = header + rows.join("");

  return csv;
};
