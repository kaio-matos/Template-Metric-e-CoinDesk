let url = "https://api.coindesk.com/v1/bpi/historical/close.json";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const values = data.bpi;
    return values;
  } catch (err) {
    return err;
  }
}

let values = fetchData();
export default values;
