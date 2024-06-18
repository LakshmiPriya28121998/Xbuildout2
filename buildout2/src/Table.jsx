import React from "react";
import { useState, useEffect } from "react"

const initialdata = 
[

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]


    export default function Table(props){
const [data,setData] = useState(initialdata)

 const handleSortbyDate = (event) => {
   let sortedData = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
    setData(sortedData);
 }

 const handleSortbyViews = (event) => {
    let sortedData = [...data].sort((a, b) => (b.views) - (a.views));
    setData(sortedData);
 }


    return (
      <div>
        <h1>Date and Views Table</h1>
        <button onClick={handleSortbyDate}>Sort by Date</button>
        <button onClick={handleSortbyViews}>Sort by Views</button>
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Views</th>
                <th>Article</th>

            </tr>
            </thead>
            <tbody>
            {data.map((ele, index) => (
                <tr key={index}>
                    <td>{ele.date}</td>
                    <td>{ele.views}</td>
                    <td>{ele.article}</td>
                </tr>
            
    ))}
    </tbody>
        </table>
      </div>
    );

}

