import { useState, FC, useEffect } from "react";
import { FactItem, ApiResponse } from "../../types/facts";
import styles from "./styles.module.css"; // Импорт стилей

const FactsComponent: FC = () => {
  const [data, setData] = useState<null | ApiResponse>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFacts = async () => {
    try {
      const res: Response = await fetch(
        "https://jellybellywikiapi.onrender.com/api/facts"
      );
      const result: ApiResponse = await res.json();
      setData(result);
    } catch (error) {
      console.log(error);
      setError("Ошибка получения данных");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFacts();
  }, []);

  if (isLoading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div>
      <h1 className={styles.title}>Facts</h1>
      <div className={styles.cardContainer}>
        {data?.items.map((item: FactItem) => (
          <div key={item.factId} className={styles.card}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FactsComponent;
