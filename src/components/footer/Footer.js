import searchIcon from "../../assets/icons-search.svg"
import plusIcon from "../../assets/icons-plus.svg"

function Footer() {
  const filterItems = ["All", "Active", "Completed"];
  const functionItems = [
    {
      title: "Add new",
      className: "plus-icon",
      icon: plusIcon,
    },
    {
      title: "Search",
      className: "search-icon",
      icon: searchIcon,
    },
  ];

  // Update function button effect
  const handleFunction = (e) => {
    const functionItems = Array.from(document.querySelectorAll("span"))
    const functionItemClasslist = e.currentTarget.classList

    if (Array.from(functionItemClasslist).includes("function-active")) {
      document.querySelector(".search-input").classList.add("hidden")
      functionItemClasslist.remove("function-active")
    } else {
      document.querySelector(".search-input").classList.remove("hidden")
      functionItems.map((functionItem) =>
        functionItem.classList.remove("function-active")
      )
      functionItemClasslist.add("function-active")
    }

    document.querySelector(".search-input").placeholder = e.currentTarget.title
    document.querySelector(".search-input").focus()
  };

  // Update filter button effect
  const handleFilter = (e) => {
    const filterItemElements = Array.from(
      document.querySelectorAll(".filter-item")
    );

    filterItemElements.map((filterItemElement) =>
      filterItemElement.classList.remove("filter-item-active")
    );
    e.target.classList.add("filter-item-active");
  };

  return (
    <div className="footer-wrapper">
      <div className="function">
        {functionItems.map((functionItem) => (
          <span
            title={functionItem.title}
            key={functionItem.title}
            className={`${functionItem.className} ${
              functionItem.className === "plus-icon" ? "function-active" : ""
            }`}
            onClick={handleFunction}
          >
            <img src={functionItem.icon} alt={functionItem.title}></img>
          </span>
        ))}
      </div>
      <div className="count-content">3 items left</div>
      <div className="filter">
        {filterItems.map((filterItem) => (
          <div
            className={`filter-item ${
              filterItem === "All" ? "filter-item-active" : ""
            }`}
            onClick={handleFilter}
            key={filterItem}
          >
            {filterItem}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
