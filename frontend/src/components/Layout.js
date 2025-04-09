import Footer from "./Footer";
import Header from "./Header";

//This wraps every page in the same layout (Header + Footer).
export default function Layout({children}){
    return(
        <div>
            <Header/>
            <main className="text-2xl font-bold">{children}</main>
            <Footer/>
        </div>
    );
}