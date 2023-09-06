import Gallarycard from "../gallarycard/gallarycard";
import styles from "./appgallary.module.css"
const Appgallary = (props) => {
    const {data} = props
    return <div className={styles.container}>
        {
            data.map(video => <Gallarycard videoData={video}/>)
        }
    </div>
}

export default Appgallary;