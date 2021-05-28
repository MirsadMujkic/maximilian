function ExpenseDate(props) {
  const month = props.date.toLocaleString("En-US", { month: "long" });
  const day = props.date.toLocaleString("En-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
