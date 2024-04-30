import { Header } from "../components/Header";
import Card from "../components/Card";

export default function AMM(){
    return(
        <div className="border-2 border-orange-300 flex flex-row justify-center align-center">
            <div className="border-2 rounded-lg border-purple-300 w-96 h-96 mt-24">
                <Card className="flex flex-col border-2 border-red-400 h-full justify-center">
                    <input type="number" className="border border-black" />
                    <button className="border border-green-400 my-12">button</button>
                    <input type="number" className="border border-yellow-500"/>
                </Card>
            </div>
        </div>
    )
}
