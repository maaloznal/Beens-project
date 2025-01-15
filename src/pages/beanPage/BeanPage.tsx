import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Bean } from "../../types/bean";
import s from "./s.module.css";

const BeanPage = () => {
  const params = useParams();
  console.log(params);
  const [beanData, setBeanData] = useState<Bean | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const req = await fetch(
          `https://jellybellywikiapi.onrender.com/api/beans/${params.id}`
        );
        const data = await req.json();
        setBeanData(data);
        console.log(req);
      } catch (error) {
        console.log("error", error);
      }
    };
    getData();
  }, [params.id]);

  return (
    <div>
      {beanData && (
        <div className={s.beanCard}>
          <img className={s.beanImage} src={beanData.imageUrl} alt="" />
          <h1>{beanData.flavorName}</h1>
          <p>{beanData.description}</p>
        </div>
      )}
    </div>
  );
};

export default BeanPage;
