import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout";
import Header from "./components/Header";
import AddNote from "./components/AddNote";
import ViewNote from "./components/ViewNote";
import PageNotFound from "./components/PageNotFound";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
const BASE_URL = "http://localhost:9000/datas";

function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(false);

  //add title function
  function onAddTask(task) {
    setData((tasks) => [...tasks, task]);
  }

  //submit the form to add the new title task
  function handleSubmit(e) {
    e.preventDefault();
    if (!title) return;
    const newTask = {
      title,
      status: "pending",
      id: crypto.randomUUID(),
    };
    onAddTask(newTask);
    setTitle("");
  }

  //delete the title

  function handleDeleteItem(id) {
    setData((tasks) => data.filter((task) => task.id !== id));
  }

  //usefffect to fetch the data coming from json i created in data folder
  useEffect(function () {
    async function getTitle() {
      try {
        setIsLoading(true);
        const res = await fetch(BASE_URL);
        const data = await res.json();
        setData(data);
      } catch {
        alert("There was something wrong fetching the data");
      } finally {
        setIsLoading(false);
      }
    }
    getTitle();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <AppLayout
                data={data}
                isLoading={isLoading}
                title={title}
                setTitle={setTitle}
                onSubmit={handleSubmit}
                onDelete={handleDeleteItem}
              />
            }
          >
            <Route
              path="addnotes"
              element={
                <AddNote
                  title={title}
                  setTitle={setTitle}
                  onSubmit={handleSubmit}
                />
              }
            />
            <Route
              path="viewnotes"
              element={
                <ViewNote
                  data={data}
                  isLoading={isLoading}
                  onDelete={handleDeleteItem}
                  status={status}
                  setStatus={setStatus}
                />
              }
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
