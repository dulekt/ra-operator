export async function getPrinters() {
    const response = await fetch('http://localhost:4567/api/printers')
    const printers = await response.json()

    return printers
}