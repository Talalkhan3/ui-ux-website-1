import Feature1 from "../../public/assets/feature-1.svg";
import Feature2 from "../../public/assets/feature-2.svg";
import Feature3 from "../../public/assets/feature-3.svg";
import Image from "next/image";
import Check from "../../public/assets/check.svg";
import BlueButton from "../../public/assets/blue-button.svg";
import GreenButton from "../../public/assets/green-button.svg";
import PinkButton from "../../public/assets/pink-button.svg";
const Features = () => {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Feature1}
          alt="Feature 1"
          className="hidden sm:block w-1/2"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#0085ff] lg:text-[18px] ">Sales Monitoring</h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Simlpify your sales monitoring
          </h1>
          <Image src={Feature1} alt="feature" className="pt-[24px] sm:hidden" />
          <p className="py-[24px] text-[#36485c] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485c]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485c]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485c]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
          </ul>

          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085ff] lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={BlueButton} alt="blueButton" />
            </span>
          </p>
        </div>
      </div>


      <div className="flex flex-col gap-x-6 sm:flex-row">
        <Image
          src={Feature2}
          alt="Feature 2"
          className="hidden sm:block w-1/2"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-medium text-[#00A424] lg:text-[18px] ">Customer Support</h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Get in Touch with your customers
          </h1>
          <Image src={Feature2} alt="feature2" className="pt-[24px] sm:hidden" />
          <p className="py-[24px] text-[#36485c] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485c]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485c]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485c]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
          </ul>

          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424]   lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={GreenButton} alt="blueButton" />
            </span>
          </p>
        </div>
      </div>



      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Feature3}
          alt="Feature 3"
          className="hidden sm:block w-1/2"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#eb2891] lg:text-[18px] ">Growth Monitoring</h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Monitor your sites new subscriber
          </h1>
          <Image src={Feature3} alt="feature 3" className="pt-[24px] sm:hidden" />
          <p className="py-[24px] text-[#36485c] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>
          <div className="flex w-full gap-x-[24px]">
              <div className="w-1/2 flex flex-col gap-y-3">
                  <h1 className="text-[20px] font-medium text-[#172026]">100+</h1>
                  <p className="text-[#36485c]">Lorem ipsum dolor sit</p>
              </div>
              <div className="w-1/2 flex flex-col gap-y-3">
                  <h1 className="text-[20px] font-medium text-[#172026]">800+</h1>
                  <p className="text-[#36485c]">Lorem ipsum dolor sit</p>
              </div>
          </div>

          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#eb2891] lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={PinkButton} alt="Pink Button" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
