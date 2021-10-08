import ViewList from "./Components/ListUsers/ViewList"
import ViewTours from "./Components/ToursProject/ViewTours"
import ViewReviews from "./Components/Reviews/ViewReviews"
import ViewQuestions from "./Components/Questions/ViewQuestions"
import ViewMenu from "./Components/MenuFood/ViewMenu"
import ViewTabs from "./Components/Tabs/ViewTabs"
import ViewSlider from "./Components/Slider/ViewSlider"
import ViewLorem from "./Components/LoremIpsum/ViewLorem"
import ViewColor from "./Components/ColorGeneretor/ViewColor"
import ViewBud from "./Components/GroceryBud/ViewBud"
import ToggleItem from "./Components/Toggle/ToggleItem"
import Navbar from "./Components/Navbar/Navbar"
import ViewSidebar from "./Components/Sidebar/ViewSidebar"
import MarkDownView from "./Components/MarkDown/MarkDownView"
import RandomUserView from "./Components/RandomUser/RandomUserView"

import PaginationView from "./Components/Pagination/PaginationView"



function App() {
  return (
    <div className="App">
      <header className="App-header">


       
        <Navbar />
        <PaginationView />
        <RandomUserView />
        <MarkDownView />
        <ViewSidebar />
        <ToggleItem />
        <ViewBud />
        <ViewColor />
        <ViewLorem />
        <ViewSlider />
        <ViewTabs />
        <ViewMenu />
        <ViewQuestions />
        <ViewReviews />
        <ViewTours />
        <ViewList />


      </header>
    </div>
  );
}

export default App;
