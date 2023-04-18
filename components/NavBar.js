import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar(){

    const router = useRouter();

    return <nav>
        <img src="/vercel.svg" />
        <div>
            <Link href="/" legacyBehavior ><span className={router.pathname === "/" ? "active" : "tomato"}>Home</span></Link>
            <Link href="/about" legacyBehavior ><span className={router.pathname === "/about" ? "active" : "tomato"}>About</span></Link>
        </div>

        <style jsx>{`
        span {
          text-decoration: none;
        }
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav span {
          font-weight: 600;
          font-size: 18px;
          cursor: pointer;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
}