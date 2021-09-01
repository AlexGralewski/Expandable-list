const ListItem = ({ selected, label, level, id }) => {
  let listItemTitle 

  switch (level) {
    case 0:
      listItemTitle=""
      break
    case 1:
      listItemTitle = "Pododdział "+ (id+1)
      break
    case 2:
      listItemTitle = "Zespół "+ (id+1)
      break
    default:
      listItemTitle = "Podzespół " + (level) + "." + (id+1)
  }

  return <div className="checkbox">
    <div>{listItemTitle}</div>
    {label}
    </div>;
};

const ExpandableList = ({ list }) => {
  console.log(list);
  return (
    <div>
      {list.map((item,id) => (
        <ul>
          <ListItem label={item.title} level={item.level} id={id}/>
          {/* Base case*/}
          {item.children.length > 0 && <ExpandableList list={item.children} />}
        </ul>
      ))}
    </div>
  );
};

export default ExpandableList;
