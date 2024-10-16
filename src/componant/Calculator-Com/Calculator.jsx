import './Calculator.css';
import Btn from './Btn'
import { useState } from 'react';

const Calculator = () => {
    let [output, setOutput] = useState('0'); 

    const handlNo = (no) => {
        setOutput((a) => a==0 || a=='Error' ? '' +no : a +no);
    };
    
    const handlOpt = (opt) => {
        setOutput((a) => a + opt);
    };

    const handlAns = () => {
        try{
            let ans = eval(output);
            setOutput(ans);  
        }catch (Error){
            setOutput("Error");
        };
    };

    const hndleClearNo = () => setOutput((a) => a = a.slice(0,a.length - 1));
    const hndleClearAll = () => setOutput((a) => '');

    return (
        <>
            <div className="calc-body">
                <div className="calc-screen">
                    <div id="calc-typed">{output}</div>
                </div>
                <div className="calc-button-row">
                    <Btn t="AC" c="ac" f={hndleClearAll}/>
                    <Btn t="&#43;&#47;&#8722;" c="opt"/>
                    <Btn t="%" c="opt" f={handlOpt}/>
                    <Btn t="/" c="opt" f={handlOpt}/>
                    <Btn t="7" f={handlNo}/>
                    <Btn t="8" f={handlNo}/>
                    <Btn t="9" f={handlNo}/>
                    <Btn t="*" c="opt" f={handlOpt}/>
                    <Btn t="4" f={handlNo}/>
                    <Btn t="5" f={handlNo}/>
                    <Btn t="6" f={handlNo}/>
                    <Btn t="-" c="opt" f={handlOpt}/>
                    <Btn t="1" f={handlNo}/>
                    <Btn t="2" f={handlNo}/>
                    <Btn t="3" f={handlNo}/>
                    <Btn t="+" c="opt" f={handlOpt}/>
                    <Btn t="0" f={handlNo}/>
                    <Btn t="." f={handlNo}/>
                    <Btn t="C" c="ac" f={hndleClearNo}/>
                    <Btn t="=" c="opt" f={handlAns}/>
                </div>
            </div>
        </>
    );
};

export default Calculator;