
const ip = '10.76.18.176'
const port = '5000'
const labelTypes = {
    Naklejki: [
        '80006-269-04',
    ],

    'Oznaczenia plastikowe': [
        '1-Sleeve tag',
        '30-Terminal MCC',
        '34-Terminal PF6000',
        '51-Terminale MVD J4',
        '54-Terminale MVD W10',
        '55-Terminale ABB',
    ],
    Grawerki: [
        'MCC legend plate',
        'MVD legend plate',
        'MCC door nameplate',
        'MVD door nameplate',
        'MCC master nameplate',
        'MVD master nameplate',
        'MVD opis urządzenia klej',
        'MVD opis urządzenia śruby',
        'MCC tabliczka znamionowa',
        'MVD legend plate metalowy',
        'inne',
    ],

    Wydruki: ['Schemat El.', 'Rysunek Mech.', 'MCC unit ID', 'MVD Test docs', 'MCC Switch label', 'Inne'],
};

export default labelTypes;

export async function getLabelTypes() {
    const response = await fetch(`http://${ip}:${port}/labels`);
    const labelsJSON = await response.json();

    const labels = [];
    labelsJSON.forEach(label => {
        labels.push(label.label);
    });

    labelTypes.Naklejki = labels;

    return labelTypes;
}
export async function getNames() {
    const response = await fetch(`http://${ip}:${port}/users`);
    const namesJSON = await response.json();
    const names = [];
    try {
        namesJSON.forEach(name => {
            names.push(name.username);
        });
    } catch (error) {
        console.log(error);
    }


    console.log(names);

    return names;
}

export async function getWorkcenters() {
    const response = await fetch(`http://${ip}:${port}/workcenters`);
    const workcentersJSON = await response.json();
    const workcenters = [];
    workcentersJSON.forEach(WC => {
        workcenters.push(WC.workcenter);
    });

    return workcenters;
}

export async function getPrintableLabels(workcenter) {
    const response = await fetch(`http://${ip}:${port}/workcenters/${workcenter}`);
    const printableLabels = await response.json();

    return printableLabels;
}


