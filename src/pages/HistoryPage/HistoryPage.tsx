import { FC, useEffect, useState } from "react";
import { ApiHistory, HistoryItems } from "../../types/history";
import styles from "../facts/styles.module.css";

const HistoryPage: FC = () => {
  const [data, setData] = useState<null | ApiHistory>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  const fetchHistory = async () => {
    try {
      const response = await fetch(
        "https://jellybellywikiapi.onrender.com/api/mileStones"
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
      setError("Ошибка при получении данных");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  if (isLoading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div>
      <h1 className={styles.title}>History</h1>
      <div className={styles.cardContainer}>
        {data?.items.map((item: HistoryItems) => (
          <div key={item.mileStoneId} className={styles.card}>
            <h2>{item.year}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
