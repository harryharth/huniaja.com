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
