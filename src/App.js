import SideBar from "./components/sideBar";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage"
import DropDownPage from "./pages/DropDownPage"
import ButtonPage from "./pages/ButtonPage"
import ModalPage from "./pages/ModalPage"
import TablePage from "./pages/TablePage";

function App (){

return (<div className="container mx-auto 
grid grid-cols-6 gap-4 empty-4">
  <SideBar></SideBar>
    <div className="col-span-5">
        <Route path="/accordion">
            <AccordionPage></AccordionPage>
        </Route>
        <Route path="/">
            <DropDownPage></DropDownPage>
        </Route>
        <Route path="/buttons">
           <ButtonPage></ButtonPage>
        </Route>
        <Route path="/modal">
          <ModalPage></ModalPage>
        </Route>
        <Route path="/table">
         <TablePage></TablePage>
        </Route>
    </div>
</div>)


}
export default App;