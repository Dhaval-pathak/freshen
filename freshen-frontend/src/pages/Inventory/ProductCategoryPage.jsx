import React, { useState, useEffect } from "react";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../../api/inventoryApi"; // Import the API functions

const ProductCategory = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // 'add' or 'edit'
  const [formValues, setFormValues] = useState({});

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveCategory = async () => {
    try {
      if (modalMode === "add") {
        await addCategory(formValues);
      } else if (modalMode === "edit") {
        await updateCategory(selectedCategory._id, formValues);
      }
      fetchCategories();
      closeModal();
    } catch (error) {
      console.error("Failed to save category:", error);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await deleteCategory(id);
      fetchCategories();
    } catch (error) {
      console.error("Failed to delete category:", error);
    }
  };

  const openModal = (mode, category = null) => {
    setModalMode(mode);
    setIsModalOpen(true);
    setSelectedCategory(category);
    setFormValues(category || {});
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormValues({});
    setSelectedCategory(null);
  };

  const headers = categories.length > 0 ? Object.keys(categories[0]) : [];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Title and Actions */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Product Categories</h1>
        <div className="flex space-x-4 items-center">
          <div className="relative">
            <TextField
              variant="outlined"
              placeholder="Search categories..."
              size="small"
              InputProps={{
                startAdornment: (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                ),
              }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={() => openModal("add")}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Add Category
          </button>
        </div>
      </div>

      {/* Table with Horizontal Scroll */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 table-fixed">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="px-6 py-3"
                  style={{
                    maxWidth: "300px", // Dynamically adjust column width
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title={header}
                >
                  {header.charAt(0).toUpperCase() + header.slice(1)}
                </th>
              ))}
              <th scope="col" className="px-6 py-3 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {categories
              .filter((cat) =>
                cat.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((category) => (
                <tr key={category._id} className="bg-white border-b">
                  {headers.map((header) => (
                    <td
                      key={header}
                      className="px-6 py-4"
                      style={{
                        maxWidth: "300px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      title={category[header]} // Tooltip for full text
                    >
                      {category[header] === "" ? (
                        <span
                          className="inline-block px-2 py-1 border border-gray-500 rounded text-gray-300"
                        >
                          Empty
                        </span>
                      ) : (
                        category[header]
                      )}
                    </td>
                  ))}
                  <td className="px-6 py-4 text-center flex justify-center space-x-4">
                    <IconButton
                      onClick={() => openModal("edit", category)}
                      color="primary"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDeleteCategory(category._id)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">
              {modalMode === "add" ? "Add Category" : "Edit Category"}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSaveCategory();
              }}
              className="space-y-4"
            >
              {headers
                .filter((header) => header !== "_id")
                .map((header) => (
                  <div key={header}>
                    <label className="block text-sm font-medium text-gray-700">
                      {header.charAt(0).toUpperCase() + header.slice(1)}
                    </label>
                    <input
                      type="text"
                      name={header}
                      value={formValues[header] || ""}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg py-2 px-4"
                      required
                    />
                  </div>
                ))}
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-red-500 hover:underline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
