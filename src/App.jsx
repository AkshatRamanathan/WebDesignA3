import DataCard from "./components/DataCard"
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";

function App() {

  const images = ["assets/graph1.png", "assets/graph2.jpeg", "assets/graph3.png", "assets/graph4.jpeg","assets/graph5.jpeg"]

  return (
    <>
      <Nav />
      {/* <SideBar /> */}
      <br />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {
          images.map((image, idx) => <DataCard image={{ url: image }} />)
        }


      </div>
    </>
  )
}

export default App;
