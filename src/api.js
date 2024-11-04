// Получение URL API из переменных окружения
const apiUrl = import.meta.env.VITE_API_URL || "https://gardenshopback-erpo.onrender.com";

// Функция для выполнения запроса к API
export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${apiUrl}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка запроса:", error);
    throw error;
  }
};
console.log("API URL:", apiUrl);
