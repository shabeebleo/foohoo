import Nav from "./components/Nav";
import {Hero,Footer,CustomerReview,PopularProduct,Services,SpecialOffer,Subscribe,SuperQuality} from "./sections/index"

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b"><Hero/></section>
    <section className="padding"><PopularProduct/></section>
    <section className="padding"><SuperQuality/></section>
    <section className="padding-x py-10"><Services/></section>
    <section className="padding"><SpecialOffer/></section>
    <section className="bg-purple-100 padding border shadow-xl " ><CustomerReview/></section>
    <section className="padding-x sm:py-32 py-16 w-full"><Subscribe/></section>
    <section className="bg-black text-white padding-x padding-t pb-8"><Footer/></section>
  </main>
);

export default App;
