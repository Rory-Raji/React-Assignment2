import { useState } from "react";
import "./App.css";

function StudentRegistration() {
const [studentName, setStudentName] = useState("");
const [course, setCourse] = useState("");
const [students, setStudents] = useState([]);

function addStudent(event) {
event.preventDefault();

const newStudent = {
  id: Date.now(),
  name: studentName.trim(),
  course: course.trim(),
};

setStudents([...students, newStudent]);
setStudentName("");
setCourse("");

}

function deleteStudent(id) {
const updatedStudents = students.filter(
(student) => student.id !== id
);

setStudents(updatedStudents);

}

return (
<section className="app-card">
<h2>Student Registration App</h2>
<p className="description">
Register students and manage their courses.
</p>

  <form onSubmit={addStudent}>
    <label htmlFor="studentName">Student Name</label>
    <input
      id="studentName"
      type="text"
      value={studentName}
      onChange={(event) => setStudentName(event.target.value)}
      placeholder="Enter student name"
      required
    />

    <label htmlFor="course">Course</label>
    <input
      id="course"
      type="text"
      value={course}
      onChange={(event) => setCourse(event.target.value)}
      placeholder="Enter course"
      required
    />

    <button type="submit">Add Student</button>
  </form>

  <h3>Registered Students ({students.length})</h3>

  {students.length === 0 ? (
    <p className="empty-message">
      No students registered yet.
    </p>
  ) : (
    <ul className="student-list">
      {students.map((student) => (
        <li key={student.id}>
          <div>
            <strong>{student.name}</strong>
            <span>{student.course}</span>
          </div>

          <button
            className="delete-button"
            type="button"
            onClick={() => deleteStudent(student.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )}
</section>

);
}

function BlogApplication() {
const [author, setAuthor] = useState("");
const [postText, setPostText] = useState("");
const [posts, setPosts] = useState([]);

function addPost(event) {
event.preventDefault();

const newPost = {
  id: Date.now(),
  author: author.trim(),
  text: postText.trim(),
  likes: 0,
};

setPosts([newPost, ...posts]);
setPostText("");

}

function likePost(id) {
const updatedPosts = posts.map((post) => {
if (post.id === id) {
return {
...post,
likes: post.likes + 1,
};
}

  return post;
});

setPosts(updatedPosts);

}

function deletePost(id) {
const updatedPosts = posts.filter(
(post) => post.id !== id
);

setPosts(updatedPosts);

}

return (
<section className="app-card">
<h2>Blog Application</h2>
<p className="description">
Share your thoughts, like posts, and manage your posts.
</p>

  <form onSubmit={addPost}>
    <label htmlFor="author">Your Name</label>
    <input
      id="author"
      type="text"
      value={author}
      onChange={(event) => setAuthor(event.target.value)}
      placeholder="Enter your name"
      required
    />

    <label htmlFor="postText">Your Post</label>
    <textarea
      id="postText"
      value={postText}
      onChange={(event) => setPostText(event.target.value)}
      placeholder="What would you like to share?"
      rows="4"
      maxLength="280"
      required
    />

    <button type="submit">Publish Post</button>
  </form>

  <h3>All Posts ({posts.length})</h3>

  {posts.length === 0 ? (
    <p className="empty-message">
      No posts yet. Create the first post!
    </p>
  ) : (
    <div className="post-list">
      {posts.map((post) => (
        <article className="post" key={post.id}>
          <h4>{post.author}</h4>
          <p>{post.text}</p>

          <div className="post-buttons">
            <button
              type="button"
              onClick={() => likePost(post.id)}
            >
              ♥ Like ({post.likes})
            </button>

            {post.author.toLowerCase() === author.trim().toLowerCase() && (
              <button
                className="delete-button"
                type="button"
                onClick={() => deletePost(post.id)}
              >
                Delete
              </button>
            )}
          </div>
        </article>
      ))}
    </div>
  )}
</section>

);
}

function App() {
return (
<main className="container">
<header className="page-header">
<p className="small-heading">REACT ASSIGNMENT</p>
<h1>React Practice Apps</h1>
<p>
Student registration and a mini blog built with React.
</p>
</header>

  <StudentRegistration />
  <BlogApplication />

  <footer>
    Built with React, useState, arrays, map(), and event handling.
  </footer>
</main>

);
}

export default App;