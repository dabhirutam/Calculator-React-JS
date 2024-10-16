

const Btn = ({t , c, f}) => {

    return (
        <button className={c} onClick={() => f(t)}>{t}</button>
    );
};

export default Btn;