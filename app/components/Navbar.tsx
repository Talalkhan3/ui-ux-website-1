import Image from "next/image"
import Logo from "../../public/assets/Logo.svg"
import User from "../../public/assets/User.svg"
import Menu from "../../public/assets/Menu.svg"

const navLink = [
    {name: 'Features'},
    {name: 'Pricing'},
    {name: 'Enterprise'},
    {name: 'Careers'},
];
const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
        <div className="flex items-center">
            <Image src={Logo} alt="Logo"/>
            <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
                {navLink.map((items,index) => (
                    <p className="text-[#36485c] font-medium" key={index}>{items.name}</p>
                ))}
            </div>
        </div>

        <div className="flex items-center gap-x-5 ">
            <p className="text-[#36485c] hidden lg:block font-medium pr-[56px]">Open an Account</p>
            <div className="flex items-center gap-2">
                <Image src={User} alt="User Portfolio" />
                <span className="hidden font-medium text-[#36485c] lg:block">Sign in</span>
            </div>
            <div>
                <Image src={Menu} alt="Menu Button" className="lg:hidden" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar