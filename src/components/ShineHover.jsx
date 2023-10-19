import Button from "./Button";
import styles from "../style";

const ShineHover = () => (
  // <div className={`group relative cursor-pointer`}>
  // <div className={`absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine`} />

  <section
    className={`group ${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-dark relative rounded-[20px] bg-[length:250%_250%,100%_100%] bg-no-repeat shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms] shadow-[#211e36] border-[1px] border-[#211e36] overflow-hidden`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let's try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
  // </div>
);

export default ShineHover;