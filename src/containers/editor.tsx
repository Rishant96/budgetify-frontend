import axios from "axios";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { Creator } from "../components/Creator";
import { URL_BUDGETS } from "../constants/backend";

type EditorProps = {
  userEmail: string;
};

export const EditorContainer: React.FC<EditorProps> = ({
  children,
  userEmail,
  ...restProps
}) => {
  const [form, setForm] = useState({
    name: "",
    month: null
  });
  const [titles, setTitles] = useState(new Array(10).fill(""));
  const [amounts, setAmounts] = useState(new Array(10).fill(null));
  const [redirect, setRedirect] = useState(false);
  const { id }: any = useParams<string>();

  useEffect(() => {
    if (id) {
      const url = URL_BUDGETS + `/${id}`;
      axios.get(url).then(res => {
        setForm({ name: res.data.name, month: res.data.month });
        const tmpTitles = [];
        const tmpAmounts = [];
        const limit = res.data.items ? res.data.items.length : 0;
        for (let i = 0; i < limit; i++) {
          const item = res.data.items[i];
          tmpTitles.push(item.title);
          tmpAmounts.push(item.amount);
        }
        setTitles(tmpTitles);
        setAmounts(tmpAmounts);
      });
    }
  }, []);

  const spend = (key: number) => (
    <>
      <Creator.Field key={key}>
        <Creator.Entry
          name={"title_" + key}
          placeholder="title"
          value={titles[key]}
          onChange={(e: any) => {
            const tmp = [...titles];
            tmp[key] = e.target.value;
            setTitles(tmp);
          }}
        />
        <Creator.Entry
          name={"value_" + key}
          placeholder="amount"
          type="number"
          step="0.01"
          value={amounts[key]}
          onChange={(e: any) => {
            const tmp = [...amounts];
            tmp[key] = e.target.value;
            setAmounts(tmp);
          }}
        />
      </Creator.Field>
    </>
  );

  const items = new Array(10);
  for (let i = 0; i < 10; i++) {
    items[i] = spend(i);
  }

  const saveForm = async (e: FormEvent) => {
    e.preventDefault();
    if (form.name === "" || form.month === null) {
      alert("Please fill in the form before saving.");
      return;
    }
    const titleAmountPairs = [];
    for (let i = 0; i < 10; i++) {
      if (titles[i] && amounts[i]) {
        titleAmountPairs.push({
          title: titles[i],
          amount: parseFloat(amounts[i])
        });
      } else {
        break;
      }
    }
    const newBudget = {
      name: form.name,
      month: form.month,
      user: userEmail,
      items: [...titleAmountPairs]
    };

    if (id) {
      await axios.delete(URL_BUDGETS + `/${id}`);
    }
    await axios.post(URL_BUDGETS, newBudget);
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/home" />;
  }

  return (
    <Creator>
      <Creator.Base handleSubmit={saveForm}>
        <Creator.Field>
          <Creator.Name>Name</Creator.Name>
          <Creator.Entry
            value={form.name}
            onChange={(e: any) => {
              setForm({ ...form, name: e.target.value });
            }}
          />
        </Creator.Field>
        <Creator.Field>
          <Creator.Name>Month</Creator.Name>
          <Creator.Entry
            type="number"
            min="1"
            max="12"
            value={form.month}
            onChange={(e: any) => {
              setForm({ ...form, month: e.target.value });
            }}
          />
        </Creator.Field>
        <Creator.Field>
          <Creator.Name>Items,</Creator.Name>
        </Creator.Field>
        <Creator.SmallContainer>{items}</Creator.SmallContainer>
        <Creator.Submit>Save</Creator.Submit>
      </Creator.Base>
    </Creator>
  );
};
