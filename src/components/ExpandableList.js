const listItemTitle = (id, level) => {
  let listItemTitle;
  const levelArr = id.toString().split(".");

  switch (level) {
    case 0:
      listItemTitle = "Nagłówek drzewa";
      break;
    case 1:
      break;
    case 2:
      listItemTitle = "Zespół " + levelArr[2];
      break;
    default:
      listItemTitle = "Podzespół " + levelArr.slice(2).join(".");
  }
  return <span>{listItemTitle}</span>;
};

const icon = (item) => {
  if (item.type === "checkbox" && item.isOpen) {
    return <i className="fas fa-minus-square"></i>;
  } else if (item.type === "checkbox" && !item.isOpen) {
    return <i className="fas fa-plus-square"></i>;
  } else if (item.type === "radio" && item.isOpen) {
    return <i className="fas fa-minus-circle"></i>;
  } else {
    return <i className="fas fa-plus-circle"></i>;
  }
};

const ExpandableList = ({
  list,
  parentId = "",
  openBranches,
  setOpenBranches,
}) => {

  return (
    <ul>
      {list.map((item, id) => {
        let _key;
        switch (parentId) {
          case "":
            _key = (id + 1).toString();
            break;
          default:
            _key = parentId + "." + (id + 1);
        }
        const isLast = id === list.length -1  ? " last-child": "" 

        if (item.children.length > 0) {
          if (item.children[0].type === "radio") {

          }else {

          }
          return (
            <li key={_key}>
              <div
                className={(item.level === 0 ? "list-header parent": "branch-header parent") + isLast + (item.isOpen ? " open" : " closed") + (" level-"+ item.level)}
                onClick={() => {
                  item.isOpen = !item.isOpen;
                  console.log(openBranches);
                  setOpenBranches([...openBranches]);
                }}
              >
                {icon(item)}
                <div className="wrapper">
                  {listItemTitle(_key, item.level)}
                  <div>{item.title}</div>
                </div>
              </div>

              {item.children.length > 0 && item.isOpen && (
                <ExpandableList
                  list={item.children}
                  parentId={_key}
                  openBranches={openBranches}
                  setOpenBranches={setOpenBranches}
                />
              )}
            </li>
          );
        } else {
          let oddEven;
          if ((id + 1) % 2 === 1) {
            oddEven = "odd";
          } else {
            oddEven = "even";
          }
          return (
            <div className={"branch-header non-parent wrapper " + oddEven  + isLast + (" level-"+ item.level)}>
              <div className="wrapper">

              {listItemTitle(_key, item.level)}
              <div>{item.title}</div>
              </div>
            </div>
          );
        }
      })}
    </ul>
  );
};

export default ExpandableList;
