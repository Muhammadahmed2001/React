import { useState } from "react"



function App() {
  const [color, satColor] = useState("black")

  return (
    <div style={{ backgroundColor: color }} className="w-full h-screen duration-200">
      <h1 className="text-white">Ahmed Karim BG changer</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
         <button onClick={()=> satColor("red")} style={{backgroundColor : "red"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">red</button>
         <button onClick={()=> satColor("blue")} style={{backgroundColor : "blue"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">blue</button>
         <button onClick={()=> satColor("yellow")} style={{backgroundColor : "yellow"}} className="outline-none px-4 py-1 rounded-full text-black shadow-lg">yellow</button>
         <button onClick={()=> satColor("green")} style={{backgroundColor : "green"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">green</button>
         <button onClick={()=> satColor("black")} style={{backgroundColor : "black"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">black</button>
         <button onClick={()=> satColor("olive")} style={{backgroundColor : "olive"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">olive</button>
        </div>
      </div>
    </div>
  )
}

export default App
