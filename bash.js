process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const entry = data.toString().trim();
  const [command, fileName] = entry.split(" ");

  switch (command) {
    case "pwd":
      require("./pwd")();
      break;
    case "ls":
      require("./ls");
      break;
    case "cat":
      require("./cat")(fileName);
      break;
    default:
      process.stdout.write(" command does not exist");
  }
});
