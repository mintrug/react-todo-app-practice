import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons"

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="function">
        <FontAwesomeIcon className="plus-icon function-active" icon={faPlus} />
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
      </div>
      {/* <span>|</span> */}
      <div className="count-content">
        3 items left
      </div>
      <div className="filter">
        <div className="filter-item filter-item-active">All</div>
        <div className="filter-item">Active</div>
        <div className="filter-item">Completed</div>
      </div>
    </div>
  );
}

export default Footer;
