const fs = require("fs");

fs.readFile("students.csv", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Split CSV by lines
  const lines = data.trim().split("\n");

  // Skip header row
  lines.shift();

  for (let line of lines) {
    const parts = line.split(",");

    const name = parts[0];
    const grades = parts.slice(1).map(Number);

    const avg =
      grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

    console.log(`${name}: ${avg.toFixed(2)}`);
  }
});
