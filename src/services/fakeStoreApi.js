import axios from "axios";
import { BASE_URL } from "../utils/constants";
export async function getProducts() {
  try {
    const { data } = await axios.get(BASE_URL + "/products");
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getCategories() {
  try {
    const { data } = await axios.get(BASE_URL + "/products/categories");
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
