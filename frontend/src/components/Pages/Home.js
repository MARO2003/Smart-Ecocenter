import Layout from "../Layout";
export default function Home(){
    return(
        <Layout>
            <div className = "p-6">
                <h1 className="text-3x1 font-bold">Welcome to Smart Ecocenter</h1>
                <p className="mt-4 text-lg">We help find the right place to recycle based on your needs and location.</p>
                <a href="/Contact" className="text-blue-500 uderline">Contact</a>
            </div>
        </Layout>
        
    );
}