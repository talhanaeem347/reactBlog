import Rename from "../components/Rename";
import UsestateHook from '../components/UsestateHook';
const Home = () => {

    return (
        <section className="h-screen w-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full">
                <h1 className="text-5xl font-bold">Home</h1>
                <Rename />
                <p className="m-2 pb-2 text-lg">used state Hook</p>
                <div className="grid grid-cols-2 gap-2 w-2/3">
                    <UsestateHook />
                </div>
                
            </div>
        </section>
    );
}
export default Home;