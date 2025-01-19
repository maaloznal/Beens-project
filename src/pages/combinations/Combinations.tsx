import { useEffect, useState, FC } from "react";
import { ApiCombinitions, CombinationsItems } from "../../types/combinition";
import styles from "../facts/styles.module.css"; // Импорт стилей

const Combinations: FC = () => {
  const [data, setData] = useState<null | ApiCombinitions>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCombinitions = async (): Promise<void> => {
    try {
      const res: Response = await fetch(
        "https://jellybellywikiapi.onrender.com/api/combinations"
      );
      const result: ApiCombinitions = await res.json();
      setData(result);
    } catch (error) {
      console.log(error);
      setError("Ошибка получения данных");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCombinitions();
  }, []);

  if (isLoading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div>
      <h1 className={styles.title}>Explore Combinations ...</h1>
      <div className={styles.cardContainer}>
        {data?.items.map((item: CombinationsItems) => (
          <div key={item.combinationId} className={styles.card}>
            <h2>{item.name}</h2>
            <p>{item.tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Combinations;
