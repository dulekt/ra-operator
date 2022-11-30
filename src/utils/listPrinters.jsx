//function that lists printers available in the browser
export const listPrinters = async () => {
  const printers = await navigator.usb.getDevices();

  navigator.usb.getDevices().then((devices) => {
    console.log(`Total devices: ${devices.length}`);
    devices.forEach((device) => {
      console.log(
        `Product name: ${device.productName}, serial number ${device.serialNumber}`
      );
    });
  });
  return printers;
};
