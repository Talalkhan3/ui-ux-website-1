import Feature1 from "../../public/assets/feature-1.svg";
import Feature2 from "../../public/assets/feature-2.svg";
import Feature3 from "../../public/assets/feature-3.svg";
import Image from "next/image";
import Check from "../../public/assets/check.svg";
import BlueButton from "../../public/assets/blue-button.svg";

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
          <h3 className="font-medium text-[#0085ff] ">Sales Monitoring</h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026]">
            Simlpify your sales monitoring
          </h1>
          <Image src={Feature1} alt="feature" className="pt-[24px] sm:hidden" />
          <p className="py-[24px] text-[#36485c]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>
          <ul className="flex flex-col gap-y-3">
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

          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085ff]">
            Learn More{" "}
            <span>
              <Image src={BlueButton} alt="blueButton" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
