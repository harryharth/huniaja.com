import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export async function fetchProperties() {
  try {
    const { data } = await axios.get(`${API}/properties`);
    return data || [];
  } catch (e) {
    return [];
  }
}

export async function fetchProperty(id) {
  try {
    const { data } = await axios.get(`${API}/properties/${id}`);
    return data;
  } catch (e) {
    return null;
  }
}

// Submit a public form (konsultasi | karir | kontak | brosur) to the backend.
// Returns { ok, id } on success or throws on network error.
export async function submitLead(type, payload) {
  const { data } = await axios.post(`${API}/submissions/${type}`, payload);
  return data;
}
