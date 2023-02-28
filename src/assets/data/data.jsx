const labelTypes = {
  Naklejki: [
    "80006-269-04",
    "LAT 22 (12)",
    "LAT 22 (6)",
    "LAT 8",

    "RU-4007",
    "RU-8501",
    "RU-8557",
    "T9957-018",
    "T9957-023",
    "T9957-024",
    "T9957-025",
    "T9957-033",
  ],

  "Oznaczenia plastikowe": [
    "1 sleeve tag",
    "30 terminal MCC",
    "34 terminale PF6000",
    "51 terminale MVD J4",
    "54 terminale MVD W10",
    "55 terminale ABB",
  ],

  Grawerki: [
    "MCC legend plate",
    "MCC tabliczka znamionowa",
    "MVD legend plate",
    "MCC door nameplate",
    "MCC master nameplate",
    "MVD legend plate metalowy",
    "MVD opis urządzenia klej",
    "inne",
    "MVD door nameplate",
    "MVD master nameplate",
    "MVD opis urządzenia śruby",
  ],

  Wydruki: [
    "Schemat El.",
    "Rysunek Mech.",
    "MCC unit ID",
    "MVD Test docs",
    "MCC Switch label",
    "Inne",
  ],
};
export default labelTypes;

export const names = [
  "achlech",
  "aduda",
  "adutkie",
  "akrzemi",
  "alubeck",
  "amusial",
  "aolechn",
  "aornat",
  "aradzie",
  "arogas",
  "asoltys",
  "bdytko",
  "dblaszc",
  "dciach",
  "dpostoj",
  "dstepan",
  "dtomasi",
  "dwieczo",
  "dwyrzyk",
  "eciazyn",
  "eludzen",
  "ibara",
  "iradema",
  "jptak",
  "kbasiag",
  "kbednar",
  "kfudale",
  "khibner",
  "kmajda",
  "kpiastk",
  "krygula",
  "ksewera",
  "kwrobel",
  "kzietar",
  "lgrodzi",
  "lmirek",
  "mbartko",
  "mbatko",
  "mbugaj",
  "mjawors1",
  "mcieciu",
  "mkurek1",
  "mmrozek",
  "mpalent",
  "mszyman",
  "mtrzcio",
  "mulikow",
  "mwojdyl",
  "mzakrze",
  "nwawrzy",
  "ohriuka",
  "pgabrys",
  "pplucin",
  "rbiadac",
  "rfraszk",
  "rjeglor",
  "sadamie",
  "sdudek",
  "tpardon",
  "trogals",
  "tzalins",
  "uulikow",
  "wpilare",
];
export const printableLabels = ["80006-269-04", "T9957-018"];
export const workcenters = [
  "MVD WIR",
  "MVD SUBS",
  "MVD FA",
  "MCC FA",
  "MCC FRAME",
  "MCC MODULES",
];
export async function getNames() {
  const response = await fetch("http://localhost:5000/users");
  const namesJSON = await response.json();
  const names = [];
  namesJSON.forEach((name) => {
    names.push(name.username);
  });
  console.log(names);
  return names;
}

export async function getWorkcenters() {
  const response = await fetch("http://localhost:5000/workcenters");
  const workcentersJSON = await response.json();
  const workcenters = [];
  workcentersJSON.forEach((WC) => {
    workcenters.push(WC.workcenter);
  });
  console.log(workcenters);
  return workcenters;
}

export async function getPrintableLabels(workcenter) {
  const response = await fetch(
    `http://localhost:5000/workcenters/${workcenter}`
  );
  const printableLabels = await response.json();
  console.log(printableLabels);
  return printableLabels;
}
