export default async function getData(
  url,
  setData,
  setLoading,
  setError,
  type
) {
  setLoading(true);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Data not found");
    const data = await res.json();
    setData(type === "weather" ? data : data[0].name);
    setError(null);
    return true;
  } catch (error) {
    setData(null);
    setError(error.message);
    return false;
  } finally {
    setLoading(false);
  }
}
