import "./App.css";

import DataInputForm from "./components/DataInputForm/DataInputForm";
import Card from "./components/UI/Card/Card";
// const dummyData = [{}];

function App() {
    return (
        <div>
            {/**입력폼 */}
            <Card>
                <DataInputForm />
            </Card>

            {/**데이터 출력 */}
        </div>
    );
}

export default App;
