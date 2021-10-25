module.export = function () {
  const pwd = process.cwd();

  process.stdin.on("data", () => {
    process.stdout.write("You typed: " + pwd);
    process.stdout.write("\nprompt > ");
  });
};
