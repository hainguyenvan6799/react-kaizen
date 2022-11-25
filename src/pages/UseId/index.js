import FormWithoutUseId from "../../components/UseId/FormWithoutUseId";
import FormWithUseId from "../../components/UseId/FormWithUseId";
import './index.css';

const UseIdSample = () => {
    return (
        <div>
            <h2 className="title">UseId Hook Sample</h2>

            <div className="formWithoutUsingUseIdHook">
                <h2 className="title">1. Form's not using useId() hook</h2>

                <div className="normalForm">
                    <h3 className="title">The first form</h3>
                    <FormWithoutUseId/>
                </div>

                <div className="normalForm">
                    <h3 className="title">The second form</h3>
                    <FormWithoutUseId/>
                </div>
            </div>

            <div className="FormWithtUsingUseIdHook">
                <h2 className="title">2. Form's using useId() hook</h2>

                <div className="normalForm">
                    <h3 className="title">The first form</h3>
                    <FormWithUseId/>
                </div>

                <div className="normalForm">
                    <h3 className="title">The second form</h3>
                    <FormWithUseId/>
                </div>
            </div>
        </div>
    )
}

export default UseIdSample;