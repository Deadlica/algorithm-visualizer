import Link from "next/link";
import styles from "./home.module.css"
import AnimationBackground from "./components/AnimationBackground/AnimationBackground";



export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <AnimationBackground />
      <div className="p-10 text-3xl z-10">
        <h1>Algorithm Visualizer</h1>
      </div>
      <div className="bg-base-300 h-fit flex justify-center items-center rounded-lg z-10">
        <div className="navbar">
          <div className="navbar-start"></div>
          <div className="navbar-center lg:flex">
            <ul className="menu lg:flex-row px-1">
              <li>
                <Link href="/sort" className={`btn btn-outline btn-primary ${styles.menuItem}`}>
                  Sorting
                </Link>
              </li>
              <li>
                <Link href="/search" className={`btn btn-outline btn-primary ${styles.menuItem}`}>
                  Searching
                </Link>
              </li>
              <li>
                <Link href="/pathfinding" className={`btn btn-outline btn-primary ${styles.menuItem}`}>
                  Path Finding
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end"></div>
        </div>
      </div>
    </main>
  );
}
