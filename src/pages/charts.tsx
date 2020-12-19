import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL_BUDGETS } from "../constants/backend";
import { HeaderContainer, ChartsContainer } from "../containers";

type ChartsProps = {
  isUser: boolean;
  userEmail: string;
};

export const Charts: React.FC<ChartsProps> = ({
  children,
  isUser,
  userEmail}) => {
  const [titles, setTitles] = useState<any>();
  const [amounts, setAmounts] = useState<any>();
  const { id }: any = useParams<string>();

  useEffect(() => {
    axios.get(URL_BUDGETS + `/${id}`).then(res => {
      const titles_l = [];
      const amounts_l = [];
      const limit = res.data.items ? res.data.items.length : 0;
      for (let i=0; i < limit; i++) {
        titles_l.push(res.data.items[i].title);
        amounts_l.push(res.data.items[i].amount);
      }
      setTitles(titles_l);
      setAmounts(amounts_l);
    });
  }, [id]);

  return (
    <>
      <HeaderContainer isUser={isUser} />
      <ChartsContainer>
        <ChartsContainer.Pie title_l={titles} amount_l={amounts} />
        <ChartsContainer.Bar title_l={titles} amount_l={amounts} />
        <ChartsContainer.Line title_l={titles} amount_l={amounts} />
      </ChartsContainer>
    </>
  );
};
