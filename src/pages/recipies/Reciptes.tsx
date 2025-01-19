import { FC, useEffect, useState } from "react";
import { ApiReciptes, ReciptesItems } from "../../types/reciptes";
import styles from "./styles.module.css";

const Reciptes: FC = () => {
  const [data, setData] = useState<null | ApiReciptes>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReciptes = async () => {
    try {
      const response = await fetch(
        "https://jellybellywikiapi.onrender.com/api/recipes"
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
      setError("Ошибка получения данных");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReciptes();
  }, []);

  if (isLoading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div>
      <h1 className={styles.title}>Reciptes</h1>
      <div className={styles.cardContainer}>
        {data?.items.map((item: ReciptesItems) => (
          <div key={item.recipeId} className={styles.card}>
            <img src={item.imageUrl} alt="img" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <span>Making Amount: {item.makingAmount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reciptes;
