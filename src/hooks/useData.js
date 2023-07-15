import { useEffect, useState } from 'react';

const ip = '10.76.18.204';
const port = '5000';

export default function useData() {
    const [printers, setPrinters] = useState([]);
    const [workcenters, setWorkcenters] = useState([]);
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [labelTypes, setLabelTypes] = useState({
        Naklejki: [],

        'Oznaczenia plastikowe': [
            '1-Sleeve tag',
            '30-Terminal MCC',
            '34-Terminal PF6000',
            '37A-Terminal P4',
            '51-Terminale MVD J4',
            '54-Terminale MVD W10',
            '55-Terminale ABB',
            '2100 sleeve tag',
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

        Wydruki: [
            'Schemat El.',
            'Rysunek Mech.',
            'MCC unit ID',
            'MVD Test docs',
            'MCC Switch label',
            'PF6k 3PC 3,3kV',
            'PF6k 4PC 4,16kV',
            'PF6k 5PC 6,0kV',
            'PF6k 6PC 6,6kV',
            'Inne',
        ],
    });

    useEffect(() => {
        const paralellFetch = async () => {
            await Promise.all([
                fetchData('printers'),
                fetchData('labels'),
                fetchData('workcenters'),
                fetchData('users'),
            ]);
        };

        paralellFetch();
    }, []);

    async function fetchData(apiPath) {
        setIsLoading(true);

        const response = await fetch(`http://${ip}:${port}/${apiPath}`);
        if (!response) {
            setIsError(true);

            setErrorMessage('No response from server');

            setIsLoading(false);

            return;
        }

        if (response.status >= 200 && response.status <= 299) {
            const responseData = await response.json();
            setIsError(false);

            setIsLoading(false);

            switch (apiPath) {
                case 'workcenters': {
                    const dataArr = Object.values(responseData);

                    // const workcenterArr = dataArr.map(workcenter => workcenter.workcenter);
                    setWorkcenters(dataArr);

                    break;
                }

                case 'printers':
                    setPrinters(Object.values(responseData));

                    break;

                case 'labels':
                    {
                        console.log('labelsResData', responseData, typeof responseData);

                        const naklejki = [];
                        // iterate over response data
                        for (let i = 0; i < responseData.length; i += 1) {
                            naklejki.push(responseData[i].label);
                        }

                        console.log('naklejki', naklejki);

                        setLabelTypes({ ...labelTypes, Naklejki: naklejki });
                    }

                    break;

                case 'users':
                    setUsers(Object.values(responseData));

                    break;

                default:
                    break;
            }
        } else {
            setIsError(true);

            setErrorMessage(response?.statusText || 'Something went wrong');

            setIsLoading(false);
        }
    }

    return {
        printers,
        labelTypes,
        workcenters,
        users,
        isLoading,
        isError,
        errorMessage,
    };
}
