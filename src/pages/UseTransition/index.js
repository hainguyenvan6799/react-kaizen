import FormWithoutUseTransition from '../../components/UseTransition/FormWithoutUseTransition';
import FormWithUseTransition from '../../components/UseTransition/FormWithUseTransition';
import './index.css';

const UseTransitionSample = () => {
    return (
        <div>
            <h2 className="title">UseTransition Hook Sample</h2>

            <div className="useTransitionSample">
                <div className="container">
                    <h3>Not using useTransition() hook</h3>
                    <FormWithoutUseTransition/>
                </div>

                <div className="container">
                    <h3>Using useTransition() hook</h3>
                    <FormWithUseTransition/>
                </div>
            </div>
        </div>
    )
}

export default UseTransitionSample;

// sử dụng useDeffered trong 1 ngữ cảnh khác khi chúng ta không có quyền trong việc update state, vì nó được thực hiện bởi 1 third party library.
// chúng ta có thể sử dụng useDeffered để can thiệp vào những dữ liệu bị ảnh hưởng khi state update
// https://academind.com/tutorials/react-usetransition-vs-usedeferredvalue