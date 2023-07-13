function ConceptsItem(props) {
  // return <h2>Expense item!</h2>;
  return (
    <li className="concept">
      <img src={props.image} alt="{props.title}" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

export default ConceptsItem;
