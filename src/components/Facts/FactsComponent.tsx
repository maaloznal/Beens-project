import { useState, FC, useEffect } from "react";
import { FactItem, ApiResponse } from "../../types/facts";

const FactsComponent: FC = () => {
  const [data, setData] = useState<null | ApiResponse>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFacts = async (): Promise<void> => {
    try {
      const res: Response = await fetch(
        "https://jellybellywikiapi.onrender.com/api/facts?title=Popularity%20of%20Flavors"
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
    return <div>Загрузка..</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {data?.items.map((item: FactItem) => (
        <div key={item.factId}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FactsComponent;
