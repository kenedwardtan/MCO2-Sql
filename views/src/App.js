<<<<<<< HEAD
import React, {useState, useEffect} from "react";
import MovieList from './components/MovieList';
import EmployeeContextProvider from './contexts/MovieContext';
import Axios from 'axios';
=======
import EmployeeList from './components/EmployeeList';
import EmployeeContextProvider from './contexts/EmployeeContext';
>>>>>>> parent of f8e006d0 (Merge branch 'main' of https://github.com/leigharriane/MCO2-Sql)

function App() {

  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <EmployeeContextProvider>
            <EmployeeList />
          </EmployeeContextProvider>
        </div>
      </div>
    </div>

  );
}

export default App;
