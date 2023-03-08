const labelTypes = {
  Naklejki: [
    "80006-269-04",
    "LAT 22 (12)",
    "LAT 22 (6)",
    "RU-8557",
    "T9957-018",
    "T9957-023",
    "T9957-024",
    "T9957-025",
    "T9957-033",
  ],

  "Oznaczenia plastikowe": ["1", "30", "34", "51", "54", "55"],

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
  return workcenters;
}

export async function getPrintableLabels(workcenter) {
  const response = await fetch(
    `http://localhost:5000/workcenters/${workcenter}`
  );
  const printableLabels = await response.json();
  return printableLabels;
}
// get array of labels
export async function getLabelTypes() {
  const response = await fetch("http://localhost:5000/labels");
  const labelsJSON = await response.json();

  const labels = [];
  labelsJSON.forEach((label) => {
    labels.push(label.label);
  });
  labelTypes.Naklejki = labels;
  return labelTypes;
}
