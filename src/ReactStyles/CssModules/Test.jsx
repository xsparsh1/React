import style from "./test.module.css";

function Test(){
    return(
        <div className={style.container}>           {/* CSS Modules uses {...} instead of "..." , and has unique class name like conatiner__3kfj2*/}

            <div className={style.items}>
                <h3>This is card 1</h3>
            </div>

            <div className={style.items}>
                <h3>This is card 2</h3>
            </div>

            <div className={style.items}>
                <h3>This is card 3</h3>
            </div>

            <div className={style.items}>
                <h3>This is card 4</h3>
            </div>

        </div>
    )
}

export default Test;