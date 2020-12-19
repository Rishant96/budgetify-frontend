import React, { useEffect, useState } from "react";
import { Accordion } from "../components";

import { URL_BUDGETS } from "../constants/backend";

import axios from "axios";
import { MONTH_NAMES } from "../constants/months";

type Budget = {
  _id: string;
  key: string;
  name: string;
  user: string;
  month: number;
  items: { _id: string; title: string; amount: number }[];
};

type ManageProps = {
  userEmail: string;
};

export const ManageContainer: React.FC<ManageProps> = ({
  children,
  userEmail,
  ...restProps
}) => {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const totals = [];

  useEffect(() => {
    axios.get(URL_BUDGETS + `/all/${userEmail}`).then(res => {
      const tmp: Budget[] = [];
      res.data.forEach((item: any) => tmp.push({ ...item, key: item._id }));
      setBudgets(tmp);
    });
  }, []);

  return (
    <Accordion>
      <Accordion.Frame>
        {budgets.map(budget => (
          <Accordion.Item key={budget._id}>
            <Accordion.Header>
              {budget.name}
            </Accordion.Header>
            <Accordion.Body id={budget._id}>
              {budget.items.map(item => (
                <Accordion.Row key={item._id} entry={item} />
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
        <Accordion.Add />
      </Accordion.Frame>
    </Accordion>
  );
};
