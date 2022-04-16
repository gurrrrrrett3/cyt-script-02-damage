const fs = require("fs");
const yaml = require("js-yaml");

const inDir = "./data-in/";
const outDir = "./data-out/";

let files = fs.readdirSync(inDir);

files.forEach((file) => {
  let data = yaml.load(fs.readFileSync(inDir + file, "utf8"));
  
  if (data == undefined) return;

  data.Attributes.Base.GENERIC_ATTACK_DAMAGE = 1.0
  data.Attributes.Per_Level.GENERIC_ATTACK_DAMAGE = 0.15

  data.Level.Minimum = 1
  data.Level.Maximum = 25

  fs.writeFileSync(outDir + file, yaml.dump(data));
  console.log(file + " done");
});