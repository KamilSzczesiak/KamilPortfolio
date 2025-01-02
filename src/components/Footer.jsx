import { ButtonPrimary } from "./Button";

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">
            <div className="flex items-center justify-between pt-5 mb-8">
                <a href="" className="">
                    <img src="../images/logo.svg" width={40} height={40} alt="Logo" className="" />
                </a>
                <p className="text-zinc-500 text-sm">
                    &copy; 2024 <span className="text-zinc-200">Kamil Szczesiak</span>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer