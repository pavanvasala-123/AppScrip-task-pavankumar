import React, { useState, useEffect } from "react";
import "../Products/Products.css";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
const Products = () => {
  const [productsData, setProductsData] = useState([]);

  const [showFilters,setShowFilters] = useState(false)
  const [mobileShowFilter,setMobileShowFilter] = useState(false)
  const [dropdown ,setdropdown] = useState(false)

  const [selectedCategories, setSelectedCategories] = useState([]);

  const [sortBy, setSortBy] = useState(""); 
  const [dropdownOpen, setDropdownOpen] = useState(false);

 
  const handleCategoryChange = (category) => {
    // Toggle selected category
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((c) => c !== category)
      );
    } else {
      setSelectedCategories((prevCategories) => [...prevCategories, category]);
    }
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
    setDropdownOpen(false); // Close dropdown after selecting an option
  };

  const sortProducts = () => {
    let sorted = [...productsData];
    if (sortBy === "priceHighToLow") {
      sorted.sort((a, b) => b.price - a.price); // Sort by price high to low
    } else if (sortBy === "priceLowToHigh") {
      sorted.sort((a, b) => a.price - b.price); // Sort by price low to high
    }
    return sorted;
  };

  const filterProducts = (product) => {
    if (selectedCategories.length === 0) {
      // If no categories selected, show all products
      return true;
    } else {
      // Check if product's category is in selectedCategories
      return selectedCategories.includes(product.category.toLowerCase());
    }
  };

 
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setProductsData(response.data);
    };
    fetchData();
  }, []);

  const handleFilters = () => {
    setShowFilters(!showFilters)
  }
  const mobileShowFilters = () => {
    setMobileShowFilter(!mobileShowFilter)
    console.log(mobileShowFilter)
  }

  const toggleDropdown= () => {
    setdropdown(!dropdown)
  }
  return (
    <div className="body-container">
      <div className="desktop-filters-headings-container">
        <span>
          <p>3425 ITMS</p>
          <p onClick={handleFilters}><KeyboardArrowLeftOutlinedIcon/>{showFilters ? "HIDE FILTERS":"SHOW FILTERS"}</p>
        </span>
        <span>RECOMMENDED<KeyboardArrowDownOutlinedIcon/></span>
      </div>
      <div className="mobile-filters-headings-container">
        <span>
          <p onClick={mobileShowFilters}>{mobileShowFilter ? "HIDE FILTERS":"SHOW FILTERS"}</p>
        </span>
        <span>
          <span
            className="dropdown-header"
            onClick={toggleDropdown}
            style={{ cursor: "pointer" }}
          >
            Recommended{" "}
            {dropdownOpen ? <KeyboardArrowUpSharpIcon /> : <KeyboardArrowDownOutlinedIcon />}
          </span>
          {dropdownOpen && (
            <div className="dropdown-content">
              <span onClick={() => handleSortByChange("priceHighToLow")}>
                Price: High to Low {sortBy === "priceHighToLow" ? "▲" : ""}
              </span>
              <span onClick={() => handleSortByChange("priceLowToHigh")}>
                Price: Low to High {sortBy === "priceLowToHigh" ? "▲" : ""}
              </span>
            </div>
          )}
        </span>
      </div>

      <div className="products-and-fliters-container">
            <div className="filters-container-for-desktop" style={{display:showFilters ? "block":"none"}}>
                <span><input type="checkbox"/><label>CUSTOMIZBLE</label></span>
                <div className="filters-idealfor-con">
                <span class="dropdown-header" onClick={toggleDropdown}>Filter by Category ▼</span>
                    <div class="dropdown-content" style={{display : dropdown ? "block":"none"}}>
                      <label><input type="checkbox" name="category" value="men" onChange={() => handleCategoryChange("men's clothing")}/> Men</label>
                      <label><input type="checkbox" name="category" value="women" onChange={() => handleCategoryChange("women's clothing")}/> Women</label>
                      <label><input type="checkbox" name="category" value="electronics" onChange={() => handleCategoryChange("electronics")}/> Electronics</label>
                      <label><input type="checkbox" name="category" value="all" onChange={() => handleCategoryChange("All")}/> All</label>
                    </div>

                </div>
                
            </div>
            <div className="mobile-filters-container" style={{display:mobileShowFilter ? "block":"none" }}>
            <div className="filters-idealfor-con">
                <span class="dropdown-header" onClick={toggleDropdown}>Filter by Category ▼</span>
                    <div class="dropdown-content mobile" style={{display : dropdown ? "block":"none"}}>
                      <label><input type="checkbox" name="category" value="men" onChange={() => handleCategoryChange("men's clothing")}/> Men</label>
                      <label><input type="checkbox" name="category" value="women" onChange={() => handleCategoryChange("women's clothing")}/> Women</label>
                      <label><input type="checkbox" name="category" value="electronics" onChange={() => handleCategoryChange("electronics")}/> Electronics</label>
                      <label><input type="checkbox" name="category" value="all" onChange={() => handleCategoryChange("All")}/> All</label>
                    </div>

                </div>
            </div>
            <div className="product-cards-container">
                {productsData.filter(filterProducts).map(eachProduct => <ProductCard key ={eachProduct.id} product={eachProduct}/>)}
            </div>
      </div>
    </div>
  );
};

export default Products;
