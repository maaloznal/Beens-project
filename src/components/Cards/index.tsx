import style from "./style.module.css";
import Card from "../Card";
import { FC, useEffect, useState } from "react";
import { Bean } from "../../types/bean";

type Props = {
  filterValue: string;
};

const Cards: FC<Props> = ({ filterValue }) => {
  const [initialBeans, setinitialBeans] = useState<null | Bean[]>(null);
  const [updateBeens, setUpdateBeens] = useState<null | Bean[]>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const getData = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const req = await fetch(
        "https://jellybellywikiapi.onrender.com/api/Beans"
      );
      const data = await req.json();
      setIsLoading(false);
      setinitialBeans(data.items);
      setUpdateBeens(data.items);
    } catch (error) {
      console.log("ERROR->", error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (filterValue) {
      const newArray: Bean[] | undefined = initialBeans?.filter((item: Bean) =>
        item.flavorName.includes(filterValue)
      );
      if (newArray) {
        setUpdateBeens(newArray);
      }
      console.log("newArray", newArray);
    }
  }, [filterValue, initialBeans]);

  return (
    <div className={style.container}>
      {isLoading && <p>...loading</p>}
      {isError && <p>...перезагрузите страницу</p>}
      {updateBeens &&
        updateBeens.map((bean) => {
          return <Card data={bean} key={bean.beanId} />;
        })}
    </div>
  );
};
export default Cards;
