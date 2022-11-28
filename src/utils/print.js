export function print(payload) {
    const printWindow = window.open();
    printWindow.document.open('text/plain')
    printWindow.document.write(payload);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
}

export async function printViaAPI(payload) {
    const response = await fetch('http://localhost:4567/api/print/printer1', {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: payload
    })

    const result = await response.json()

    return result
}