import React, { useState } from "react";

const TopicSearch = () => {
  const topicsData = [
    { id: 1, name: "Machine Learning", category: "Computer Science" },
    { id: 2, name: "Data Structures", category: "Computer Science" },
    { id: 3, name: "World History", category: "Social Studies" },
    { id: 4, name: "Creative Writing", category: "Language Arts" },
    { id: 5, name: "Environmental Science", category: "Science" },
    { id: 6, name: "Financial Accounting", category: "Business" },
    { id: 7, name: "Music Theory", category: "Arts" },
    { id: 8, name: "Public Speaking", category: "Communication" },
    { id: 9, name: "Human Anatomy", category: "Health Science" },
    { id: 10, name: "Graphic Design", category: "Digital Arts" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const filteredTopics = topicsData.filter((topic) =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Topic Catalogue</h1>
      <input
        type="text"
        placeholder="Search topics..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />
      <div style={styles.topicsContainer}>
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => (
            <div key={topic.id} style={styles.topicCard}>
              <h3 style={styles.topicName}>{topic.name}</h3>
              <p style={styles.topicCategory}>{topic.category}</p>
            </div>
          ))
        ) : (
          <p style={styles.noResults}>No topics found</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    color: "#2c3e50",
    textAlign: "center",
  },
  searchInput: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    margin: "20px 0",
    borderRadius: "4px",
    border: "1px solid #ddd",
    boxSizing: "border-box",
  },
  topicsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "15px",
  },
  topicCard: {
    backgroundColor: "#f9f9f9",
    border: "1px solid #eee",
    borderRadius: "5px",
    padding: "15px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  topicName: {
    marginTop: "0",
    color: "#3498db",
  },
  topicCategory: {
    color: "#7f8c8d",
    marginBottom: "0",
  },
  noResults: {
    textAlign: "center",
    color: "#e74c3c",
    fontSize: "18px",
    gridColumn: "1 / -1",
  },
};

export default TopicSearch;
